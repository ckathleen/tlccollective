<template>
  <div class="component-outer">
    <div class="global-item draggable resizable vdr no-resize">
      <div class="drag-head">
        <span class="icon"> </span>
      </div>
      asdfasdfasdf
    </div>
  </div>
</template>

<script>
export default {
  name: "FolderModal"
};
</script>

<style scoped>
.component-outer {
  position: absolute;
  height: 100%;
  width: 100%;
  pointer-events: none;
  z-index: 1;
}
.global-item * {
  touch-action: pan-y;
}
.global-item {
  border: 1px solid #000;
  box-shadow: inset 1px 1px 0 0 #fff, 5px 5px 0 rgba(0, 0, 0, 0.2);
  background: #effbfe;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
  z-index: 1 !important;
  pointer-events: all;
  transition: background 0.01s ease-in-out;
  user-select: auto;
  background: rgb(181, 229, 229);
  width: 281px;
  height: 220px;
  transition-delay: 0.1s;
  touch-action: none;
}
.drag-head {
  display: flex;
  align-items: center;
  padding: 5px;
  height: 21px;
  width: 100%;
  user-select: none;
  cursor: url("/imgs/grab.4f3c4e6a.svg"), auto !important;
}
.drag-head .icon {
  border: 1px solid #000;
  position: relative;
  width: 11px;
  height: 11px;
  cursor: url("/imgs/click.a54d5106.svg") 3 0, auto !important;
}
.drag-head .icon:active {
  background: #000;
}
.drag-head .icon:after {
  position: absolute;
  top: 0;
  left: 0;
  content: " ";
  width: 9px;
  height: 9px;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqAQMAAAD/DVsYAAAABlBMVEUAAAAAAAClZ7nPAAAAAXRSTlMAQObYZgAAACZJREFUGNNj+A8CB/BS7A9AiBiKQb7xBwNxFEMdwwBS8v9/kEIBAKjbSIJ+4jfQAAAAAElFTkSuQmCC)
    no-repeat 50%;
  background-size: 7px auto;
}
</style>
