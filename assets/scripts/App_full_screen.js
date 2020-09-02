var initial;
var counter = 0;
var delay = 10;

$(document).ready(function(){
	count_and_reset(delay);        // set timer in Seconds
  // resetTokenPosition();
	// drag();
	// manageZindex();
});

function count_and_reset(timer){ 

	// convert seconds to milliseconds
	var timerInMs = timer * 1000

  // start to count
	console.log('count to 50');
  tipToSee();
  noTips();
  beginningChat();

 	$(document).click( function() {                                // on click event
    resetNoTips();
  	add_to_counter(1);                                         // add 1 to counter
  	var selectToken = "#"+ counter.toString();                 // prepare selector token
		$(selectToken).css('visibility', 'hidden');                // select token and hide

    // add_to_counter(1);
    // selectToken = "#"+ counter.toString();                 // prepare selector token
    // $(selectToken).css('visibility', 'hidden');                // select token and hide

    // $("#sound-1").prop("volume", 0.2);
    // $("#sound-1")[0].play();     // play tip tiny or small

    $("#tokensAmount").text(counter);
   
    normalTip();
    console.log(counter);

    // if (counter == 10 || counter == 20){      // when reached 10, 20, 30
    //   $("#sound-3").prop("volume", 0.2);
    //   $("#sound-3")[0].play();                                 // play tip medium
    //   toGoal();
    // }

    if (counter == 3 || counter == 14 || counter == 23){ omg(); }

    if (counter == 7 || counter == 16 || counter == 26){ hottie(); }

    if (counter == 11 || counter == 20){ wow(); }

    if (counter == 28){ almost(); }

    if (counter == 30) {                                       // set limit to reach 
      // $("#sound-6").prop("volume", 0.2);
      // $("#sound-6")[0].play();                                 // play tip huge
      goal();
      goalReached();

    	console.log('start timer: ' + timer +'s');

      $('#whiteOverlay').addClass('toWhite');
      $('#videoDefault').animate({ volume: 0.0 }, 5000);

    	setTimeout(function(){                                   // initialize timer
        $('#videoDefault').get(0).pause();
        $('#gifOverlay').remove();
        $('#whiteOverlay').removeClass('toWhite');

        $('#goalReached').css('visibility', 'visible');
        $('#goalReached').get(0).play();
        $('#videoDefault').css('visibility', 'hidden');

        setTimeout(function(){
          $('#chat').css('visibility', 'visible');
          $('#goalTimer').css('visibility', 'visible');
          startTimer();

          $('#goalReached').get(0).play();
          $('#goalReached').css('visibility', 'hidden');
          $('#videoDefault').css('visibility', 'visible');
          $('#videoDefault').get(0).play();
          $('#videoDefault').animate({ volume: 1 }, 100);

          setTimeout(function(){
            $("#sound-3").prop("volume", 0.5);
            $("#sound-3")[0].play();                               // play tip medium

            $('#goalCounter').css('visibility', 'visible');
            $('#goalTimer').css('visibility', 'hidden');

            $('.token').each(function(){                           // select all tokens
                  $(this).css('visibility', 'visible');            // make all tokens visible
            });

            reset_counter();                                       // reset counter to 0
            $('#tokensAmount').text(counter);
            $('#chat').empty();
            beginningChat();

            // resetTimer()
            // $('#tineLeft').text('5:00');

            console.log('reset tokens & counter');
            console.log('>> count to 50');
          }, timerInMs);
        }, 15000);


        

  		}, 5000);                                           // set timer (line 4)

  	}else{}
	});
}

