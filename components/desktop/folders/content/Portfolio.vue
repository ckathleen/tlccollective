<template>
  <ul class="flex flex-wrap w-full max-w-md absolute top-0 left-0 z-0 mt-6">
    <li v-for="folder in folders" :key="folder.name" class="p-2">
      <desktop-folders-element :icon="folder.icon" :name="folder.name" @click="openModal(folder.name)"/>
    </li>
  </ul>
</template>

<script>
import { mapMutations } from 'vuex';
import DesktopFoldersElement from "../DesktopFoldersElement";
import modalContentTypes from '../../../../constants/modalContentTypes';

export default {
  name: "FoldersContentPortfolio",

  components: {
    DesktopFoldersElement
  },

  data() {
    return {
      folders: [
        {
          name: modalContentTypes.zeta,
          icon: '/imgs/directory_closed-4.png'
        },
        {
          name: modalContentTypes.water,
          icon: '/imgs/directory_closed-4.png'
        },
      ]
    }
  },

  methods: {
    ...mapMutations(['openModal'])
  }
};
</script>

<style lang="scss" scoped></style>
