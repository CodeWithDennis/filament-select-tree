import Treeselect from 'treeselectjs'

// Store treeselect instances globally
window.treeselectInstances = window.treeselectInstances || {};

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
        initialized: false,
        instanceId: null,

        init() {
            // Generate a unique instance ID
            this.instanceId = `${name}-${Math.random().toString(36).substring(2, 11)}`;

            // Initialize treeselect
            const tree = new Treeselect({
                id: `tree-${this.instanceId}-id`,
                ariaLabel: `tree-${this.instanceId}-label`,
                parentHtmlContainer: this.$refs.tree,
                value: Array.isArray(this.state) ? this.state : [this.state],
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

            window.treeselectInstances[this.instanceId] = tree;

            tree.srcElement.addEventListener('input', (e) => {
                this.state = e.detail;
            });

            this.initialized = true;

            this.$watch('state', (newValue) => {
                if (this.initialized && window.treeselectInstances[this.instanceId]) {
                    const tree = window.treeselectInstances[this.instanceId];
                    if (!newValue || (Array.isArray(newValue) && newValue.length === 0)) {
                        tree.updateValue([]);
                    } else {
                        tree.updateValue(Array.isArray(newValue) ? newValue : [newValue]);
                    }
                }
            });
        }
    }
}
