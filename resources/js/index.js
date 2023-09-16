import Treeselect from 'treeselectjs'

export default function tree({
    state,
    name,
    options,
    searchable,
    showCount,
    placeholder,
    disabledBranchNode,
    disabled = false,
    isSingleSelect = true,
    showTags = false,
    clearable = false,
    alwaysOpen = true,
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
                alwaysOpen
            });

            this.tree.srcElement.addEventListener('input', (e) => {
                this.state = e.detail;
            });
        }
    }
}
