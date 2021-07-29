import $ from 'jquery';
import './css/style.css';
// import './images/img4.png';
// import './images/img2.webp';
// import './images/img3.png';

$(function(){

    $('#botao').on('click', function(){
        $('h1').html('Olá mundo alterado 3!').addClass('aqua');
    });
});