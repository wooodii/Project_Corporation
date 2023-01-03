import { CACHE_SIZE_UNLIMITED } from 'firebase/firestore';
import * as THREE from 'three';
console.log(THREE);

const Three02 = () => {
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


    // 텍스텨 추가 
    const textureLoder  = new THREE.TextureLoader();
    const textureBaseColor = textureLoder.load( <img src={require('../asset/Stone_Path_008_basecolor.jpg')} />  );
    const textureMormalMap= textureLoder.load('../asset/Stone_Path_008_normal.jpg');    
    const textureHeightMap  = textureLoder.load('../asset/Stone_Path_008_height.png');
    const textureRoughnessMap = textureLoder.load('../asset/Stone_Path_008_roughness.jpg');


    // 도형추가
    const geometry01 = new THREE.SphereGeometry(0.3, 32, 16); // 박스지오메트리
    const material01 = new THREE.MeshStandardMaterial({
        map : textureBaseColor
    });
    
    const obj01 = new THREE.Mesh(geometry01, material01);
    obj01.position.x = -1;
    scene.add(obj01);

    // lambert phong :빛을 기준으로 표현 phong 은 반짝이는 금속 재질 표현에 유리
    const geometry02 = new THREE.BoxGeometry(0.5, 0.7, 0.5); 
    const material02 = new THREE.MeshStandardMaterial({
        map : textureBaseColor,
        normalMap : textureMormalMap
    });
    
    const obj02 = new THREE.Mesh(geometry01, material02);
    scene.add(obj02);
    
    const geometry03 = new THREE.IcosahedronGeometry(0.4, 0); 
    const material03 = new THREE.MeshStandardMaterial({
        map : textureBaseColor,
        normalMap : textureMormalMap,
        displacementMap : textureHeightMap, // mesh 정점의 위치에 따라 밝고 어두움에 따라 조절
        displacementScale : 0.03 //default는 1
    });

    const obj03 = new THREE.Mesh(geometry01, material03);
    scene.add(obj03);
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
    scene.add(obj04);
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
