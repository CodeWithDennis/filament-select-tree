<?php

namespace CodeWithDennis\FilamentSelectTree;

use App\Models\Category;
use Filament\Forms\Components\Field;

class SelectTree extends Field
{

    protected bool $multiple = false;
    protected bool $searchable = false;

    protected string $view = 'select-tree::select-tree';

    public function multiple(bool $multiple = true): static
    {
        $this->multiple = $multiple;

        return $this;
    }

    public function searchable(bool $searchable = true): static
    {
        $this->searchable = $searchable;

        return $this;
    }

    public function getOptions(): Collection
    {
        return $this->evaluate($this->buildTree());
    }

    public function getMultiple(): bool
    {
        return $this->evaluate($this->multiple);
    }

    public function getSearchable(): bool
    {
        return $this->evaluate($this->searchable);
    }

    private function buildTree($parent = null)
    {

        // WIP: THIS WILL DYNAMIC OFC! Configurable by the user
        $categories = Category::where('category_id', $parent)->take(5)->get();

        $options = $categories->map(function ($category) {
            $children = $this->buildTree($category->id);

            return [
                'name' => $category->name,
                'value' => $category->id,
                'children' => $children->isEmpty() ? null : $children->toArray(),
            ];
        });

        return $options;
    }

}
