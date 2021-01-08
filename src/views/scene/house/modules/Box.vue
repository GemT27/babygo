<script>
import entity from "@/views/mixins/entity";

export default {
  name: "Box",
  mixins: [entity],
  methods: {
    addToScene() {
      const box = this.BABYLON.MeshBuilder.CreateBox(
          this.value.name,
          {},
          this.babylon.scene
      )
      // 铺上纹理
      const boxMat = new this.BABYLON.StandardMaterial("roofMat", this.babylon.scene);
      boxMat.diffuseTexture = new this.BABYLON.Texture("https://www.babylonjs-playground.com/textures/floor.png", this.babylon.scene);
      box.material = boxMat;

      // 旋转物体
      // box.rotation.y = this.BABYLON.Tools.ToDegrees(45)
      this.sceneElement = box
    },
    createWall() {
      const faceUV = [];
      faceUV[0] = new this.BABYLON.Vector4(0.5, 0.0, 0.75, 1.0); //rear face
      faceUV[1] = new this.BABYLON.Vector4(0.0, 0.0, 0.25, 1.0); //front face
      faceUV[2] = new this.BABYLON.Vector4(0.25, 0, 0.5, 1.0); //right side
      faceUV[3] = new this.BABYLON.Vector4(0.75, 0, 1.0, 1.0); //left side
    }
  }
};
</script>
