<script>
import entity from "@/views/mixins/entity";

export default {
  name: "Box",
  mixins: [entity],
  methods: {
    addToScene() {
      this.sceneElement = this.BABYLON.MeshBuilder.CreateBox(
          this.value.name,
          {},
          this.babylon.scene
      )
      // 旋转物体
      // this.sceneElement.rotation.y = this.BABYLON.Tools.ToDegrees(45)
    }
  }
};
</script>
