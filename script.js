gsap.registerPlugin(ScrollTrigger);

var t10=gsap.timeline({
    delay:.5,
    duration:1
});

t10
.from(".textarea p",{
    opacity:0
})

var t1= gsap.timeline({scrollTrigger:{
    trigger:"#main",
    // markers:1,
    start:"50% 50%",
    end:"160% 50%",
    scrub:1.5,
    pin:true,
    
}});


t1
.to("#lineone",{
    marginTop:"-120vh",
},'a')
.to("#linetwo",{
    marginTop:"20vh",
},'a')


$('.textarea h1').textillate({initialDelay: 200, in: { effect: 'fadeInUp',delayScale:1, delay: 40 } });



var t5 = gsap.timeline({scrollTrigger:{
    trigger:"#main2",
    // markers:true,
    start:"75% 50%",
    end:"100% 50%",
    scrub:6,
    duration: 1,
    delay:1,
    pin:true,
  }});
  t5
  .to(".img2",{
    width: "100vw",
    height: "100vh",
  })
