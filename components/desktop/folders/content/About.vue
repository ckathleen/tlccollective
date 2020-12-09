<template>
  <div class="about">
    “TLC” is an investment collective comprised of <u>T</u>erri Burns, <u>L</u>auren
    Stephanian, and <u>C</u>asey Caruso. Given our backgrounds in computer science,
    engineering, and product, we pride ourselves in angel investing in
    tech-forward founders who are building the inevitable. We write small,
    collective checks (having done a handful of investments to date) and work
    closely with founding teams.<br />
    <br />
    <br />
    <div class="emailform" id="emailform">
      Stay up to date by joining our mailing list:
      <br />
      <br />
      <form method="post"
        id="sheetdb-form"
        action="https://sheetdb.io/api/v1/1v9c4d9llys1g"
        @submit="submitFormData"
      >
        <input type="text" id="email" name="data[email]" value=" " />&nbsp;&nbsp;
        <input type="submit" value="Submit" />
      </form>
      <!--emails stored here: 
      https://docs.google.com/spreadsheets/d/1cyvjK3ujMFTzQ4vzsla6yCLuCR6GBK4MM8_rg25d8Hc/edit?usp=sharing
      -->
    </div>
    <br />
    <br />
  </div>
</template>

<script>
import $ from 'jquery'

export default {
  name: 'FolderContentAbout',
  mounted: function () {
    $(document).ready(function() {
      $('emailform').keydown(function(event){
        if(event.keyCode == 13) {
          event.preventDefault();
          return false;
        }
      })
    })
  },
  methods: {
    submitFormData () {
      var form = document.getElementById('sheetdb-form');
      fetch(form.action, {
        method : "POST",
        body: new FormData(document.getElementById("sheetdb-form")),
      }).then(
          response => response.json()
      ).then((html) => {
        window.location.href = 'https://www.tlccollective.space'
      })
    }
  }
}
</script>
<style scoped>
.emailform{
  text-align: center;
}
.about{
  text-align: center;
}
</style>
