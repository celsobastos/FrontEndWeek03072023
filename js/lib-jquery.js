$(function() {

    $('.cpf').mask('000.000.000-00', {reverse: true});

    const h1 = $('.h1');
    h1.click(function(){
        const p = $('.p');
        // p
        // .css('background-color', '#999999')
        // .css('color', '#fff');
        p.css({
            color: '#fff',
            backgroundColor: '#999999',
            fontSize: '20px',
        });
    });

    const paragrafo = $('.p');

    paragrafo.on('mouseover', function(event){
        $(this)
            .css('color', '#ff0000')
            .fadeOut()
            .fadeIn(2000)
            .slideUp()
            .slideDown();
    });

    // h1.addClass('test123');
    h1.append('<div>Testando 123</div>');
    // h1.prepend('<div>Testando 123</div>');
    // h1.after('<div> Depois </div>');

    let texto = h1.html();
    console.log(texto);
    // h1.html('Celso')

    let classe = h1.attr('class');
    h1.attr('class', classe + ' minha chasse');

    h1.removeClass('h1');

    paragrafo.each(function( index ) {
        $(this).remove();
        console.log( index + ": " + $( this ).text() );
    });

    const caixa = $('.caixa');
    caixa.css({
        border: '1px solid #000',
        backgroundColor: 'red',
        width: '100px',
        height: '100px',
    });

    caixa.on('click', function(){
        $(this).animate({
            left: '150px',
            opacity: '0.2',
            width: '150px',
            height: '150px',
        }, 1000, function(){
            $(this).animate({
                left: '0px',
                opacity: '1',
                width: '100px',
                height: '100px',
            }, 1000, function(){
                $(this).animate({
                    top: '250px',
                    opacity: '02',
                    width: '150px',
                    height: '150px',
                });
            });
        });
    });
});