import * as THREE from 'three';

export class ThreeJSTest {
    renderer:THREE.WebGLRenderer;
    scene:THREE.Scene;
    camera:THREE.Camera;
    // loader:THREE.ColladaLoader;
    light:THREE.PointLight;


    constructor() {
        this.renderer = new THREE.WebGLRenderer({ alpha: true });

        this.renderer.setSize(500, 500);
        this.renderer.setClearColor(0xFFFFFF, 1);

        document.getElementById('content').appendChild(this.renderer.domElement);

        this.scene = new THREE.Scene();;

        this.camera = new THREE.PerspectiveCamera(75
            , 1
            , 0.1, 1000);

        this.camera.position = new THREE.Vector3(5, 0, 5);
        this.camera.lookAt(new THREE.Vector3(0, 0, 0));

        // Create a loader
        // this.loader = new THREE.ColladaLoader();

        // Add a point light to the scene to light up our model
        this.light = new THREE.PointLight();
        this.light.position.set(100,100,100);
        this.light.intensity = 0.8;
        this.scene.add(this.light);

        this.renderer.render(this.scene, this.camera);

        // Blender COLLADA models have a different up vector than Three.js, set
        // this option to flip them
        // this.loader.options.convertUpAxis = true;

        // Now load the model, passing the callback finishedLoading() when done.
        // this.loader.load("robot.dae",
        //     (result) => this.finishedLoading(result),
        //     (length,curLength)=>{
        //         // called as file is loading, if you want a progress bar
        //     }
        // );
    }

    finishedLoading(result: any){
        // Model file is loaded, add it to the scene
        this.scene.add(result.scene);
    }
    render() {
        requestAnimationFrame(() => this.render());
        this.renderer.render(this.scene, this.camera);
    }

    start() {
        this.render();
    }
}