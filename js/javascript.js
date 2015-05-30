//SWAPS OUT BCK GRND IMAGE
//Michael Solution - Far less code
$('#list > li').click(function(){
  $('.marquee-wrapper').css('background-image','url("img/'+ this.id + '.jpg")');
  $('.marquee-callout').hide();
  $('#' + this.id + '-copy').show();
});



//Jarvis Soluton - uses event listener on every item
/*
//SWAPS OUT BCK GRND IMAGE
//BUSINESS ANIMATION
$('#business').click(function(){
  $('.marquee-wrapper').css('background-image','url("img/business.jpg")');
  $('#default, #culture-copy, #environment-copy, #housing-copy, #social-copy,#civic-copy,#education-copy,#health-copy').css("display","none");
  $('#business-copy').css("display","initial");
  });

//CULTURE ANIMATION
$('#culture').click(function(){
  $('.marquee-wrapper').css('background-image','url("img/culture.jpg")');
  $('#default,#business-copy,#environment-copy,#housing-copy,#social-copy,#civic-copy,#education-copy,#health-copy').css("display","none");
  $('#culture-copy').css("display","initial");
  });

//ENVIRONMENT ANIMATION
$('#environment').click(function(){
  $('.marquee-wrapper').css('background-image','url("img/environment.jpg")');
  $('#default,#business-copy,#culture-copy,#housing-copy,#social-copy,#civic-copy,#education-copy,#health-copy').css("display","none");
  $('#environment-copy').css("display","initial");
  });

//HOUSING ANIMATION
$('#housing').click(function(){
  $('.marquee-wrapper').css('background-image','url("img/housing.jpg")');
  $('#default,#business-copy,#culture-copy,#environment-copy,#social-copy,#civic-copy,#education-copy,#health-copy').css("display","none");
  $('#housing-copy').css("display","initial");
  });

//SOCIAL ANIMATION
$('#social').click(function(){
  $('.marquee-wrapper').css('background-image','url("img/social.jpg")');
  $('#default,#business-copy,#culture-copy,#environment-copy,#housing-copy,#civic-copy,#education-copy,#health-copy').css("display","none");
  $('#social-copy').css("display","initial");
  });
//CIVIC ANIMATION
$('#civic').click(function(){
  $('.marquee-wrapper').css('background-image','url("img/civic.jpg")');
  $('#default,#business-copy,#culture-copy,#environment-copy,#housing-copy,#social-copy,#education-copy,#health-copy').css("display","none");
  $('#civic-copy').css("display","initial");
  });
//EDUCATION ANIMATION
$('#education').click(function(){
  $('.marquee-wrapper').css('background-image','url("img/education.jpg")');
  $('#default,#business-copy,#culture-copy,#environment-copy,#housing-copy,#social-copy,#civic-copy,#health-copy').css("display","none");
  $('#education-copy').css("display","initial");
  });
//HEALTH ANIMATION
$('#health').click(function(){
  $('.marquee-wrapper').css('background-image','url("img/health.jpg")');
  $('#default,#business-copy,#culture-copy,#environment-copy,#housing-copy,#social-copy,#civic-copy,#education-copy').css("display","none");
  $('#health-copy').css("display","initial");
  });
*/  
  
//MOBILE DROPDOWN
$(".cross").hide();
$(".menu").hide();
$(".hamburger").click(function(){
  $(".menu").slideToggle("fast", function(){
  $(".hamburger").hide();
  $(".cross").show();
  });
});

$(".cross").click(function(){
  $(".menu").slideToggle( "fast", function(){
    $(".cross").hide();
    $(".hamburger").show();
  });
});
