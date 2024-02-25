$(function() {

    let header = $('#header')
    let intro = $('#intro')
    let nav = $('#nav')
    let nav_toggle = $('#nav_toggle')
    let headerH = header.innerHeight();
    let introH = intro.innerHeight()
    let scrollOffset = $(window).scrollTop()


    /*==========Fixed Header===============*/
    checkScroll(scrollOffset)

    $(window).on('scroll', function () {

        scrollOffset = $(this).scrollTop()

        checkScroll(scrollOffset)

    })
    function checkScroll(scrollOffset) {

        if (scrollOffset >= introH - headerH) {
            header.addClass('fixed')
        }
        else {
            header.removeClass('fixed')
        }
    }

    /*==========Smooth Scroll to sections===============*/

    $('[data-scroll]').on('click', function (event) {

        event.preventDefault()
        let $this = $(this)
        let blockId = $this.data('scroll')
        let blockOffset = $(blockId).offset().top


        $('#nav a').removeClass('active')
        $this.addClass('active')

        nav.removeClass('active')
        nav_toggle.removeClass('active')


        $('html, body').animate({
            scrollTop: blockOffset - 50
        }, 1000)
    })

    /*==========ScrollSpy===============*/

    let windowH = $(window).height();
    scrollSpy(scrollOffset);

    $(window).on("scroll", function() {
        scrollOffset = $(this).scrollTop();
        scrollSpy(scrollOffset);
    });

    function scrollSpy(scrollOffset) {
        $("[data-scrollspy]").each(function() {
            let $this = $(this);
            let sectionId = $this.data('scrollspy');
            let sectionOffset = $this.offset().top;
            sectionOffset = sectionOffset - (windowH * 0.33333);

            if(scrollOffset >= sectionOffset) {
                $('#nav [data-scroll]').removeClass('active');
                $('#nav [data-scroll="' + sectionId + '"]').addClass('active');
            }

            if(scrollOffset === 0) {
                $('#nav [data-scroll]').removeClass('active');
            }
        });
    }

    /*==========Menu Nav Toogle===============*/

    nav_toggle.on('click', function(event) {

        event.preventDefault()

        $(this).toggleClass('active')
        nav.toggleClass('active')

    })

    /*==========Collapse===============*/

    $('[data-collapse]').on('click', function (event) {

        event.preventDefault()

        let $this = $(this)
        let blockId = $this.data('collapse')

        $this.toggleClass('active')
    })

    /*==========Slider===============*/

    $('[data-slider]').slick({
        infinite: true,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1
    })
})