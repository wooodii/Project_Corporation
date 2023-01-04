import * as THREE from 'three';
import { OrbitControls } from '@react-three/drei';
console.log(THREE);

// 3차원 공간 만들기 
// 가상 공간의 공간감을 배경으로 표현 (skybox) = like 정육면체
// 이미지들을 6등분해서 사용할 수있도록 놔둔 사이즈  - https://opengameart.org/
// 2:25 texture입히기부터 다시 보기 
const Three06 = () => {
    const scene = new THREE.Scene();
    // scene.background = new THREE.Color(0x004fff);

    // 카메라 
    const fov = 120; // field of view : 시야각, 화각
    const aspect = window.innerWidth / window.innerHeight;
    const near = 0.1; // 카메라의 앞 뒷부분을 어디까지 렌더링할건가에 대한 속성 비율 (near, far)
    const far = 1000;
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    // const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    // camera.position.set(0, 0, 1);
    camera.position.x = 0; // 화면 좌우 이동
    camera.position.y = 1; // 상하
    camera.position.z = 1.8;  // 앞뒤, 깊이감 뒤로갈수록 - 
    camera.lookAt(new THREE.Vector3(0,0,0)) ; // 카메라가 바라보는 위치를 설정할 수 있음

    const renderer = new THREE.WebGLRenderer({
        alpha : true,
        antialias : true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);


    // 도형추가
    // lambert phong :빛을 기준으로 표현 phong 은 반짝이는 금속 재질 표현에 유리
    const geometry01 = new THREE.IcosahedronGeometry(0.5, 32, 16); // 박스지오메트리
    const material01 = new THREE.MeshDepthMaterial({
        color : 0xeeeeee // 여기에 코드를 입력하면 되야 하는 거 아닌가? 
    });
    
    // object에 색이 입혀지지 않는 이유? 
    const obj01 = new THREE.Mesh(geometry01, material01);
    obj01.rotation.y = 0.5;
    obj01.rotation.x = 0.2;
    obj01.rotation.z = 1.5;
    scene.add(obj01);
    // 그림자 추가
    obj01.castShadow = true; 

    // 바닥 추가 
    const planeGeometry = new THREE.PlaneGeometry(30, 30, 1, 1);
    const planeMaterial = new THREE.MeshStandardMaterial({
    });

    const plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.rotation.x = -0.5* Math.PI;
    plane.position.y = -0.5;
    scene.add(plane);
    plane.receiveShadow = true; // 빛을 받아줄 그림자 

    // 빛
    // ambientLight : 빛
    const ambientLight = new THREE.AmbientLight(0xFFA500, 0.8); // color, intensity(강도) 
    scene.add(ambientLight);
    // ambientLight.castShaow = true; // 그림자 x
    
    // 특정 방향으로 빛 방출 like 해
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(-0.5 ,1.5,0.5); // z축을 높이면 후면에서 빛을 쏘는 것처럼 작용 
    const dllHelper = new THREE.DirectionalLightHelper(directionalLight, 0.2, 0xffffff); // 빛의 위치와 방향 설정 
    scene.add(dllHelper);
    scene.add(directionalLight);

    //적용안됨ㅠ
    directionalLight.castShadow = true; 
    directionalLight.shadow.mapSize.width = 1024; // 그림자 선명도 설정 (수치 증가할수록 선명)

    // 하늘과 바닥 색 중간 
    // const hemisphereLight = new THREE.HemisphereLight(0x0000ff, 0xff0000, 1); // object skycolor, groundcolor, intensity
    // scene.add (hemisphereLight)

    // pointLight
    // 빛
    const pointLight = new THREE.PointLight(0xffffff, 1);
    scene.add(pointLight);
    pointLight.position.set(1, 1, 1);
    const plHelper = new THREE.PointLightHelper(pointLight, 0.1); // 전구
    scene.add(plHelper);
    pointLight.castShadow = true; // 그림자 0 

    // const pointLight1 = new THREE.PointLight(0xffffff, 1);
    // pointLight.position.set(0, 2, 12);
    // // scene.add(pointLight1);
    // pointLight.position.set(-2, 0.5, 0.5);
    // const plHelper1 = new THREE.PointLightHelper(pointLight, 0.1); // 전구
    // //scene.add(plHelper1);

    // const pointLight2 = new THREE.PointLight(0xffffff, 1);
    // pointLight.position.set(0, 2, 12);
    // //scene.add(pointLight2);
    // pointLight.position.set(-2, 0.5, 0.5);
    // const plHelper2 = new THREE.PointLightHelper(pointLight, 0.1); // 전구
    // //scene.add(plHelper2);

    // const rectLight = new THREE.RectAreaLight(0xffffff, 2, 1, 0.5);
    // // scene.add(rectLight);
    // rectLight.position.set(0.5, 0.5, 0.5);
    // rectLight.lookAt(0, 0, 0); 

    // const spotLight = new THREE.SpotLight(0xffffff, 0.5);
    // scene.add(spotLight); // 특정 위치에 세게 빛 쏘기 (명확한 위치 표현)
    // spotLight.castShadow
    // lambert phong :빛을 기준으로 표현 phong 은 반짝이는 금속 재질 표현에 유리
    // const geometry02 = new THREE.BoxGeometry(0.5, 0.7, 0.5); 
    // const material02 = new THREE.MeshStandardMaterial({
    //     map : textureBaseColor,
    //     normalMap : textureMormalMap
    // });
    
    // const obj02 = new THREE.Mesh(geometry01, material02);
    // //scene.add(obj02);
    
    // const geometry03 = new THREE.IcosahedronGeometry(0.4, 0); 
    // const material03 = new THREE.MeshStandardMaterial({
    //     map : textureBaseColor,
    //     normalMap : textureMormalMap,
    //     displacementMap : textureHeightMap, // mesh 정점의 위치에 따라 밝고 어두움에 따라 조절
    //     displacementScale : 0.03 //default는 1
    // });

    // const obj03 = new THREE.Mesh(geometry01, material03);
    // //scene.add(obj03);
    // obj03.position.x = +1;


//     const material04 = new THREE.MeshStandardMaterial({
//         map : textureBaseColor,
//         normalMap : textureMormalMap,
//         displacementMap : textureHeightMap, // mesh 정점의 위치에 따라 밝고 어두움에 따라 조절
//         displacementScale : 0.03, //default는 1
//         roughnessMap : textureRoughnessMap, // 빛이 이미지에 따라서 표현
//         roughness : 0.5 // 빛의 반질거림 조정
//     });

//     const obj04 = new THREE.Mesh(geometry01, material04);
//    // scene.add(obj04);
//     obj04.position.x = +2;


    function render(time){
        time *= 0.0005;
        // obj01.rotation.x = time;
        // obj01.rotation.y = time;
        renderer.render(scene, camera);
        requestAnimationFrame(render);
    }
        requestAnimationFrame(render);

    
    // 반응형
    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight; // WINDOW값 가변처리
        camera.updateProjectionMatrix(); // 카메라의 어떠한 파라미터라도 변경되면 이코드가 필요함 
        renderer.setSize(window.innerWidth, window.innerHeight); 
    }
    window.addEventListener('resize', onWindowResize);
    return ( 
        <canvas></canvas>
    );
}
 
export default Three06;