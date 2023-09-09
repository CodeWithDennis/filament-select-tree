<?php

namespace CodeWithDennis\FilamentSelectTree\Facades;

use Illuminate\Support\Facades\Facade;

/**
 * @see \CodeWithDennis\FilamentSelectTree\FilamentSelectTree
 */
class FilamentSelectTree extends Facade
{
    protected static function getFacadeAccessor()
    {
        return \CodeWithDennis\FilamentSelectTree\FilamentSelectTree::class;
    }
}
