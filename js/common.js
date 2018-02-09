$(function(){
	var sub_menu = $('#header .gnb ol');
	var menu = $(".gnb>li");
	var check = false;
//방법1
	menu.on("mouseover focus", function(){
		var myThis = $(this);
		var myThisOn = $(this).siblings('on');

		myThis.closest("ul").find(">li>.submenu").stop().hide()
		.end().find("li.on").removeClass("on").off('hover').blur();
        myThis.find(">.submenu").show();
        $(this).addClass("on");
	});
	menu.on("mouseout blur", function(){
		var myThis = $(this);
		myThis.closest("ul").find(">li>.submenu").stop().hide()
		.end().find("li.on").removeClass("on").off('hover').blur();
	});

//방법2
/*	menu.on({
		mouseenter : function(){
			var $actived = $(this).siblings('.on');
			if($actived.length > 0){
				$actived.removeClass('on').find('ol.submenu').hide();
				check = false;
			}
			$(this).addClass('on').find('ol.submenu').show();
		},
		 mouseleave : function(){
                if( check ){
                    $(this).find('ol.submenu').show();
                }else{
                    $(this).removeClass('on').find('ol.submenu').hide();
                    
                }
            }
	});*/
});


//$(document).ready(function(){
    
    //$("[placeholder]").textPlaceholder();

    //GNB
    
  /*  function gnb(){
        var check = false;

        $('#gnb input:text').focus(function(){
            check = true;
        });
        $('#gnb ul.d1 > li').on({
            mouseenter : function(){
                // 메뉴 초기화
                var $actived = $(this).siblings('.active');
                if( $actived.length > 0 ) {
                    $actived.removeClass('active') // .filter('.active')
                        .find('div.submenu').hide();
                        check = false;
                }
                $(this).addClass('active').find('div.submenu').show();
            },
            focusin : function(){
                $(this).mouseenter();
            },
            mouseleave : function(){
                if( check ){
                    $(this).find('div.submenu').show();
                }else{
                    $(this).removeClass('active').find('div.submenu').hide();
                    
                }
            },
            focusout : function(){
                
            }
        });

        
    }gnb();*/