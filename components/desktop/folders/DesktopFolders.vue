<template>
  <ul class="flex flex-wrap w-full max-w-md absolute top-0 left-0 z-0 mt-6">
    <li v-for="(folder, index) in folders" :key="index" class="p-2">
      <desktop-folders-element :icon="folder.icon" :name="folder.name" @click="openModal(folder.name)"/>
    </li>
  </ul>
</template>

<script>
import { mapMutations } from 'vuex';
import DesktopFoldersElement from './DesktopFoldersElement';
import modalContentTypes from '../../../constants/modalContentTypes';

export default {
  name: 'DesktopFolders',

  components: {
    DesktopFoldersElement
  },
  
  data() {
    return {
      folders: [
        {
          name: modalContentTypes.about,
          icon: '/imgs/txt.png'
        },
        {
          name: modalContentTypes.portfolio,
          icon: '/imgs/directory_closed-4.png'
        },
        {
          name: modalContentTypes.team,
          icon: '/imgs/txt.png'
        },
        {
          name: modalContentTypes.terminal,
          icon: '/imgs/terminal.png'
        },
        {
          name: modalContentTypes.extra,
          icon: '/imgs/directory_closed-4.png'
        },
        {
          name: modalContentTypes.extra,
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
