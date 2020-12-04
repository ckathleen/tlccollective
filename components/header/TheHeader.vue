<template>
  <header class="the-header">
    <ul class="flex items-center">
      <li class="the-header__li">
        <!-- desktop name (top left of screen) want to make "About" clickable -->
        <span> TLC Collective </span>
      </li>
    </ul>
    <ul class="datetime">
      <!-- display actual date and time, make mailing list clickable -->
      <span id="mailing_list" @click="joinMailingList()">
        &nbsp;&nbsp;<u>J</u>oin our Mailing List&nbsp;&nbsp;|&nbsp;&nbsp;
      </span>
      <span id="clock">&nbsp;</span>
    </ul>
  </header>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'TheHeader',
  mounted() {
    var that = this
    setInterval(function () {
      that.updateClock()
    }, 1000)
  },
  methods: {
    ...mapMutations(['openModal']),
    joinMailingList() {
      this.openModal('about')
    },
    updateClock() {
      let currentTime = new Date()
      let currentHours = currentTime.getHours()
      let currentMinutes = currentTime.getMinutes()
      let currentSeconds = currentTime.getSeconds()

      // Pad the minutes and seconds with leading zeros, if required
      currentMinutes = (currentMinutes < 10 ? '0' : '') + currentMinutes
      currentSeconds = (currentSeconds < 10 ? '0' : '') + currentSeconds

      // Choose either "AM" or "PM" as appropriate
      var timeOfDay = currentHours < 12 ? 'AM' : 'PM'

      // Convert the hours component to 12-hour format if needed
      currentHours = currentHours > 12 ? currentHours - 12 : currentHours

      // Convert an hours component of "q0" to "12"
      currentHours = currentHours == 0 ? 12 : currentHours

      // Compose the string for display
      var currentTimeString =
        currentHours +
        ':' +
        currentMinutes +
        ':' +
        currentSeconds +
        ' ' +
        timeOfDay

      // Update the time display
      document.getElementById('clock').firstChild.nodeValue = currentTimeString
    }
  }
}
</script>

<style scoped>
#mailing_list {
  cursor: pointer;
}
@media only screen and (max-width: 600px) {
  .datetime {
    visibility: hidden;
  }
}
.the-header {
  white-space: nowrap;
  display: flex;
  height: 20px;
  border-bottom: 1px solid #000;
  justify-content: space-between;
  transition: background 0.1s ease-in-out;
  transition-delay: 0.5s;
  background: rgb(181, 229, 229);
}
.the-header__li {
  padding: 0 0.35rem;
  height: 20px;
  user-select: none;
  @apply flex items-center justify-center text-base;
}
.datetime {
  text-align: right;
  padding: 0 0.35rem;
  height: 20px;
  user-select: none;
  @apply flex items-center justify-center text-base;
}
</style>
