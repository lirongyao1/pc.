
window.onload=function () {
    var whit=document.querySelector('.whit')
    var listnodes=document.querySelectorAll('.list li')
    var listup=document.querySelectorAll('.list .up')
    var  conten=document.querySelector('.contentMain')
    var  contlist=document.querySelector('.contentMain li')
    var num=0
    var oo=0;
    // console.log(conten)
    whit.style.left=listnodes[0].offsetLeft+listnodes[0].offsetWidth/2-whit.offsetWidth/2+'px'
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
        var listNoset=document.querySelectorAll('.rout li')
        var homeli=document.querySelectorAll('.home li')
        console.log(listNoset)
        for(var i = 0; i<listNoset.length;i++){
            listNoset[i].index=i;
            listNoset[i].onclick=function () {
                for (var j=0; j<listNoset.length;j++)
                homeli[this.index].className='commonTitle dd'
                homeli[lastindae].className='commonTitle ss'
                lastindae=this.index
            }
        }
    }







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
