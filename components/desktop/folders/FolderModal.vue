<template>
  <div v-show="isModalActive" class="component-outer">
    <div class="draggable-source draggable global-item resizable vdr">
      <!-- drag head  -->
      <div class="drag-head">
        <span class="icon" @click="closeModal"> </span>
        <span class="spacer">
          <i v-for="i in 6" :key="i"></i>
        </span>
        <h2>
          {{ this.modalName }}
        </h2>
      </div>
      <!-- body  -->
      <div class="body">
        <component :is="currentContent"></component>
      </div>
    </div>
  </div>
</template>

<script>
import FolderContentAbout from './content/About'
import FolderContentPortfolio from './content/Portfolio'
import FolderContentPortfolioZeta from './content/PortfolioZeta'
import FolderContentPortfolioWatershed from './content/PortfolioWatershed'
import FolderContentPortfolioSelectStar from './content/PortfolioSelectStar'
import FolderContentPortfolioClubhouse from './content/PortfolioClubhouse'
import FolderContentPortfolioFriday from './content/PortfolioFriday'
import FolderContentTerminal from './content/Terminal'
import FolderContentBlog from './content/Blog'
import FolderContentMailingList from './content/MailingList'
import FolderContentTeam from './content/Team'
import FolderContentContact from './content/Contact'
import { mapState, mapMutations } from 'vuex'
import modalContentTypes from '../../../constants/modalContentTypes'

export default {
  name: 'FolderModal',
  props: {
    modalName: null
  },
  data() {
    return {
      draggable: null
    }
  },

  computed: {
    ...mapState(['isModalActive', 'currentActiveContent']),

    currentContent() {
      switch (this.currentActiveContent) {
        case modalContentTypes.about:
          return FolderContentAbout
          break

        case modalContentTypes.portfolio:
          return FolderContentPortfolio
          break

        case modalContentTypes.team:
          return FolderContentTeam
          break

        case modalContentTypes.terminal:
          return FolderContentTerminal
          break

        case modalContentTypes.blog:
          return FolderContentBlog
          break

        case modalContentTypes.contact:
          return FolderContentContact
          break

        case modalContentTypes.zeta:
          return FolderContentPortfolioZeta
          break

        case modalContentTypes.watershed:
          return FolderContentPortfolioWatershed
          break

        case modalContentTypes.selectstar:
          return FolderContentPortfolioSelectStar
          break

        case modalContentTypes.clubhouse:
          return FolderContentPortfolioClubhouse
          break

        case modalContentTypes.friday:
          return FolderContentPortfolioFriday
          break

        case modalContentTypes.mailinglist:
          return FolderContentMailingList
          break

        default:
          return FolderContentAbout
          break
      }
    }
  },

  mounted() {
    if (process.client) {
      const interact = require('interactjs')
      interact('.draggable').draggable({
        // enable inertial throwing
        inertia: false,
        // keep the element within the area of it's parent
        modifiers: [
          interact.modifiers.restrictRect({
            restriction: 'parent',
            endOnly: true
          })
        ],
        // enable autoScroll
        autoScroll: false,

        listeners: {
          // call this function on every dragmove event
          move: dragMoveListener
        }
      })

      function dragMoveListener(event) {
        var target = event.target
        // keep the dragged position in the data-x/data-y attributes
        var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
        var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy

        // translate the element
        target.style.webkitTransform = target.style.transform =
          'translate(' + x + 'px, ' + y + 'px)'

        // update the posiion attributes
        target.setAttribute('data-x', x)
        target.setAttribute('data-y', y)
      }
    }
  },
  methods: {
    ...mapMutations(['closeModal'])
  }
}
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
  width: 45vw;
  min-height: 40vh;
  transition-delay: 0.1s;
  touch-action: none;
  position: absolute;
  top: 57px;
  left: 140px;
}
@media only screen and (max-width: 600px) {
  .global-item {
    width: 100vw;
    min-height: 100vh;
    top: 10px;
    left: 0px;
  }
}

.drag-head {
  display: flex;
  align-items: center;
  padding: 5px;
  height: 21px;
  width: 100%;
  user-select: none;
  cursor: url('/imgs/grab.4f3c4e6a.svg'), auto !important;
}
.drag-head .icon {
  border: 1px solid #000;
  position: relative;
  width: 15px;
  height: 15px;
  cursor: url('/imgs/click.a54d5106.svg') 3 0, auto !important;
}
.drag-head .icon:active {
  background: #000;
}
.drag-head .icon:after {
  position: absolute;
  top: 0;
  left: 0;
  content: ' ';
  width: 10px;
  height: 12px;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqAQMAAAD/DVsYAAAABlBMVEUAAAAAAAClZ7nPAAAAAXRSTlMAQObYZgAAACZJREFUGNNj+A8CB/BS7A9AiBiKQb7xBwNxFEMdwwBS8v9/kEIBAKjbSIJ+4jfQAAAAAElFTkSuQmCC)
    no-repeat 100%;
  background-size: 7px auto;
}
.spacer {
  padding-left: 5px;
  padding-right: 5px;
  flex: 1;
  margin: 0;
}
.spacer i {
  display: block;
  width: 100%;
  height: 1px;
  background: #000;
}
.spacer i:nth-child(n + 2) {
  margin-top: 1px;
}
h2 {
  font-weight: 400;
  font-size: 16px;
}
.body {
  padding: 1rem;
  font-size: 1rem;
}
</style>
