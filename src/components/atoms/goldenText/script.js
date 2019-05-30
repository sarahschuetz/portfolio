import {
    BoxGeometry,
    MeshBasicMaterial,
    Mesh,
} from 'three';

import webGLCanvas from '../webGLCanvas/component.vue';

export default {
    name: 'GoldenText',

    components: {
        webGLCanvas,
    },

    props: {
        text: {
            type: String,
            required: true,
        },
    },

    data() {
        return {
            className: 'a-goldenText',
        };
    },

    computed: {},

    watch: {},

    created() {},

    mounted() {
        const canvas = this.$refs.webGLCanvas;
        console.log(canvas);
        const geometry = new BoxGeometry(1, 1, 1);
        const material = new MeshBasicMaterial({ color: 0x00ff00 });
        this.cube = new Mesh(geometry, material);
        canvas.addToScene(this.cube);

        // const loader = new THREE.FontLoader();
        // loader.load( 'fonts/helvetiker_regular.typeface.json', function ( font ) {
        //     const geo = new THREE.TextGeometry( 'Hello three.js!', {
        //         font: font,
        //         size: 80,
        //         height: 5,
        //         curveSegments: 12,
        //         bevelEnabled: true,
        //         bevelThickness: 10,
        //         bevelSize: 8,
        //         bevelOffset: 0,
        //         bevelSegments: 5
        //     } );
        //     scene.add(new THREE.Mesh(geo, material));
        // } );
    },

    methods: {
        render() {
            if (this.cube) {
                this.cube.rotation.x += 0.01;
                this.cube.rotation.y += 0.01;
            }
        },
    },
};
