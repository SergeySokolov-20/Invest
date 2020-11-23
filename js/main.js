let animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
   window.addEventListener('scroll', animOnScroll);
   function animOnScroll() {
      for (let index = 0; index < animItems.length; index++) {
         const animItem = animItems[index];
         const animItemHeight = animItem.offsetHeight;
         const animItemOffset = offset(animItem).top;
         const animStart = 4;

         let animItemPoint = window.innerHeight - animItemHeight / animStart;

         if (animItemHeight > window.innerHeight) {
            animItemPoint = window.innerHeight - window.innerHeight / animStart;
         }

         if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
            animItem.classList.add('_active');
         } else {
            if (!animItem.classList.contains('._anim-no-hide')) {
               animItem.classList.remove('_active');
            }

         }
      }
   }
   function offset(el) {
      const rect = el.getBoundingClientRect(),
         scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
         scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
   }
   setTimeout(() => {
      animOnScroll();
   }, 300);
}

document.querySelector('.menu-icon').onclick = function () {
   document.querySelector('.menu-icon').classList.toggle('menu-icon-active');
   document.querySelector('.header__menu').classList.toggle('menu-active');
   document.querySelector('html').classList.toggle('lock');
}

document.querySelector('.header__list').onclick = function () {
   document.querySelector('.menu-icon').classList.toggle('menu-icon-active');
   document.querySelector('.header__menu').classList.toggle('menu-active');
   document.querySelector('html').classList.remove('lock');
}



$(document).ready(function () {

   //E-mail Ajax Send
   $("form").submit(function () { //Change
      var th = $(this);
      $.ajax({
         type: "POST",
         url: "mail.php", //Change
         data: th.serialize()
      }).done(function () {
         alert("Thank you!");
         setTimeout(function () {
            // Done Functions
            th.trigger("reset");
         }, 1000);
      });
      return false;
   });

});