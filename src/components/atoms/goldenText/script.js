import {
    BoxGeometry,
    MeshStandardMaterial,
    Mesh,
    FontLoader,
    TextGeometry,
    PointLight,
    PointLightHelper,
} from 'three';

import webGLCanvas from '../webGLCanvas/component.vue';
import jsonTypeface from '../../../assets/jsonTypefaces/helvetiker_regular.typeface.json';

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
            mouse: {
                x: 0,
                y: 0,
            },
            window: {
                width: window.innerWidth,
                height: window.innerHeight,
            },
        };
    },

    computed: {},

    watch: {},

    created() {
        window.addEventListener('mousemove', this.trackMouse);
    },

    mounted() {
        const canvas = this.$refs.webGLCanvas;
        const geometry = new BoxGeometry(1, 1, 1);
        const goldMaterial = new MeshStandardMaterial({
            color: 0xffd700,
            // shininess: 150,
            roughness: 0.3,
            metalness: 0.7,
        });
        this.cube = new Mesh(geometry, goldMaterial);
        // canvas.scene.add(this.cube);

        const fontLoader = new FontLoader();
        const font = fontLoader.parse(jsonTypeface);
        const textGeometry = new TextGeometry('Hello three.js!', {
            font,
            size: 100,
            height: 1,
            curveSegments: 12,
            bevelEnabled: false,
            bevelThickness: 10,
            bevelSize: 8,
            bevelOffset: 0,
            bevelSegments: 3,
        });

        const textMesh = new Mesh(textGeometry, goldMaterial);
        canvas.scene.add(textMesh);
        // canvas.camera.position.x = window.innerWidth / 2;
        canvas.camera.position.x = 0;
        canvas.camera.position.y = 0;
        canvas.camera.position.z = 1000;
        canvas.camera.lookAt(textMesh.position);
        console.log('added mesh to scene');

        const color = 0xFFFFFF;
        const intensity = 1;
        this.light = new PointLight(color, intensity);
        canvas.scene.add(this.light);

        const helper = new PointLightHelper(this.light);
        canvas.scene.add(helper);
    },

    destroyed() {
        window.removeEventListener('mousemove', this.trackMouse);
    },

    methods: {
        render() {
            if (this.cube) {
                this.cube.rotation.x += 0.01;
                this.cube.rotation.y += 0.01;
                this.light.position.set(
                    this.mouse.x - this.window.width / 2,
                    this.mouse.y - this.window.height / 2,
                    70,
                );
            }
        },
        trackMouse(evt) {
            this.mouse.x = evt.clientX;
            this.mouse.y = evt.clientY;
            console.log('mouse', this.mouse.x, this.mouse.y);
        },
    },
};
