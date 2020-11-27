<template>
  <div id="terminal" class="container">
    <form class="four-oh-four-form">
      <input type="text" class="404-input" />
    </form>
    <div id="terminal-window" class="terminal">
      <p class="prompt">Welcome to TLC. Try typing 'Help' to get started.</p>
      <p id="new-output" class="prompt output new-output"></p>
    </div>
  </div>
</template>
<script>
import $ from 'jquery'

export default {
  name: 'FolderContentTerminal',
  mounted() {
    var that = this
    var inputReady = true
    var input = $('.404-input')
    input.focus()
    $('.container').on('click', function (e) {
      input.focus()
    })
    input.on('keyup', function (e) {
      $('.new-output').text(input.val())
    })
    $('.four-oh-four-form').on('submit', function (e) {
      e.preventDefault()
      var val = $(this).children($('.404-input')).val().toLowerCase()
      var href
      if (val == 'kittens') {
        that.showKittens()
      } else if (val == 'whoarewe') {
        that.showtlcgif()
      } else if (val == 'howcanibehelpful') {
        that.showHelpfulGif()
      } else {
        that.resetForm(val)
      }
    })
  },
  methods: {
    showtlcgif() {
      var that = this
      $.get(
        'https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=tlc',
        function (result) {
          let gif = result.data.image_url
          $('.terminal').append('<img class="gif" src="' + gif + '""><br>')
        }
      ).then(function () {
        that.resetForm('whoarewe')
      })
    },
    showHelpfulGif() {
      var that = this
      $.get(
        'https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=helpful',
        function (result) {
          let gif = result.data.image_url
          $('.terminal').append('<img class="gif" src="' + gif + '""><br>')
        }
      ).then(function () {
        that.resetForm('howcanibehelpful')
      })
    },
    textEffect(line) {
      var alpha = [';', '.', ',', ':', ';', '~', '`']
      var animationSpeed = 10
      var index = 0
      var string = line.text()
      var splitString = string.split('')
      var copyString = splitString.slice(0)

      var emptyString = copyString.map(function (el) {
        return [alpha[Math.floor(Math.random() * alpha.length)], index++]
      })

      emptyString = shuffle(emptyString)

      $.each(copyString, function (i, el) {
        var newChar = emptyString[i]
        toUnderscore(copyString, line, newChar)

        setTimeout(function () {
          fromUnderscore(copyString, splitString, newChar, line)
        }, i * animationSpeed)
      })
    },
    toUnderscore(copyString, line, newChar) {
      copyString[newChar[1]] = newChar[0]
      line.text(copyString.join(''))
    },
    fromUnderscore(copyString, splitString, newChar, line) {
      copyString[newChar[1]] = splitString[newChar[1]]
      line.text(copyString.join(''))
    },
    shuffle(o) {
      for (
        var j, x, i = o.length;
        i;
        j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x
      );
      return o
    },
    showKittens() {
      $('.terminal').append(
        "<div class='kittens'>" +
          "<p class='prompt'>	                             ,----,         ,----,                                          ,---,</p>" +
          "<p class='prompt'>       ,--.                ,/   .`|       ,/   .`|                     ,--.              ,`--.' |</p>" +
          "<p class='prompt'>   ,--/  /|    ,---,     ,`   .'  :     ,`   .'  :     ,---,.        ,--.'|   .--.--.    |   :  :</p>" +
          "<p class='prompt'>,---,': / ' ,`--.' |   ;    ;     /   ;    ;     /   ,'  .' |    ,--,:  : |  /  /    '.  '   '  ;</p>" +
          "<p class='prompt'>:   : '/ /  |   :  : .'___,/    ,'  .'___,/    ,'  ,---.'   | ,`--.'`|  ' : |  :  /`. /  |   |  |</p>" +
          "<p class='prompt'>|   '   ,   :   |  ' |    :     |   |    :     |   |   |   .' |   :  :  | | ;  |  |--`   '   :  ;</p>" +
          "<p class='prompt'>'   |  /    |   :  | ;    |.';  ;   ;    |.';  ;   :   :  |-, :   |   \\ | : |  :  ;_     |   |  '</p>" +
          "<p class='prompt'>|   ;  ;    '   '  ; `----'  |  |   `----'  |  |   :   |  ;/| |   : '  '; |  \\  \\    `.  '   :  |</p>" +
          "<p class='prompt'>:   '   \\   |   |  |     '   :  ;       '   :  ;   |   :   .' '   ' ;.    ;   `----.   \\ ;   |  ;</p>" +
          "<p class='prompt'>'   : |.  \\ |   |  '     '   :  |       '   :  |   '   :  ;/| '   : |  ; .'  /  /`--'  /  `--..`;  </p>" +
          "<p class='prompt'>|   | '_\\.' '   :  |     ;   |.'        ;   |.'    |   |    \\ |   | '`--'   '--'.     /  .--,_   </p>" +
          "<p class='prompt'>'   : |     ;   |.'      '---'          '---'      |   :   .' '   : |         `--'---'   |    |`.  </p>" +
          "<p class='prompt'>;   |,'     '---'                                  |   | ,'   ;   |.'                    `-- -`, ; </p>" +
          "<p class='prompt'>'---'                                              `----'     '---'                        '---`'</p>" +
          "<p class='prompt'>                                                              </p></div>"
      )

      var lines = $('.kittens p')
      $.each(lines, function (index, line) {
        setTimeout(function () {
          $(line).css({
            opacity: 1
          })

          textEffect($(line))
        }, index * 100)
      })

      //$('.new-output').velocity('scroll'), { duration: 100 }
      var y = $('#terminal-window')[0].scrollHeight
      $('#terminal-window').scrollTop(y)
      this.resetForm('kittens')
    },
    resetForm(val) {
      var message = 'Sorry that command is not recognized.'
      var input = $('.404-input')
      if (val == 'help') {
        message =
          "Supported commands:'whoarewe', 'whoami', 'portfolio', 'apply', 'help', 'kittens', 'pwd', 'howcanibehelpful'"
      } else if (val == 'pwd') {
        message = '/cool-humans/engineers/commmunities/TLC'
      } else if (val == 'whoarewe') {
        message = `We're TLC 💫. An investment collective that prides ourselves in angel investing in tech-forward founders who are building the inevitable. Check out our 'About' and 'Team' folders to learn more about us.`
      } else if (val == 'whoami') {
        message =
          "That's deep. This is just another investing website... can't get that deep."
      } else if (val == 'portfolio') {
        message =
          "We're biased but we think we have one of the best portfolios around. Check out our 'Portfolio' folder to see for yourself. Are we missing anyone? LET US KNOW!"
      } else if (val == 'apply') {
        message =
          'Jk, there is not application process (that just sounds like way to much work tbh), but if you want to hit us up feel free to shoot us a note at TLCinvestments@googlegroups.com'
      } else if (val == 'kittens') {
        message = 'Huzzzzzah Kittehs!'
        $('.kittens').removeClass('kittens')
      } else if (val == 'howcanibehelpful') {
        message = '😂 😂 😂'
      }
      $('.new-output').removeClass('new-output')
      input.val('')
      $('.terminal').append(
        '<p class="prompt">' +
          message +
          '</p><p class="prompt output new-output"></p>'
      )

      //$('.new-output').velocity('scroll'), { duration: 100 }
      var y = $('#terminal-window')[0].scrollHeight
      $('#terminal-window').scrollTop(y)
    }
  }
}
</script>
<style>
@-webkit-keyframes cursor-blink {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@-moz-keyframes cursor-blink {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@keyframes cursor-blink {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

#terminal {
  background-color: black;
}

#terminal .drag-head {
  color: white;
}
#terminal body {
  background-color: black;
}