function beginningChat(){
  setTimeout(function(){
    $('#chat').append(`
      <div class="comment_box">
          <div>
            <span style="color: white; -webkit-text-stroke: 0.4px #02020221; font-weight: bold; text-shadow: 0px 0px 2px black;">Rules: No spamming. Do not insist the cam hosts to do as you please. Do not announce other rooms or websites that would conflict with this room. Avoid any argumentative and/or rude posts related to the cam viewing. </span>
          </div>
      </div><br>
    `);
    setTimeout(function(){scrollChat()}, 100);

    setTimeout(function(){
      $('#chat').append(`
        <div class="comment_box">
          <div>
            <span style="color: white; -webkit-text-stroke: 0.4px #02020221; font-weight: bold; text-shadow: 0px 0px 2px black;">Broadcaster is running these apps: tip to reveal</span>
          </div>
        </div><br>
      `);
      setTimeout(function(){scrollChat()}, 100);

      setTimeout(function(){
        $('#chat').append(`
          <div class="comment_box">
              <div>
                <span style="color: white; -webkit-text-stroke: 0.4px #02020221; font-weight: bold; text-shadow: 0px 0px 2px black;">Notice: Welcome visitor…! PLZ tip to reveal..</span>
              </div>
          </div><br>
        `);
        setTimeout(function(){scrollChat()}, 100);
      },2000);
    },2000);
  },1000);
}

function normalTip(){
  $('#chat').append(`
    <div class="comment_box">
      <div style="display: inline-block; background: rgb(255, 255, 51) none repeat scroll 0% 0%; color: rgb(0, 0, 0); padding: 2px; text-shadow: none; font-weight: bold;">
        <div>
          <span style="color: rgb(128, 75, 170); font-weight: bold;">Visitor</span>
          <span> tipped 1 token </span>
        </div>
      </div
    </div>
  `);

  scrollChat();
}

function omg(){
  $('#chat').append(`
    <div class="comment_box">
        <div>
          <span style="color: white; -webkit-text-stroke: 0.4px #02020221; font-weight: bold; text-shadow: 0px 0px 2px black;">Notice:</span>
          <span> <image src="./assets/images/omg.gif" width="150px"></span>
        </div>
    </div>
  `);

  setTimeout(function(){scrollChat()}, 100);
}

function hottie(){
  $('#chat').append(`
    <div class="comment_box">
        <div>
          <span style="color: white; -webkit-text-stroke: 0.4px #02020221; font-weight: bold; text-shadow: 0px 0px 2px black;">Notice:</span>
          <span> <image src="./assets/images/hottie.gif" width="150px"></span>
        </div>
    </div>
  `);

  setTimeout(function(){scrollChat()}, 100);
}

function wow(){
  $('#chat').append(`
    <div class="comment_box">
        <div>
          <span style="color: white; -webkit-text-stroke: 0.4px #02020221; font-weight: bold; text-shadow: 0px 0px 2px black;">Notice:</span>
          <span> <image src="./assets/images/wow.jpg" width="150px"></span>
        </div>
    </div>
  `);

  setTimeout(function(){scrollChat()}, 100);
}

function almost(){
  $('#chat').append(`
    <div class="comment_box">
        <div>
          <span style="color: white; -webkit-text-stroke: 0.4px #02020221; font-weight: bold; text-shadow: 0px 0px 2px black;">Notice: Goal almost reached!</span>
          <span> <image src="./assets/images/cat.gif" width="70px"></span>
        </div>
    </div>
  `);

  setTimeout(function(){scrollChat()}, 100);
}

function goal(){
  $('#chat').append(`
    <div class="comment_box">
        <div>
          <span style="color: white; -webkit-text-stroke: 0.4px #02020221; font-weight: bold; text-shadow: 0px 0px 2px black;">Notice:</span>
          <span> <image src="./assets/images/goal.gif" width="300px"></span>
        </div>
    </div>
  `);
  setTimeout(function(){scrollChat()}, 100);
  setTimeout(function(){
    $('#chat').append(`
    <div class="comment_box">
        <div>
          <span style="color: white; -webkit-text-stroke: 0.4px #02020221; font-weight: bold; text-shadow: 0px 0px 2px black;">Notice:</span>
          <span> <image src="./assets/images/cat.gif" width="70px"></span>
        </div>
    </div>
  `);

  setTimeout(function(){scrollChat()}, 100);
  },3000);
}

