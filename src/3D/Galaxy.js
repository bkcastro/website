import * as THREE from 'three'
import gui from './gui';
import vertex from '../shaders/vertex.glsl';
import fragment from '../shaders/fragment.glsl';

class Galaxy extends THREE.Object3D {

    constructor() {
        super();

        this.parameters = {}
        this.parameters.count = 10000
        this.parameters.size = 1
        this.parameters.radius = .5
        this.parameters.branches = 80
        this.parameters.spin = 1
        this.parameters.randomness = 0.08
        this.parameters.randomnessPower = .01
        this.parameters.insideColor = '#36dede'//'#0d0909'
        this.parameters.outsideColor = '#f21ee2' //'#95e8e6'
        this.parameters.translate = new THREE.Vector3(0, 0, 0);

        this.geometry = null
        this.material = null
        this.points = null

        this.galaxy = this.generateGalaxy(this.parameters);
        this.add(this.galaxy);

        gui.add(this.parameters, 'count').min(100).max(1000000).step(100).onFinishChange(this.generateGalaxy(this.parameters))
        gui.add(this.parameters, 'radius').min(0.01).max(20).step(0.01).onFinishChange(this.generateGalaxy(this.parameters))
        gui.add(this.parameters, 'branches').min(2).max(20).step(1).onFinishChange(this.generateGalaxy(this.parameters))
        gui.add(this.parameters, 'randomness').min(0).max(2).step(0.001).onFinishChange(this.generateGalaxy(this.parameters))
        gui.add(this.parameters, 'randomnessPower').min(1).max(10).step(0.001).onFinishChange(this.generateGalaxy(this.parameters))
        gui.addColor(this.parameters, 'insideColor').onFinishChange(this.generateGalaxy(this.parameters))
        gui.addColor(this.parameters, 'outsideColor').onFinishChange(this.generateGalaxy(this.parameters))

    }

    generateGalaxy = (parameters) => {

        if (this.points !== null) {
            this.geometry.dispose()
            this.material.dispose()
            this.remove(this.points)
        }

        this.geometry = new THREE.BufferGeometry()

        const positions = new Float32Array(parameters.count * 3)
        const colors = new Float32Array(parameters.count * 3)
        const scales = new Float32Array(parameters.count * 1)
        const random = new Float32Array(parameters.count * 3)

        const insideColor = new THREE.Color(parameters.insideColor)
        const outsideColor = new THREE.Color(parameters.outsideColor)

        for (let i = 0; i < parameters.count; i++) {
            const i3 = i * 3

            const radius = Math.random() * parameters.radius
            const branchAngle = (i % parameters.branches) / parameters.branches * Math.PI * 2

            positions[i3] = Math.cos(branchAngle) * radius;
            positions[i3 + 1] = 0;
            positions[i3 + 2] = Math.sin(branchAngle) * radius;

            // Random 
            const randomX = (Math.pow(Math.random(), parameters.randomnessPower) * (Math.random() < 0.5 ? 1 : - 1) * parameters.randomness * radius)
            const randomY = (Math.pow(Math.random(), parameters.randomnessPower) * (Math.random() < 0.5 ? 1 : - 1) * parameters.randomness * radius)
            const randomZ = (Math.pow(Math.random(), parameters.randomnessPower) * (Math.random() < 0.5 ? 1 : - 1) * parameters.randomness * radius)

            random[i3] = randomX
            random[i3 + 1] = randomY
            random[i3 + 2] = randomZ

            // Color
            const mixedColor = insideColor.clone()
            mixedColor.lerp(outsideColor, radius / parameters.radius)

            colors[i3] = mixedColor.r
            colors[i3 + 1] = mixedColor.g
            colors[i3 + 2] = mixedColor.b

            // Scale
            scales[i] = Math.random()
        }

        this.geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
        this.geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))
        this.geometry.setAttribute('aScale', new THREE.BufferAttribute(scales, 1))
        this.geometry.setAttribute('aRandom', new THREE.BufferAttribute(random, 3))

        const rotation = new THREE.Matrix4();
        rotation.makeRotationY(Math.PI / 2);

        this.material = new THREE.ShaderMaterial({
            depthWrite: false,
            //blending: THREE.AdditiveBlending,
            vertexColors: true,
            vertexShader: vertex,
            fragmentShader: fragment,
            uniforms: {
                uSize: { value: 1 },
                uTime: { value: 1 },
                uTran: { value: parameters.translate },
                uYaw: { value: rotation },
            }
        })

        return new THREE.Points(this.geometry, this.material);
    }

    update() {

        if (this.galaxy.material != null) {
            this.galaxy.material.uniforms.uTime.value += 0.0001;
            this.galaxy.material.needsUpdate = true;
        }
    }
}

export default Galaxy;