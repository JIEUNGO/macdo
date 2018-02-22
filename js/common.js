$(function(){
	var menuA = $(".gnb>.menu1>a"),
		subMenu = $(".submenu"),
		$gnb = $(".gnb");


	menuA.on('mouseover focus', function(){
		menuA.parent().removeClass('on');
		$(this).parent().addClass('on').find('.submenu').show();
	});
	$gnb.on('mouseleave', function(){
		menuA.next().hide();
		menuA.parent('li').removeClass('on');
	});
	$("h1, .banner_wrap").on('focusin', function(){
		menuA.next().hide();
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

	var $quickA = $('.quick > li > a'),
		$quk_sub = $('.quk_sub');

		$quickA.on('mouseover focus', function(){
			$quickA.parent().removeClass('on');
			$(this).parent().addClass('on').find('.quk_sub').show();
		});
		$('.nav_menu, .sns').on('focusin', function(){
			$quickA.parent().removeClass('on');
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

