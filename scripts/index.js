$(function(){
	//==========鼠标滑过出现隐藏块===============
	$('.jyincang').hover(
		function(){
			$(this).find('.show').show();
		},
		function(){
			$(this).find('.show').hide();
		}
	);
	//============左右微移动==============
	$('.jyidong').hover(
		function(){
			$(this).css({position:'relative'});
			$(this).stop();
			$(this).animate({left:-10},200);
		},
		function(){
			$(this).stop();
			$(this).animate({left:0},200);
		}
	);
	$('.jzyidong').hover(
		function(){
			$(this).stop();
			$(this).animate({marginLeft:'+10px'},'slow');
		},
		function(){
			$(this).stop();
			$(this).animate({marginLeft:'0px'},'fast');
		}
	);
	
	//======头部导航条============
	var ti;
	$(window).scroll(function(){
		if($(window).scrollTop()>300){
			clearTimeout(ti);
			ti=setTimeout(function(){
				$('#top_block').show();
			},500);
		}else{
			clearTimeout(ti);
			$('#top_block').hide();
		}
	});
	



	//==============返回顶部==================
	$('#top_btn').click(function(){
		$({top:$(window).scrollTop()}).animate(
			{top:0},
			{
				duration:700,
				step:function(){
					$(window).scrollTop(this.top);
				}
			}
		);
	});
	//===============左侧移动滑出相应的块================
	$('.jff').hover(
		function(){
			$('.jff').stop();
			$(this).find('.jfh').show(0,function(){
				$(this).animate({left:-90},200);
			});
		},
		function(){
			$('.jff').stop();
			$(this).find('.jfh').css({left:-120}).hide(0);
		}
	);
	//==================楼层效果================

	$('.floor_xiao').each(function(i){
		$(this).data('index',i);
	});
	$('.floor_xiao').click(function(){
		var i=$(this).data('index');
		var newtop=$($('.floor')[i]).offset().top-50;
		$({top:$(window).scrollTop()}).animate(
			{top:newtop},
			{
				duration:700,
				step:function(){
					$(window).scrollTop(this.top);
				}
			}
		);
	});

	//==============左边导航条===================
	var a=[1180,1633,2086,2663,3116,3569,4146,4599,5052,5629,6082,6535];
	$(window).scroll(function(){
		var top=$($('.floor')[0]).offset().top-80;
		if($(window).scrollTop()>=top){
			$('.left').show();
		}else{
			$('.left').hide();
		}
		for(var i=0;i<a.length;i++){
			if($(window).scrollTop()>=(a[i]-100)&&$(window).scrollTop()<=(a[i+1]-80)){
				$($('.lefttu')[i]).css({background:'url(./img/nl'+i+'.png) no-repeat'});
			}else{
				$($('.lefttu')[i]).css({background:'url(./img/zuofix'+i+'.png) no-repeat 50% 50%'});
			}
		}
	});
	//=================右边部分=================
	var bgse=['#ffe94b','#adb1ba','#05548f','#af121b','#fbaf0e','#c0f9f2','#f0e3d2','#de0609','#cf1f5f','#fec4d3','#29a6ff','#e4e2e3','#30c4ff','#dfeed1','#e4e2e3'];
	$('.z-item').each(function(i){
		$(this).data('index',i);
	});
	$('.z-item').hover(function(){
		clearInterval(timerId);
		$('.hide').stop();
		$(this).find('.hid').show(0,function(){
			$(this).animate({left:180},200);
		});
		var i=$(this).data('index');
		$('.menu').css({background:bgse[i]});
		$('.zh-item').hide();
		$($('.zh-item')[i]).show();
		$('.yl-item').hide();
		$($('.yl-item')[i]).show();
		$('.y-item').hide();
		$($('.y-item')[i]).show();
	},function(){
		clearInterval(timerId);
		$('.zh-item').hide();
		$('.yl-item').hide();
		timerId=setInterval(lunbo,1000);
		$('.hide').stop();
		$(this).find('.hid').animate({left:200},20,function(){
			$(this).hide(0);
		});
	});

	//================轮播======================
	$('.jingxuan').hover(function(){
		$('.zh-item').hide();
		$('.yl-item').hide();
		clearInterval(timerId);
		timerId=setInterval(lunbo,1000);
	});
	

	var bg=['#DFC1FD','#F4F4F4','#6CD6B2','#E3E3E3', '#BC15F9', '#5874EF'];
	var index=0;
	var lunbo=function(){
		$('.menu-imgchang').hide();
		var el=$('.menu-imgchang')[index];
		$(el).show();
		$('.menu-circle').removeClass('red');
		$($('.menu-circle')[index]).addClass('red');
		$('.menu').css({background:bg[index]});
		index+=1;
		if(index===$('.menu-imgchang').length){
			index=0;
		}
	};
	$('.menu-circle').each(function(i){
		$(this).data('index',i)
	});
	$('.menu-circle').hover(function(){
		clearInterval(timerId);
		$('.menu-circle').removeClass('red');
		$(this).addClass('red');
		var i=$(this).data('index');
		$('.menu-imgchang').hide();
		$($('.menu-imgchang')[i]).show();
		$('.menu').css({background:bg[i]});
		index=i;
	},function(){
		clearInterval(timerId);
		timerId=setInterval(lunbo,1000);
	});
	var timerId=setInterval(lunbo,1000);

	//==============热门品牌========================
	$('.brand li').each(function(i){
		$(this).data('index',i);
	});
	$('.brand li').click(function(){
		var i=$(this).data('index');
		$('.hotbrand-imgzjuchang ul').hide();
		$($('.hotbrand-imgzjuchang ul')[i]).show();
	});
	$('.brand-ts').click(function(){
		var i=Math.floor(Math.random()*4);
		$('.hotbrand-imgzjuchang ul').hide();
		$($('.hotbrand-imgzjuchang ul')[i]).show();
	});


	//===============侧栏轮播==============
	var cl1=0;
	var cl1lunbo=function(){
		$('.con-xiao').hide();
		var el1=$('.con-xiao')[cl1];
		$(el1).show();
		$('.con-xiao').removeClass('contentl-show');
		$($('.con-xiao')[cl1]).addClass('contentl-show');
		cl1+=1;
		if(cl1===$('.con-xiao').length){
			cl1=0;
		}
	};
	var cl1timerId=setInterval(cl1lunbo,2000);
	$('.cc1').hover(function(){
		clearInterval(cl1timerId);
	},function(){
		cl1timerId=setInterval(cl1lunbo,2000);
	});

	$('.tt1 ul').each(function(i){
		$(this).data('index',i);
	});
	var i=$('.tt1 ul').data('index');
	$('.dian2').click(function(){
		$('.tt1 ul').hide();
		$($('.tt1 ul')[i]).show();
		i+=1;
		if(i==3){
			i=0;
		}
	});
	$('.dian1').click(function(){
		$('.tt1 ul').hide();
		$($('.tt1 ul')[i]).show();
		i-=1;
		if(i==-1){
			i=2;
		}
	});
	$('.dian1').mousedown(function(e){
		e.preventDefault();
	});
	$('.dian2').mousedown(function(e){
		e.preventDefault();
	});
	var cl2=0;
	var cl2lunbo=function(){
		$('.con-xiao2').hide();
		var el1=$('.con-xiao2')[cl1];
		$(el1).show();
		$('.con-xiao2').removeClass('contentl-show');
		$($('.con-xiao2')[cl1]).addClass('contentl-show');
		cl2+=1;
		if(cl2===$('.con-xiao2').length){
			cl2=0;
		}
	};
	var cl2timerId=setInterval(cl2lunbo,2000);
	$('.cc2').hover(function(){
		clearInterval(cl2timerId);
	},function(){
		cl2timerId=setInterval(cl2lunbo,2000);
	});

	$('.tt2 ul').each(function(i){
		$(this).data('index',i);
	});
	var i=$('.tt2 ul').data('index');
	$('.dian2-1').click(function(){
		$('.tt2 ul').hide();
		$($('.tt2 ul')[i]).show();
		i+=1;
		if(i==3){
			i=0;
		}
	});
	$('.dian1-1').click(function(){
		$('.tt2 ul').hide();
		$($('.tt2 ul')[i]).show();
		i-=1;
		if(i==-1){
			i=2;
		}
	});
	$('.dian1-1').mousedown(function(e){
		e.preventDefault();
	});
	$('.dian2-1').mousedown(function(e){
		e.preventDefault();
	});
	var cl3=0;
	var cl3lunbo=function(){
		$('.con-xiao3').hide();
		var el3=$('.con-xiao3')[cl3];
		$(el3).show();
		$('.con-xiao3').removeClass('contentl-show');
		$($('.con-xiao3')[cl3]).addClass('contentl-show');
		cl3+=1;
		if(cl3===$('.con-xiao3').length){
			cl3=0;
		}
	};
	var cl3timerId=setInterval(cl3lunbo,2000);
	$('.cc3').hover(function(){
		clearInterval(cl3timerId);
	},function(){
		cl3timerId=setInterval(cl3lunbo,2000);
	});

	$('.tt3 ul').each(function(i){
		$(this).data('index',i);
	});
	var i=$('.tt3 ul').data('index');
	$('.dian2-2').click(function(){
		$('.tt3 ul').hide();
		$($('.tt3 ul')[i]).show();
		i+=1;
		if(i==3){
			i=0;
		}
	});
	$('.dian1-2').click(function(){
		$('.tt3 ul').hide();
		$($('.tt3 ul')[i]).show();
		i-=1;
		if(i==-1){
			i=2;
		}
	});
	$('.dian1-2').mousedown(function(e){
		e.preventDefault();
	});
	$('.dian2-2').mousedown(function(e){
		e.preventDefault();
	});
	var cl4=0;
	var cl4lunbo=function(){
		$('.con-xiao4').hide();
		var el4=$('.con-xiao4')[cl4];
		$(el4).show();
		$('.con-xiao4').removeClass('contentl-show');
		$($('.con-xiao4')[cl4]).addClass('contentl-show');
		cl4+=1;
		if(cl4===$('.con-xiao4').length){
			cl4=0;
		}
	};
	var cl4timerId=setInterval(cl4lunbo,2000);
	$('.cc4').hover(function(){
		clearInterval(cl4timerId);
	},function(){
		cl4timerId=setInterval(cl4lunbo,2000);
	});

	$('.tt4 ul').each(function(i){
		$(this).data('index',i);
	});
	var i=$('.tt4 ul').data('index');
	$('.dian2-4').click(function(){
		$('.tt4 ul').hide();
		$($('.tt4 ul')[i]).show();
		i+=1;
		if(i==3){
			i=0;
		}
	});
	$('.dian1-4').click(function(){
		$('.tt4 ul').hide();
		$($('.tt4 ul')[i]).show();
		i-=1;
		if(i==-1){
			i=2;
		}
	});
	$('.dian1-4').mousedown(function(e){
		e.preventDefault();
	});
	$('.dian2-4').mousedown(function(e){
		e.preventDefault();
	});
	var cl5=0;
	var cl5lunbo=function(){
		$('.con-xiao5').hide();
		var el5=$('.con-xiao5')[cl5];
		$(el5).show();
		$('.con-xiao5').removeClass('contentl-show');
		$($('.con-xiao5')[cl5]).addClass('contentl-show');
		cl5+=1;
		if(cl5===$('.con-xiao5').length){
			cl5=0;
		}
	};
	var cl5timerId=setInterval(cl5lunbo,2000);
	$('.cc5').hover(function(){
		clearInterval(cl5timerId);
	},function(){
		cl5timerId=setInterval(cl5lunbo,2000);
	});

	$('.tt5 ul').each(function(i){
		$(this).data('index',i);
	});
	var i=$('.tt5 ul').data('index');
	$('.dian2-5').click(function(){
		$('.tt5 ul').hide();
		$($('.tt5 ul')[i]).show();
		i+=1;
		if(i==3){
			i=0;
		}
	});
	$('.dian1-5').click(function(){
		$('.tt5 ul').hide();
		$($('.tt5 ul')[i]).show();
		i-=1;
		if(i==-1){
			i=2;
		}
	});
	$('.dian1-5').mousedown(function(e){
		e.preventDefault();
	});
	$('.dian2-5').mousedown(function(e){
		e.preventDefault();
	});
	var cl8=0;
	var cl8lunbo=function(){
		$('.con-xiao8').hide();
		var el8=$('.con-xiao8')[cl8];
		$(el8).show();
		$('.con-xiao8').removeClass('contentl-show');
		$($('.con-xiao8')[cl8]).addClass('contentl-show');
		cl8+=1;
		if(cl8===$('.con-xiao8').length){
			cl8=0;
		}
	};
	var cl8timerId=setInterval(cl8lunbo,2000);
	$('.cc8').hover(function(){
		clearInterval(cl8timerId);
	},function(){
		cl8timerId=setInterval(cl8lunbo,2000);
	});

	$('.tt8 ul').each(function(i){
		$(this).data('index',i);
	});
	var i=$('.tt8 ul').data('index');
	$('.dian2-8').click(function(){
		$('.tt8 ul').hide();
		$($('.tt8 ul')[i]).show();
		i+=1;
		if(i==3){
			i=0;
		}
	});
	$('.dian1-8').click(function(){
		$('.tt8 ul').hide();
		$($('.tt8 ul')[i]).show();
		i-=1;
		if(i==-1){
			i=2;
		}
	});
	$('.dian1-8').mousedown(function(e){
		e.preventDefault();
	});
	$('.dian2-8').mousedown(function(e){
		e.preventDefault();
	});











	 

 





















});




























	// var $s=function(cc){
	// 	return document.getElementsByClassName(cc);
	// };
	// var $=function(cc){
	// 	return document.getElementById(cc);
	// };
	


