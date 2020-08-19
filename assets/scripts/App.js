var counter = 0;

$(document).ready(function(){

  $('#vjs_video_3_html5_api').get(0).play();
	count_and_reset(10);        // set timer in seconds
	//inputName();

  // resetTokenPosition();
	// drag();
	// manageZindex();
});

function count_and_reset(timer){ 

	// convert seconds to milliseconds
	var timerInMs = timer * 1000

  // start to count
	console.log('count to 50');

 	$(document).click( function() {                                // on click event
  	add_to_counter(1);                                         // add 1 to counter
  	var selectToken = "#"+ counter.toString();                 // prepare selector token
		$(selectToken).css('visibility', 'hidden');                // select token and hide
    $("#sound-" + Math.ceil(Math.random() * 2))[0].play();     // play tip tiny or small

  	console.log(counter);
    var form = parent.document.getElementById('totalTips');
    form.innerHTML = counter;

    $('#chatroom').append(`
<div style="font-family: Tahoma, Arial, Helvetica, sans-serif; box-sizing: border-box; padding: 1px 5px;">
  <div style="display: inline-block; background: rgb(255, 255, 51) none repeat scroll 0% 0%; color: rgb(0, 0, 0); padding: 2px; text-shadow: none; font-weight: bold;">
  <div>
    <span style="color: rgb(128, 75, 170); font-weight: bold;" data-listener-count-click="1" data-listener-count-contextmenu="1">Visitor </span>
  <span class="emoticonImage"> tipped 1 token </span>
 </div>
</div>
</div>
      `);

    var d = $("#divToScroll");
    d.scrollTop(d.prop("scrollHeight"));

    if (counter == 10 || counter == 20 || counter == 30){      // when reached 10, 20, 30
      $("#sound-3")[0].play();                                 // play tip medium
    } else if (counter == 40) {                                // when reached 40
      $("#sound-4")[0].play();                                 // play tip large
    } 

    if (counter == 50) {                                       // set limit to reach 
      $("#sound-5")[0].play();                                 // play tip huge

    	console.log('start timer: ' + timer +'s');

    	setTimeout(function(){                                   // initialize timer
        $("#sound-3")[0].play();                               // play tip medium

    		$('.token').each(function(){                           // select all tokens
              $(this).css('visibility', 'visible');            // make all tokens visible
    		});

    		reset_counter();                                       // reset counter to 0
        form.innerHTML = counter;

    		console.log('reset tokens & counter');
    		console.log('>> count to 50');

  		}, timerInMs);                                           // set timer (line 4)
  	}else{}
	});
}

// ADD TO COUNTER AND RESET
function add_to_counter(valueToAdd) { counter += valueToAdd; }
function reset_counter() { counter = 0; }

// INPUT NAME AND ANIMATION
function inputName(){
  $(document).on("keypress", function(e){                        // on key pressed event
    if(e.which == 13){                                       // if 'key enter' 
      var inputName = $('#input_text').val();                // select value input
      $('#output_name').html('Thanks ' + inputName + '!');   // select output and write name
      thanksAnimation();
      $('#input_text').val('');                              // reset input value to default
    }
  });
}

function thanksAnimation(){
  //wrap every letter in a span
  var textWrapper = document.querySelector(".effect1");
  textWrapper.innerHTML = textWrapper.textContent.replace(/([^.\s]|\w)/g, "<span class='letter'>$&</span>");

  anime.timeline().add(                     // fade in
    { 
      targets: ".effect1 .letter",
      scale: [5, 1],
      opacity: [0, 1],
      translateZ: 0,
      easing: "easeOutExpo",
      duration: 1000,
      delay: function (el, i) {
        return 70 * i;
      }
    }, 10 );

  setTimeout(function(){                   // initialize delay

    $('.letter').each(function(){          // no fade out
      $(this).css('opacity', '0');
    });

    // anime.timeline().add(               // fade out
    //   { 
    //     targets: ".effect1 .letter",
    //     scale: [1, 5],
    //     opacity: [1, 0],
    //     translateZ: 0,
    //     easing: "easeOutExpo",
    //     duration: 10,
    //     delay: function (el, i) {
    //       return 70 * i;
    //     }
    //   }, 1500 );

  }, 4000);                                // set delay

}

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