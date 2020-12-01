<template>
  <div>
  <b>ABOUT</b><br>
    Watershed is a Boston-based software development platform for biologists founded by Mark Kalinich
 and Jonathan Wang.<br/><br/>
    <b>TLC'S INVESTMENT</b><br>
    Casey sourced this deal and we invested in May 2020.
    <br><br>
    <b>WATERSHED INVESTMENT MEMO</b>
    <br/>
    <div class="resp-container">
      <iframe class="resp-iframe" src="https://docs.google.com/document/d/e/2PACX-1vQFgZUShDRMaFEiso5VfvCqgeDaY0fhnqED7F_L9bKXFbktkCu6ENlkGdxh-S_FUAgqGme6arEe9zZw/pub?embedded=true" gesture="media"  allow="encrypted-media" allowfullscreen></iframe>
    </div>
    
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
  }
}
</style>
