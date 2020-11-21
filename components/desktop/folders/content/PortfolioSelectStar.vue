<template>
  <div>
    <div class="resp-container">
      <iframe class="resp-iframe" src="https://docs.google.com/document/d/e/2PACX-1vTEU5FneiwRycGSA4bw-VZNUIxhTEy1vPKg6pf62PQpux6WAhF5A4o5Q7f-VTDzOEbnnH-hb16VSK9Z/pub?embedded=true" gesture="media"  allow="encrypted-media" allowfullscreen></iframe>
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
</style>
