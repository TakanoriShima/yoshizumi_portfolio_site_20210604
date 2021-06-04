/* global $*/
$(function(){
    
    //画像スライド
    $("#effect img").eq(1).css("marginLeft","-1000px")
    $("#effect img").eq(2).css("marginLeft","-1000px")
    $("#effect img").eq(3).css("marginLeft","-1000px")
    
    let count_slider = 0;
    
    //画像スライド関数
    const slider = () => {
        $("#effect img").eq(count_slider % 4).animate({marginLeft:"1000px"},1000,function(){
            $("#effect img").eq(count_slider % 4).css("marginLeft","-1000px");
            count_slider++;
        });
        
        $("#effect img").eq((count_slider + 1) % 4).animate({marginLeft:"0"},1000);
        
    }
    
    setInterval(slider,5000);
});

