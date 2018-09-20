function Clock(ctx, microwave, time){
  this.x = microwave.x + (microwave.w * 31/45);
  this.y = microwave.y + (microwave.h * 1/4);
  this.fontSize = microwave.w * 1/18;

  this.timer = function(){
    let condition = time.getSeconds() !== 0 || time.getMinutes() !== 0;
    let txt = condition ? this.getTimer() : this.getHour();
    ctx.save();
    ctx.font = `${this.fontSize}px Arial`;
    ctx.fillText(txt, this.x, this.y);
    ctx.restore();
  }

  this.decrementTime = function(){
    time.setTime(time.getTime() - 16.6);
  }

  this.getTimer = function(){
    let minutes = this.formatTime(time.getMinutes());
    let seconds = this.formatTime(time.getSeconds());
    return `00:${minutes}:${seconds}`;
  }

  this.getHour = function(){
    let date = new Date();
    let hours = this.formatTime(date.getHours());
    let minutes = this.formatTime(date.getMinutes());
    let seconds = this.formatTime(date.getSeconds());
    return `${hours}:${minutes}:${seconds}`;
  }

  this.formatTime = function(date){
    return date < 10 ? `0${date}` : date;
  }
}