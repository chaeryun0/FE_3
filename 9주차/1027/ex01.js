import * as THREE from 'three';

// ----- 주제: 기본 장면 구성

export default function example() {
	// Renderer
	const canvas = document.querySelector('#three-canvas');
	const renderer = new THREE.WebGLRenderer({
		canvas, // canvas: canvas 축약형, 속성과 값 이름이 동일하므로 생략 가능 
		antialias: true // 부드럽게 처리 (픽셀 계단현상 방지), antialias의 기본값 false, true로 하면 성능이 다소 떨어질 수 있긴함 보통 true
	}); // Renderer 생성해줌

	renderer.setSize(window.innerWidth, window.innerHeight); // 렌더러 크기를 브라우저 창 크기로 (브라우저 폭, 너비)
	renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1); // 고해상 디스플레이 지원
	// setPixelRatio 안에는 숫자가 들어가야함, 여기서는 삼항 연산자
	// 윈도우 객체가 원래 가지고 있는 픽셀 집적도 window.devicePixelRatio
	// 픽셀 하나를 표현할 때 4개로 쪼개서 표현하므로 선명 // devicePixelRatio > 1이 넘어가면(=고해상도면) 정수 2로
	console.log(window.devicePixelRatio);
	renderer.shadowMap.enabled = true; // 그림자가 생기도록

	// Scene 무대
	const scene = new THREE.Scene();
	// 배경색 설정
	scene.background = new THREE.Color('white'); // 원래는 검정

	// Camera(카메라) // 카메라는 여러개 사용 가능
	const camera = new THREE.PerspectiveCamera( // PerspectiveCamera 원근 카메라가 가장 많이 쓰임 (우리 눈에 가장 가까운)
		75, // 시야각(field of view)
		window.innerWidth / window.innerHeight, // 장면 비율
		0.1, // near(가까이 보이는 한계)
		1000 // far(멀리 보이는 한계)
	);
	camera.position.set(0, 1, 5); // 카메라 위치
	scene.add(camera); // add 생략 가능

	// Light(조명)
	// 은은한 조명
	const ambientLight = new THREE.AmbientLight('white', 0.5); // 색상, 강도
	scene.add(ambientLight);
	// 스팟 조명
	const spotLight = new THREE.SpotLight('white', 0.7); // 색상, 강도
	spotLight.position.set(-2, 5, 3);
	spotLight.castShadow = true; // 그림자를 만들 수 있도록
	spotLight.shadow.mapSize.width = 1024; // 그림자 해상도 (기본값 512), 숫자가 클수록 그림자가 선명하지만 성능은 떨어짐
	spotLight.shadow.mapSize.height = 1024;
	scene.add(spotLight);

	// Mesh
	const floor = new THREE.Mesh(
		new THREE.PlaneGeometry(5, 5),
		new THREE.MeshStandardMaterial({
			color: 'lightgray'
		})
	);
	floor.receiveShadow = true; // 표면에 그림자가 생길 수 있도록
	floor.rotation.x = -Math.PI * 0.5; // Math.PI는 180도, 0.5는 90도 의미 여기서는 -90도인 것

	const box = new THREE.Mesh(
		new THREE.BoxGeometry(1, 1, 1), // 직육면체
		new THREE.MeshStandardMaterial({
			color: 'red'
		})
	);
	box.castShadow = true; // 그림자를 만들 수 있도록
	box.position.y = 0.5; // 박스의 높이에서 0.5만큼 위로 높여줌, 박스 다 보이게

	scene.add(floor, box);

	// 기기 성능 차이에 따른 애니메이션 속도 차이를 없애기 위해 three.js에서 제공하는 Clock 사용
	const clock = new THREE.Clock();

	// 빠르게 반복 실행 되는 그리기 함수
	function draw() {
		const delta = clock.getDelta(); // draw 실행 시간 간격
		// const time = clock.getElapsedTime(); // 총 경과 시간

		// box.rotation.y += 0.01;
		box.rotation.y += delta * 10;
		// box.rotation.y = time;
		// box.rotation.y += 0.01; // Radian: 2PI가 360도
		// 기기 성능 차이에 따른 애니메이션 속도 차이를 없애기 위해 Clock의 delta 사용

		// 렌더링
		renderer.render(scene, camera); // 이 코드가 없으면 렌더러가 안됨, renderer가 렌더를 해줘야함
		
		renderer.setAnimationLoop(draw); // 재귀 형태로 draw 함수 반복 실행
		// window.requestAnimationFrame(draw);
	}

	// 캔버스 사이즈를 브라우저 창 사이즈에 맞추기
	function setSize() {
		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix(); // 카메라 관련 속성이 변하면 실행
		renderer.setSize(window.innerWidth, window.innerHeight);
		renderer.render(scene, camera);
	}

	// 이벤트
	// 브라우저 창 사이즈 변경 시, 캔버스 사이즈를 맞추기 위해 실행
	window.addEventListener('resize', setSize);

	draw();
}
