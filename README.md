# The multi-level select field enables you to make single selections from a predefined list of options that are organized into multiple levels or depths.

[![Latest Version on Packagist](https://img.shields.io/packagist/v/codewithdennis/filament-select-tree.svg?style=flat-square)](https://packagist.org/packages/codewithdennis/filament-select-tree)
[![GitHub Tests Action Status](https://img.shields.io/github/actions/workflow/status/codewithdennis/filament-select-tree/run-tests.yml?branch=main&label=tests&style=flat-square)](https://github.com/codewithdennis/filament-select-tree/actions?query=workflow%3Arun-tests+branch%3Amain)
[![GitHub Code Style Action Status](https://img.shields.io/github/actions/workflow/status/codewithdennis/filament-select-tree/fix-php-code-style-issues.yml?branch=main&label=code%20style&style=flat-square)](https://github.com/codewithdennis/filament-select-tree/actions?query=workflow%3A"Fix+PHP+code+style+issues"+branch%3Amain)
[![Total Downloads](https://img.shields.io/packagist/dt/codewithdennis/filament-select-tree.svg?style=flat-square)](https://packagist.org/packages/codewithdennis/filament-select-tree)



This is where your description should go. Limit it to a paragraph or two. Consider adding a small example.

## Installation

You can install the package via composer:

```bash
composer require codewithdennis/filament-select-tree
```

You can publish the config file with:

```bash
php artisan vendor:publish --tag="filament-select-tree-config"
```

Optionally, you can publish the views using

```bash
php artisan vendor:publish --tag="filament-select-tree-views"
```

This is the contents of the published config file:

```php
return [
];
```

## Usage

```php
$filamentSelectTree = new CodeWithDennis\FilamentSelectTree();
echo $filamentSelectTree->echoPhrase('Hello, CodeWithDennis!');
```

## Testing

```bash
composer test
```

## Changelog

Please see [CHANGELOG](CHANGELOG.md) for more information on what has changed recently.

## Contributing

Please see [CONTRIBUTING](.github/CONTRIBUTING.md) for details.

## Security Vulnerabilities

Please review [our security policy](../../security/policy) on how to report security vulnerabilities.

## Credits

- [Dennis Elsinga](https://github.com/CodeWithDennis)
- [All Contributors](../../contributors)

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
