import * as THREE from 'three';
import { OrbitControls } from '@react-three/drei';
console.log(THREE);

// orbitControls 임포트 문제
// fog , fogExp2
//fog  > 안개 위치 적용의 장점 , 표현의도에 따라서 특정 거리까지의 명확한 장면을 표현한 다음에 어떤 색이 fadeout되도록 표현 가능 
// fog2 > 카메라와의 거리에 따라서 기하급수적으로 압개 증가 
// 도형과 카메라의 거리에 따라 안개 효과 정도가 달라짐

const Three02 = () => {

    // 안개 효과
    const FogColor = 0x004fff;
    const objColor = 0xffffff;
    const FloorColor = 0x555555; 

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(FloorColor);
    // scene.fog = new THREE.Fog(FogColor, 2, 8) // color, near, far 
    scene.fog = new THREE.FogExp2(FogColor, 0.2) // 밀도  1이 맥시멈(거의 물체가 안보임 )
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

     //바닥
     const planeGeometry = new THREE.PlaneGeometry(30, 30, 1, 1);
     const planeMaterial = new THREE.MeshStandardMaterial({
        color :FloorColor
     });
 
     const plane = new THREE.Mesh(planeGeometry, planeMaterial);
     plane.rotation.x = -0.5* Math.PI;
     plane.position.y = -0.5;
     scene.add(plane);
     plane.receiveShadow = true; // 빛을 받아줄 그림자 

    // **** 카메라 이후에 등장필요한 orbicontrols
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.minDistance = 3 // 마우스 휠로 카메라 거리 조작시 최소값
    controls.maxDistance = 6  // 마우스 휠로 카메라 거리 조작 시 최대값 
    // float은 0 임 
    controls.maxDistance = Math.PI / 2 -0.1 // 각도 제한 
    controls.enableDamping = true // 마우스 우클릭으로 카메라 위치 변경 

    controls.update() // 컨트롤 업데이트 

    // 도형추가
    const geometry01 = new THREE.SphereGeometry(0.3, 32, 16); // 박스지오메트리
    const material01 = new THREE.MeshStandardMaterial({
        color : objColor,
    });
    
    const obj01 = new THREE.Mesh(geometry01, material01);
    obj01.position.x = -1;
    scene.add(obj01);

    // lambert phong :빛을 기준으로 표현 phong 은 반짝이는 금속 재질 표현에 유리
    const geometry02 = new THREE.BoxGeometry(0.5, 0.7, 0.5); 
    const material02 = new THREE.MeshStandardMaterial({
    });
    
    const obj02 = new THREE.Mesh(geometry01, material02);
    scene.add(obj02);
    
    const geometry03 = new THREE.IcosahedronGeometry(0.4, 0); 
    const material03 = new THREE.MeshStandardMaterial({

    });

    const obj03 = new THREE.Mesh(geometry01, material03);
    scene.add(obj03);
    obj03.position.x = +1;


    const material04 = new THREE.MeshStandardMaterial({
    });

    const obj04 = new THREE.Mesh(geometry01, material04);
    scene.add(obj04);
    obj04.position.x = +2;

    // 애니메이션 추가
     function animate () {
        requestAnimationFrame(animate)
        obj01.rotation.y += 0.01 // 우측으로 회전
        renderer.render(scene, camera)
     }

    function render(time){
        time *= 0.0005;

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
        <>
            <canvas></canvas>
        </> 
    );
}
 
export default Three02;
