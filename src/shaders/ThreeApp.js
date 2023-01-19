import { CACHE_SIZE_UNLIMITED } from 'firebase/firestore';
import * as THREE from 'three';
console.log(THREE);

const ThreeApp = () => {
    const scene = new THREE.Scene();
    // scene.background = new THREE.Color(0x004fff);

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 3;

    const renderer = new THREE.WebGLRenderer({
        alpha : true,
        antialias : true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
      

    // 빛
     const pointLight = new THREE.PointLight(0xffffff, 1);
     pointLight.position.set(0, 2, 12);
     scene.add(pointLight);


    // 도형추가
    const geometry01 = new THREE.TorusGeometry(0.3, 0.15, 16, 40); // 박스지오메트리
    const material01 = new THREE.MeshStandardMaterial({
        color : 0xFF7F00
    });

    const obj01 = new THREE.Mesh(geometry01, material01);
    obj01.position.x = -1;
    scene.add(obj01);

    // lambert phong :빛을 기준으로 표현 phong 은 반짝이는 금속 재질 표현에 유리
    const geometry02 = new THREE.BoxGeometry(0.5, 0.7, 0.5); // 박스지오메트리
    const material02 = new THREE.MeshDepthMaterial({
        color : 0xFF7F00,
        metalness : 0.8, // 메탈릭
        roughness : 0.1, // 거칠기 
        // transparent : true, // 사라짐
        // opacity : 0.1,
        wireframe : true
    });

    material01.wireframe = true;
    
    const obj02 = new THREE.Mesh(geometry01, material02);
    scene.add(obj02);
    
    const geometry03 = new THREE.IcosahedronGeometry(0.4, 0); // 박스지오메트리
    const material03 = new THREE.MeshPhysicalMaterial({
        color : 0x999999,
        clearcoat : 1
    });

    const obj03 = new THREE.Mesh(geometry01, material03);
    scene.add(obj03);
    obj03.position.x = +1;

    function render(time){
        time *= 0.0005;

        //회전
        obj01.rotation.x = time;
        obj01.rotation.y = time;

        obj02.rotation.x = time;
        obj02.rotation.y = time;

        obj03.rotation.x = time;
        obj03.rotation.y = time;

        renderer.render(scene, camera);
        requestAnimationFrame(render);
    }
        requestAnimationFrame(render);
    
    // 반응형
    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight; // WINDOW값 가변처리
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }
    window.addEventListener('resize', onWindowResize);

    return (
            <canvas></canvas>
    );
}
 
export default ThreeApp;
