<?php

namespace CodeWithDennis\FilamentSelectTree;

use Closure;
use Filament\Forms\Components\Component;
use Filament\Support\Colors\Color;
use Filament\Support\Concerns\HasColor;

class SelectTree extends Component
{

    protected array $options = [];

    protected string $view = 'select-tree::tree';

    final public function __construct()
    {

    }

    public static function make(string $name): static
    {
        return app(static::class);
    }

    protected function setUp(): void
    {
        parent::setUp();

        $this->dehydrated(false);
    }

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
