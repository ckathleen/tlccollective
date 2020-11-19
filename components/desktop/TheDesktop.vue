<template>
  <div
    class="the-desktop draggable-bounds flex-grow relative bg-center bg-cover"
  >
    <div
      class="w-full"
      style="margin-top: -1px; height: calc(100% + 1px)"
    ></div>
  </div>
</template>

<script>
import FolderModal from '../desktop/folders/FolderModal'
export default {
  name: 'TheDesktop'
}
</script>

<style scoped>
.the-desktop {
  flex: 1;
  background-image: url('/imgs/desktop.jpeg');
}
</style>
