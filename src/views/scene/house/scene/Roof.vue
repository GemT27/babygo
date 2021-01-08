<script>
import entity from "@/views/mixins/entity";

export default {
  name: "Roof",
  mixins: [entity],
  methods: {
    addToScene() {
      this.sceneElement = this.BABYLON.MeshBuilder.CreateCylinder(
          this.value.name,
          {diameter: 1.3, height: 1.2, tessellation: 3},
          this.babylon.scene
      )
    }
  }
};
</script>
