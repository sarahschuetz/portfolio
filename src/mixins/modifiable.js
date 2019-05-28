const modifiableMixin = {
    props: {
        modifiers: {
            type: Array,
            default: () => [],
        },
    },

    data() {
        return {
            className: 'o-default',
        };
    },

    computed: {
        rootClass() {
            const classes = [this.className];
            this.modifiers.forEach(modifier => classes.push(`${this.className}--${modifier}`));
            return classes;
        },
    },
};

export default modifiableMixin;
