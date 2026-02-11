@php
    use Filament\Support\Facades\FilamentView;
    use Filament\Support\Facades\FilamentAsset;

    $prefixLabel = $getPrefixLabel();
    $suffixLabel = $getSuffixLabel();
    $prefixIcon = $getPrefixIcon();
    $suffixIcon = $getSuffixIcon();
    $prefixActions = $getPrefixActions();
    $suffixActions = $getSuffixActions();
@endphp

<x-dynamic-component :component="$getFieldWrapperView()" :field="$field">
    <div
        wire:key="{{ $getTreeKey() }}"
        wire:ignore
        @if (FilamentView::hasSpaMode(url()->current()))
            x-load="visible || event (x-modal-opened)"
        @else
            x-load
        @endif
        x-load-css="[@js(FilamentAsset::getStyleHref('filament-select-tree-styles', package: 'codewithdennis/filament-select-tree'))]"
        x-load-src="{{ FilamentAsset::getAlpineComponentSrc('filament-select-tree', package: 'codewithdennis/filament-select-tree') }}"
        x-data="selectTree({
            name: @js($getName()),
            state: $wire.{{ $applyStateBindingModifiers("\$entangle('{$getStatePath()}')") }},
            options: @js($getTree()),
            searchable: @js($isSearchable()),
            showCount: @js($getWithCount()),
            placeholder: @js($getPlaceholder()),
            disabledBranchNode: @js(!$getEnableBranchNode()),
            disabled: @js($isDisabled()),
            isSingleSelect: @js(!$getMultiple()),
            isIndependentNodes: @js($getIndependent()),
            showTags: @js($getShowTags()),
            tagsCountText: @js($getTagsCountText()),
            alwaysOpen: @js($getAlwaysOpen()),
            staticList: @js($getStaticList()),
            clearable: @js($getClearable()),
            emptyText: @js($getEmptyLabel()),
            expandSelected: @js($getExpandSelected()),
            grouped: @js($getGrouped()),
            isGroupedValue: @js($getIsGroupedValue()),
            openLevel: @js($getDefaultOpenLevel()),
            direction: @js($getDirection()),
            rtl: @js(__('filament-panels::layout.direction') === 'rtl'),
        })"
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
            <div x-ref="tree"></div>
        </x-filament::input.wrapper>
    </div>
</x-dynamic-component>