function toGoal(){
  var left = 25 - counter;

  $('#chat').append(`
    <div class="comment_box">
        <div>
          <span style="color: white; -webkit-text-stroke: 0.4px #02020221; font-weight: bold; text-shadow: 0px 0px 2px black;">Notice: ` + left + ` tokens to goal guys!</span>
        </div>
    </div>
  `);

  setTimeout(function(){scrollChat()}, 100);
}

function tipToSee(){

  setInterval(function(){
    $('#chat').append(`
        <div class="comment_box">
            <div>
              <span style="color: white; -webkit-text-stroke: 0.4px #02020221; font-weight: bold; text-shadow: 0px 0px 2px black;">Notice: tip to see more!</span>
              <span> <image src="./assets/images/tip.gif" width="100px"> </span>
            </div>
        </div>
    `);

    setTimeout(function(){scrollChat()}, 100);
     }, 120000);
}

function tipPlease(){
  var tipsPlease = ['<image src="./assets/images/tip_guys.gif" width="300px">','<image src="./assets/images/tip_please.gif" width="350px">'];

    $('#chat').append(`
        <div class="comment_box">
            <div>
              <span style="color: white; -webkit-text-stroke: 0.4px #02020221; font-weight: bold; text-shadow: 0px 0px 2px black;">Notice:</span>
              <span> ` + tipsPlease[Math.round(Math.random())] + `</span>
            </div>
        </div>
    `);

    setTimeout(function(){scrollChat()}, 100);
}

function goalReached(){

    $('.container').append(`
        <div id="gifOverlay" class="overlay">
          <img id="overlayGif" src="./assets/images/GOAL-REACHED.gif">
        </div>
    `);

    setTimeout(function(){scrollChat()}, 100);
}


function scrollChat(){
  var d = $("#chat");
  d.scrollTop(d.prop("scrollHeight"));
}

function noTips() {
    initial = window.setTimeout( 
    function() { tipPlease(); }, 120000);

}

function resetNoTips(){
    clearTimeout( initial )
    noTips();
}




















// ADD TO COUNTER AND RESET
function add_to_counter(valueToAdd) { counter += valueToAdd; }
function reset_counter() { counter = 0; }


// RESET TOKEN POSITION
function resetTokenPosition(){
  $('.token').each(function(){
    $(this).css('z-index', '0');
    $(this).css('left', '0');
    $(this).css('top', '0');
  });
}

// MAKE TOKENS DRAGGABLE
function drag(){
	var a = 3;
	$( '.token' ).draggable({ 
    		start: function(event, ui) { $(this).css("z-index", a++); }
	});
}

// WHEN A TOKEN IS CLICKED IT GOES ON TOP 
// it works only if you reset the token position
function manageZindex(){
	$('.container div').click(function() {
    	$(this).addClass('top').removeClass('bottom');
    	$(this).siblings().removeClass('top').addClass('bottom');
    	$(this).css("z-index", a++);
  	});
}

// TIMER

function formatTimeLeft(time) {
  // The largest round integer less than or equal to the result of time divided being by 60.
  const minutes = Math.floor(time / 60);
  
  // Seconds are the remainder of the time divided by 60 (modulus operator)
  let seconds = time % 60;
  
  // If the value of seconds is less than 10, then display seconds with a leading zero
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }  // The output in MM:SS format

  return `${minutes}:${seconds}`;
}

// Start with an initial value of 20 seconds
const TIME_LIMIT = delay;

// Initially, no time has passed, but this will count up
// and subtract from the TIME_LIMIT
let timePassed = 0;
let timeLeft = TIME_LIMIT;

let timerInterval = null;

function startTimer() {
  timerInterval = setInterval(() => {
    
    // The amount of time passed increments by one
    timePassed = timePassed += 1;
    timeLeft = TIME_LIMIT - timePassed;
    
    // The time left label is updated
    document.getElementById("timeLeft").innerHTML = formatTimeLeft(timeLeft);

    if (timePassed == TIME_LIMIT) {
      clearInterval(timerInterval);
      timePassed = 0;
      timeLeft = TIME_LIMIT + 10;
      document.getElementById("timeLeft").innerHTML = '5:00';

    }

  }, 1000);

}