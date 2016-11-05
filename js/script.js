$(document).ready(function(){

	cntnr_width = 500;

	$('#container').width(cntnr_width);
	$('#container').height(cntnr_width);

	$('#container').css({
		'position' : 'absolute',
		'left' : '50%',
		'top' : '50%',
		'margin-left' : -$('#container').outerWidth()/2,
		'margin-top' : -$('#container').outerHeight()/2
	});

	$('#commands').css({

		'position' : 'absolute',
		'left' : '50%',
		'margin-left' : - $('#commands').outerWidth()/2
	});

	//Clear button
	$('#clear').click(function(){

		$('.inner_sqr').remove();
		grid(cntnr_width);

	});

	grid(cntnr_width);

});

function grid(cntnr_width){


	var sqr_qty = prompt("How many squares per side? Container size is: " + cntnr_width + "px");

	//div definition. The '- 3' comes from (margin 1px + left border 1px + right border 1px). It's a square so it works for vertical and horizontal measures. 
	$div = '<div class="inner_sqr" style="width:' + Math.floor(cntnr_width / (sqr_qty) - 3) + 'px; height:' + Math.floor(cntnr_width / (sqr_qty) - 3) +'px;"></div>';


	// Grid creation
	for (i = (sqr_qty * sqr_qty); i > 0 ; i --) {
		$('#container').append($div);
	}	

	$('.inner_sqr').hover(function(){
		colors = "rgb(" + Math.floor(Math.random()*255) + "," + Math.floor(Math.random()*255) + "," + Math.floor(Math.random()*255) + ")";
		$(this).css("background-color", colors);
	
	});


}
