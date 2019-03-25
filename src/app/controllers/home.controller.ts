import {ThreeJSTest} from "../libraries/test.three";

export class Home {
    constructor() {

    }

    public run() {
        window.onload = () => {
            const three = new ThreeJSTest();
            three.start();
        };
    }
}