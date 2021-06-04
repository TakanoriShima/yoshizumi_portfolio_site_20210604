/* global $*/
$(function(){
    $(".popup").hide();
    
    $('img').on('click', function(){
        const work = $(this).data('work');
        $('#' + work).fadeIn();
        $("#content-wrapper").css("background","#9e9e9e82");
    })
    
    $(".btn").on("click",() =>{
        //ポップアップが閉じる処理
        $(".popup").fadeOut();
        $("#content-wrapper").css("background","url(images/top-back.png)");
    })
    
});

// //アルバムデータの作成
// $(function(){
//   //最初はポップアップ非表示
//   $(".popup").hide();
  
//   $(".btn-prof").on("click",() =>{
//      //ポップアップが開く処理
//      $(".popup-work").fadeIn();
//      $("#content-wrapper").css("background","#9e9e9e82");
//   })
  
//   $(".btn-const").on("click",() =>{
//      //ポップアップが開く処理
//      $(".popup-constract").fadeIn();
//      $("#content-wrapper").css("background","#9e9e9e82");
//   })  
  
//     $(".btn-dent").on("click",() =>{
//      //ポップアップが開く処理
//      $(".popup-dental").fadeIn();
//      $("#content-wrapper").css("background","#9e9e9e82");
//   })
  
  $(".btn").on("click",() =>{
     //ポップアップが閉じる処理
     $(".popup").fadeOut();
     $("#content-wrapper").css("background","url(images/top-back.png)");
  })
// });







































































