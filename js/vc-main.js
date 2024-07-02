$(document).ready(function(){
  if($("body").hasClass("villalta-citala")){
    setTimeout(()=>{
      $(".animals").addClass("in");
    },500);

    setTimeout(()=>
    {
      $(".card").addClass("cloudy");
    },5000)
  }
    // $(".nube").click(function(){
    //     console.log("LCI")
    //   $(".blue").addClass("in");
    //   $(".pink").addClass("in");
    // });

  });