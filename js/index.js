// sticky top
$(function() {

    window.onscroll = function() {
        myFunction()
    };

    var navbar = document.getElementById("main_menus");
    var sticky = navbar.offsetTop;

    function myFunction() {
        if (window.pageYOffset > sticky) {

            navbar.classList.add("sticky")
        } else {

            navbar.classList.remove("sticky");
        }
    }


});
//  end sticky top

// scroll to top
var btn = $('#button');

$(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, '300');
});
// end of scroll to top
// tooltip
$(function() {
    $('[data-toggle="tooltip"]').tooltip({ delay: { "show": 500, "hide": 100 } })
});

// mobile nav
function openNav() {
    document.getElementById("mySidenav").style.width = "300px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}


// menu toggle css
$("#menuitem").on('click', function() {
    $("#menu_data").toggleClass('list-group');
    if ($("#menu_data").hasClass('list-group')) {
        $("#menu_data").hide();
    } else {
        $("#menu_data").show();
    }

});

// navbar scroll
$(window).scroll(function() {
    if ($(this).scrollTop() > 30) {
        $('#navbarSroll').addClass('scroll');
    } else {
        $('#navbarSroll').removeClass('scroll');
    }
});
// magnific pop up

function magnifyEffect() {
    $('.magnifyImage').magnificPopup({
        delegate: 'a',
        type: 'image',
        closeOnContentClick: true,
        mainClass: 'mfp-img-mobile',
        image: {
            verticalFit: true
        }
    });
}
// end magnific popup

//theiaStickySidebar
jQuery(document).ready(function() {
    jQuery('.single_sidebar_widget, .right_sidebar_widget').theiaStickySidebar({
        additionalMarginTop: 90,
        updateSidebarHeight: true,
        disableOnResponsiveLayouts: true,
    });
});
//end theiaStickySidebar