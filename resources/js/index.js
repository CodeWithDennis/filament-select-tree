import Treeselect from 'treeselectjs'

export default function tree(
    {
        id,
        state,
        name,
        options,
        searchable,
        showCount,
        placeholder,
        rtl,
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
        openLevel = 0,
        direction = 'auto'
    }) {
    return {
        state,
        tree: null,
        init() {
            console.log(`tree-${name}-id-${id}`);

            this.tree = new Treeselect({
                id: `tree-${name}-id-${id}`,
                ariaLabel: `tree-${name}-label-${id}`,
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
                grouped,
                openLevel,
                direction,
                rtl
            });

            this.tree.srcElement.addEventListener('input', (e) => {
                this.state = e.detail;
            });
        }
    }
}
