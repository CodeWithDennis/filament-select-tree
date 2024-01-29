@php
    $prefixLabel = $getPrefixLabel();
    $suffixLabel = $getSuffixLabel();
    $prefixIcon = $getPrefixIcon();
    $suffixIcon = $getSuffixIcon();
    $prefixActions = $getPrefixActions();
    $suffixActions = $getSuffixActions();
@endphp

<x-dynamic-component :component="$getFieldWrapperView()" :field="$field">
    <div
            x-data
            x-load-css="[
        @js(\Filament\Support\Facades\FilamentAsset::getStyleHref('tree', package: 'codewithdennis/filament-select-tree')),
        @js(\Filament\Support\Facades\FilamentAsset::getStyleHref('custom', package: 'codewithdennis/filament-select-tree'))
        ]"
    >
        <x-filament::input.wrapper
                :suffix="$suffixLabel"
                :prefix="$prefixLabel"
                :prefix-icon="$prefixIcon"
                :suffix-icon="$suffixIcon"
                :disabled="$isDisabled()"
                :prefix-actions="$prefixActions"
                :suffix-actions="$suffixActions"
        >
            {{ $this->getId() }}.{{ $getStatePath() }}.tree
            <div
                    wire:key="{{ $this->getId() }}.{{ $getStatePath() }}.{{ $field::class }}.{{ $getName() }}.tree"
                    ax-load="visible"
                    x-ignore
                    ax-load-src="{{ \Filament\Support\Facades\FilamentAsset::getAlpineComponentSrc('tree', package: 'codewithdennis/filament-select-tree') }}"
                    x-data="tree({
                id: '{{ $this->getId() }}',
                name: '{{ $getName() }}',
                state: $wire.{{ $applyStateBindingModifiers("\$entangle('{$getStatePath()}')") }},
                options: {{ json_encode($getTree()) }},
                searchable: '{{ $isSearchable() }}',
                showCount: '{{ $getWithCount() }}',
                placeholder: '{{ $getPlaceholder() }}',
                disabledBranchNode: '{{ !$getEnableBranchNode() }}',
                disabled: '{{ $isDisabled() }}',
                isSingleSelect: '{{ !$getMultiple() }}',
                isIndependentNodes: '{{ $getIndependent() }}',
                showTags: '{{ $getMultiple() }}',
                alwaysOpen: '{{ $getAlwaysOpen() }}',
                clearable: '{{ $getClearable() }}',
                emptyText: '{{ $getEmptyLabel() }}',
                expandSelected: '{{ $getExpandSelected() }}',
                grouped: '{{ $getGrouped() }}',
                openLevel: '{{ $getDefaultOpenLevel() }}',
                direction: '{{ $getDirection() }}',
                rtl: '{{ __('filament-panels::layout.direction') === 'rtl' }}'
            })"
            >
                <div x-ref="tree" wire:ignore></div>
            </div>
        </x-filament::input.wrapper>
    </div>
</x-dynamic-component>
