<template>
  <div class="about">
    <center>TLC is excited to drop our new ~rare~ one-of-a-kind virtual merch, designed in 
    collaboration with our most popular friend 
    <a href="https://twitter.com/freialobo"><u>Freia Lobo</u></a> (we know she needs no 
    introduction). Given that the world is now more online than ever, 
    we created our merch to fit into this new digital reality. Therefore we are working 
    with Zora to represent our releases as NFTs. We hope you love them as much as we do!
    </center>
    <br />
    <br />
    <div class="row">
      <a href="https://zora.co/tlc/1049" target="_blank">
        <div class="column">
          <img src="/imgs/nftmask.png" class="merch" alt="Mask" style="width:100%">
        </div>
      </a>
      <a href="https://zora.co/tlc/1053" target="_blank">
        <div class="column">
          <img src="/imgs/nfthoodie.png" class="merch" alt="Hoodie" style="width:100%">
        </div>
      </a>
      <a href="https://zora.co/tlc/1055" target="_blank">
        <div class="column">
          <img src="/imgs/nftshoe.png" class="merch" alt="Shoes" style="width:100%">
        </div>
      </a>
    </div>
    <br/>

  </div>
</template>

<script>
export default {
  name: 'FolderContentMerch'
}
</script>
<style scoped>
.merch{
  border-style: outset;
  border-radius: 0px;
  border-width: 3px;
}
.column {
  float: left;
  width: 33.3%;
  padding: 5px;
}
.row::after {
  content: "";
  clear: both;
  display: table;
}
</style>