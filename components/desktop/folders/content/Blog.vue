<template>
  <div>
    <!--<iframe
      src="https://docs.google.com/document/d/e/2PACX-1vQjVGD02qHS5z1avA_SAsxWGpjePRg_1TOzzI6QRkZlHmun2iX3xMjl5yJjB0a7e96lor-ReqWEN9fx/pub?embedded=true"
      width=100vw
      height=100vh
      position=absolute
      border=none
    ></iframe>-->

    <!--<iframe
    <object data="https://docs.google.com/document/d/e/2PACX-1vQjVGD02qHS5z1avA_SAsxWGpjePRg_1TOzzI6QRkZlHmun2iX3xMjl5yJjB0a7e96lor-ReqWEN9fx/pub?embedded=true" width="600vw" height="400vh">
    <embed src="https://docs.google.com/document/d/e/2PACX-1vQjVGD02qHS5z1avA_SAsxWGpjePRg_1TOzzI6QRkZlHmun2iX3xMjl5yJjB0a7e96lor-ReqWEN9fx/pub?embedded=true" width="600vw" height="400vh"> </embed>
    Error: Embedded data could not be displayed.
    </object>-->
    
    <div class="resp-container">
      <iframe class="resp-iframe" src="https://docs.google.com/document/d/e/2PACX-1vQjVGD02qHS5z1avA_SAsxWGpjePRg_1TOzzI6QRkZlHmun2iX3xMjl5yJjB0a7e96lor-ReqWEN9fx/pub?embedded=true" gesture="media"  allow="encrypted-media" allowfullscreen></iframe>
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
    height: 66vh;
}
.resp-iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
}
</style>
