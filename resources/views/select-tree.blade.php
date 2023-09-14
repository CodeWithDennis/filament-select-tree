<x-dynamic-component :component="$getFieldWrapperView()" :field="$field">
    <div
        wire:ignore
        x-data
        x-load-css="[@js(\Filament\Support\Facades\FilamentAsset::getStyleHref('tree', package: 'codewithdennis/filament-select-tree'))]"
    >
        <div
            x-ignore
            ax-load="visible"
            ax-load-src="{{ \Filament\Support\Facades\FilamentAsset::getScriptSrc('tree', package: 'codewithdennis/filament-select-tree') }}"
            x-data="tree({
                state: $wire.{{ $applyStateBindingModifiers("\$entangle('{$getStatePath}')") }},
                name: '{{ $getName() }}',
                options: @json($getTree()),
                searchable: '{{ $isSearchable() }}',
                showCount: '{{ $getWithCount() }}',
                placeholder: '{{ $getPlaceholder() }}',
                disabledBranchNode: '{{ $getDisabledBranchNode() }}',
                disabled: '{{ $isDisabled() }}',
            })"
        >
            <div x-ref="tree"></div>
        </div>
    </div>
</x-dynamic-component>
