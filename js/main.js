var batu = document.getElementById('batu');
var bromo = document.getElementById('bromo');

var batuBlock = document.getElementById('batu-js');
var bromoBlock = document.querySelector('.bromo_wrapper');


batu.addEventListener('click', function () {
    batuBlock.classList.add('open');
    bromoBlock.classList.add('close');
    batuBlock.classList.remove('close');
    bromoBlock.classList.remove('open');

    batu.style.color = '#01a2a6';
    bromo.style.color = '';
});

bromo.addEventListener('click', function () {
    batuBlock.classList.add('close');
    bromoBlock.classList.add('open');
    batuBlock.classList.remove('open');
    bromoBlock.classList.remove('close');

    batu.style.color = '';
    bromo.style.color = '#01a2a6';
});