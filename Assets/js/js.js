window.onload = function(){
  let guest = document.getElementById('microwave');
  let cnv = document.querySelector('canvas');
  let ctx = cnv.getContext('2d');

  let microwave = new Microwave(ctx);
  microwave.clock = new Clock(ctx, microwave);

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
    microwave.clock.timer();
  }

  setGuestName();
  loop();
}