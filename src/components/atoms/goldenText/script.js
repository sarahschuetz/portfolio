import {
    Scene,
    PerspectiveCamera,
    WebGLRenderer,
    BoxGeometry,
    MeshBasicMaterial,
    Mesh,
} from 'three';

export default {
    name: 'GoldenText',

    components: {},

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

    mounted() {
        console.log(this.$refs.componentRoot);

        const scene = new Scene();
        const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

        const renderer = new WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        this.$refs.componentRoot.appendChild(renderer.domElement);

        const geometry = new BoxGeometry(1, 1, 1);
        const material = new MeshBasicMaterial({ color: 0x00ff00 });
        const cube = new Mesh(geometry, material);
        scene.add(cube);

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

        camera.position.z = 5;

        function animate() {
            requestAnimationFrame(animate);
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;

            renderer.render(scene, camera);
        }
        animate();
    },

    created() {},

    methods: {},
};
