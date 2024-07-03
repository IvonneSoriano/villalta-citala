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

  });