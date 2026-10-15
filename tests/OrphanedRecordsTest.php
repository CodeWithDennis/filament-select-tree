<?php

use CodeWithDennis\FilamentSelectTree\SelectTree;
use CodeWithDennis\FilamentSelectTree\Tests\Fixtures\Category;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

beforeEach(function () {
    Schema::create('categories', function (Blueprint $table) {
        $table->id();
        $table->string('name');
        $table->foreignId('parent_id')->nullable();
    });
});

it('keeps orphaned records at the root alongside existing root records', function () {
    Category::create(['name' => 'Software']);
    $hardware = Category::create(['name' => 'Hardware']);
    Category::create(['name' => 'Printers', 'parent_id' => $hardware->getKey()]);

    $tree = SelectTree::make('category')
        ->query(
            fn () => Category::query()->whereKeyNot($hardware->getKey()),
            'name',
            'parent_id',
        )
        ->getTree();

    expect($tree->pluck('name')->all())->toBe(['Software', 'Printers']);
});
