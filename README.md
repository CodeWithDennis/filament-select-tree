# Filament Select Tree [WORK IN PROGRESS]

[![Latest Version on Packagist](https://img.shields.io/packagist/v/codewithdennis/filament-select-tree.svg?style=flat-square)](https://packagist.org/packages/codewithdennis/filament-select-tree)
[![Total Downloads](https://img.shields.io/packagist/dt/codewithdennis/filament-select-tree.svg?style=flat-square)](https://packagist.org/packages/codewithdennis/filament-select-tree)

The multi-level select field lets you pick one option at a time from a list that's neatly organized into different levels. It's all made possible with [TreeSelectJS](https://github.com/dipson88/treeselectjs).

![Filament Select Tree (1)](https://github.com/CodeWithDennis/filament-select-tree/assets/23448484/a589af66-d314-4cf2-9cea-d155e52d4bca)

## Installation

You can install the package via composer:

```bash
composer require codewithdennis/filament-select-tree
```

## Features
- ✅ Compatible with dark mode
- ✅ Featuring search functionality
- ❌ Multi-select (Coming soon)
- ❌ Relationships
  
## Usage

```PHP
use CodeWithDennis\FilamentSelectTree\SelectTree;
use App\Models\Category;

SelectTree::make('category_id')
    // Creates a select tree with 'Category' model, using 'category_id' as parent and 'name' as label, allowing custom query modification.
    ->tree(Category::class, 'category_id', 'name', function ($query) {
        return $query;
    })

    // The label 'Category' is assigned to the field.
    ->label(__('Category'))

    // Ensures that only leaf nodes can be selected while preventing the selection of groups.
    ->disabledBranchNode()

    // Show the count of children alongside the group's name.
    ->withCount()

    // Activates the search functionality for the SelectTree.
    ->searchable()

    // The tree is disabled. (You can also use: ->disabledOn(''))
    ->disabled(),
```

## Changelog

Please see [CHANGELOG](CHANGELOG.md) for more information on what has changed recently.

## Contributing

Please see [CONTRIBUTING](.github/CONTRIBUTING.md) for details.

## Security Vulnerabilities

Please review [our security policy](../../security/policy) on how to report security vulnerabilities.

## Credits

- [CodeWithDennis](https://github.com/CodeWithDennis)
- [Dipson88](https://github.com/dipson88/treeselectjs)
- [All Contributors](../../contributors)

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
