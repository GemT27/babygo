<template>
  <div class="Scene">
    <canvas id="renderCanvas" ref="canvas" class="Scene-canvas"></canvas>
    <div v-if="babylon.sceneReady">
      <register/>
    </div>
  </div>
</template>
<script>
import Register from "@/views/Register";

export default {
  name: "Scene",
  components: {Register},
  provide() {
    return {
      babylon: this.babylon
    }
  },
  data() {
    return {
      babylon: {
        scene: null,
        canvas: null,
        engine: null,
        sceneReady: false,
      },
    };
  },
  beforeDestroy() {
    this.babylon.scene.dispose();
    this.babylon.engine.dispose();
  },
  async mounted() {
    this.initScene();
    this.babylon.sceneReady = true;
    this.babylon.canvas = this.$refs.canvas;
    window.addEventListener("resize", () => {
      this.layout();
    });
  },
  methods: {
    initScene() {
      let canvas = this.$refs.canvas;
      this.babylon.engine = new this.BABYLON.Engine(canvas, true);
      this.babylon.scene = this.createScene(canvas, this.engine);
      this.babylon.engine.runRenderLoop(() => {
        this.babylon.scene.render();
      });
    },
    createScene(canvas, engine) {
      let scene = new this.BABYLON.Scene(engine);
      scene.clearColor = new this.BABYLON.Color4(0.31, 0.48, 0.64);
      // 添加一个相机，并绑定鼠标事件
      let camera = new this.BABYLON.ArcRotateCamera(
          "camera",
          this.BABYLON.Tools.ToRadians(140),
          this.BABYLON.Tools.ToRadians(70),
          30,
          new this.BABYLON.Vector3(0, 0, 0),
          scene
      );
      camera.attachControl(canvas, true);
      // 最大进缩放 靠近相机
      camera.lowerRadiusLimit = 15;
      // camera.upperRadiusLimit = 50;

      // 添加一组灯光到场景
      new this.BABYLON.HemisphericLight(
          "light",
          new this.BABYLON.Vector3(0, 1, 0),
          scene
      );

      // 添加地面
      const ground = this.BABYLON.MeshBuilder.CreateGround("ground", {
        width: 10,
        height: 10
      });

      // 地面颜色
      const groundMat = new this.BABYLON.StandardMaterial("groundMat",scene);
      groundMat.diffuseColor = new this.BABYLON.Color3.Green();
      ground.material = groundMat;


      return scene;
    },
    layout() {
      if (this.babylon.engine) this.babylon.engine.resize();
    }
  }
};
</script>
<style scoped>
.Scene {
  position: relative;
  width: 100%;
  height: 100%;
}

.Scene-canvas {
  width: 100%;
  height: 100%;
  touch-action: none;
  outline: none;
  display: block;
}
</style>
