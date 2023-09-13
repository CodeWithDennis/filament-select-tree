<x-dynamic-component :component="$getFieldWrapperView()" :field="$field">
    <div
        x-data
        x-load-js="[@js(\Filament\Support\Facades\FilamentAsset::getScriptSrc('tree', package: 'codewithdennis/filament-select-tree'))]"
        x-load-css="[@js(\Filament\Support\Facades\FilamentAsset::getStyleHref('tree', package: 'codewithdennis/filament-select-tree'))]"
    >
        <div id="tree" wire:ignore></div>
    </div>

    <script>
        window.addEventListener('load', () => {
            const tree = new Treeselect({
                value: "{{ $getRecord()->{$getName()} ?? null }}",
                isSingleSelect: "{{ !$getMultiple() }}",
                options: @json($getOptions()),
                searchable: "{{ $getSearchable() }}",
                clearable: "{{ $getClearable() }}",
                showCount: "{{ $getCount() }}",
                placeholder: "{{ $getPlaceholder() }}",
                showTags: "{{ $getTags() }}",
                isIndependentNodes: "{{ $getIndependent() }}",
                disabledBranchNode: true,
                grouped: true,
                // openLevel: 1,
                disabled: false,
                saveScrollPosition: true,
                parentHtmlContainer: document.querySelector('#tree'),
                // alwaysOpen: true,
            });
            tree.srcElement.addEventListener('input', (e) => {
            @this.set("{{ $getStatePath() }}", e.detail);
            });
        })
    </script>
    @push('scripts')
    @endpush

    <style>
        .treeselect-list__item {
            height: 36px;
        }

        .treeselect-input__tags-count {
            margin-left: 6px;
        }

        .treeselect-list__item--focused {
            --tw-bg-opacity: 1;
            background-color: rgba(var(--gray-50), var(--tw-bg-opacity)) !important;
            border-radius: 0.375rem;
        }

        .treeselect-list__item--group:hover {
            --tw-bg-opacity: 1;
            background-color: rgba(var(--gray-50), var(--tw-bg-opacity)) !important;
            border-radius: 0.375rem;
        }

        .treeselect-input__tags-element:hover {
            background-color: inherit 30;
        }

        .treeselect-input {
            line-height: 1.5rem;
            font-size: .875rem;
            border-radius: 0.5rem !important;
            border-color: #dddddd;
            border-bottom: 1px solid #dddddd !important;
        }

        .treeselect-input__edit:focus {
            border: 0;
            --tw-ring-color: none;
            --tw-ring-shadow: none;
        }

        .treeselect-list {
            padding: 0.25rem;
            --tw-bg-opacity: 1;
            --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, .1), 0 4px 6px -4px rgba(0, 0, 0, .1);
            --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
            --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
            --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);
            --tw-ring-color: rgba(var(--gray-950), 0.05);
            background-color: rgb(255 255 255/var(--tw-bg-opacity));
            border-radius: 0.5rem;
            box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
            box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
            font-size: .875rem;
            line-height: 1.25rem;
            margin-top: 0.5rem;
            overflow-wrap: break-word;
            top: 100%;
            width: 100%;
            z-index: 10;
            border: none;
        }

        .treeselect-input--focused {
            border-color: inherit;
        }

        .treeselect-input__tags-element {
            --tw-bg-opacity: 1;
            --tw-text-opacity: 1;
            --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
            --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);
            --tw-ring-inset: inset;
            --tw-ring-color: rgba(var(--primary-600), 0.1);
            align-items: center;
            background-color: rgba(var(--primary-50), var(--tw-bg-opacity));
            border-radius: 0.375rem;
            box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
            color: rgba(var(--primary-600), var(--tw-text-opacity));
            display: inline-flex;
            font-size: .75rem;
            font-weight: 500;
            gap: 0.25rem;
            line-height: 1rem;
            padding: 0.25rem 0.5rem;
            word-break: break-all;
        }
    </style>
</x-dynamic-component>
