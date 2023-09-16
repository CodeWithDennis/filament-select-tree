<?php

namespace CodeWithDennis\FilamentSelectTree;

use Closure;
use Filament\Forms\Components\Concerns\CanBeDisabled;
use Filament\Forms\Components\Concerns\CanBeSearchable;
use Filament\Forms\Components\Concerns\HasPlaceholder;
use Filament\Forms\Components\Field;
use Illuminate\Support\Collection;

class SelectTree extends Field
{
    use CanBeDisabled;
    use CanBeSearchable;
    use HasPlaceholder;

    protected string $view = 'select-tree::select-tree';

    protected bool $withCount = false;

    protected bool $multiple = false;

    protected bool $alwaysOpen = false;

    protected bool $independent = true;

    protected bool $clearable = true;

    protected bool $disabledBranchNode = false;

    protected string $treeModel;

    protected string $treeParentKey;

    protected string $titleAttribute;

    protected ?Closure $modifyQueryUsing;

    public function withCount(bool $withCount = true): static
    {
        $this->withCount = $withCount;

        return $this;
    }

    public function clearable(bool $clearable = true): static
    {
        $this->clearable = $clearable;

        return $this;
    }

    public function independent(bool $independent = true): static
    {
        $this->independent = $independent;

        return $this;
    }

    public function alwaysOpen(bool $alwaysOpen = true): static
    {
        $this->alwaysOpen = $alwaysOpen;

        return $this;
    }

    public function multiple(bool $multiple = true): static
    {
        $this->multiple = $multiple;

        return $this;
    }

    public function disabledBranchNode(bool $disabledBranchNode = true): static
    {
        $this->disabledBranchNode = $disabledBranchNode;

        return $this;
    }

    public function getTree(): Collection
    {
        return $this->evaluate($this->buildTree());
    }

    public function getIndependent(): bool
    {
        return $this->evaluate($this->independent);
    }

    public function getWithCount(): bool
    {
        return $this->evaluate($this->withCount);
    }

    public function getMultiple(): bool
    {
        return $this->evaluate($this->multiple);
    }

    public function getClearable(): bool
    {
        return $this->evaluate($this->clearable);
    }

    public function getAlwaysOpen(): bool
    {
        return $this->evaluate($this->alwaysOpen);
    }

    public function getDisabledBranchNode(): bool
    {
        return $this->evaluate($this->disabledBranchNode);
    }

    public function tree(string $treeModel, string $treeParentKey, string $titleAttribute, Closure $modifyQueryUsing = null): static
    {
        $this->treeModel = $treeModel;
        $this->treeParentKey = $treeParentKey;
        $this->titleAttribute = $titleAttribute;
        $this->modifyQueryUsing = $modifyQueryUsing;

        return $this;
    }

    private function buildTree(int $parent = null): Collection
    {
        // Create a default query to fetch items with the specified parent ID.
        $defaultQuery = $this->treeModel::query()
            ->where($this->treeParentKey, $parent);

        // If not a root level query and a modification callback is provided, apply it.
        if (! $parent && $this->modifyQueryUsing) {
            $defaultQuery = $this->evaluate($this->modifyQueryUsing, ['query' => $defaultQuery]);
        }

        // Fetch the results from the default query.
        $results = $defaultQuery->get();

        // Map the results into a tree structure.
        return $results->map(function ($result) {

            // Recursively build children trees for the current result.
            $children = $this->buildTree($result->id);

            // Create an array representation of the current result with children.
            return [
                'name' => $result->{$this->titleAttribute},
                'value' => $result->id,
                'children' => $children->isEmpty() ? null : $children->toArray(),
            ];
        });
    }
}
