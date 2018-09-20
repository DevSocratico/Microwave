window.onload = function(){
  let guest = document.getElementById('microwave');
  let cnv = document.querySelector('canvas');
  let ctx = cnv.getContext('2d');

  let microwave = new Microwave(ctx);
  let buttonCol1 = microwave.x + (microwave.w * 11/15);
  let buttonCol2 = microwave.x + (microwave.w * 13/15);
  let buttonRow1 = microwave.y + (microwave.h * 19/40);
  let buttonRow2 = microwave.y + (microwave.h * 29/40);

  microwave.clock = new Clock(ctx, microwave);
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

  function loop(){
    window.requestAnimationFrame(loop, cnv);
    cleanScreen();
    microwave.draw();
    microwave.btnStart.draw('#0f0', ' >');
    microwave.btnCancel.draw('#f00', ' X');
    microwave.btnPlusOne.draw('#000', '+1');
    microwave.btnPlusFive.draw('#000', '+5');
    microwave.clock.timer();
  }

  setGuestName();
  loop();
}