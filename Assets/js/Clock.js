function Clock(ctx, microwave){
	this.x = microwave.x + (microwave.w * 31/45)
	this.y = microwave.y + (microwave.h * 1/4)
	this.fontSize = microwave.w * 1/18

	this.timer = function(){
        ctx.save()
        ctx.font = `${this.fontSize}px Arial`
        ctx.fillText(this.getHour(), this.x, this.y)
        ctx.restore()
    }

    this.getHour = function(){
        var date = new Date()
        var hours = this.formatTime(date.getHours())
        var minutes = this.formatTime(date.getMinutes())
        var seconds = this.formatTime(date.getSeconds())
        return `${hours}:${minutes}:${seconds}`
    }

    this.formatTime = function(date){
        return date < 10 ? `0${date}` : date
    }
}