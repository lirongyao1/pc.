
window.onload=function () {
    var whit=document.querySelector('.whit')
    var listnodes=document.querySelectorAll('.list li')
    var listup=document.querySelectorAll('.list .up')
    var  conten=document.querySelector('.contentMain')
    var  contlist=document.querySelector('.contentMain li')
    var loo=document.querySelector('.loo')
    var num=0
    var oo=0;
    // console.log(conten)
    whit.style.left=listnodes[0].offsetLeft+listnodes[0].offsetWidth/2-whit.offsetWidth/2+'px'
    //绑定及点击小白事件
    for (var i = 0; i<listnodes.length;i++ ){
        listnodes[i].mun=i;
        listnodes[i].onclick=function () {
            whit.style.left=this.offsetLeft+this.offsetWidth/2-whit.offsetWidth/2+'px'
            for (var j =0; j<listnodes.length;j++){
                listup[j].style.width=''
            }
            listup[this.mun].style.width='100%'
            conten.style.top=-this.mun*contlist.offsetHeight+'px'
             num=this.mun
        }
    }
    //点击事件
    document.onmousewheel =function (e) {
        clearTimeout(oo)
       oo= setTimeout(function () {
            console.log(e.wheelDelta)
            if(e.wheelDelta>0){
                num--
                console.log(num)
                if(num<=0){
                    num=0
                }
                console.log(contlist.offsetHeight)
                conten.style.top=-num*contlist.offsetHeight+'px'
                move(num);
            }else{
                num++;
                console.log(num)
                if(num>=listnodes.length){
                    num=listnodes.length-1
                }
                conten.style.top=-num*contlist.offsetHeight+'px'
                move(num)
            }
        },500)

    }

    window.onresize=function () {
        conten.style.top=-num*contlist.offsetHeight+'px'
        move(num)
    }

    //第一屏
    firt()

    function firt() {
        var lastindae=0;
        var chushi=0
        var timelast=0;
        var ss=0;
        var pp =0;
        var listNoset=document.querySelectorAll('.rout li')
        var homeli=document.querySelectorAll('.home li')
        console.log(listNoset)
        for(var i = 0; i<listNoset.length;i++){
            listNoset[i].index=i;
            listNoset[i].onclick=function () {
                var time=Date.now()
                if(time-timelast<2000){
                    return
                }
                if(this.index ==lastindae)return;
                if(this.index>lastindae){
                    homeli[this.index].className='commonTitle ys'
                    homeli[lastindae].className='commonTitle yy'
                }else {
                    homeli[this.index].className='commonTitle dd'
                    homeli[lastindae].className='commonTitle ss'
                }
                this.className='routfirst'
                listNoset[lastindae].className='';
                lastindae=this.index
                timelast=time
                ss=this.index
            }
        }
        loo.onmouseenter=function () {
            clearInterval(pp)
        }
        loo.onmouseleave=function () {
            bb()
        }

        /*自动轮播*/
        bb()
        function  bb() {
            pp= setTimeout(function () {
                var listNoset=document.querySelectorAll('.rout li')
                var homeli=document.querySelectorAll('.home li')
                ss++
                if(ss===4)ss=0;
                homeli[ss].className='commonTitle ys'
                homeli[lastindae].className='commonTitle yy'
                listNoset[ss].className='routfirst';
                listNoset[lastindae].className='';
                lastindae=ss
                timelast=Date.now();
                bb()
            },2500)
        }
    }


   //第二屏
    // 公共hanshu
    function  move(num) {
        whit.style.left=listnodes[num].offsetLeft+listnodes[num].offsetWidth/2-whit.offsetWidth/2+'px'
        for (var i = 0; i<listnodes.length;i++ ){
            whit.style.left=this.offsetLeft+this.offsetWidth/2-whit.offsetWidth/2+'px'
            for (var j =0; j<listnodes.length;j++){
                listup[j].style.width=''
            }
            listup[num].style.width='100%'
        }
    }

}


