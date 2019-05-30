import {
    Scene,
    PerspectiveCamera,
    WebGLRenderer,
} from 'three';

export default {
    name: 'WebGLCanvas',

    components: {},

    props: {
        renderFunction: {
            type: Function,
            required: true,
        },
        camera: {
            type: Object,
            default: () => new PerspectiveCamera(
                75,
                window.innerWidth / window.innerHeight,
                0.1,
                1000,
            ),
        },
    },

    data() {
        return {
            className: 'a-webGLCanvas',
            scene: new Scene(),
            renderer: new WebGLRenderer(),
        };
    },

    computed: {},

    watch: {},

    mounted() {
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.$refs.componentRoot.appendChild(this.renderer.domElement);
        this.render();
    },

    created() {},

    methods: {
        addToScene(object) {
            this.scene.add(object);
        },
        render() {
            requestAnimationFrame(this.render);
            this.renderFunction();
            this.renderer.render(this.scene, this.camera);
        },
    },
};
