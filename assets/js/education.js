AOS.init();

// MOOCs Cards

const moocs = document.querySelector(".moocs");
const moocscards = [
  {
    title: "OCI Gen AI Professionals",
    cardImage: "assets/images/education-page/Oracle.png",
    moocLink: "https://drive.google.com/file/d/1rtqwXO8W-fTMamOBvqOw4qaUfRXtP1ss/view?usp=sharing",
  },
  {
    title: "Skil Test Python (Basic)",
    cardImage: "data:image/png;base64,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",
    moocLink: "https://www.hackerrank.com/certificates/cf889e219c38",
  },
  {
    title: "Skil Test Java (Basic)",
    cardImage: "data:image/png;base64,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",
    moocLink: "https://www.hackerrank.com/certificates/669565868dc5",
  },
  {
    title: "WiFi Hacking Guide For Pentesters",
    cardImage: "assets/images/education-page/udemy.svg",
    moocLink: "https://drive.google.com/file/d/1GrLf6KjtSqaMXX0Wanf9R9xUgTPt32tV/view?usp=sharing",
  },
  {
    title: "SQL (Advanced)",
    cardImage: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUMAAACcCAMAAADS8jl7AAAA81BMVEU6Qk////8twmQru2EosV0nrVw0PUouxWUyO0ktNkUuOEYqNEMqt2AnrFsuyGY3P0zAw8ZtcnyAhIw6P09BSVbDxcnv7/Cnqq87PU+Lj5YvzGdZX2omqFoeKjv5+frNz9JQV2KdoKUWulfm5+ljaXI+vGx2e4PY2tyo4bxIT1u3ub46OU44WFOXm6G4ur6g27M5Rk/p+O5+0ZowgVY1iltZxH9ZxoA4TlA4aVU1ll00nV84YFQzpGA4Z1U2elg7NE02cld72JpPy3rA6s5qzoxSxXwAt0wAsE92x5IWJDfS8N2H0qE1gFlKt3MApUmy4sPe8uUfE6b2AAAKg0lEQVR4nO2ba3fauBZAbWyMbUHEyw9eNgkMFAiUtskkJDTl3raTTm/auf//14x0JBvbEAKZIVld6+xPxCDJ3pF0jiRQFARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBXp1a7bXv4BenNplfX88nqPHZ1Cbni1yzmbu5RYvPo/bpdtmUtD+ixcOpfTqPDYLF209o8TAmVzfN5kmCZnN5NXntu/qV8GuLQuGkkKZZuJj4r31nvwq1T3cF1gm1XEZi4URb4YDei8mtLqbAgpbLUGi2zzG4PIk/X0Rh5KSZ27RYWMxxQO+k5q9yqVCibVjMaXc+dsXH8ec3CYPwMlfUMuRyyyvsio8xWWkncSA5yf3nDF5omxaLK+yKW6nV+ExYyOWkwnfq2z8Kj1jUFnOUuA2xLjmBQHL233eqqr45K0AgyRU3LC7/DYmGaZr/vJZ9YA0Zx2/Fv4jjsaadfVGBN2dRIClm0BbxnEjpM5s0q2HoHfho9FmtmeMwHBz/3+Xn1+Gk8FWVvD2Lw7GeltieRyXr9aQHY3+ptqOqbv0QJ5Q1VocXpmUfUJCyRymTAxp6JloipSm8f88Nfn7/VQj88o7xVU9xJQYzdV13ase1mA2353b3ezy7fKBDo+ICPYZz2iL7Fw1UdXZ0h7Wr5PqY5TXQC//IweR3Bka/akmFxVvh0GDveFZcj+Wxvyv7DdCDHZpVNUEwVvYtS1/G4XkzvTgWI1lGEOlQK+bzscPr13aoquG+El/I4e3JFof3GYeappfyAn0lgsqLOwynDC901XTDO3kZh/6qmV7SiX4ok5q1Q03Lt0GjfvdKDk87tm1bpD5mr93RfqVfyOFDZqNGRmUhMelQK5bapVJJ//BaDkVjlIS8pf0Slhdy+CHOr1MOIacRDi/jJFFvt9v5i30cbknn1pcedbgtOeLXkg4Vu8H+aJjx25tl1pdeyOFFE7YZ4o2adXZY1IvCYSI7ZAP6aYcmseujOiGJXmkQoozqFoFHTzi0CSGRG2KyHJBYUgBl71CDmKO6TVMO4Q/h0IRabWJGNRCbXaOjkSXbXjvk1ZEjZduTC5lii2wmp4nc5gy4/yYcrhMb1hWfcmiQahjwOSvsRz2Akv6sx7OScMBzu9ghJV7Iliy8FsNqDHmpnqdA0km7YegoLV5Tb2QnHZKxHMu0M4AIE4QVaMg+DcPGn4MhXBJtxw7NrhOGwyMtWSYLkdvwPUOYArm172/fCD7LfphID4uLhMOOGdGJHJr9XpyDeB3xUcWJLw3Z4iZySC0nCrJma12qCk4r7JUo5kqHhI1b0yYDGVOM7rrIjHsnzF4vjC6B8sih2eX/n33n68MdJnIbblHd4DK1TCnerB2G1UaMI+6R9pNFp/Ag9V7iUlCn0iG1wdG0w8UnS1WZEWN9pSeG77jbarUq06HUTkfJIh4rQkI1VYsZOzRbMDBa9m4X/4pDvlHzlEM94TALdzhiwoaN1qjCh5zKB48JzzYbdFtTF55NODQMuN4g3DJ/o9fojgZwjfcy4bDnTb2qmc2xhzzHNni3O+13+x4TFLSoQkS39VojGM9DI3Jog8Je91ibD5NFIXVusqUf/h7n15AfLnY6VIxW75TYlBqdqegMICCoEJNSq94LqiQay1xXMOCzlcV9OzYrZUKpMmHV8ApDFp4sM7tOCSEese7tEdtgDfFAzZbuwuGgY1Db5hL7hnDY6XOFw/rR9m8yDkVcVoOUQ7bUK+3tUDFsixm0WbRUYdCZ/HmqIrwYo5EdxRSu0O3bYIN3E9OgnA77eMCenjsMWuK5kw4DZyD3HKjBGjLZDEldGLHgcAZTsMh/bHA4hl4Y0uPtI/oXuU2Hb4q/Cf7H/7qEzLC0xeGsX4nozyKHLMQqrUFjesqjzJjQLu8EUQCH1I07DLjZnpihQNGU1gF6Cl0IHIYysMMHvEqFv+XSeFaLGwrWDvviFiri/8cdQrgvH7Jj9gyH2obDt/di0/A+kR/m+SKFkU/GZWJEkDi3sUQeIxgTc6Bm17fcIWcoZygYym5P7m+JORMceqmUkJgQNcZRxmS1xonILB2KGinve9KhuI0jKuQ5dvoIDxyeiWwmyrHhNV+kMJ7KsU0vObqZw9SyIuWwIW0QR83QEA7TabUtA41c55FpcsYpS4cim6LdlEP3eHMhOHzghwDFrEO+3cW8iRw7ymr0PRzaU3HXw7A8SzhMZRWRw2iWJGU1g+yHp3baoeixQyO+JhoqB7HDYKtDlqYfU6J/x9cpiSO8yKHGe1/KISPPHD7sckgVPrzCwYgtw0iwHsupNSvElPG6J0LZxnpurVQUZbtDkQTB9jnhDQ2hIau3y2HYO7ZEfyXWevERXuyQW8w61FlX3Ln3BSm2w/IY/hxqHFN68RaBETk0ZrFEobkjZ1YLFtrbHYqAy88c4P1hBxoaubsczhRIPo+WHSpK7WMzXqQA4PBeHuJtOtT1nfvYoANWJwoRcVnkNnLqo3W+jhW5jRjRkGLzYw9X9hRSceHadoeitrIlIy/UShrqToed7pElJs4C+EZN2qGMKXo+mWN/3OUQZn2HdQ+jw23CQgty7GrHNkyiDHkZmWObTiQRCg9HxDTMziCAldujDrk7dSDmy+GfrASBFJppfcwhMUGi2zqWxNpV8mtJLHAkHYp9mx8/Uw53nkmJCcupdPsw37FhLY5C2bTEJjyPv+nZ0XpZLAKnhHVE2H8ZD/pV+OzscYcK4XNAj1KYD8MqqxTiRmg/7vDY62VFKSazw6L+nfFNZDNf/vrOb+/zXz9Ka9pXO8+kYMJaE8JQHSauBCMa79vEEsVDxoXsx8eymP1Y1pNZ/w3NtEM36TCWeKSe6C/T65T7n/f3cq/rW3SDP9prh0tZjjscZx2a8gVQZoaGfMai5nj9rHzvy4HtG/4G2GXZozFab7p4PCHedBgdZluQPbUomcbOHb65sy0/VFR5Rm9DZhnseQB+sMO7QuYrNfE56E/5zZEfusyvGdFxikLLZWewXoMagzAM4aSI9B2X78AOOhXHkQ9OuuMejxthlcDWvlMW3xWhihc6IexSiWLB0BuJ8FOfOeV+tKfdZY21ouc3PKfsMBukyxdEwbDa6TvOKeXVOtHIqHtQ2vbYTYq981bZcWZHcqhMPuQyEuPT5J+XzOC7KDNMZtjcS2qzn+/2ywWVQToMYvJL0QxErY68KD9rRdfjLXpZLDoLUOL6FHkwEDdly79opiEzrpb1VvERKz4A4Pd3vBXf5Hrj213Rbpd+qf5fF2FZdMUVfotzO/7VcuP7XXK3S/8tse3VvjlHhY9R8x/0rETW70op8qUPCn6Bcwf++U1WYjGfspi/ucVOuJuav2oX9QxxNG7n23f4g+an8ecXWYdxNC5d4E8C9qLGBrSeWhuzmFLiCvGHzPtT86+XGYmMmxUO40PwldVST0ZjvX2HPzI7FH9+t8yX5DyYbz+gwefgz1fLEsyDywcMJc/FV64X7fZiNceflv0DarX5vIZ9EEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBMnyN0n3H9hdz5MMAAAAAElFTkSuQmCC",
    moocLink: "https://www.hackerrank.com/certificates/a293e7ccce28",
  },
  {
    title: "Python Basic",
    cardImage: "assets/images/education-page/udemy.svg",
    moocLink: "https://drive.google.com/file/d/1wbn64D7ESpDooeiy5IfN4hp2cQHK12ca/view?usp=sharing",
  },
  {
    title: "ANN with Keras in Python and R",
    cardImage: "assets/images/education-page/udemy.svg",
    moocLink: "https://drive.google.com/file/d/1Jmui0_qGsJ_4a6cJehFjLXhZRbDNaSRA/view?usp=sharing",
  },
  // {
  //   title: "Intro to React",
  //   cardImage: "assets/images/education-page/edx.svg",
  //   moocLink: "https://www.edx.org/learn/reactjs",
  // },
  // {
  //   title: "Intro to React Native",
  //   cardImage: "assets/images/education-page/coursera2.svg",
  //   moocLink:
  //     "https://www.coursera.org/lecture/react-native/introduction-to-react-native-Eax0D",
  // },
  // {
  //   title: "NodeJS, Express and MongoDB",
  //   cardImage: "assets/images/education-page/coursera2.svg",
  //   moocLink: "https://www.coursera.org/learn/server-side-nodejs",
  // },
  // {
  //   title: "XML-AJAX",
  //   cardImage: "assets/images/education-page/udemy.svg",
  //   moocLink: "https://www.udemy.com/course/xml-from-beginner-to-expert/",
  // },
  // {
  //   title: "Data Structures & Algorithms",
  //   cardImage: "assets/images/education-page/udacity.svg",
  //   moocLink:
  //     "https://www.udacity.com/course/data-structures-and-algorithms-nanodegree--nd256",
  // },
];

