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
- ✅ Compatible with dark mode
- ✅ Featuring search functionality
- ✅ Comma seperated multi-select
- ✅ Custom options
- ❌ Disabled options (Planned)
- ❌ Relationships (Planned)
  
## Usage

```PHP
SelectTree::make('category_id')
    // Creates a select tree with 'Category' model, using 'category_id' as parent and 'name' as label, allowing custom query modification.
    ->tree(Category::class, 'category_id', 'name', function ($query) {
        return $query;
    })

    // Set a custom placeholder for when no items are selected
    ->placeholder(__('Your custom placeholder here'))

    // Ensures that only leaf nodes can be selected while preventing the selection of groups.
    ->disabledBranchNode()
    
    // Adjust the emptyLabel for when there are zero search results.
    ->emptyLabel(__('No results found'))

    // Show the count of children alongside the group's name.
    ->withCount()

    // To keep the dropdown open at all times
    ->alwaysOpen()

    // By default, all nodes are independent.
    ->independent(false)
    
    // When 'independent' is set to false, the tree will open with the selected values by default.
    ->expandSelected(false)
    
    // Display individual leaf nodes instead of the main group when all leaf nodes are selected.
    ->grouped(false)

    // By default, the clearable icon is enabled, but you can hide it with:
    ->clearable(false)

    // Enable the option to save multiple values as a string (comma-separated)
    ->multiple()

    // Activates the search functionality for the SelectTree.
    ->searchable()
```
### Custom
If you prefer to create custom options rather than utilizing a pre-existing model, you can achieve this using the following example:

```PHP
->options([
    [
        'name' => 'Electronics',
        'value' => 'electronics',
        'children' => [
            [
                'name' => 'Mobile Devices',
                'value' => 'mobile devices',
                'children' => [
                    [
                        'name' => 'Apple Products',
                        'value' => 'apple products',
                    ]
                ]
            ]
        ]
    ],
])
```

## Screenshots

<img width="625" alt="Scherm­afbeelding 2023-09-17 om 12 19 13" src="https://github.com/CodeWithDennis/filament-select-tree/assets/23448484/7f2611f3-60c7-43e4-b4a1-02646eeab0c9">
<img width="627" alt="Scherm­afbeelding 2023-09-17 om 12 19 05" src="https://github.com/CodeWithDennis/filament-select-tree/assets/23448484/0ecc74bd-0f67-48e3-ace6-591ddd32b835">

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
