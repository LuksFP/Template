$(document).ready(function() {
    // Função para ativar/desativar o menu móvel
    $('#mobile_btn').on('click', function () {
        $('#mobile_menu').toggleClass('active');
        $('header').toggleClass('active');
    });

    // Seleciona os itens da navegação e as seções
    const navItems = $('.nav-item');
    const sections = $('section');

    // Função para adicionar/remover a classe 'active' na navegação com base na posição de rolagem
    $(window).on('scroll', function () {
        const header = $('header');
        const scrollPosition = $(window).scrollTop();

        // Atualiza a sombra da caixa no cabeçalho com base na posição de rolagem
        if (scrollPosition > 0) {
            header.css('box-shadow', '0 2px 4px rgba(255, 120, 120)');
        } else {
            header.css('box-shadow', 'rgb(0, 0, 0)' );
        }

        // Atualiza a classe 'active' na navegação com base na posição de rolagem
        sections.each(function(i, section) {
            const sectionTop = $(section).offset().top - 96;
            const sectionBottom = sectionTop + $(section).outerHeight();

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                navItems.removeClass('active');
                navItems.eq(i).addClass('active');
                return false;
            }
        });
    });

    // Função para rolar suavemente para o topo da página quando o logotipo é clicado
    $('#nav_logo').on('click', function() {
        $('html, body').animate({scrollTop: 0}, 'slow');
    });

    // Configurações do ScrollReveal para revelar elementos na página
    ScrollReveal().reveal('#cta', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('#sobrenos', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('.dish', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('#testimonial_chef', {
        origin: 'left',
        duration: 1000,
        distance: '20%'
    });

    ScrollReveal().reveal('.feedback', {
        origin: 'right',
        duration: 1000,
        distance: '20%'
    });
});
