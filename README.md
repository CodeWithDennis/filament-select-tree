# Filament Select Tree

[![Latest Version on Packagist](https://img.shields.io/packagist/v/codewithdennis/filament-select-tree.svg?style=flat-square)](https://packagist.org/packages/codewithdennis/filament-select-tree)
[![Total Downloads](https://img.shields.io/packagist/dt/codewithdennis/filament-select-tree.svg?style=flat-square)](https://packagist.org/packages/codewithdennis/filament-select-tree)

The multi-level select field lets you pick one or multiple options from a list that's neatly organized into different levels. It's all made possible with [TreeSelectJS](https://github.com/dipson88/treeselectjs).

![Select Tree](https://github.com/CodeWithDennis/filament-select-tree/assets/23448484/d944b896-134b-414a-b654-9adecc43ba5e)


## Installation

You can install the package via composer:

```bash
composer require codewithdennis/filament-select-tree
php artisan filament:assets
```

## Features

- Dark Mode: It seamlessly supports both Filament's light and dark modes out of the box.
- Search: Searching is fully supported, and it seamlessly searches through all levels within the tree structure.
- BelongsTo Integration: Establish connections within your data effortlessly.
- BelongsToMany Integration: Simplify the management of complex relationships through BelongsToMany integration.

🐛 One thing I have noticed about this project is that it tends to run a lot of queries, mainly because of its recursive design. Working to fix this in the upcoming updates.

## Usage

```PHP
// Create a tree based on a 'BelongsToMany' relationship
SelectTree::make('categories')
    ->relationship('categories', 'name', 'parent_id', function ($query) {
        return $query;
    })

// Create a tree based on a 'BelongsTo' relationship
SelectTree::make('category_id')
    ->relationship('category', 'name', 'parent_id', function ($query) {
        return $query;
    })

// Set a custom placeholder when no items are selected
->placeholder(__('Enter your custom placeholder here'))

// Enable the selection of groups
->enableBranchNode()

// Customize the label when there are zero search results
->emptyLabel(__('No results found'))

// Display the count of children alongside the group's name
->withCount()

// Keep the dropdown open at all times
->alwaysOpen()

// Set nodes as dependent
->independent(false)

// Expand the tree with selected values
->expandSelected(false)

//	All groups will be opened to this level
->defaultOpenLevel(2)

// Display individual leaf nodes instead of the main group when all leaf nodes are selected
->grouped(false)

// Hide the clearable icon
->clearable(false)

// Activate the search functionality for the SelectTree
->searchable();
```

## Screenshots

<img width="641" alt="light" src="https://github.com/CodeWithDennis/filament-select-tree/assets/23448484/4d348c85-5ee9-45b1-9424-0d8b3efcc02e">
<img width="649" alt="dark" src="https://github.com/CodeWithDennis/filament-select-tree/assets/23448484/396627ff-bf36-44b7-b20c-0d32b2eff957">

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
