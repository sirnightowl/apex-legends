// HEADER FILTERS
/*
$('.menu  button').on( "click", function() {
  
	var hightlighted = $(this).data('highlight');
	
	if (hightlighted == "all") {
		$('.legend-portrait').removeClass('gray');
		$('.legend-portrait').removeClass('spotlight');
	}else{
	
	$('.legend-portrait').addClass('gray');
	$('#legends').find("[data-class='" + hightlighted + "']").removeClass('gray');
	console.log(hightlighted);
}
	
});

*/


// right click menu
/*$(document).on("contextmenu", ".legend-portrait", function(e){
  
	var selected = $(this).data('legend');
	$('body').removeClass();
	$('body').addClass(selected+'-selected');
    $('body').addClass('showing-abilities');
	$('.legend-portrait').removeClass('active');
	$('.legend-portrait').removeClass('spotlight');
	if ($(this).hasClass("gray")) {
  $('.legend-portrait').removeClass('gray');
	}
	$(this).addClass('active');
	
	var $newname = $(this).data('legend');
	if ($newname == "madmaggie") { var $newname = "Mad Maggie"; }
	var $newtag = $(this).data('tag');
	newname($newname,$newtag);
	
	var el = $(selected+'-abilities'),  
			newone = el.clone(true);
			el.before(newone);
			$("." + el.attr("class") + ":last").remove();

		
	
	return false;
	
});*/

function newname(param1,param2,param3) {
	
	
   	$("#name h2").text(param1);
		$("#name h3").text(param2);

			var el     = $('#name h2'),  
			newone = el.clone(true);
			el.before(newone);
			$("." + el.attr("class") + ":last").remove();

			var el     = $('#name h3'),  
			newone = el.clone(true);
			el.before(newone);
			$("." + el.attr("class") + ":last").remove();
	
	if (param1 == "Mad Maggie") { var param1 = "madmaggie"; }
	
	$('.char').removeClass('show');
	$('#'+param1).addClass('show');
    
    if (param3 == "assault") { var $classtagline = "SSSS"; }
    if (param3 == "skirmisher") { var $classtagline = "SSSS"; }
    if (param3 == "recon") { var $classtagline = "SSSS"; }
    if (param3 == "support") { var $classtagline = "SSSS"; }
    if (param3 == "controller") { var $classtagline = "SSSS"; }
    
    
    $(".classtext h3").text(param3);
    $(".classtext h4").text($classtagline);
    $(".classtext img").attr("src","/apex-legends/public/img/icons/apex_"+param3+".png");
    
    
    
	
}




$('.legend-portrait').on( "click", function() {
   //alert('Context Menu event has fired!');
  
	$('.legend-portrait').removeClass('spotlight');
	$('.legend-portrait').removeClass('active');
	$(this).addClass('active');
	
	var newtag = $(this).data('tag');
	
	var $newname = $(this).data('legend');
	if ($newname == "madmaggie") { var $newname = "Mad Maggie"; }
	var $newtag = $(this).data('tag');
    var $newclass = $(this).data('class');
	newname($newname,$newtag,$newclass);
    
    if ($newname == "Mad Maggie") { var $newname = "madmaggie"; }
    
    $('body').removeClass();
    $('body').addClass($newname+'-selected');
    

});

//RANDOMISER
$('fieldset button').on( "click", function() {
  
	var hightlighted = $(this).data('highlight');
	
	if (hightlighted == "all") {
		$('.legend-portrait').removeClass('gray');
		$('.legend-portrait').removeClass('spotlight');
	}else{
	
	$('.legend-portrait').addClass('gray');
	$('#legends').find("[data-class='" + hightlighted + "']").removeClass('gray');
	console.log(hightlighted);
}
	
	var len = $(".legend-portrait").not('.gray').length;
	var random = Math.floor( Math.random() * len );
	$(".legend-portrait").removeClass('spotlight');
	$(".legend-portrait").not('.gray').eq(random).addClass('spotlight');
	
	$('.legend-portrait').removeClass('active');
	$('.spotlight').addClass('active');
	
	var $newname = $('.spotlight').data('legend');
	var $newtag = $('.spotlight').data('tag');
    var $newclass = $('.spotlight').data('class');
    
    $('body').removeClass();
    $('body').addClass($newname+'-selected');
    
	newname($newname,$newtag,$newclass);
	
	
	
});


//ESC MODAL
$(document).on('keyup', function(event) {
          if(event.key == "Escape") {
              
              if ($('body').hasClass("showing-abilities")) {
                $('body').removeClass();
                }else{
                   $('.legend-portrait').removeClass('gray');
		          $('.legend-portrait').removeClass('spotlight'); 
                    
                }
          }
        });

//RANDOMISER
$('#clear-legends').on( "click", function() {
  
	 $('.legend-portrait').removeClass('gray');
		          $('.legend-portrait').removeClass('spotlight'); 
	
});





