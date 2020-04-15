// $(document).ready(function () {
//   $(".header-menu-trigger").click(function () {
//     $(this).toggleClass("active");
//     $(this).next().toggleClass("ul-header");
//     $('ul li').hide();
//     $('ul li').each(function (i) {
//       $(this).delay(80 * i).fadeIn(500);
//     });
//   });
// });

function hamburger() {
  document.getElementById('line1').classList.toggle('linea');
  document.getElementById('line2').classList.toggle('lineb');
  document.getElementById('line3').classList.toggle('linec');
  document.getElementById('target').classList.toggle('slidex');
  document.getElementById('nav_f').classList.toggle('fadein');
}

document.getElementById('target').addEventListener('click', function () {
  hamburger();
});

let list = document.getElementsByClassName('list');

for (let i = 0; i < list.length; i++) {
  list[i].addEventListener('click', function () {
    hamburger();
  });
}