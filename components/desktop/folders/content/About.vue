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
       
        <input
          type="text"
          id="email"
          name="email"
          v-model="email"
        />&nbsp;&nbsp;
        <input type="button" value="Submit" @click="submitFormData" />
 

      <div v-if="successMessage" class="success_message">
        <br/>
        Thank you!
      </div>
      <div v-if="failureMessage" class="success_message">
        <br/>
        Thank you!
      </div>
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
   data(){
    return{
      email: null,
      successMessage: false,
      failureMessage: false
    }
  },
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
       submitFormData() {
      const URL = "https://sheetdb.io/api/v1/1v9c4d9llys1g";
    console.log(JSON.stringify({
      data:{
        enteredEmail: this.email
      }
      }))
      fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({data: {email: this.email}}),
      })
        .then(result => result.json())
        .then(data => {
          this.successMessage = true;
          console.log("SUCCESS_MESSAGE", data)
        })
        .catch(err => {
          this.failureMessage = true;
          console.log("ERROR_MESSAGE", err)
        });
    },
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
