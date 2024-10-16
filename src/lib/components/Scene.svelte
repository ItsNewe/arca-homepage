<script lang="ts">
  import { ContactShadows, Float, Grid, OrbitControls } from "@threlte/extras";

  import { Group } from "three";
  import { T, forwardEventHandlers } from "@threlte/core";
  import { useGltf } from "@threlte/extras";
  import Candlestick from "./candlestick.svelte";
  import Phone from "./mac.svelte";

  export const ref = new Group();

  const component = forwardEventHandlers();
</script>

<Float
  floatIntensity={1}
  floatingRange={[0, 1]}
  rotationIntensity={[2, 2, 2]}
  rotationSpeed={2}
  speed={2}
>
  <Phone position={[0, 0, -2]} />
</Float>

<T.PerspectiveCamera makeDefault position={[-5, 5, 20]} fov={30}>
  <OrbitControls
    autoRotate={false}
    enableZoom={false}
    enableDamping
    autoRotateSpeed={0.5}
    target.y={1.5}
  />
</T.PerspectiveCamera>

<T.DirectionalLight
  intensity={1}
  position.x={5}
  position.y={10}
  position.z={5}
/>
<T.AmbientLight intensity={1} />

<Grid
  plane={"xy"}
  position.z={-1}
  position.x={2.5}
  cellColor="#ffffff"
  sectionColor="#ffffff"
  sectionThickness={0}
  fadeDistance={10}
  cellSize={2}
/>

<Float
  floatIntensity={1}
  scale={1}
  floatingRange={[0, 1]}
  speed={4.5}
  seed={Math.random() * 10000}
>
  <Candlestick position={[-2, 0, 0]} />
</Float>

<Float
  floatIntensity={1}
  scale={1}
  floatingRange={[-0.7, 0.3]}
  speed={4.5}
  seed={Math.random() * 10000}
>
  <Candlestick position={[0, -1, 0]} />
</Float>

<Float
  floatIntensity={1}
  scale={1}
  floatingRange={[1.7, 2.2]}
  speed={4.5}
  seed={Math.random() * 10000}
>
  <Candlestick position={[2, 0.5, 0]} />
</Float>

<ContactShadows scale={10} blur={2} far={2.5} opacity={0.5} />
