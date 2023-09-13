<?php

namespace CodeWithDennis\FilamentSelectTree;

use App\Models\Category;
use Filament\Forms\Components\Field;
use Illuminate\Support\Collection;

class SelectTree extends Field
{
    protected bool $multiple = false;
    protected bool $clearable = false;
    protected bool $searchable = false;
    protected bool $independent = false;
    protected bool $count = false;
    protected bool $tags = false;
    protected string $placeholder;

    protected string $view = 'select-tree::select-tree';

    public function multiple(bool $multiple = true): static
    {
        $this->multiple = $multiple;

        return $this;
    }

    public function independent(bool $independent = true): static
    {
        $this->independent = $independent;

        return $this;
    }

    public function count(bool $count = true): static
    {
        $this->count = $count;

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

    public function tags(bool $tags = true): static
    {
        $this->tags = $tags;

        return $this;
    }

    public function getOptions(): Collection
    {
        return $this->evaluate($this->buildTree());
    }

    public function getCount(): bool
    {
        return $this->evaluate($this->count);
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

    public function getClearable(): bool
    {
        return $this->evaluate($this->clearable);
    }

    public function getSearchable(): bool
    {
        return $this->evaluate($this->searchable);
    }

    private function buildTree($parent = null)
    {

        // WIP: THIS WILL DYNAMIC OFC! Configurable by the user
        $categories = Category::where('category_id', $parent)->take(25)->get();

        $options = $categories->map(function ($category) {
            $children = $this->buildTree($category->id);

            return [
                'id' => $category->id,
                'name' => $category->name,
                'value' => $category->id,
                'children' => $children->isEmpty() ? null : $children->toArray(),
            ];
        });

        return $options;
    }
}
