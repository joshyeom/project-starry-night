import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass";
import * as TWEEN from 'tween'
import threeSpritetext from "three-spritetext";
import { useRecoilState } from 'recoil';
import { cameraPositionState, isInfoAtom, pollutionLevelAtom } from './Atom';
import { useNavigate } from 'react-router-dom';
import cities from './cities.js'
import Header from "./Header";

function Earth() {
  const canvasRef = useRef(null);
  const [cameraPosition, setCameraPosition] = useRecoilState(cameraPositionState)
  const [isInfo, setIsInfo] = useRecoilState(isInfoAtom);
  const [, setPollutionLevel] = useRecoilState(pollutionLevelAtom)
  const navigate = useNavigate()
  const rendererRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const controlsRef = useRef(null);
  const composerRef = useRef(null);
  const buttonsRef = useRef([]);

  
  useEffect(() => {
    let animationId = null;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.domElement.style.pointerEvents = "auto";
    rendererRef.current = renderer;

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const initialZoom = 0;
    camera.zoom = initialZoom;
    camera.updateProjectionMatrix();
    cameraRef.current = camera;
    camera.position.copy(cameraPosition)
    
    const ambientLight = new THREE.AmbientLight(0x36334b, 0.3);
    scene.add(ambientLight);

    const geometry = new THREE.SphereGeometry(1, 32, 32);
    const textureLoader = new THREE.TextureLoader();
    const baseColorTexture = textureLoader.load(
      "/earth/textures/Material.001_baseColor.jpeg",
    (loadedTexture) => {
      loadedTexture.flipY = false;
        loadedTexture.needsUpdate = true;
        return loadedTexture;
    });
    const metallicRoughnessTexture = textureLoader.load("/earth/textures/Material.001_metallicRoughness.png",
    (loadedTexture) => {
      loadedTexture.flipY = false;
        loadedTexture.needsUpdate = true;
        return loadedTexture;
    });
    const emissiveTexture = textureLoader.load("/earth/textures/Material.001_emissive.jpeg",
    (loadedTexture) => {
      loadedTexture.flipY = false;
        loadedTexture.needsUpdate = true;
        return loadedTexture;
    });
    const material = new THREE.MeshStandardMaterial({
      map: baseColorTexture,
      metalnessMap: metallicRoughnessTexture,
      roughnessMap: metallicRoughnessTexture,
      emissiveMap: emissiveTexture,
      emissive: new THREE.Color(0xffffff),
      emissiveIntensity: 1,
    });
    baseColorTexture.minFilter = THREE.LinearFilter;
    baseColorTexture.magFilter = THREE.LinearFilter;
    metallicRoughnessTexture.minFilter = THREE.LinearFilter;
    metallicRoughnessTexture.magFilter = THREE.LinearFilter;
    emissiveTexture.minFilter = THREE.LinearFilter;
    emissiveTexture.magFilter = THREE.LinearFilter;
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const bloomPass = new UnrealBloomPass();

    const composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));
    composer.addPass(bloomPass);
    composerRef.current = composer;



    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.rotateSpeed = 0.4;
    controls.panSpeed = 0.4;
    controls.enableZoom = false;
    controlsRef.current = controls;

    class ButtonMesh {
      constructor(location, camera, country, level) {
        this.geometry = new THREE.SphereGeometry(0.0115, 8, 8);
        this.material = new THREE.MeshBasicMaterial({
          color: 0xffffff,
          transparent: true,
          opacity: 0.5,
          side: THREE.DoubleSide,
        });
        this.mesh = new THREE.Mesh(this.geometry, this.material);
        this.mesh.position.set(location.x, location.y, location.z);
        this.mesh.userData.isButton = true;
        this.mesh.userData.hovered = false;
        this.mesh.userData.clicked = false;
        this.mesh.userData.cameraPosition = camera;

        this.text = new threeSpritetext(country);
        this.text.position.set(location.x, location.y + 0.05, location.z);
        this.text.material.depthTest = false;
        this.text.material.transparent = true;
        this.text.material.opacity = 0;
        this.text.scale.set(0.05, 0.05, 0.05);
        this.mesh.userData.text = this.text;
        this.mesh.userData.level = level;
        scene.add(this.mesh);
        scene.add(this.text);
      }
    }

    cities.forEach((city) => {
      const button = new ButtonMesh(city.location, city.camera, city.country, city.pollutionLevel);
      scene.add(button.mesh);
      buttonsRef.current.push(button);
    });

    function handleMouseMove(event) {
      const mouse = new THREE.Vector2();
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

      const raycaster = new THREE.Raycaster();
      raycaster.setFromCamera(mouse, camera);

      const intersects = raycaster.intersectObjects(scene.children, true);

      for (const child of scene.children) {
        if (child.userData.isButton) {
          if (intersects.length > 0 && intersects[0].object === child) {
            if (!child.userData.hovered) {
              child.userData.hovered = true;
              child.material.opacity = 1;
              child.material.needsUpdate = true;
              renderer.domElement.style.cursor = "pointer";
              child.userData.text.material.opacity = 1;
            }
          } else {
            if (child.userData.hovered) {
              child.userData.hovered = false;
              child.material.opacity = 0.5;
              child.material.needsUpdate = true;
              renderer.domElement.style.cursor = "auto";
              child.userData.text.material.opacity = 0;
            }
          }
        }
      }
    }
    function handleResize(){
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      composer.setSize(window.innerWidth, window.innerHeight);
    }

    function handleButtonClick(event) {
      const mouse = new THREE.Vector2();
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

      const raycaster = new THREE.Raycaster();
      raycaster.setFromCamera(mouse, camera);

      const intersects = raycaster.intersectObjects(scene.children, true);
      for (const intersect of intersects) {
        const object = intersect.object;
        if (
          object.userData &&
          object.userData.isButton &&
          !object.userData.clicked
        ) {
          object.userData.text.material.opacity = 1;
          const targetPosition = new THREE.Vector3(
            ...object.userData.cameraPosition
          );
          
          const duration = 1000;
          new TWEEN.Tween(camera.position)
            .to(targetPosition, duration)
            .easing(TWEEN.Easing.Quadratic.InOut)
            .start()
            .onComplete(() => {
              object.userData.clicked = false;

              const zoomTarget = 0;
              const zoomDuration = 1000;

              new TWEEN.Tween(camera)
                .to({ zoom: zoomTarget }, zoomDuration) // 카메라 거리 조정을 통한 줌 효과
                .easing(TWEEN.Easing.Quadratic.InOut)
                .onUpdate(() => {
                  camera.updateProjectionMatrix();
                })
                .start()
                .onComplete(() => {
                  setCameraPosition(camera.position)
                  setPollutionLevel(object.userData.level)
                  setIsInfo(!isInfo);
                  navigate('/info');
                });
            });
    
          // 클릭된 버튼이 하나만 처리되도록 반복문을 종료합니다.
          break;
        }
      }
    }

    function zoomIn(){
      const zoomTarget = window.innerWidth / window.innerHeight >= 1 ? 1 : window.innerWidth / window.innerHeight;
      const zoomDuration = 4000;
      setTimeout(() => {
      new TWEEN.Tween(camera)
      .to({ zoom: zoomTarget }, zoomDuration) // 카메라 거리 조정을 통한 줌 효과
      .easing(TWEEN.Easing.Quadratic.InOut)
      .onUpdate(() => {
        camera.updateProjectionMatrix();
      })
      .start()
      }, 500)
    }

    function animate() {
      animationId = requestAnimationFrame(animate);
      TWEEN.update();
      controlsRef.current.update();
      composerRef.current.render();
    }

    zoomIn();
    animate();

    window.addEventListener("resize", () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      composer.setSize(window.innerWidth, window.innerHeight);
      if(camera.aspect >= 1){
        return
      }
      camera.zoom = window.innerWidth / window.innerHeight;
    });





    const canvas = canvasRef.current;
    if(canvas){
      canvas.addEventListener("mousemove", handleMouseMove)
      canvas.addEventListener("click", handleButtonClick)
    }

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
      const canvas = canvasRef.current;

      if(canvas){
      canvas.addEventListener("mousemove", handleMouseMove)
      canvas.addEventListener("click", handleButtonClick)
    }
    };
  }, []);

  return (
    <>
      <Header></Header>
      <canvas ref={canvasRef}/>;
    </>
  )
}

export default Earth;