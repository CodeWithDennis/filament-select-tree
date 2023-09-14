<?php

namespace CodeWithDennis\FilamentSelectTree;

use Filament\Forms\Components\Concerns\CanBeDisabled;
use Filament\Forms\Components\Field;
use Illuminate\Support\Collection;

class SelectTree extends Field
{
    use CanBeDisabled;

    protected bool $multiple = false;

    protected bool $clearable = false;

    protected bool $searchable = false;

    protected bool $independent = false;

    protected bool $withCount = false;

    protected bool $tags = false;

    protected bool $disabledBranchNode = false;

    protected string $placeholder;

    protected string $treeModel;

    protected string $treeParentKey;

    protected string $treeValueLabel;

    protected string $view = 'select-tree::select-tree';

    //    public function multiple(bool $multiple = true): static
    //    {
    //        $this->multiple = $multiple;
    //
    //        return $this;
    //    }

    public function independent(bool $independent = true): static
    {
        $this->independent = $independent;

        return $this;
    }

    public function withCount(bool $withCount = true): static
    {
        $this->withCount = $withCount;

        return $this;
    }

    public function placeholder(string $placeholder): static
    {
        $this->placeholder = $placeholder;

        return $this;
    }

    public function searchable(bool $searchable = true): static
    {
        $this->searchable = $searchable;

        return $this;
    }

    public function clearable(bool $clearable = true): static
    {
        $this->clearable = $clearable;

        return $this;
    }

    //    public function tags(bool $tags = true): static
    //    {
    //        $this->tags = $tags;
    //
    //        return $this;
    //    }

    public function disabledBranchNode(bool $disabledBranchNode = true): static
    {
        $this->disabledBranchNode = $disabledBranchNode;

        return $this;
    }

    public function getOptions(): Collection
    {
        return $this->evaluate($this->buildTree());
    }

    public function getWithCount(): bool
    {
        return $this->evaluate($this->withCount);
    }

    public function getMultiple(): bool
    {
        return $this->evaluate($this->multiple);
    }

    public function getTags(): bool
    {
        return $this->evaluate($this->tags);
    }

    public function getIndependent(): bool
    {
        return $this->evaluate($this->independent);
    }

    public function getPlaceholder(): string
    {
        return $this->evaluate($this->placeholder);
    }

    public function getDisabledBranchNode(): bool
    {
        return $this->evaluate($this->disabledBranchNode);
    }

    public function getClearable(): bool
    {
        return $this->evaluate($this->clearable) && $this->isEnabled();
    }

    public function getSearchable(): bool
    {
        return $this->evaluate($this->searchable);
    }

    public function tree(string $treeModel, string $treeParentKey, string $treeValueLabel): static
    {
        $this->treeModel = $treeModel;
        $this->treeParentKey = $treeParentKey;
        $this->treeValueLabel = $treeValueLabel;

        return $this;
    }

    private function buildTree(int $parent = null): Collection
    {
        // TEST CODE
        $results = $this->treeModel::where($this->treeParentKey, $parent)
            ->get();

        return $results->map(function ($result) {
            $children = $this->buildTree($result->id);

            return [
                'name' => $result->{$this->treeValueLabel},
                'value' => $result->id,
                'children' => $children->isEmpty() ? null : $children->toArray(),
            ];
        });
    }
}
