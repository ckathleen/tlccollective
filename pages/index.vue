<template>
  <div class="flex flex-col flex-grow relative">
    <the-desktop />
    <desktop-folders />
    <folder-modal />
  </div>
</template>

<script>
import TheDesktop from '../components/desktop/TheDesktop';
import DesktopFolders from '../components/desktop/folders/DesktopFolders';
import FolderModal from '../components/desktop/folders/FolderModal';

export default {
  components: {
    TheDesktop,
    DesktopFolders,
    FolderModal
  }
}
</script>