// //==========================顶部===================
// 	var headeryc=document.getElementsByClassName('header-yc');//bb
// 	var headerbg=document.getElementsByClassName('header-same');//aa
// 	for(var i=0;i<headerbg.length;i++){
// 		headerbg[i].index=i;
// 		headerbg[i].onmouseover=function(){
// 			headeryc[this.index].style.display='block';
// 		};
// 		headerbg[i].onmouseout=function(){
// 			headeryc[this.index].style.display='none';
// 		};
// 	}

// //==========================侧边===================
// 	var rightsame=document.getElementsByClassName('right-same');//bb
// 	var right1=document.getElementsByClassName('right1');//aa
// 	for(var i=0;i<right1.length;i++){
// 		right1[i].index=i;
// 		right1[i].onmouseover=function(){
// 			rightsame[this.index].style.display='block';
// 		};
// 		right1[i].onmouseout=function(){
// 			rightsame[this.index].style.display='none';
// 		};
// 	}
// //==========================左边===================
// 	var menuyincang=document.getElementsByClassName('menuyincang');//bb
// 	var menyyincangsame=document.getElementsByClassName('menyyincangsame');//aa
// 	for(var i=0;i<menyyincangsame.length;i++){
// 		menyyincangsame[i].index=i;
// 		menyyincangsame[i].onmouseover=function(){
// 			menuyincang[this.index].style.display='block';
// 		};
// 		menyyincangsame[i].onmouseout=function(){
// 			menuyincang[this.index].style.display='none';
// 		};
// 	}
// //==========================轮播=============================
	

