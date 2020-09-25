<template>
  <div
    class="flex flex-col items-center text-center cursor-pointer"
    style="width: 76px; height: 70px;"
    @click="$emit('click')"
  >
    <!-- icon  -->
    <div class="flex justify-center items-center mb-2">
      <img :src="icon" :alt="name" style="max-height: 22px; max-width: 32px;" />
    </div>
    <!-- text  -->
    <span class="folder-text">
      {{ name }}
    </span>
  </div>
</template>

<script>
export default {
  name: "DesktopFoldersElement",

  props: {
    icon: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
};
</script>

<style scoped>
.folder-text {
  padding: 1px 3px;
  background: rgb(216, 215, 231);
  border: 1px solid #effbfe;
  border-color: rgb(216, 215, 231);
  font-family: Arial;
  font-size: 11px;
  line-height: 1;
}
</style>
