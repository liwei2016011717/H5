window.onload=function(){
	var article=document.getElementById('article');
	var move1=document.getElementById('div1'),
		move2=document.getElementById('div2'),
		move3=document.getElementById('div3'),
		move4=document.getElementById('div4'),
		move5=document.getElementById('div5'),
		move6=document.getElementById('div6');
	for(let i=1;i<=6;i++){				
		document.getElementById('div'+i).onclick=function(){			
			move1.style.top="0px";
			move2.style.top="0px";
			move3.style.top="0px";
			move4.style.top="0px";
			move5.style.top="0px";
			move6.style.top="0px";
			this.style.top="-5px";
			var data=getComputedStyle(document.getElementById('div'+i)).backgroundColor;
			article.style.backgroundColor=data;
			localStorage.setItem('color',data);
		}
		var color = localStorage.getItem('color');
		if(color){
			article.style.backgroundColor=color;
		}
	}
}