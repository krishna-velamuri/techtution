$(document).ready(function () {
    function select_nav() {
        var nav_links = document.getElementById('menu').getElementsByTagName('a');
        var selected = location.pathname;

        for (var i = 0; i < nav_links.length; i++) {

            var link = nav_links[i].pathname;
            // fiddle IE's view of the link
            if (link.substring(0, 1) != '/') {
                link = '/' + link;
            }

            if (link == selected) {

                var ff = link.lastIndexOf('/');
                var dd = link.substring(ff + 1, link.length);
                var target = $('#menu a[href="' + dd + '"]');
                target.css('background-color', '#FF6600');
                target.css('color', '#FFFFFF');
            }
        }
    }

    window.onload = function () {
        select_nav();
    };
});

function launchpage(target) {
    switch (target) {
        case "AJAX":
            $("#samplesDiv").load("ajaxSample.html");
            break;
        case "ANIMATION":
            $("#samplesDiv").load("ajaxSample.html");
            break;
        case "BASIC":
            $("#samplesDiv").load("ajaxSample.html");
            break;
        case "BROWSER":
            $("#samplesDiv").load("ajaxSample.html");
            break;
        case "CSS":
            $("#samplesDiv").load("css.html");
            break;
        case "CALENDER":
            $("#samplesDiv").load("ajaxSample.html");
            break;
        case "DYNAMIC":
            $("#samplesDiv").load("ajaxSample.html");
            break;
        case "DATE":
            $("#samplesDiv").load("ajaxSample.html");
            break;
        case "FUNCTIONS":
            $("#samplesDiv").load("ajaxSample.html");
            break;
        case "MENU":
            $("#samplesDiv").load("ajaxSample.html");
            break;
        case "PRINT":
            $("#samplesDiv").load("ajaxSample.html");
            break;
        case "REGULAR_EXP":
            $("#samplesDiv").load("ajaxSample.html");
            break;
        default:
            $("#samplesDiv").load("ajaxSample.html");
            break;
    }
}