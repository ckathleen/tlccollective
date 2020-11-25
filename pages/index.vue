<template>
  <div class="flex flex-col flex-grow relative">
    <!-- attempt at loading screen here -->
    <the-desktop />
    <desktop-folders @openModal="openModal($event)" />
    <folder-modal :modal-name="folderName" />
  </div>
</template>

<script>
import TheDesktop from '../components/desktop/TheDesktop'
import DesktopFolders from '../components/desktop/folders/DesktopFolders'
import FolderModal from '../components/desktop/folders/FolderModal'
import redirectSSL from 'redirect-ssl'

app.use(redirectSSL)

export default {
  components: {
    TheDesktop,
    DesktopFolders,
    FolderModal
  },
  data() {
    return {
      folderName: null
    }
  },
  methods: {
    openModal(folderName) {
      this.folderName = folderName
    }
  }
}

</script>
<style>
html,
body {
  width: 100%;
  margin: 0px;
  padding: 0px;
  overflow-x: hidden;
}
</style>
