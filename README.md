# Filament Select Tree

[![Latest Version on Packagist](https://img.shields.io/packagist/v/codewithdennis/filament-select-tree.svg?style=flat-square)](https://packagist.org/packages/codewithdennis/filament-select-tree)
[![Total Downloads](https://img.shields.io/packagist/dt/codewithdennis/filament-select-tree.svg?style=flat-square)](https://packagist.org/packages/codewithdennis/filament-select-tree)

This is a package that allows you to create an interactive select tree field based on relationships in your Laravel / Filament application. It provides a convenient way to build hierarchical selection dropdowns with various customization options.

![Select Tree](https://github.com/CodeWithDennis/filament-select-tree/assets/23448484/d944b896-134b-414a-b654-9adecc43ba5e)


## Installation

You can install the package via composer:

```bash
composer require codewithdennis/filament-select-tree
```

```bash
php artisan filament:assets
```

## Usage

Import the `SelectTree` class from the `CodeWithDennis\FilamentSelectTree` namespace

```PHP
use CodeWithDennis\FilamentSelectTree\SelectTree;
```

Create a tree based on a 'BelongsToMany' relationship

```PHP
SelectTree::make('categories')
    ->relationship('categories', 'name', 'parent_id', function ($query) {
        return $query;
    })
```

Create a tree based on a 'BelongsTo' relationship

```PHP
SelectTree::make('category_id')
    ->relationship('category', 'name', 'parent_id', function ($query) {
        return $query;
    })
```

Use the tree in your table filters. Here's an example to show you how.


```bash
use Filament\Tables\Filters\Filter;
use Illuminate\Database\Eloquent\Builder;
```

```php
->filters([
    Filter::make('tree')
        ->form([
            SelectTree::make('categories')
                ->relationship('categories', 'name', 'parent_id')
                ->independent(false)
                ->enableBranchNode(),
        ])
        ->query(function (Builder $query, array $data) {
            return $query->when($data['categories'], function ($query, $categories) {
                return $query->whereHas('categories', fn($query) => $query->whereIn('id', $categories));
            });
        })
        ->indicateUsing(function (array $data): ?string {
            if (! $data['categories']) {
                return null;
            }

            return __('Categories') . ': ' . implode(', ', Category::whereIn('id', $data['categories'])->get()->pluck('name')->toArray());
        })
])
```

Set a custom placeholder when no items are selected

```PHP
->placeholder(__('Please select a category'))
```

Enable the selection of groups

```PHP
->enableBranchNode()
```

Customize the label when there are zero search results

```PHP
->emptyLabel(__('Oops, no results have been found!'))
```

Display the count of children alongside the group's name

```PHP
->withCount()
```

Keep the dropdown open at all times

```PHP
->alwaysOpen()
```

Set nodes as dependent

```PHP
->independent(false)
```

Expand the tree with selected values (only works if field is dependent)

```PHP
->expandSelected(false)
```

Set the parent's null value to -1, allowing you to use -1 as a sentinel value (default = null)

```PHP
->parentNullValue(-1)
```

All groups will be opened to this level

```PHP
->defaultOpenLevel(2)
```

Specify the list's force direction. Options include: auto (default), top, and bottom.

```PHP
->directon('top')
```

Display individual leaf nodes instead of the main group when all leaf nodes are selected

```PHP
->grouped(false)
```

Hide the clearable icon

```PHP
->clearable(false)
```

Activate the search functionality

```PHP
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
