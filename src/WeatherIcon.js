import {Component, Suspense, useRef} from "react";
import {Canvas, useFrame, useLoader} from '@react-three/fiber';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';
import './WeatherIcon.css';

function WeatherIcon(props) {
    let mouse = {
        x: 0,
        y: 0
    }
    window.addEventListener('mousemove', (data)=>{
        let windowsize = {
            width: window.innerWidth,
            height: window.innerHeight
        }
        mouse = {
            x: -((data.clientX / windowsize.width) * 2 - 1),
            y: ((data.clientY / windowsize.height) * 2 - 1)
        }
    });
    const ref = useRef();
    const gltf = useLoader(GLTFLoader, props.icon)
    gltf.scene.scale.set(2, 2, 2);
    useFrame(() => {
        ref.current.rotation.x = 90 + (mouse.y * 0.2);
        ref.current.rotation.z = mouse.x * 0.2;
    });
    return (
        <primitive object={gltf.scene} ref={ref} />
    )
}

class WeatherIconParent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            icon: props.icon
        }
    }

    render() {
        return (
            <div className={"WeatherIcon"}>
                <Suspense fallback={<div/>}>
                    <Canvas camera={{fov: 75, position: [0, -2.75, 5]}}>
                        <ambientLight intensity={0.5} />
                        <spotLight position={[10, 15, 10]} angle={0.15} penumbra={1} intensity={1}
                                   shadow-mapSize={[512, 512]} castShadow={true}/>
                        <WeatherIcon icon={this.state.icon}/>
                    </Canvas>
                </Suspense>
            </div>
        )
    }
}

export default WeatherIconParent;