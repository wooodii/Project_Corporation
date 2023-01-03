import { CACHE_SIZE_UNLIMITED } from 'firebase/firestore';
import * as THREE from 'three';
console.log(THREE);

const Three03 = () => {
    const scene = new THREE.Scene();
    // scene.background = new THREE.Color(0x004fff);

    // 카메라 
    const fov = 75; // field of view : 시야각, 화각
    
    const aspect = window.innerWidth / window.innerHeight;
    const near = 0.1; // 카메라의 앞 뒷부분을 어디까지 렌더링할건가에 대한 속성 비율 (near, far)
    const far = 1000;
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    // const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    // camera.position.set(0, 0, 1);
    camera.position.x = 0; // 화면 좌우 이동
    camera.position.y = 0; // 상하
    camera.position.z = 1;  // 앞뒤, 깊이감 뒤로갈수록 - 
    camera.lookAt(new THREE.Vector3(0,0,0)) ; // 카메라가 바라보는 위치를 설정할 수 있음

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


    // 텍스텨 추가 
    const textureLoder  = new THREE.TextureLoader();
    const textureBaseColor = textureLoder.load( <img src={require('../asset/Stone_Path_008_basecolor.jpg')} />  );
    const textureMormalMap= textureLoder.load('../asset/Stone_Path_008_normal.jpg');    
    const textureHeightMap  = textureLoder.load('../asset/Stone_Path_008_height.png');
    const textureRoughnessMap = textureLoder.load('../asset/Stone_Path_008_roughness.jpg');


    // 도형추가
    const geometry01 = new THREE.BoxGeometry(0.3, 0.5, 2); // 박스지오메트리
    const material01 = new THREE.MeshStandardMaterial({
        color : 0xFF7F00
    });
    
    const obj01 = new THREE.Mesh(geometry01, material01);
    obj01.position.x = -1;
    scene.add(obj01);

    // 바닥 추가 
    const planeGeometry = new THREE.PlaneGeometry(30, 30, 1, 1);
    
    const planeMaterial = new THREE.MeshStandardMaterial({
        color : 0xeeeeee
    });
    const plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.rotation.x = -0.5* Math.PI;
    plane.position.y = -0.5;
    scene.add(plane);

    // lambert phong :빛을 기준으로 표현 phong 은 반짝이는 금속 재질 표현에 유리
    const geometry02 = new THREE.BoxGeometry(0.5, 0.7, 0.5); 
    const material02 = new THREE.MeshStandardMaterial({
        map : textureBaseColor,
        normalMap : textureMormalMap
    });
    
    const obj02 = new THREE.Mesh(geometry01, material02);
    //scene.add(obj02);
    
    const geometry03 = new THREE.IcosahedronGeometry(0.4, 0); 
    const material03 = new THREE.MeshStandardMaterial({
        map : textureBaseColor,
        normalMap : textureMormalMap,
        displacementMap : textureHeightMap, // mesh 정점의 위치에 따라 밝고 어두움에 따라 조절
        displacementScale : 0.03 //default는 1
    });

    const obj03 = new THREE.Mesh(geometry01, material03);
    //scene.add(obj03);
    obj03.position.x = +1;


    const material04 = new THREE.MeshStandardMaterial({
        map : textureBaseColor,
        normalMap : textureMormalMap,
        displacementMap : textureHeightMap, // mesh 정점의 위치에 따라 밝고 어두움에 따라 조절
        displacementScale : 0.03, //default는 1
        roughnessMap : textureRoughnessMap, // 빛이 이미지에 따라서 표현
        roughness : 0.5 // 빛의 반질거림 조정
    });

    const obj04 = new THREE.Mesh(geometry01, material04);
   // scene.add(obj04);
    obj04.position.x = +2;


    function render(time){
        time *= 0.0005;

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
        <>
            <canvas></canvas>
        </> 
    );
}
 
export default Three03;
