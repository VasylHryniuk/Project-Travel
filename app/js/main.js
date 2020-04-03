$(function(){

    $(document).on('click', 'video, #mute', function (e) {
        let video = $('video').get(0);  // This line has been updated.
        if (video.paused === false) {
            video.pause();
            } else {
            video.play();
        }
        return false;
    });


    $(document).ready(function(){
        $("#mute").click(function(){
          $("#mute").fadeOut();
        });
      });


  
$('.burger-wrapper').on('click', function(){
  $('.menu-list').slideToggle();
});

});

//burger click
document.querySelector('.burger-wrapper').onclick = function(){
let burger = document.querySelector('.burger').classList.toggle('burger-active')
let menu = document.querySelector('.menu-list').classList.toggle('menu-active')
}





