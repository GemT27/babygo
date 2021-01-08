<template>
  <div>
    <Box v-if="box.visible" :value="box"/>
    <Roof v-if="roof.visible" :value="roof"/>
  </div>
</template>

<script>
import Box from "@/views/scene/house/scene/Box";
import Roof from "@/views/scene/house/scene/Roof";

export default {
  name: "House",
  components: {Roof, Box},
  data() {
    return {
      box: {
        name: "Box",
        visible: true,
        position: [0, 0.5, 0]
      },
      roof: {
        name: "Roof",
        visible: true,
        // position: [0, 0.5, 0]
      }
    }
  }
}
</script>

<style scoped>

</style>
