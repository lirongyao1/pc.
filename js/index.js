
window.onload=function () {
    var whit=document.querySelector('.whit')
    var listnodes=document.querySelectorAll('.list li')
    var listup=document.querySelectorAll('.list .up')
    var  conten=document.querySelector('.contentMain')

    console.log(conten)
    whit.style.left=listnodes[0].offsetLeft+listnodes[0].offsetWidth/2-whit.offsetWidth/2+'px'
    for (var i = 0; i<listnodes.length;i++ ){
        listnodes[i].mun=i;
        listnodes[i].onclick=function () {
            whit.style.left=this.offsetLeft+this.offsetWidth/2-whit.offsetWidth/2+'px'
            for (var j =0; j<listnodes.length;j++){
                listup[j].style.width=''
            }
            listup[this.mun].style.width='100%'
        }
    }
}


