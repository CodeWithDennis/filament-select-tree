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
            Css::make('tree', __DIR__.'/../resources/dist/tree.css')
                ->loadedOnRequest(),
            Css::make('custom', __DIR__.'/../resources/dist/custom.css')
                ->loadedOnRequest(),
            AlpineComponent::make('tree', __DIR__.'/../resources/dist/tree.js')
                ->loadedOnRequest(),
        ], 'codewithdennis/filament-select-tree');
    }
}
