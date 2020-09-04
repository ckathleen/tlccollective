<template>
  <div class="flex flex-col flex-grow relative">
    <the-desktop />
    <desktop-folders />
  </div>
</template>

<script>
import TheDesktop from '../components/desktop/TheDesktop';
import DesktopFolders from '../components/desktop/folders/DesktopFolders';

export default {
  components: {
    TheDesktop,
    DesktopFolders
  }
}
</script>
