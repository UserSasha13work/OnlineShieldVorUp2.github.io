
; (function () {
    let questionBox = document.getElementById('questions_box'),
        resultBox = document.getElementById('result-box'),
        progress1= document.getElementById('progress'),
        counter = document.getElementById('counter'),
        progressBar = document.getElementById('progress'),
        steps = questionBox.getElementsByClassName('step'),
        check_box = document.getElementById('check_box'),
        res1_no=document.getElementById('res1_no'),
        res2_no=document.getElementById('res2_no'),
        res3_no=document.getElementById('res3_no'),
        res4_no=document.getElementById('res4_no'),
        res1_yes=document.getElementById('res1_yes'),
        res2_yes=document.getElementById('res2_yes'),
        res3_yes=document.getElementById('res3_yes'),
        res4_yes=document.getElementById('res4_yes'),
        emeil=document.getElementById('emeil'),
        
        
        currentStep = 0,
        progress;
        
    res1_yes.style.display = 'none';  
    res2_yes.style.display = 'none'; 
    res3_yes.style.display = 'none'; 
    res4_yes.style.display = 'none'; 
    
    function questionCounter(el, quant, num) {
        el.innerHTML = '<span></span>' +  num + '<span class="quantity"> / ' + quant + '</span>'
    }
    function questionProgress(el, quant, num) {
        if (!progress) progress = el.appendChild(document.createElement('span'));
        progress.style.right = 100 - (100 / quant * num) + '%';
    }
    for (let i = 0; i < steps.length; i++) {
        steps[i].addEventListener('click', function (e) {
            if (e.target.classList.contains('answer-btn')
                && e.currentTarget.dataset.step !== currentStep) {
                currentStep = e.currentTarget.dataset.step;
                questionProgress(progressBar, steps.length, currentStep);
                questionCounter(counter, steps.length, currentStep);
                e.currentTarget.style.display = 'none';
                if (steps[currentStep]) {
                    steps[currentStep].style.display = 'block';
                }
                else {
                    
                    resultBox.style.display = 'block';
                    setTimeout(function(){
                    res1_no.style.display = 'none';  
                    res1_yes.style.display = 'flex'; 

                    },1000)
                    setTimeout(function(){
                    res2_no.style.display = 'none';  
                    res2_yes.style.display = 'flex'; 

                    },2000)
                    setTimeout(function(){
                    res3_no.style.display = 'none';  
                    res3_yes.style.display = 'flex'; 

                    },3000)
                    setTimeout(function(){
                    res4_no.style.display = 'none';  
                    res4_yes.style.display = 'flex'; 

                    },4000)
                     
                    let timer = setTimeout(function () {
                        
                            
                        check_box.style.display = 'none'; 
                        emeil.style.display = 'flex'; 
                        

                        
                    }, 6000);
                }
            }
        })
    }
    steps[currentStep].style.display = 'block';
    questionProgress(progressBar, steps.length, currentStep);
    questionCounter(counter, steps.length, currentStep);
})();


// Модальные окна

$('.btn_m').click(function() {
    var modal = $(this).data('modal');
    $('.fade').fadeIn(500);
    $('#' + modal).addClass('active');
  });

  $('.butt').click(function() {
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



$(function() {
$(".btn-submit").on("click", validate);

// Validate email
function validateEmail(email) {
var re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
return re.test(String(email).toLowerCase());
}

// send form
function sendForm(email) {
$.cookie('email', email, { expires: 1 });

setTimeout(function() {

window.location.href = "./land.html"
},1000)
}

// validate email and send form after success validation
function validate() {
var email = $(".email").val();
var $error = $(".eerror");
$error.text("");

if (validateEmail(email)) {
$error.fadeOut();
sendForm(email);
} else {
$error.fadeIn();
$error.text('Input error. Enter type "yourname@email.com"');
}
return false;
}
});



