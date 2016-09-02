$(function(){
	var banner=$('.banner')[0];
	
	var num=0;
	var dian=$("li",$(".point")[0]);
	var as=$("a",banner);
	as[0].style.zIndex=10;
	var stop=setInterval(lunbo,1500);

	$(banner).on('mouseover',function(){
		clearInterval(stop);
	})
	$(banner).on('mouseout',function(){
		stop=setInterval(lunbo,1500)
	})


	for(var i=0;i<dian.length;i++){
		dian[i].index=i;
		$(dian).on("mouseover",function(){
			if(num==this.index){
				return;
			}
			for(var j=0;j<dian.length;j++){
				as[j].style.zIndex=5
			}
			as[this.index].style.zIndex=10;
			num=this.index;
		})
		
	}
		


	function lunbo(){
		num++;
		if(num==as.length){
			num=0;
		}
		$(as).each(function(i){
			as[i].style.zIndex=5
		})
			
		
		as[num].style.zIndex=10;
	}





})