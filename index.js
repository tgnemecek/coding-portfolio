const version = "1.2.3";

window.onload = function () {
  let versionEl = document.getElementById("version");
  versionEl.innerHTML = "v" + version;

  let options = {
    strings: ["Web", "Full-Stack", "Front-End"],
    typeSpeed: 80,
    loop: true,
    showCursor: false,
  };

  new Typed("#subtitle-typed", options);
  AOS.init({
    duration: 1000,
  });
};
