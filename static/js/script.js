$(document).ready(function(){
	
	$('div.section').click(function(){
		$("div.section").on('click', function(){return false});
		val = $(this).attr('ref');
		if($('div.console').children("div[style='display: block;']").size() > 0){
		    $('div.console').children("div[style='display: block;']").fadeOut('slow',function(){
			    $('#'+val).fadeIn('slow');
			});
		}
		else{
		    $('#'+val).fadeIn('slow');
		}
		$("div.section").off('click', function(){return false});
	    });
});