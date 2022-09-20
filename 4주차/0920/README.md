## 📚  perspective (원근법)

- ```perspective```는 위치 요소에 원근감을 주기 위해 평면과 사용자 사이의 거리를 결정
- 부모 요소에게 주면 직계 자식들에게 적용된다.
- 기본적으로 소실점이 존재하며 소실점은 정중앙에 위치

<image src="https://user-images.githubusercontent.com/112460430/191278627-eed17e53-41ab-4176-9c8f-0d70da234c38.png" width="50%">

```
.container {
	perspective-origin: 30% 30%  /* 시점의 위치 X좌표 30% , Y 좌표 30% */
	perspective:400px; 
        /* 나와 요소는 400px 떨어져 있음 (z축), 값이 적을수록 더 가까이 확대되어 보임 */
}

/* perspective-origin : 3D 요소를 어디서 바라볼지 방향 지정, 원근 거리의 기준점 설정, 나의 위치를 바꿀 수 있으며 이에 따라 소실점의 위치도 바뀜 */
```

```
.back {
  transform: rotateY(180deg); /* 요소를 뒤집음 */
}

backface-visibility: visible; /* 기본값 : 뒷면이 나를 향할때 보임 */
backface-visibility: hidden;

/* backface-visibility 속성은 요소의 뒷쪽에서 앞면이 보이게 할지 정하는 속성 */
```

```
transform-style : preserve-3d;

- flat : 기본값, 평평하게 보임 (2D의 2차원에서 부모 요소와 동일한 평면에 배치)

/* 자식요소들을 3D 공간에서 묘사하기 위해 부모 요소에 적용시키는 속성, 자식요소를 3d 공간처럼 처리 */
```
