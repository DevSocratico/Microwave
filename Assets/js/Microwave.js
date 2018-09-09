function Microwave(ctx){
    this.x = 160
    this.y = 150
    this.w = 400
    this.h = 200

    this.draw = function(){
        this.drawFront()
        this.drawBack()
        this.drawDisplay()
        this.drawVisor()
    }

    this.drawFront = function(){
        ctx.save()
        ctx.lineWidth = 2
        ctx.strokeRect(this.x, this.y, this.w, this.h)
        ctx.strokeRect(this.x + (this.w * 2/3), this.y + (this.h * 5/16), this.w * 5/18, this.h * 9/16)
        ctx.restore()
    }

    this.drawBack = function(){
        ctx.save()
        ctx.lineWidth = 2
        ctx.moveTo(this.x, this.y)
        ctx.lineTo(this.x + (this.w * 1/6), this.y - (this.h * 3/16))
        ctx.moveTo(this.x + this.w, this.y)
        ctx.lineTo(this.x + this.w + (this.w * 1/6), this.y - (this.h * 3/16))
        ctx.moveTo(this.x + (this.w * 1/6), this.y - (this.h * 3/16))
        ctx.lineTo(this.x + this.w + (this.w * 1/6), this.y - (this.h * 3/16))
        ctx.moveTo(this.x + this.w, this.y + this.h)
        ctx.lineTo(this.x + this.w + (this.w * 1/6), this.y + this.h - (this.h * 3/16))
        ctx.moveTo(this.x + this.w + (this.w * 1/6), this.y + this.h - (this.h * 3/16))
        ctx.lineTo(this.x + this.w + (this.w * 1/6), this.y - (this.h * 3/16))
        ctx.stroke()
        ctx.restore()
    }

    this.drawDisplay = function(){
        ctx.save()
        ctx.lineWidth = 2
        ctx.strokeStyle = '#00f'
        ctx.strokeRect(this.x + (this.w * 2/3), this.y + (this.h * 1/8), this.w * 5/18, this.h * 3/20)
        ctx.restore()
    }

    this.drawVisor = function(){
        ctx.save()
        ctx.fillStyle = '#aaa'
        ctx.fillRect(this.x + (this.w * 1/18), this.y + (this.h * 1/8), this.w * 5/9, this.h * 3/4)
        ctx.restore()
    }
}