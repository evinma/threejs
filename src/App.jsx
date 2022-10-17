import * as THREE from 'three';
import { useEffect, useRef } from 'react';
import './App.css';

const App = () => {
  const domRef = useRef();

  useEffect(() => {
    // 创建场景
    const scene = new THREE.Scene();

    // 创建立方缓冲几何体
    const geometry = new THREE.BoxGeometry(100, 100, 100);
    // 创建材质
    // const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const material = new THREE.MeshLambertMaterial({ color: 0xffffff });
    // 创建带有材质的物体
    const cube = new THREE.Mesh(geometry, material);
    // 将物体添加到场景中
    scene.add(cube);

    // 创建光源
    // 环境光，没有特定的方向
    const ambientLight = new THREE.AmbientLight(0x444444);
    scene.add(ambientLight);
    // 平行光，类似于生活中的太阳光
    const directionalLight = new THREE.DirectionalLight(0xff0000, 1);
    directionalLight.position.set(400, 200, 300);
    scene.add(directionalLight);

    const width = window.innerWidth;
    const height = window.innerHeight;
    // 窗口宽高比
    const k = width / height;
    // 三维场景显示范围控制系数，系数越大，显示的范围越大
    const s = 200;
    // 创建相机
    const camera = new THREE.OrthographicCamera(-s * k, s * k, s, -s, 1, 1000);
    // 相机位置
    camera.position.set(400, 200, 300);
    // 设置相机方向
    camera.lookAt(scene.position);

    // 创建渲染器对象
    const renderer = new THREE.WebGLRenderer();
    // 设置渲染区域尺寸
    renderer.setSize(width, height);

    // 页面插入渲染对象元素
    domRef.current.appendChild(renderer.domElement);
    // 渲染操作
    renderer.render(scene, camera);
    console.log('renderer end');
  }, [])

  return (
    <div id='root' className='app' ref={domRef}></div>
  )
}

export default App;