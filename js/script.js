$(document).ready(function(){

	sqr_qty = 16;
	cntr_width = cntr_height = 500;
	
	//div definition. The '- 3' comes from (margin 1px + left border 1px + right border 1px). It's a square so it works for vertical and horizontal measures. 
	$div = '<div class="inner_sqr" style="width:' + (cntr_width / (sqr_qty) - 3) + 'px; height:' + (cntr_width / (sqr_qty) - 3) +'px;"></div>';

	$('#container').width(cntr_width);
	$('#container').height(cntr_height);

	// Grid creation
	for (i = (sqr_qty * sqr_qty); i > 0 ; i --) {
		$('#container').append($div);
	}	

	$('.inner_sqr').hover(function(){
	
		$(this).fadeOut(100);
		$(this).fadeIn(500);
	
	});
});