#terminal .four-oh-four {
  position: relative;
  top: 0;
  min-height: 100vh;
  min-width: 100vw;
  z-index: -1;
  background-color: black;
  transition: opacity 300ms ease-out;
  background-position: center center;
  background-repeat: no-repeat;
}
#terminal .four-oh-four .dJAX_internal {
  opacity: 0;
}
#terminal .four-oh-four form,
#terminal .four-oh-four input {
  position: fixed;
  top: 0;
  left: 0;
  opacity: 0;
  background-color: black;
}

#terminal .terminal {
  position: relative;
  padding: 4rem;
  height: 450px;
  max-height: 450px;
  overflow: scroll;
}
.terminal .prompt {
  color: #1ff042;
  display: block;
  font-family: 'AndaleMono', monospace;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 0.9em;
  letter-spacing: 0.15em;
  white-space: pre-wrap;
  text-shadow: 0 0 2px rgba(31, 240, 66, 0.75);
  line-height: 1;
  margin-bottom: 0.75em;
}
.terminal .prompt:before {
  content: '> ';
  display: inline-block;
}
.terminal .new-output {
  display: inline-block;
}
.terminal .new-output:after {
  display: inline-block;
  vertical-align: -0.15em;
  width: 0.75em;
  height: 1em;
  margin-left: 5px;
  background: #1ff042;
  box-shadow: 1px 1px 1px rgba(31, 240, 66, 0.65),
    -1px -1px 1px rgba(31, 240, 66, 0.65), 1px -1px 1px rgba(31, 240, 66, 0.65),
    -1px 1px 1px rgba(31, 240, 66, 0.65);
  -webkit-animation: cursor-blink 1.25s steps(1) infinite;
  -moz-animation: cursor-blink 1.25s steps(1) infinite;
  animation: cursor-blink 1.25s steps(1) infinite;
  content: '';
}

#terminal .kittens p {
  letter-spacing: 0;
  opacity: 0;
  line-height: 1rem;
}

#terminal .gif {
  margin: 20px;
  max-width: 300px;
}

#terminal .four-oh-four-form {
  opacity: 0;
  position: fixed;
  top: 0;
  left: 50%;
}

#terminal a {
  color: white;
}
</style>
