window.onload = function(){
    var guest = document.getElementById('microwave')
    var cnv = document.querySelector('canvas')
    var ctx = cnv.getContext('2d')

    var microwave = new Microwave(ctx)

    function cleanScreen(){
        ctx.save()
        ctx.fillStyle = '#fff'
        ctx.clearRect(0, 0, cnv.width, cnv.height)
        ctx.restore()
    }

    function setGuestName(){
        var name = prompt('What\'s your name:')
        validateGuestName(name)
    }

    function validateGuestName(name){
        var condition = name.trim() !== '' && name.length < 20
        guest.textContent = condition ? `Microwave of ${name}` : 'Microwave'
    }

    function loop(){
        window.requestAnimationFrame(loop, cnv)
        cleanScreen()
        microwave.draw()
    }

    setGuestName()
    loop()
}