$(document).ready(function(){

	cntnr_width = 500;

	$('#container').width(cntnr_width);
	$('#container').height(cntnr_width);

	grid(cntnr_width);

	//Clear button
	$('#clear').click(function(){

		$('.inner_sqr').remove();

	});

	$('.inner_sqr').hover(function(){
	
		$(this).css("background-color","#666");
	
	});

});

function grid(cntnr_width){


	var sqr_qty = prompt("How many squares per side? Container size is: " + cntnr_width + "px");

	//div definition. The '- 3' comes from (margin 1px + left border 1px + right border 1px). It's a square so it works for vertical and horizontal measures. 
	$div = '<div class="inner_sqr" style="width:' + (cntnr_width / (sqr_qty) - 3) + 'px; height:' + (cntnr_width / (sqr_qty) - 3) +'px;"></div>';


	// Grid creation
	for (i = (sqr_qty * sqr_qty); i > 0 ; i --) {
		$('#container').append($div);
	}	



}
