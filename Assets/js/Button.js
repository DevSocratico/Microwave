function Button(ctx, x, y, microwave){
  this.x = x - (microwave.w * 1/30);
  this.y = y + (microwave.h * 1/20);
  this.fontSize = microwave.w * 1/18;
  this.radiusButton = microwave.w * 2/45;

  this.draw = function(color, txt){
    ctx.save();
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.fillStyle = color;
    ctx.arc(x, y, this.radiusButton, 0, 2*Math.PI);
    ctx.stroke();
    ctx.font = `${this.fontSize}px Arial`;
    ctx.fillText(txt, this.x, this.y);
    ctx.closePath();
    ctx.restore();
  }

  this.hasClicked = function(point){
    return Math.sqrt((point.x - x) ** 2 + (point.y - y) ** 2) < this.radiusButton;
  }
}