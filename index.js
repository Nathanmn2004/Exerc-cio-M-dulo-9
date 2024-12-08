



$(document).ready(function(){
    $('form').on('submit', function(e){
        e.preventDefault();
        const tarefa = $('#tarefa').val();
        const novoItem = $(`<li class='lista-adicionada'> ${tarefa} </li>`)
        $(novoItem).appendTo('#lista-tarefas');
        $('#tarefa').val('');
    })


    $('#lista-tarefas').on('click','.lista-adicionada',function(){
        
        $(this).removeClass('lista-adicionada').addClass('decoracao-texto');
    })


    $('#lista-tarefas').on('click', '.decoracao-texto', function(){
        $(this).remove();
    })

})