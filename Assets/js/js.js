window.onload = function(){
  let guest = document.getElementById('microwave');
  let cnv = document.querySelector('canvas');
  let ctx = cnv.getContext('2d');
  let time = new Date();
  time.setMinutes(0);
  time.setSeconds(0);

  let microwave = new Microwave(ctx);
  let buttonCol1 = microwave.x + (microwave.w * 11/15);
  let buttonCol2 = microwave.x + (microwave.w * 13/15);
  let buttonRow1 = microwave.y + (microwave.h * 19/40);
  let buttonRow2 = microwave.y + (microwave.h * 29/40);

  microwave.clock = new Clock(ctx, microwave, time);
  microwave.btnStart = new Button(ctx, buttonCol2, buttonRow2, microwave);
  microwave.btnCancel = new Button(ctx, buttonCol1, buttonRow2, microwave);
  microwave.btnPlusOne = new Button(ctx, buttonCol2, buttonRow1, microwave);
  microwave.btnPlusFive = new Button(ctx, buttonCol1, buttonRow1, microwave);

  function cleanScreen(){
    ctx.save();
    ctx.fillStyle = '#fff';
    ctx.clearRect(0, 0, cnv.width, cnv.height);
    ctx.restore();
  }

  function setGuestName(){
    let name = prompt(`What's your name:`);
    validateGuestName(name);
  }

  function validateGuestName(name){
    let condition = name.trim() !== '' && name.length < 20;
    guest.textContent = condition ? `Microwave of ${name}` : 'Microwave';
  }

  cnv.addEventListener('click', (e) => {
    let point = {
      x: e.pageX - cnv.offsetLeft,
      y: e.pageY - cnv.offsetTop
    };

    buttonClicked('btnStart', point);
    buttonClicked('btnCancel', point);
    buttonClicked('btnPlusOne', point);
    buttonClicked('btnPlusFive', point);
  });

  function buttonClicked(btn, point){
    if(microwave[btn].hasClicked(point)){;
      buttonActions(btn);
    }
  }

  function buttonActions(btn){
    switch(btn){
      case 'btnStart':
        microwave.warming = true;
        if(time.getMinutes() === 0 || time.getSeconds() !== 0){
            setLimitTime(0.5);
        }
        break;
      case 'btnCancel':
        microwave.warming = false;
        time.setTime(0);
        break;
      case 'btnPlusOne':
        setLimitTime(1);
        break;
      case 'btnPlusFive':
        setLimitTime(5);
        break;
    }
  }

  function setLimitTime(min){
    if(time.getMinutes() + min > 59){
      time.setMinutes(59);
      time.setSeconds(59);
      return;
    }
    time.setTime(time.getTime() + min * 60 * 1000);
  }

  function loop(){
    window.requestAnimationFrame(loop, cnv);
    cleanScreen();
    microwave.draw();
    microwave.btnStart.draw('#0f0', ' >');
    microwave.btnCancel.draw('#f00', ' X');
    microwave.btnPlusOne.draw('#000', '+1');
    microwave.btnPlusFive.draw('#000', '+5');

    if(microwave.warming){
      microwave.clock.decrementTime();
    }
    if(time.getSeconds() === 0 && time.getMinutes() === 0){
      microwave.warming = false;
      time.setTime(0);
    }

    microwave.clock.timer();
  }

  setGuestName();
  loop();
}