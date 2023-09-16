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
- ✅ Comma seperated multi-select
- ❌ Relationships (Planned)
  
## Usage

```PHP
// Required to build a tree
SelectTree::make('category_id')
    // Creates a select tree with 'Category' model, using 'category_id' as parent and 'name' as label, allowing custom query modification.
    ->tree(Category::class, 'category_id', 'name', function ($query) {
        return $query;
    })
```

```PHP
// The label 'Category' is assigned to the field.
->label(__('Category'))
```

```PHP
// Set a custom placeholder for when no items are selected
->placeholder(__('Your custom placeholder here'))
```

```PHP
// Ensures that only leaf nodes can be selected while preventing the selection of groups.
->disabledBranchNode()
```

```PHP
// Show the count of children alongside the group's name.
->withCount()
```

```PHP
// To disable tags and display a text message instead (e.g., "X items have been selected")
// Tags is always disabled on single select
->disableTags()
```

```PHP
// To keep the dropdown open at all times
->alwaysOpen()
```

```PHP
// By default, all nodes are independent.
->independent(false)
```

```php
// By default, the clearable icon is enabled, but you can hide it with:
->clearable(false)
```

```php
// Enable the option to save multiple values as a string (comma-separated)
->multiple()
```

```PHP
// Activates the search functionality for the SelectTree.
->searchable()
```

```PHP
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
