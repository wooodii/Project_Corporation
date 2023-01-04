import * as THREE from 'three';
import skyimg from '../asset/bay_bk.jpg';
console.log(THREE);

// 3차원 공간 만들기 
// 가상 공간의 공간감을 배경으로 표현 (skybox) = like 정육면체
// 이미지들을 6등분해서 사용할 수있도록 놔둔 사이즈  - https://opengameart.org/
// 2:25 texture입히기부터 다시 보기 

const Three06 = () => {
    const scene = new THREE.Scene();
    // scene.background = new THREE.Color(0x004fff);
    // 360도로 공간을 표현할 때 회전하면서 어디가 앞 뒷면인지 확인할 수 있도록 하는 것
    const axesHelper = new THREE.AxesHelper(5);
    scene.add(axesHelper);

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
    camera.position.z = 1;  // 앞뒤, 깊이감 뒤로갈수록 - 
    camera.lookAt(new THREE.Vector3(0,0,0)) ; // 카메라가 바라보는 위치를 설정할 수 있음

    const renderer = new THREE.WebGLRenderer({
        alpha : true,
        antialias : true
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    
    const skyMateralArray = []
    const texture_ft = new THREE.TextureLoader().load('../asset/bay_ft.jpg');
    const texture_bk = new THREE.TextureLoader().load('../asset/bay_bk.jpg');
    const texture_up = new THREE.TextureLoader().load('../asset/bay_up.jpg');
    const texture_dn = new THREE.TextureLoader().load('../asset/bay_dn.jpg');
    const texture_rt = new THREE.TextureLoader().load('../asset/bay_rt.jpg');
    const texture_lf = new THREE.TextureLoader().load('../asset/bay_lf.jpg');
    
    skyMateralArray.push(
        new THREE.MeshStandardMaterial({
            map : texture_ft,
        })
    )
    skyMateralArray.push(
        new THREE.MeshStandardMaterial({
            map : texture_bk,
        })
    )
    skyMateralArray.push(
        new THREE.MeshStandardMaterial({
            map : texture_up,
        })
    )
    skyMateralArray.push(
        new THREE.MeshStandardMaterial({
            map : texture_dn,
        })
    )
    skyMateralArray.push(
        new THREE.MeshStandardMaterial({
            map : texture_rt,
        })
    )
    skyMateralArray.push(
        new THREE.MeshStandardMaterial({
            map : texture_lf,
        })
    )

    for(let i =0; i <6; i++){
        skyMateralArray[i].side = THREE.BackSide
    }

    // 매쉬 추가
    // 바깥 상자에는 적용 안되고 안쪽만 질감이 적용됨
   const skyGeometry = new THREE.BoxGeometry(40, 40, 40); // 박스지오메트리
    const skyMaterial = new THREE.MeshStandardMaterial({
    });

    // side 어디에 렌더링을 걸지 설정
    // skyMaterial.side = THREE.BackSide
    const sky = new THREE.Mesh(skyGeometry, skyMaterial);
    scene.add(sky);

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