window.onload=function(){
  //选项卡
	var tab=document.getElementsByClassName("tab")[0];
	var lis=document.getElementsByClassName("daohang-right");
	var item=document.getElementsByClassName("item");
	for(var i=0;i<lis.length;i++){
		lis[i].index=i;
		lis[i].onmouseover=function(){
			for(var j=0;j<lis.length;j++){
				item[j].style.display="none";
			}
			item[this.index].style.display="block";
		}
		lis[i].onmouseout=function(){
			for(var j=0;j<lis.length;j++){
				item[j].style.display="none";
			}
		}
	}
	
//banner轮播
           var ban=$(".banner_img")[0];
           var imgs=$("a",ban);
           var spans=$("span",ban);
           var btnL=$(".btn_left")[0];
           var btnR=$(".btn_right")[0];


           var num=0;
           var t=setInterval(move,1500);
           ban.onmouseover=function(){
                clearInterval(t);
           }
           ban.onmouseout=function(){
               clearInterval(t);
               t=setInterval(move,1500);
           }


           for(var i=0;i<spans.length;i++){
                spans[i].index=i;
                spans[i].onclick=function(){
                  num=this.index;
                  for(var j=0;j<imgs.length;j++){
                    animate(imgs[j],{opacity:0},500);
                    spans[j].className=" ";
                  }
                  animate(imgs[this.index],{opacity:1},500);
                  
                  spans[this.index].className="hot";
          
                }

           }
            
            btnR.onclick=function(){
                move()
            }
            btnL.onclick=function(){
               num--;
            if(num<=0){
              num=imgs.length-1;
            }
            for(var i=0;i<imgs.length;i++){
              animate(imgs[i],{opacity:0},500);
              spans[i].className="";

            }
            animate(imgs[num],{opacity:1},500);
            spans[num].className="hot";
           }
            


           function move(){
            num++;
            if(num==imgs.length){
              num=0;
            }
            for(var i=0;i<imgs.length;i++){
              animate(imgs[i],{opacity:0},500);
              spans[i].className="";

            }
            animate(imgs[num],{opacity:1},500);
            spans[num].className="hot";
           }

//活动轮播
    /*var win=$(".huodong")[0];
    nodeLunbo(win,4)
    function nodeLunbo(obj,num){
    var box=$("#huodong",win);
    var divs=$("div",box);
    var aW=285;
    var btnL1=$(".huodong-btnL")[0];
    var btnR1=$(".huodong-btnR")[0];
    var len=divs.length;
    box.style.width=aW*len+"px";
    var t1;
    t1=setInterval(moveL1,2000);

    box.onmouseover=function(){
      clearInterval(t1);
    }
    box.onmouseout=function(){
      t1=setInterval(moveL1,2000);
    }

    btnL1.onclick=function(){
      moveL1();
    }
    btnR1.onclick=function(){
      moveR1();
    }

    var flag=true;

    function moveL1(){
      if(!flag){
        return;
      }
      flag=false;
      animate(box,{left:-num*aW},function(){
        for(var i=0;i<num;i++){
        var first=getFirst(box);
        box.appendChild(first);
        box.style.left="0px";
        }
        flag=true;
      })
    }

    function moveR1(){
      if(!flag){
        return
      }
      flag=false;
      for(var i=0;i<num;i++){
      var first=getFirst(box);
      var last=getLast(box);
      box.style.left=-num*aW+"px";
      box.insertBefore(last,first);
    }
      animate(box,{left:0},function(){
        
        flag=true;
      })

    }
    }*/



    var win=$(".huodong")[0];
    nodeLunbo(win,4)
    function nodeLunbo(obj,num){
    var box=$("#huodong",win);
    var divs=$("div",box);
    var aW=parseInt(getStyle(divs[0],"width"));
    var btnL1=$(".huodong-btnL")[0];
    var btnR1=$(".huodong-btnR")[0];
    var len=divs.length;
    box.style.width=aW*len+"px";
    var t1;
    t1=setInterval(moveL1,2000);

    box.onmouseover=function(){
      clearInterval(t1);
    }
    box.onmouseout=function(){
      t1=setInterval(moveL1,2000);
    }

    btnL1.onclick=function(){
      moveL1();
    }
    btnR1.onclick=function(){
      moveR1();
    }

    var flag=true;

    function moveL1(){
      if(!flag){
        return;
      }
      flag=false;
      animate(box,{left:-aW*num},function(){
        var first=getFirst(box);
        box.appendChild(first);
        box.style.left="0px";
        flag=true;
      })
    }

    function moveR1(){
      if(!flag){
        return
      }
      flag=false;
      var first=getFirst(box);
      var last=getLast(box);
      box.style.left=-aW*num+"px";
      box.insertBefore(last,first);
      animate(box,{left:0},function(){
        
        flag=true;
      })

    }

          
}
}


 