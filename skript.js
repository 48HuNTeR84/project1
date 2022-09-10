const animAitems = document.querySelectorAll(".anim-items"); // присваивание класса

const main_field = document.querySelector(".glavnaia");

const animLogo = document.querySelector(".anim_logo");

const navLinks = document.querySelectorAll(".navLink");

const contUnd1 = document.querySelector("#up_container1");

const contUnd2 = document.querySelector("#up_container2");

const contUnd3 = document.querySelector("#up_container3");

const contUnd4 = document.querySelector("#up_container4");

const sound1 = document.querySelector("audio#sound1");

const sound2 = document.querySelector("audio#sound2");

const sound3 = document.querySelector("audio#sound3");

const sound4 = document.querySelector("audio#sound4");

const top_buton = document.querySelector(".arrow_case");

const burger_header = document.querySelector(".header_burger");

const icon_headers = document.querySelectorAll(".header_burger img");

const nav_ul = document.querySelector("nav ul");

const en_fon_top = document.querySelector(".en_fon_top");

const link_icon = document.querySelector(".link_icon");

let click = 0;

burger_header.addEventListener("click", function () {
  click += 1;
  if (click % 2 != 0) {
    icon_headers[1].classList.add("hide");
    icon_headers[0].classList.remove("hide");
    nav_ul.classList.add("active");
    en_fon_top.classList.add("active");
    link_icon.classList.add("active");
  } else {
    icon_headers[0].classList.add("hide");
    icon_headers[1].classList.remove("hide");
    nav_ul.classList.remove("active");
    en_fon_top.classList.remove("active");
    link_icon.classList.remove("active");
  }
});

animLogo.classList.add("active");

top_buton.addEventListener("click", top_scrolling);

function top_scrolling() {
  main_field.scrollIntoView({ block: "start", behavior: "smooth" });
}

window.addEventListener("scroll", function () {
  if (window.pageYOffset != 0) {
    top_buton.classList.add("hidden");
  }

  if (window.pageYOffset == 0) {
    top_buton.classList.remove("hidden");
  }
});

contUnd1.addEventListener("mouseover", function () {
  sound1.play();
  sound2.currentTime = 0.0;
  sound3.currentTime = 0.0;
  sound4.currentTime = 0.0;
});

contUnd1.addEventListener("mouseout", function () {
  sound1.pause();
});

contUnd2.addEventListener("mouseover", function () {
  sound2.play();
  sound1.currentTime = 0.0;
  sound3.currentTime = 0.0;
  sound4.currentTime = 0.0;
});

contUnd2.addEventListener("mouseout", function () {
  sound2.pause();
});

contUnd3.addEventListener("mouseover", function () {
  sound3.play();
  sound2.currentTime = 0.0;
  sound1.currentTime = 0.0;
  sound4.currentTime = 0.0;
});

contUnd3.addEventListener("mouseout", function () {
  sound3.pause();
});

contUnd4.addEventListener("mouseover", function () {
  sound4.play();
  sound2.currentTime = 0.0;
  sound3.currentTime = 0.0;
  sound1.currentTime = 0.0;
});

contUnd4.addEventListener("mouseout", function () {
  sound4.pause();
});

navScrol();

function navScrol() {
  for (let index = 0; index < navLinks.length; index++) {
    let navLink = navLinks[index];
    navLink.addEventListener("click", navScroling);
    function navScroling() {
      attributeNavLink = navLink.getAttribute("href");
      let idObject = document.querySelector(attributeNavLink);
      idObject.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }
}

if (animAitems.length > 0) {
  //условие
  window.addEventListener("scroll", animHidden); //событие при скролле
  function animHidden() {
    //функция для скролла
    for (let index = 0; index < animAitems.length; index++) {
      //цикл
      const animAitem = animAitems[index]; // присваивание элемента масиива
      const animAitemHeight = animAitem.offsetHeight; // получение  высоты объекта
      const animAitemOffSet = offset(animAitem).top; // получение расстояния от верха страницы
      const AnimStart = 2;

      let animItemPoint = window.innerHeight - animAitemHeight / AnimStart; // высота окна - высота обьекта поделённая на 4

      if (animAitemHeight > window.innerHeight) {
        //условие
        animItemPoint = window.innerHeight - window.innerHeight / AnimStart; // высота окна - высота окна поделённая на 4
      }

      if (
        window.pageYOffset > animAitemOffSet - animItemPoint && // если размер скролинга больше растояние от верха страницы - высота окна - высота обьекта поделённая на 4
        window.pageYOffset < animAitemOffSet + animAitemHeight // если размер скролинга меньше растояние от верха страницы + высота обьекта
      ) {
        animAitem.classList.add("active"); // добавить класс active
      }
      // else {
      //   animAitem.classList.remove("active");
      // }
    }
  }
}

function offset(el) {
  const rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
}

setTimeout(() => {
  animHidden();
}, 300);
