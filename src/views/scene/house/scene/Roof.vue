<script>
import entity from "@/views/mixins/entity";

export default {
  name: "Roof",
  mixins: [entity],
  methods: {
    addToScene() {
      const roof = this.BABYLON.MeshBuilder.CreateCylinder(
          this.value.name,
          {diameter: 1.3, height: 1.2, tessellation: 3},
          this.babylon.scene
      )
      roof.position.y = 1.22; // 放到box上面
      roof.scaling.x = 0.75 // 缩放宽度
      roof.rotation.z = Math.PI/2 // 旋转
      this.sceneElement = roof
    }
  }
};
</script>
