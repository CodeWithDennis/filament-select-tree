<?php

namespace CodeWithDennis\FilamentSelectTree;

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

    protected bool $disabledBranchNode = false;

    protected string $treeModel;

    protected string $treeParentKey;

    protected string $titleAttribute;

    public function withCount(bool $withCount = true): static
    {
        $this->withCount = $withCount;

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

    public function getWithCount(): bool
    {
        return $this->evaluate($this->withCount);
    }

    public function getDisabledBranchNode(): bool
    {
        return $this->evaluate($this->disabledBranchNode);
    }

    public function tree(string $treeModel, string $treeParentKey, string $titleAttribute): static
    {
        $this->treeModel = $treeModel;
        $this->treeParentKey = $treeParentKey;
        $this->titleAttribute = $titleAttribute;

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
                'name' => $result->{$this->titleAttribute},
                'value' => $result->id,
                'children' => $children->isEmpty() ? null : $children->toArray(),
            ];
        });
    }
}
