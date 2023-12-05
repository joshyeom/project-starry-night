import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass";
import * as TWEEN from 'tween';
import { useRecoilState } from 'recoil';
import Header from "./Header";
import DisplayLevel from "./DisplayLevel";
import { pollutionLevelAtom } from "./Atom";

function Info() {
  const canvasRef = useRef(null);
  const rendererRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const controlsRef = useRef(null);
  const composerRef = useRef(null);
  const innerMaterialRef = useRef(null); // innerMaterial 참조를 위한 useRef
  const [pollutionLevel] = useRecoilState(pollutionLevelAtom)



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
    cameraRef.current = camera;

    const ambientLight = new THREE.AmbientLight(0x36334b, 0.3);
    scene.add(ambientLight);

    const geometry = new THREE.SphereGeometry(1, 32, 32);
    const textureLoader = new THREE.TextureLoader();
    const emissiveTexture = textureLoader.load("/stars/textures/material_emissive.png",
    (loadedTexture) => {
      loadedTexture.flipY = false;
      loadedTexture.minFilter = THREE.LinearFilter;
      loadedTexture.magFilter = THREE.LinearFilter;

      innerMaterialRef.current.emissiveMap = loadedTexture; // innerMaterialRef.current를 사용하여 innerMaterial에 접근
      innerMaterialRef.current.needsUpdate = true;
    });
    const innerMaterial = new THREE.MeshLambertMaterial({
      emissiveMap: emissiveTexture,
      emissive: new THREE.Color(0xffffff),
      emissiveIntensity: pollutionLevel,
      side: THREE.BackSide,
      transparent: true,
      opacity: 0,
    });
    innerMaterialRef.current = innerMaterial; // innerMaterialRef.current를 할당
    emissiveTexture.minFilter = THREE.LinearFilter;
    emissiveTexture.magFilter = THREE.LinearFilter;
    const mesh = new THREE.Mesh(geometry, innerMaterial);
    scene.add(mesh);

    mesh.geometry.computeBoundingSphere();
    const center = mesh.geometry.boundingSphere.center.clone();

    const distance = 1;
    const cameraPosition = center.clone().add(new THREE.Vector3(0, 0, distance));
    camera.position.copy(cameraPosition);
    camera.lookAt(center);
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

    function handleResize(){
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      composer.setSize(window.innerWidth, window.innerHeight);
    }

    
    function animate() {
      animationId = requestAnimationFrame(animate);
      TWEEN.update();
      controlsRef.current.update();
      composerRef.current.render();
    }

    function opacityHandler() {
      const opacity = { value: 0 }; // 시작 투명도 값
      const opacityDuration = 2000;
      
      new TWEEN.Tween(opacity)
        .to({ value: 1 }, opacityDuration)
        .easing(TWEEN.Easing.Quadratic.InOut)
        .onUpdate(() => {
          innerMaterialRef.current.opacity = opacity.value;
          innerMaterialRef.current.needsUpdate = true;
        })
        .start();
    }

    setTimeout(() => {
      opacityHandler();
    },500)
    animate();
    


    window.addEventListener("resize", handleResize);


    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div style={{position: 'relative'}}>
      <Header />
      <canvas ref={canvasRef} />
      <DisplayLevel></DisplayLevel>
    </div>
  );
}

export default Info;
