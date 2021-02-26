<template>
  <ul class="flex flex-wrap w-full max-w-md absolute top-0 left-0 z-0 mt-6">
    <li v-for="(folder, index) in folders" :key="index" class="p-2">
      <desktop-folders-element
        :icon="folder.icon"
        :name="folder.name"
        @click="clickModal(folder)"
      />
    </li>
  </ul>
</template>

<script>
import { mapMutations } from 'vuex'
import DesktopFoldersElement from './DesktopFoldersElement'
import modalContentTypes from '../../../constants/modalContentTypes'

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
          icon: '/imgs/aboutfile.png'
        },
        {
          name: modalContentTypes.team,
          icon: '/imgs/flowerfolder.png'
        },
        {
          name: modalContentTypes.portfolio,
          icon: '/imgs/macfolder.png'
        },

        {
          name: modalContentTypes.terminal,
          icon: '/imgs/zoc.png'
        },
        {
          name: modalContentTypes.blog,
          icon: '/imgs/internetfolder.png'
        },
        {
          name: modalContentTypes.merch,
          icon: '/imgs/merch5.png'
        },
        {
          name: modalContentTypes.contact,
          icon: '/imgs/email.png'
        }
      ]
    }
  },

  methods: {
    ...mapMutations(['openModal']),
    clickModal(folder) {
      this.openModal(folder.name)
      this.$emit('openModal', folder.name)
    }
  }
}
</script>

<style lang="scss" scoped></style>
