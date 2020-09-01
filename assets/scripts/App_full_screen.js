var initial;
var counter = 0;

$(document).ready(function(){
  
  $('#goalReached').get(0).pause();
	count_and_reset(39);        // set timer in seconds

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

 	$(document).click( function() {                                // on click event
    resetNoTips();
  	add_to_counter(1);                                         // add 1 to counter
  	var selectToken = "#"+ counter.toString();                 // prepare selector token
		$(selectToken).css('visibility', 'hidden');                // select token and hide
    $("#sound-1").prop("volume", 0.2);
    $("#sound-1")[0].play();     // play tip tiny or small
   
    normalTip();
    console.log(counter);

    if (counter == 10 || counter == 20 || counter == 30|| counter == 40){      // when reached 10, 20, 30
      $("#sound-3").prop("volume", 0.2);
      $("#sound-3")[0].play();                                 // play tip medium
      toGoal();
    }

    if (counter == 5 || counter == 25){
      omg();
    }

    if (counter == 8){
      hottie();
    }

    if (counter == 17 || counter == 37){
      wow();
    }

    if (counter == 45){
      almost();
    }


    if (counter == 50) {                                       // set limit to reach 
      $("#sound-6").prop("volume", 0.2);
      $("#sound-6")[0].play();                                 // play tip huge
      goal();

      $('#videoDefault').get(0).pause();
      $('#goalReached').css('visibility', 'visible');
      $('#goalReached').get(0).play();

    	console.log('start timer: ' + timer +'s');

    	setTimeout(function(){                                   // initialize timer
        $("#sound-3").prop("volume", 0.5);
        $("#sound-3")[0].play();                               // play tip medium



    		$('.token').each(function(){                           // select all tokens
              $(this).css('visibility', 'visible');            // make all tokens visible
    		});

        $('#goalReached').get(0).pause();
        $('#goalReached').css('visibility', 'hidden');
        $('#videoDefault').get(0).play();

    		reset_counter();                                       // reset counter to 0
        form.innerHTML = counter;

    		console.log('reset tokens & counter');
    		console.log('>> count to 50');

  		}, timerInMs);                                           // set timer (line 4)
  	}else{}
	});
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
          <span> <image src="../assets/images/omg.gif" width="150px"></span>
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
          <span> <image src="../assets/images/hottie.gif" width="150px"></span>
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
          <span> <image src="../assets/images/wow.jpg" width="150px"></span>
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
          <span> <image src="../assets/images/cat.gif" width="70px"></span>
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
          <span> <image src="../assets/images/goal.gif" width="300px"></span>
        </div>
    </div>
  `);
  setTimeout(function(){scrollChat()}, 100);
  setTimeout(function(){
    $('#chat').append(`
    <div class="comment_box">
        <div>
          <span style="color: white; -webkit-text-stroke: 0.4px #02020221; font-weight: bold; text-shadow: 0px 0px 2px black;">Notice:</span>
          <span> <image src="../assets/images/cat.gif" width="70px"></span>
        </div>
    </div>
  `);

  setTimeout(function(){scrollChat()}, 100);
  },3000);
}

function toGoal(){
  var left = 50 - counter;

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
              <span> <image src="../assets/images/tip.gif" width="100px"> </span>
            </div>
        </div>
    `);

    setTimeout(function(){scrollChat()}, 100);
     }, 120000);
}

function tipPlease(){
  var tipsPlease = ['<image src="../assets/images/tip_guys.gif" width="300px">','<image src="../assets/images/tip_please.gif" width="350px">'];

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