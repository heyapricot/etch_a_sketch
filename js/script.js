$(document).ready(function(){
	sqr_qty = 20;
	cntr_width = cntr_height = 500;

	$div = '<div class="inner_sqr" style="width:' + (cntr_width / (sqr_qty) - 1) + 'px; height:' + (cntr_width / (sqr_qty) - 1) +'px;"></div>';
	$('#container').width(cntr_width);
	$('#container').height(cntr_height);

	for (i = (sqr_qty * sqr_qty); i > 0 ; i --) {

		$('#container').append($div);
	

	}	

});
