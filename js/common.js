$(function(){
	var menu = $(".gnb>li");
//방법1
	menu.on("mouseover focus", function(){
		var myThis = $(this);

		myThis.closest("ul").find(">li>.submenu").stop().hide()
		.end().find(">li.on").removeClass("on").off('hover').blur();
        myThis.find(">.submenu").show();
        $(this).addClass("on");
					});
	menu.on("mouseout blur", function(){
		var myThis = $(this);
		myThis.closest("ul").find(">li>.submenu").stop().hide()
		.end().find(">li.on").removeClass("on").off('hover').blur();
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
	});

	/*quick*/
	var quk_menu = $(".quick > li");

	quk_menu.on("mouseover focus", function(){
		var myThis = $(this);
		myThis.closest("ul").find(">li .quk_sub").stop().hide()
		.end().find("li.on").removeClass("on").off('hover').blur();
		myThis.find(">.quk_sub").show();
        $(this).addClass("on");
	});
	quk_menu.on("mouseout blur", function(){
		var myThis = $(this);
		myThis.closest("ul").find(">li .quk_sub").stop().hide()
		.end().find("li.on").removeClass("on").off('hover').blur();
	});




});

