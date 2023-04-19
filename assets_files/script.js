// Чекбокс

let inp = document.querySelector('.inp'); //находим чекбокс
let check_boxx = document.querySelector('.check_boxx_in'); 

let btn = document.querySelector('.butt'); //находим кнопку
let stat_butt="active";

btn.addEventListener('click', (event)=>{
    
    if (stat_butt=="active"){
        console.log("yes");
        location.href='./questions.html';
    }
    else{
        check_boxx.classList.add("pulse");

    }
});

inp.addEventListener("change", (event) => {
if (event.target.checked) { //если чекбокс эктив

stat_butt="active";
btn.classList.remove("butt_no_active");
check_boxx.classList.remove("pulse");
} else {
stat_butt="no_active";
btn.classList.add("butt_no_active");

}});

// Модальные окна

$('.btn_m').click(function() {
    var modal = $(this).data('modal');
    $('.fade').fadeIn(500);
    $('#' + modal).addClass('active');
  });

  $('.close').click(function() {
    $('.fade').fadeOut(500);
    $('.modal').removeClass('active');
  });

  $(document).keydown(function(e) {
    if (e.keyCode === 27) {
      e.stopPropagation();
      $('.fade').fadeOut(500);
      $('.modal').removeClass('active');
    }
  });