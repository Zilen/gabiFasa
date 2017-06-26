$('.number-only').on('input', function (event) { 
	    this.value = this.value.replace(/[^0-9]/g, '');
	});

	
	$('.simu1 input').change( function () { calc($(this).val(), 'simu1', 2);});
	$('.simu2 input').change( function () { calc($(this).val(), 'simu2', 3);});
	$('.simu3 input').change( function () { calc($(this).val(), 'simu3', 4);});
	
	
	function calc(m2,nm , val) {
		if(m2 != '')
		$('.'+nm+' span').html('R$ '+ (m2*val)+',00');
		
	}