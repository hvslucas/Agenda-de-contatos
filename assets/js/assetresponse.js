const cssalt = document.querySelector('link#altCss');
const scriptaltJS = document.querySelector('script#altJS');

let widthWindow = window.innerWidth;

window.addEventListener('resize', function(){
    alterarArchives(widthWindow);
});


function alterarArchives(widthWindow) {
    const atualWidth = window.innerWidth;
    if (atualWidth < 768 || widthWindow < 768) {
        
        cssalt.setAttribute('href', 'assets/css/mobilestyle.css');
        scriptaltJS.setAttribute('src', 'assets/js/mainmobile.js');
        
    } else {

        cssalt.setAttribute('href', 'assets/css/style.css');
        scriptaltJS.setAttribute('src', 'assets/js/main.js');

    }
}

alterarArchives(widthWindow);


