$(document).ready(function(){
    console.log("Let's get ready to party with jQuery!");
})

$('img').addClass('image-center');

$('p')[Array.from($('p')).length-1].remove();

$('#title').css('font-size',`${Math.floor(Math.random() * 100)}px`);

$('ol').append($('<li>I am a new li!</li>'))

$('aside').children().remove();

$('aside').append($('<p>Lists are terrible and I am sorry for their existence.</p>'))

$('.row-mb-5').on('change', function(){
    $('body').css('background-color',`rgb(${$('.form-control')[0].value},${$('.form-control')[2].value},${$('.form-control')[1].value})`)
})

$('img').on('click', function(){
    $(this).remove();
})
