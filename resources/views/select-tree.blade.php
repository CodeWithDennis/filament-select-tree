<x-dynamic-component :component="$getFieldWrapperView()" :field="$field">
    <div
        x-data
        x-load-js="[@js(\Filament\Support\Facades\FilamentAsset::getScriptSrc('tree', package: 'codewithdennis/filament-select-tree'))]"
        x-load-css="[@js(\Filament\Support\Facades\FilamentAsset::getStyleHref('tree', package: 'codewithdennis/filament-select-tree'))]"
    >
        <div id="tree" wire:ignore></div>
    </div>
    @push('scripts')
        <script>
            window.addEventListener('load', () => {
                const tree = new Treeselect({
                    id: "tree-{{ $getName() }}-id",
                    ariaLabel: "tree-{{ $getName() }}-label",
                    parentHtmlContainer: document.querySelector('#tree'),
                    value: {{ $getRecord()->{$getName()} ?? 0 }},
                    options: @json($getTree()),
                    searchable: "{{ $isSearchable() }}",
                    showCount: "{{ $getWithCount() }}",
                    placeholder: "{{ $getPlaceholder() }}",
                    disabledBranchNode: "{{ $getDisabledBranchNode() }}",
                    disabled: "{{ $isDisabled() }}",
                    // TODO: Upcoming features
                    isSingleSelect: true,
                    showTags: false,
                    clearable: false,
                });
                tree.srcElement.addEventListener('input', (e) => {
                @this.set("{{ $getStatePath() }}", e.detail);
                });
            })
        </script>
    @endpush
</x-dynamic-component>
