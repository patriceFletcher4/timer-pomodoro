$(document).ready(function(){
  var start = $('#start');
  var minutes = $('#minutes');
  var seconds = $('#seconds');
  var breakBtn = $('#break');
  var pauseBtn = $('#pause');
  var pause = 0;
  var resetBtn = $('#rest');

  start.on('click', startCountdown);
  breakBtn.on('click', takeABreak);
  pauseBtn.on('click', pauseButtonClicked);
  resetBtn.on('click', resetTimer);

  function takeABreak(){
    minutes.text('05');
    seconds.text('00');
    startCountdown();
  }

  function pauseButtonClicked(){
      if (pause === 0){
        pause = 1;
        clearInterval(countdown);
      } else {
        pause = 0;
        pauseBtn.text('|| Pause');
        startCountdown();
      };

    };



    function resetTimer(){
      minutes.text('25');
      seconds.text('00');
    }

  function startCountdown(){
    var countdown = setInterval(function(){
      var secondsVal = +seconds.text(); //the plus makes this behave like a
      var minutesVal = +minutes.text();
      if(secondsVal === 0 && minutesVal === 0){
        console.log('end');
        breakBtn.removeClass('disabled');
        breakBtn.removeAttr('disabled');
        clearInterval(countdown);
        return;
      }
      if(secondsVal === 0){
        minutes.text(minutesVal - 1);
        seconds.text(59);
      } else {
        if(secondsVal <= 10){
          seconds.text("0" + (secondsVal-1));
        } else {
          seconds.text(secondsVal - 1);
        }

      }

    }, 1000);
  }
});
