$(function(){
	/*var menu = $(".gnb>li"),
		menuLast = $(".gnb>li:last-child"),
		heading = $('h1'),
		check = false;*/

	//방법2
	/*heading.on({
		focusin : function(){
			menu.removeClass('on');
		}
	});
	menu.on({
		mouseenter : function(){
			var $on = $(this).siblings('.on');
			if($on.length > 0){
				$on.removeClass('on').find('ol.submenu').hide();
				check = false;
			}
			$(this).addClass('on').find('ol.submenu').show();
		},
		focusin : function(){
			$(this).mouseenter();
		},
		mouseleave : function(){
			if( check ){
				$(this).find('ol.submenu').show();
			}else{
				$(this).removeClass('on').find('ol.submenu').hide();
				
			}
		}
	});
	menuLast.on({
		focusout : function(){
			$(this).removeClass('on').blur();
		}
	});*/

	var menuA = $(".gnb>.menu1>a"),
		subMenu = $(".submenu"),
		subMenuLastA = ('.submenu>li:last-child>a'),
		$gnb = $(".gnb"),
		$heading = $("h1>a");

	menuA.on('mouseover focus', function(){
		menuA.parent().removeClass('on');
		$(this).parent().addClass('on').find('.submenu').show();
	});
	$gnb.on('mouseleave', function(){
		menuA.next().hide();
		menuA.parent('li').removeClass('on');
	});
	subMenuLastA.on('blur', function(){
		menuA.parent('li').removeClass('on');
	});


	var $menuWarp = $('.menu_wrap'),
		$menuList = $menuWarp.find(' .cnt_menu'),
		$menuListEl = $menuList.find('> dl dd a'),
		$nav = $('.nav_menu')

	$menuListEl.on('focus', function(){
		//clearTimeout(setMenuOp)
		$menuListEl.parents('.cnt_menu').removeClass('on');
		$(this).parents('.cnt_menu').addClass('on');
	});
	$menuListEl.on('blur', function(){
		//setMenuOp = setTimeout(function(){
			$menuListEl.parents('.cnt_menu').removeClass('on');
		//});
	});

/*	var $quick = $('.quick>li'),
		$qukLast = $('.quick>li:last-child'),
		$quk_sub = $('.quk_sub')*/

	//방법2
/*	$quick.on({
		mouseenter : function(){
			var $on = $(this).siblings('.on');
			if($on.length > 0){
				$on.removeClass('on').find('.quk_sub').hide();
				check = false;
			}
			$(this).addClass('on').find('.quk_sub').show();
		},
		focusin : function(){
			$(this).mouseenter();
		},
		mouseleave : function(){
			if( check ){
				$(this).find('.quk_sub').show();

			}else{
				$(this).removeClass('on').find('.quk_sub').hide();
				
			}
		}
	});
	$qukLast.on({
		focusout : function(){
			$(this).removeClass('on');
		}
	})*/
});

