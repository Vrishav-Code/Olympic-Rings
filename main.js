canvas=document.getElementById("myCanvas")

ctx=canvas.getContext("2d")
color="blue"
ctx.beginPath()
ctx.strokeStyle=color
ctx.linewidth=5
ctx.arc(300,200,40,0,2*Math.PI)
ctx.stroke()

ctx=canvas.getContext("2d")
color="yellow"
ctx.beginPath()
ctx.strokeStyle=color
ctx.linewidth=5
ctx.arc(350,250,40,0,2*Math.PI)
ctx.stroke()

ctx=canvas.getContext("2d")
color="black"
ctx.beginPath()
ctx.strokeStyle=color
ctx.linewidth=5
ctx.arc(400,200,40,0,2*Math.PI)
ctx.stroke()

ctx=canvas.getContext("2d")
color="green"
ctx.beginPath()
ctx.strokeStyle=color
ctx.linewidth=5
ctx.arc(450,250,40,0,2*Math.PI)
ctx.stroke()

ctx=canvas.getContext("2d")
color="red"
ctx.beginPath()
ctx.strokeStyle=color
ctx.linewidth=5
ctx.arc(500,200,40,0,2*Math.PI)
ctx.stroke()
