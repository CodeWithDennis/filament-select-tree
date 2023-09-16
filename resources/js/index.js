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
                                 showTags = true,
                                 clearable = true,
                                 isIndependentNodes = true,
                                 alwaysOpen = false,
                             }) {
    return {
        state,
        tree: null,
        init() {
            const values = this.isSingleSelect
                ? (this.state !== null ? this.state : '')
                : (this.state !== null ? this.state.split(',') : '');

            this.tree = new Treeselect({
                id: `tree-${name}-id`,
                ariaLabel: `tree-${name}-label`,
                parentHtmlContainer: this.$refs.tree,
                value: values,
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
            });

            this.tree.srcElement.addEventListener('input', (e) => {
                if (Array.isArray(e.detail)) {
                    this.state = e.detail.join(",");
                } else {
                    this.state = e.detail;
                }
            });
        }
    }
}
