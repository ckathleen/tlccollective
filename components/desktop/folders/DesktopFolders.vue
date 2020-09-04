<template>
  <ul class="flex flex-wrap w-full max-w-md absolute top-0 left-0 z-0 mt-6">
    <li v-for="i in 6" :key="i" class="p-2">
      <desktop-folders-element :icon="'/imgs/directory_closed-4.png'" name="About"/>
    </li>
  </ul>
</template>

<script>
import DesktopFoldersElement from './DesktopFoldersElement';

export default {
  name: 'DesktopFolders',

  components: {
    DesktopFoldersElement
  }
};
</script>

<style lang="scss" scoped></style>
