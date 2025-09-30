import Treeselect from 'treeselectjs'

export default function selectTree({
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

        /** @type Treeselect */
        tree: null,

        formatState: function (state) {
            if (isSingleSelect && Array.isArray(state)) {
                state = state[0]
            }
            if (!isSingleSelect && !Array.isArray(state)) {
                state = [state]
            }
            if (Array.isArray(state)) {
                return (state ?? []).map((item) => item?.toString())
            }

            return state?.toString()
        },


        init() {
            this.tree = new Treeselect({
                id: `tree-${name}-id`,
                ariaLabel: `tree-${name}-label`,
                parentHtmlContainer: this.$refs.tree,
                value: this.formatState(this.state),
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
