import Treeselect from 'treeselectjs'

export default function tree(
    {
        state,
        name,
        options,
        searchable,
        showCount,
        placeholder,
        disabledBranchNode = true,
        disabled = false,
        isSingleSelect = true,
        showTags = true,
        clearable = true,
        isIndependentNodes = true,
        alwaysOpen = false,
        emptyText,
        expandSelected = true,
        grouped = true,
    }) {
    return {
        state,
        tree: null,
        init() {
            this.tree = new Treeselect({
                id: `tree-${name}-id`,
                ariaLabel: `tree-${name}-label`,
                parentHtmlContainer: this.$refs.tree,
                value: this.state,
                options,
                searchable,
                showCount,
                placeholder,
                disabledBranchNode,
                disabled,
                isSingleSelect,
                showTags,
                clearable,
                isIndependentNodes,
                alwaysOpen,
                emptyText,
                expandSelected,
                grouped
            });

            this.tree.srcElement.addEventListener('input', (e) => {
                this.state = e.detail;
            });
        }
    }
}
