
window.onload=function () {
    var whit=document.querySelector('.whit')
    var listnodes=document.querySelectorAll('.list li')
    var listup=document.querySelectorAll('.list .up')
    var  conten=document.querySelector('.contentMain')
    var  contlist=document.querySelector('.contentMain li')
    var loo=document.querySelector('.loo')
    var teamlists=document.querySelector('.team_lists')
    var teamli=document.querySelectorAll('.team_lists li')
    var can = document.getElementById('mycanvas');
    var aa =document.querySelectorAll('.nav li')
    var up=document.querySelector('.mengban .up')
    var down=document.querySelector('.mengban .down')
    var baitiao=document.querySelector('.mengban .baitiao')
    var pp=0;
    var arr = ['bg1.jpg','bg2.jpg','bg3.jpg','bg4.jpg','bg5.jpg','about1.jpg','about2.jpg','about3.jpg','about4.jpg','worksimg1.jpg','worksimg2.jpg','worksimg3.jpg','worksimg4.jpg','team.png','greenLine.png'];
    var kk=can.getContext('2d');
    var num=0
    var oo=0;
    var gn=true
    var gn1=false;
    console.log(listnodes)
    whit.style.left=listnodes[0].offsetLeft+listnodes[0].offsetWidth/2-whit.offsetWidth/2+'px'
    //绑定及点击小白事件
    for (var i = 0; i<listnodes.length;i++ ){
        listnodes[i].mun=i;
        listnodes[i].onclick=function () {
            whit.style.left=this.offsetLeft+this.offsetWidth/2-whit.offsetWidth/2+'px'
            for (var j =0; j<listnodes.length;j++){
                listup[j].style.width=''
                aa[j].className=''
            }
            listup[this.mun].style.width='100%'
            aa[this.mun].className='aa'
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
           for (var j = 0; j <aa .length; j++) {
               aa[j].className=''
           }
           aa[num].className='aa'
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
    function canvas() {
        var arrp = [];
        pp()
        function pp() {
            setTimeout(function () {
                var x = Math.random() * can.width;
                var y = can.height;
                var cr = Math.random() * 10 + 2;
                var deg = 0;
                var s = Math.random() * 50 + 20;
                var r = Math.floor(Math.random() * 255);
                var g = Math.floor(Math.random() * 255);
                var b = Math.floor(Math.random() * 255);
                arrp.push({
                    x: x,
                    y: y,
                    cr: cr,
                    deg: deg,
                    s: s,
                    r: r,
                    g: g,
                    b: b
                });
                if(gn1)return
                pp();
            }, 50);
        }
        fn()
        function fn() {
            setTimeout(function () {
                kk.clearRect(0, 0, can.width, can.height);
                for (var i = 0; i < arrp.length; i++) {
                    arrp[i].deg += 5;
                    kk.fillStyle = 'rgba(' + arrp[i].r + ',' + arrp[i].g + ',' + arrp[i].b + ')';
                    var deg = arrp[i].deg * Math.PI / 180;
                    var x = Math.sin(deg) * arrp[i].s + arrp[i].x;
                    var y = arrp[i].y - deg * arrp[i].s;
                    kk.beginPath();
                    kk.arc(x, y, arrp[i].cr, 0, 2 * Math.PI, false);
                    kk.fill()
                }
                if(gn1)return
                fn()
            }, 1000 / 60)
        }

    }

    //第5屏

teamlists.onmouseleave=function () {
    kk.clearRect(0,0,can.width,can.height);
    can.style.display='none'
    gn1=true;
    gn=true
    for (var j = 0; j <teamli .length; j++) {
        teamli[j].style.opacity='1'
    }
}
for (var i = 0; i < teamli.length; i++) {
        teamli[i].k=i
        teamli[i].onmouseenter=function () {
            for (var j = 0; j <teamli .length; j++) {
                teamli[j].style.opacity='0.5'
            }
            kk.clearRect(0,0,can.width,can.height);
            can.style.left=this.k*teamli[0].offsetWidth+'px'
            console.log(2)
            can.style.display='block'
            gn1=false;
            this.style.opacity='1'
            if (gn) {
                canvas()
                gn=false
            }
        }
    }

     //侧边导航
    for (var i = 0; i <aa .length; i++) {
        aa[i].yy=i;
        aa[i].onclick=function () {
            num=this.yy;
            for (var j = 0; j <aa .length; j++) {
                aa[j].className=''
            }
            this.className='aa'
            conten.style.top=-num*contlist.offsetHeight+'px'
            move(num)
        }
    }

    //开场

    for (var i = 0; i <arr .length; i++) {
        var img=new Image()
        img.src='img/'+arr[i]+''
        img.onload=function () {
            pp++
            console.log(pp/arr.length*100)
            baitiao.style.width=pp/arr.length*100+'%'
            if(pp==arr.length){
                up.style.height=0
                down.style.height=0
                baitiao.style.display='none'
            }
            if(document.addEventListener){
                up.addEventListener('transitionend',fn1)
                function fn1() {
                  up.parentElement.remove();
                    up.removeEventListener('transitionend',fn1)
                }
            }
        }
    }

}











