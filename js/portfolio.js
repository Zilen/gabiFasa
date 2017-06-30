$( document ).ready(function() {
		
		var inicio = $('#portfolio-section');
		$('#portfolio-params .imagem-projeto').each(function( index ) {
			console.log($(this).data('image-w'));
	<!--		($(this).clone().appendTo(inicio)).addClass('portfolio focuspoint').removeClass('oculto'); -->
			
			$('#portfolioGrid').append(
			'<div class="col-md-4 col-sm-6 portfolio-item">                                           '+
            '        <a id="portfolioLink'+ index +'" href="#portfolioModal'+ index + '" class="portfolio-link portfolio-hover" data-toggle="modal" style="width: 100%; height: 200px;">           '+
            '            <div class="portfolio-hover" style="width: 100%; height: 100%; z-index: 3;">                                                '+
            '                <div class="portfolio-hover-content" style="width: 100%; height: 100%;" >                                    '+
            '                    <i class="fa fa-plus fa-3x"></i>                                     '+
            '                </div>                                                                   '+
            '            </div>                                                                       '+
			'            <div id="portfolioImg'+ index +'" class="focuspoint" style="width: 100%; height: 100%;">                                                                       '+
            '            	<img src="'+ $(this).children('img').attr('src') +'" class="img-responsive" alt="">       '+
			'            </div>                                                                       '+
            '        </a>                                                                             '+
            '        <div class="portfolio-caption">                                                  '+
            '            <h4>'+  $(this).data('titulo') +'</h4>                                                         '+
            '            <p class="text-muted">comentário</p>                                     '+
            '        </div>                                                                           '+
            '    </div>                                                                               '
			);
			$('#portfolioImg'+index).attr('data-image-w',$(this).data('image-w'));
			$('#portfolioImg'+index).attr('data-image-h',$(this).data('image-h'));
			$('#portfolioImg'+index).attr('data-focus-x',$(this).data('focus-x'));
			$('#portfolioImg'+index).attr('data-focus-y',$(this).data('focus-y'));
			
			$('#portfolio').after(
			
	        '<div class="portfolio-modal modal fade" id="portfolioModal'+index+'" tabindex="-1" role="dialog" aria-hidden="true">                                            '+
            '    <div class="modal-dialog">                                                                                                                          '+
            '        <div class="modal-content">                                                                                                                     '+
            '            <div class="close-modal" data-dismiss="modal">                                                                                              '+
            '                <div class="lr">                                                                                                                        '+
            '                    <div class="rl">                                                                                                                    '+
            '                    </div>                                                                                                                              '+
            '                </div>                                                                                                                                  '+
            '            </div>                                                                                                                                      '+
            '            <div class="container" style="max-width:100%; max-height:100%;">                                                                                                                     '+
            '                <div class="row">                                                                                                                       '+
            '                    <div class="col-lg-12">                                                                                              '+
            '                        <div class="modal-body" >                                                                                                        '+
            '                            <h2  style="max-width:100%; max-height:100%;">'+$(this).data('titulo')+'</h2>                                                                                                       '+
            '                            <p class="item-intro text-muted">'+$(this).data('texto-desc')+'</p>                                                '+
            '                            <img class="img-responsive img-centered" src="'+ $(this).children('img').attr('src') +'" alt="" style="max-width:100%; max-height:100%;">                                    '+
            '                            <p>teste</p>                                                                                                                '+
            '                            <button type="button" class="btn btn-primary" data-dismiss="modal"><i class="fa fa-times"></i>Fechar</button>       '+
            '                        </div>                                                                                                                          '+
            '                    </div>                                                                                                                              '+
            '                </div>                                                                                                                                  '+
            '            </div>                                                                                                                                      '+
            '        </div>                                                                                                                                          '+
            '    </div>                                                                                                                                              '+
            '</div>                                                                                                                                                  '
			);
			
		});
		
		$('.focuspoint').focusPoint();
	});