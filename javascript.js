var menu_dropped = false;

function toggle_menu() {
    var nav = document.getElementById('nav');
    var ul = document.getElementById('ul_nav');
    if (menu_dropped === false) {
        nav.style.top = '0px';
        ul.style.backgroundColor = '#32322C';
        menu_dropped = true;
    } else {
        nav.style.top = '-38px';
        ul.style.backgroundColor = '#ffffff';
        menu_dropped = false;
    }
}

function down_menu() {
    if (menu_dropped === false) {
        var nav = document.getElementById('nav');
        var ul = document.getElementById('ul_nav');
        ul.style.backgroundColor = '#32322C';
        nav.style.top = '0px';
    }
}

function up_menu() {
    if (menu_dropped === false) {
        var nav = document.getElementById('nav');
        var ul = document.getElementById('ul_nav');
        ul.style.backgroundColor = '#ffffff';
        nav.style.top = '-38px';
    }
}