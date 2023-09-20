

$(document).ready(function(){	
	/* window scroll */
	$(window).on("scroll", function(event){

		const scrollTop = $(window).scrollTop();
        const footH = $('#footer').outerHeight();
        const btnH = $('#btnTop').outerHeight();
        const val = $(document).height() - $(window).height() - footH;

		//스크롤 다운 시 btn-top(btn-top button fadeIn&Out when Scroll Down)
		if( scrollTop > 0 ){
			$('#btnTop').stop().fadeIn(200);
		}else {
			$('#btnTop').stop().fadeOut(200);
		}

        //Footer 영역에 가까워 질때, btn-top 버튼 포지션( btn-top position when approaching footer )
        if( scrollTop >= val + btnH  ){
            $('#btnTop').css('bottom' , footH + 10 + 'px');
        }else{
            $('#btnTop').css('bottom' , '1rem');
        }   
	});

	/* top button click event */
	$("#btnTop").on('click' , function(e) {
        $('html').animate({scrollTop : 0}, 300);
    });

    /* allMenu */
    $('#btnAllmenu').on('click', function(){
        $('#allMenu').addClass('active');
        $('body').addClass('hidden');
        $('#btnClose').show();
    });

    $('#btnClose').on('click', function(){
        $('#allMenu').removeClass('active');
        $('body').removeClass('hidden');
        $(this).hide();
    });
    
});