$(document).ready(function(){
    $('.menu_toggle_btn').on('click', function(){
        //위아래로 움직이는 슬라이드 적용
        $('#gnb').stop().slideToggle()
    })
})