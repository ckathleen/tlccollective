<template>
  <div class="about">
    <div class="emailform" id="emailform">
      Join our mailing list:
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
        window.location.href = 'https://www.tlcinvestingcollective.com'
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
