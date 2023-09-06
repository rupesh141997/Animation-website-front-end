

var cur=document.querySelector("#cursure")
var curr=document.querySelector("#cursblur")

 document.addEventListener("mousemove",function(dets){
     cur.style.left=dets.x + "px"
     cur.style.top=dets.y + "px"
    curr.style.left=dets.x -100 +"px"
    curr.style.top=dets.y -100+"px"
})

 

gsap.to("#nav",{
    backgroundColor:"black",
    duration:1,
    height:"60px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
         
        scrub:1.5
    }


})
    gsap.to("#main",{
        backgroundColor:"black",
        scrollTrigger:{
            // markers:true,
            trigger:"#main",
            scroller:"body",
            start:"top -30%",
            end:"top -100%",
            scrub:1
        }

    })
