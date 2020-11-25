<template>
  <div>
    More info on Watershed coming soon.
    <!--<div class="resp-container">
      <iframe class="resp-iframe" src="https://docs.google.com/document/d/e/2PACX-1vQFgZUShDRMaFEiso5VfvCqgeDaY0fhnqED7F_L9bKXFbktkCu6ENlkGdxh-S_FUAgqGme6arEe9zZw/pub?embedded=true" gesture="media"  allow="encrypted-media" allowfullscreen></iframe>
    </div>-->
    
  </div>
</template>

<script>
export default {
  name: 'FolderContentBlog'
}
</script>

<style scoped>

.resp-container {
    position: relative;
    overflow: hidden;
    padding-top: 85.71%;
}
.resp-iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 120%;
    border: 0;
}

@media only screen and (max-width: 600px) {
  .resp-container {
    min-height: 90vh;
    top: 10px;
    left: 0px;
  }
}
</style>