const experience = [
  {
    img: "assets/images/education-page/c1.png",
  },
  {
    img: "assets/images/education-page/c2.jpg",
  },
  {
    img: "assets/images/education-page/c3.png",
  },
  {
    img: "assets/images/education-page/c4.png",
  },
  {
    img: "assets/images/education-page/c5.jpg",
  },
];

let currentItem = 0;

const img = document.getElementById("image");

const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

window.addEventListener("DOMContentLoaded", function () {
  showExperience();
});

function showExperience() {
  setInterval(function () {
    if (currentItem === experience.length) {
      currentItem = 0;
    }
    const item = experience[currentItem];
    img.src = item.img;
    currentItem++;
  }, 3000);
}

const showCards = () => {
  let output = "";
  moocscards.forEach(
    ({ title, cardImage, moocLink }) =>
      (output += `        
        <div class="col-6 col-md-3 col-sm-4 column" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600" >  
            <div class="card mb-3 mx-auto">
               <div class="content">
                  <div class="content-overlay"></div>
                    <img src=${cardImage} class="card-img-top content-image">     
                  <div class="content-details fadeIn-bottom">
                    <a href="${moocLink}" target="_blank"><i class="fa fa-info-circle fa-2x" aria-hidden="true" style="color: white;"></i></a>                                   
                  </div>
                </div>
                <div class="card-body">
                    <h6 class="mt-0 py-2 text-center font-weight-bold mooc-title" style="font-size:12px;">${title}</h6>
                </div>
            </div>
        </div>        
      `)
  );
  moocs.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

/* Badges*/

const bagdes = document.querySelector(".badges");
const badgesection = [
  {
    title: "Google Developer Essentials",
    image: "assets/images/education-page/badge1.png",
    description: "Earned May 20, 2020",
  },
  {
    title: "VM Migration",
    image: "assets/images/education-page/badge2.png",
    description: "Earned June 20, 2020",
  },
  {
    title: "G Suite Essentials",
    image: "assets/images/education-page/badge3.png",
    description: "Earned July 20, 2020",
  },
];

const showCards1 = () => {
  let output = "";
  badgesection.forEach(
    ({ title, image, description }) =>
      (output += `       
      <div class="col-lg-4 col-md-6 p-2" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600"> 
        <img class="img-fluid d-block mb-3 mx-auto hvr-grow" src="${image}" alt="Card image cap" width="200">
          <div class="text-center font-weight-bolder" style="font-size: 1.3em;">${title}</div>
          <div class="text-center text-muted font-weight-bolder p-2">${description}</div>
      </div>`)
  );
  bagdes.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards1);

/* Timeline Section*/

$(function () {
  window.sr = ScrollReveal();

  if ($(window).width() < 768) {
    if ($(".timeline-content").hasClass("js--fadeInLeft")) {
      $(".timeline-content")
        .removeClass("js--fadeInLeft")
        .addClass("js--fadeInRight");
    }

    sr.reveal(".js--fadeInRight", {
      origin: "right",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });
  } else {
    sr.reveal(".js--fadeInLeft", {
      origin: "left",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });

    sr.reveal(".js--fadeInRight", {
      origin: "right",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });
  }

  sr.reveal(".js--fadeInLeft", {
    origin: "left",
    distance: "300px",
    easing: "ease-in-out",
    duration: 800,
  });

  sr.reveal(".js--fadeInRight", {
    origin: "right",
    distance: "300px",
    easing: "ease-in-out",
    duration: 800,
  });
});
