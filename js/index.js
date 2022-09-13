$(function(){
    var len = $('.startCulturebox a').length;
    var width = $($('.startCulturebox a')[0]).width();
    var Totallength = parseInt(len * width);
    var cont = 0;
    $('.icon-guanbi').on('click',function(){
        $('.location').removeClass('show');
        showloaction()
    })
    $('.icon-hanbaocaidanzhedie').on('click',function(){
        $('.location').addClass('show');
        showloaction()
    })

    $('.footerlf').on('click',function(){
        animation('left');
      
    })
    $('.footerrg').on('click',function(){
        animation('right');
      
    })
    $(window).resize(showloaction)
    function showloaction(){
        if($('.location').hasClass('show') && $(window).innerWidth() <= 992){
            $('body').css({
                overflow:'hidden'
            })
        }else{
            $('body').css({
                overflow:'auto'
            })
        }
    }
    function animation(direction){
        switch(direction){
            case 'left' : {
                cont --;
                $('.footerrg').css({display:'block'});
                if(cont <= 0){
                    $('.footerlf').css({display:'none'});
                    cont = 0;
                   
                }
                $('.startCulturebox').css({marginLeft : -cont * width + 'px'});
                break;   
            }
            case 'right' : {
                cont ++;
                $('.footerlf').css({display:'block'});
                if(cont >= len){
                    $('.footerrg').css({display:'none'});
                    cont = len - 1;
                    break;   
                }
                $('.startCulturebox').css({marginLeft : -cont * width + 'px'});
            }
        }
    }
})
