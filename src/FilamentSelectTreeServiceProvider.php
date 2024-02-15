<?php

namespace CodeWithDennis\FilamentSelectTree;

use Filament\Support\Assets\AlpineComponent;
use Filament\Support\Assets\Css;
use Filament\Support\Facades\FilamentAsset;
use Spatie\LaravelPackageTools\Package;
use Spatie\LaravelPackageTools\PackageServiceProvider;

class FilamentSelectTreeServiceProvider extends PackageServiceProvider
{
    public static string $name = 'select-tree';

    public function configurePackage(Package $package): void
    {
        $package->name(static::$name)
            ->hasViews();
    }

    public function packageBooted(): void
    {
        FilamentAsset::register([
            AlpineComponent::make('filament-select-tree', __DIR__.'/../resources/dist/filament-select-tree.js'),
            Css::make('filament-select-tree-styles', __DIR__.'/../resources/dist/filament-select-tree.css'),
        ], 'codewithdennis/filament-select-tree');
    }
}
