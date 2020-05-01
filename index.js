let version = '1.2.2';

window.onload = function() {
    let versionEl = document.getElementById('version');
    versionEl.innerHTML = "v" + version;

    let options = {
        strings: [
            'Web',
            'Full-Stack',
            'Front-End',
            'Game'
        ],
        typeSpeed: 80,
        loop: true,
        showCursor: false
      };
    
    new Typed('#subtitle-typed', options);
    AOS.init({
        duration: 1000
    });
}