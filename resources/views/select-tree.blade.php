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
                    parentHtmlContainer: document.querySelector('#tree'),
                    value: {{ $getRecord()->{$getName()} ?? 0 }},
                    isSingleSelect: "{{ !$getMultiple() }}",
                    options: @json($getOptions()),
                    searchable: "{{ $getSearchable() }}",
                    clearable: "{{ $getClearable() }}",
                    showCount: "{{ $getWithCount() }}",
                    placeholder: "{{ $getPlaceholder() }}",
                    showTags: "{{ $getTags() }}",
                    isIndependentNodes: "{{ $getIndependent() }}",
                    disabledBranchNode: "{{ $getDisabledBranchNode() }}",
                    disabled: "{{ $isDisabled() }}",
                });
                tree.srcElement.addEventListener('input', (e) => {
                @this.set("{{ $getStatePath() }}", e.detail);
                });
            })
        </script>
    @endpush
</x-dynamic-component>
