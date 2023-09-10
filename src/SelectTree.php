<?php

namespace CodeWithDennis\FilamentSelectTree;

use Filament\Forms\Components\Field;

class SelectTree extends Field
{
    protected array $options = [];

    protected string $view = 'select-tree::tree';

    public function options(array $options): static
    {
        $this->options = $options;

        return $this;
    }

    public function getOptions(): array
    {
        return $this->evaluate($this->options);
    }
}