// 	var circle=document.getElementsByClassName('menu-circle'),
// 		chang=document.getElementsByClassName('menu-imgjuchang'),
// 		index=0,
// 		time,
// 		OFFWIDTH=-chang[0].firstElementChild.offsetWidth,
// 		SECl=1000;
// 	circle[0].style.background='red';
// 	var shangci=circle[0];
// 	var	fn=function(){
// 		shangci.style.background='black';
// 		circle[index].style.background='red';
// 		shangci=circle[index];  //这三行代码处理轮播经过圆变红
// 		chang[0].style.marginLeft=index*OFFWIDTH+'px';
// 		index=index+1;
// 		if(index==circle.length){
// 			index=0;
// 		}
// 	};
// 	//事件添加
// 	time=setInterval(fn,SECl);
// 	for(var i=0;i<circle.length;i++){
// 		circle[i].jishu=i;
// 		circle[i].onmouseover=function(){
// 			shangci.style.background='black';
// 			this.style.background='red';
// 			shangci=this; //这三行代码处理鼠标经过圆变红
// 			clearInterval(time);
// 			chang[0].style.marginLeft=this.jishu*OFFWIDTH+'px';
// 			index=(this.jishu==circle.length-1)?0:(this.jishu+1);
// 		};
// 		circle[i].onmouseout=function(){
// 			clearInterval(time);
// 			time=setInterval(fn,SECl);
// 		};
// 	}
// 	//==================返回顶部====================
// 	var btn=document.getElementById('top_btn');
// 	var SEC=1,TIME=20;
// 	btn.onclick=function(){
// 		var shijian=document.body.scrollTop;
// 		var cha2=shijian/(TIME/SEC);
// 		clearInterval(top);
// 		var top=setInterval(function(){
// 			document.body.scrollTop=shijian;
// 			shijian-=cha2;
// 			if(shijian<=0){
// 				clearInterval(top);
// 			};
// 		},SEC);
// 	};


// 	//
// 	var block=document.getElementById('top_block');
// 	var timerIds;
// 	window.onscroll=function(){
// 		clearTimeout(timerIds);
// 		if(document.body.scrollTop<100){
// 			block.style.display='none';
// 		}else{
// 			timerIds=setTimeout(function(){
// 				block.style.display='block';
// 			},1000);
// 		}
// 	};




