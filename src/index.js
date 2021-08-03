import $ from 'jquery';
import './sass/teste.scss';
import './css/style.css';
import Button from './components/button/index.js';

$(function(){
    let button = new Button();
    button.setTitle('This is my button');
    button.setClick(function(){alert('opa')});

    $('#area').html(button.render());

    $('#botao').on('click', function(){
        $('h1').html('Olá mundo alterado 3!').addClass('aqua');
    });
})