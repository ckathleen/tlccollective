<template>
  <div class="about">
    “TLC” is an investment collective comprised of Terri Burns, Lauren
    Stephanian, and Casey Caruso. Given our backgrounds in computer science,
    engineering and product, we pride ourselves in angel investing in
    tech-forward founders who are building the inevitable. We write small,
    collective checks (having done a handful of investments to date) and work
    closely with founding teams.<br />
    <br />
    <br />
    <div class="emailform">
      Stay up to date by joining our mailing list:
      <br />
      <br />
      <div 
      >
        <input type="text" id="email" v-model="email" />&nbsp;&nbsp;
        <input type="button" value="Submit" @click="submitFormData"/>
      </div>
      <!--emails stored here: 
      https://docs.google.com/spreadsheets/d/1cyvjK3ujMFTzQ4vzsla6yCLuCR6GBK4MM8_rg25d8Hc/edit?usp=sharing
      -->
    </div>
    <div v-if="isMessageShown && isSuccess"><h2 class="success_ack"><br/><br/>Thank you!</h2></div>
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
      isSuccess: false,
      isMessageShown: false,
      email:''
    }
  },
  mounted: function () {
    $(document).ready(function() {
      $(window).keydown(function(event){
        if(event.keyCode == 13) {
          event.preventDefault();
          return false;
        }
      })
    })
  },
  methods: {
    submitFormData () {
      let personEmail = {
        email: this.email
      }
      let saveEmail = {
        data:[
          personEmail
        ]
      }
      let API_URL = 'https://sheetdb.io/api/v1/1v9c4d9llys1g'
      fetch(API_URL, {
        method : "POST",
          headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(saveEmail),
      }).then(response => response.json()).then(result => {
            console.log('resukt', result)
            this.isMessageShown = true
            this.isSuccess = true
            setTimeout(()=> location.reload(), 2000)
        //window.location.href = 'https://www.tlcinvestingcollective.com'
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
/* .success_ack{
  border: 1px solid #000;
  padding: 1rem 0;
  margin-top: 1rem;
  font-size: 1.2rem;
} */
</style>