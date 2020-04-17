window.onload = function() {
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