AOS.init();
/* Project Cards */

const projectcards = document.querySelector(".projectcards");

// Array of object for projects
const projects = [
  {
    title: " Inventory Management System",
    cardImage: "data:image/jpeg;base64,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",
    description: "A Inventory Management System built using g PHP, HTML & CSS and MY-Sql.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "",
    Githublink: "https://github.com/aprio143/Inventory-Management-System",
  },
  {
    title: "Heart Disease Prediction Using ML & DLe",
    cardImage: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0NEA4PDQ8ODQ4NDg0NDQ4NEA8ODQ4NFhEWFhYRFRMYHTQhGCYlGxMTIT0iKDUrLzo6GCA/ODc4NygtLjcBCgoKDg0OGhAQGi0eIB0tLSsuKy0tLi0uLS0tLS0tKy0uLS0tLSstLS0rLS0rLSstLS0tLS0tLS0tKy0tLS0tLf/AABEIAKgBKwMBEQACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAAAgEDBAUHBgj/xABAEAACAgEBBQYBCAkCBwEAAAAAAQIDBBEFBhIhMQcTQVFhcYEUIiMyUmKhsSRCQ3KCkZLBwkRjZHOTorLh8Bf/xAAbAQEAAgMBAQAAAAAAAAAAAAAAAQIDBAUGB//EADMRAQACAgEDAgQEBgICAwAAAAABAgMRBAUSITFBEyJRYQZxkbEUUoGh0eFC8EPBFjIz/9oADAMBAAIRAxEAPwDuIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC3ffCtOVk41xXWU5KMV8WRMxHqtWlrTqsbae7e/ZUHo83Hf/Ln3v8A46mOc+OP+UN2vS+Zb0xW/TX7rS322S/9XD4xtX+JX+IxfzMk9H50f+Kf7M7C3gwMhpU5ePZJ9Ixthx/066mSuSlvSYauXhcjF5vjtH9JbMu1gAAAAY2dtDHx48WRdVTHztnGCftqytrRX1nTLiw5Ms6x1m0/aNtBk7/7Jr5fKHY/9qq2a/npoYZ5OKPd0sfQudeN/D1+cxDG/wD0nZf/ABHv3X/sr/GYmb/45zfpH6snF3/2TZy+UOt/7tdsF/VpoWjlYp92HJ0LnUjfw9/lMS3+Fn0ZEePHtquj9qqcZr8DPW0W9J25mXDkxT25KzWfvGmSSxgAAAAAAAAAAAAAAAAAAAAAAABi7Rz6cWuV2RZGquHWUvPwSXi35Ira0VjcsuHBkzXimONzLme3+0bJucoYMfk9fNd7NKV8l5pPlH8X7HPycyZ8U8PX8L8OY6RFuRPdP0j0/wBvD5uZO6XHfZO+f2rJSskvZvoadrzb1nb0uHj0xxrHWKx9o0xnd5IrtsdiPevyI2do569UNna3Gxt587Ca+T3zUF+ysfeUteXA+nw0M1M96ekudy+k8Xkx89PP1jxP/fzdU3Q34o2g1Talj5WnKDetdunXu2/H7vX3Olh5Ncnj0l4nqfRcvD+evzU+v0/N602XFW77oVxlOyUYQgnKcpNKMYrq2/AiZiPMrVrNpitY3MuYbzdod1rlVs/6Gpap5El9LP1in9Ver5+xz83LmfFP1ew6d+HqViL8nzP8vt/V4HKynOTnZOVtj+tOcnOT95PmaM2mZ3Pl6nFgrSvbSIrH2WHc/IjbNFEe8ZG09sK8bGzthdxsqdUlOuc6px6Trk4TXpqi1bTXzDFlwUy17bxFo+7327HaTbW417Q+mr5L5RBaWw9ZRXKXw0fub2HmT6X/AFeW6j+G6zE343if5Z9P6S6ji5Nd0I2VTjZXNcUJwacZLzTOhExMbh429LY7TW0amPZdJVAAAAAAAAAAAAAAAAAAAAAYu0s+rFqsvvlwV1R4pPq/RJeLb0WnqVtaKxuWXDhvmyRjpG5lxnbW1cna9/HPWNUW1RSvq1x835yfizlZMlstvs+gcPh4en4tetp9Z/77Mfa2yXTX6+JS9NQz8bl/Eu82o8zA6+/DKqxdfEmIYbZdJvDJ7VYzLU8dojS8ZIlacSGSJVqscGmm04tSjJPRxknqmn4cxEzHorekXiYmNxLtm4O9K2jT3dzSyqEu8XJd7DwtS/B+vujscfN8Svn1h846z0yeHl3X/wClvT7fZ5TtB3jlm2/IsaWuPVLS2UXyuuT6eqi/x9ka3Kzd09lXb6H02MGP+Jyx80+n2j6/nP7PLbSwu5rSfV9TVvXUO9gzfEu0aXMxOltlVYuvUtFWC2XS+sNE9rH8aUJYfkR2pjMx7KXEiYZq3iVroQv6vWbi72z2dYoWNyxLJfSx5vupP9pH+68fc2uNyPhzqfRwOtdIry6d9I1eP7/af/Tttc4ySlFqUZJSjJc00+jTOu+eTExOpSCAAAAAAAAAAAAAAAAAAAAOUdpW23k5Cw639DjNO3TpPIa6fwp6e7fkc3l5O63ZHs9p+H+FGLF/EXjzb0+0f7/Zc3a2fCEeJrmMVYhPP5FrTqGu3xzIpcK6mPPZtdKwzvcvDp8zUekmPDYY0y8NXJDNitS7XlScCNEWYd9JWYbFLsKUdCjZiU8fInW+KE51y0a4q5ShLR9VquZNbTHopkxVyRq0RP5+W92BbRFOT6rkkzNjmHN5lMk/LHoxtu5nePkVyW2y8PD2Q1FK5mKHQt6NnQjJDSvLKjEswzKrgTpG1q2rUiYZK2a3Jp05oxzDbx32xtdCrN6usdk+33bXPCtlrKiPeY7fV0a6OH8La+EvQ6fDy90dk+zwn4k4HwskcikeLev5/wC3QzeeXAAAAAAAAAAAAAAAAAABgbd2gsTGvyHz7mqU4r7U9Pmx+L0XxKZLdtZt9GxxcE581MUf8piHB6py4lOb4pTm5zk+spN6tv3bbONud7fTJpEU7a+kRqHr8TOUa/gbMW8OHlwd13jNtZbtm+fiamS25eh4mKKVhrTG3GTjzLQwXq2VMzJDUvDIS1LMS1bAiYXrZrsioxzDbx2YskVZokhNx6DaZrFlJzcgRWIX8eBMMd5bKmJkhp3lkxRZhlMKoTC0MHJ0KS2cbVzMbdhs92dpvCyse9PRV2LvPWp/Nmv6W/5GTDfsvEtDqfFjk8a+P6x4/OPR9DxevNdHzXsd18r9FQAAAAAAAAAAAAAAAAAB4ntYyuDDrqX7fIhF/uwTn+cYmpzLax6+r0H4cxd3Lm/8sTP6+HP44OtSenPqaPb4ernPrJpi25bhFxfsVm2oZq4otbbSWS1ZhdKsahEhZKEiVZhm49paJa16NhVZqZIlq2rpda1JU2sW1akTDJW7GlioppmjKx7sfQiYZaZFqNRGl5uy6YFoYbyzIF4a9l1SJU0cYO1bssImVq1a/JtMcy28dWC2VbKq/MKy+g90Mt34GHY3rJ0VqT+/FcL/ABTO7ht3Uifs+U9RxRi5WSke1pbgyNMAAAAAAAAAAAAAAAAAOc9r0n+grw4siXx0gv7s0eb6Q9V+GI+bLP2hq8KVbpS1WuhirrtdDNF4yzLyu3IJS5Gtkh2uHbceWn0MToGgNmhAnGWhKswyqMjQtEsF8bPqyEy8S1bY5hf4kyzHrSEkQtDFtRWWasrOiIZElNII7Ve/G0dinfjafhnygbPhrdl5G160Ydk9SrPWNIohZVslWXcezGblszG18JZCXsr5nZ4v/wCUPmnXYj+Ovr7ftD1RsOQAAAAAAAAAAAAAAAAAHOu2Wp9zh2r9W6yt/wAUNf8AA0edHyxL1X4VtHxslfrH7S5nj7QsjotXoc6Ly9lfj1nyvZFrs6kzO1KV7PRhyiUZ4k4Bo7jgGjuU4QnZoDacZtE7VmsSvQymie5jnFC48wnuV+CtSyNSNrxjW3YyNr9qLkwnSjmQnSPGDSjmE9qLkFtKBKuoQtykTEMWS2od+7PaO72ZhLpxVO3/AKknP/I7WCNY4fMOq5O/mZJ++v08PRGZzwAAAAAAAAAAAAAAAAA8v2k7PeRs7I4VrKjhyI+0H87/ALHM1+TTuxy63Q+R8Dm0mfSfH6uHUx1OND6XaWYol2Da3ZAiV6ypBAlPhCNqcINqOINouBC20XEJ2poE7NAbUZCUGwlTmEqcITs4QbOEGzQG0ZBFraRxced9tdNfOd1kKofvSkkvzMtK7mIc3lZ4x0tefaNvprEx40111Q5RqhCuP7sUkvyO3EajT5he02tNp914lUAAAAAAAAAAAAAAAAAI2QUk4yScZJxkn0aa0aCYmYncPnnbmy5YGXfjS10rm3U3+tS+cH/J/mcPLj7LzD6j07lxyuNXJ7+/5+6Nb1Ks0pOBKIlFVkaT3K8AO5TgGjuOAHco4BPci6xpPci6yNJ7lO6Gk9x3I0d6ncjR3ndDR3qOsaT3IuBGk9yLiFtouJCdrFrLRDDku9n2P7FeRmSy5r6LDXzG+jyJrRfyjxP4xN/i49z3fR5Pr/L7ccYo9bfs7YdB5AAAAAAAAAAAAAAAAAAAADwPavu88iiOZTHW7ET71LrPG6v+nr7cRqcvF3V7o9Yeh/D/AFD4Gb4V5+W/9p/25ZRZqkcuHupjbKjIsxTCYQACUGgDQhKmgDhAcIFGglFhKLISiwlBkLQhIheFiyRMQra2mNGuy6cKqoudls411wXWUm9EjNSu51Dn8jPWlZtafEPondHYUNmYlWNHRyiuO6a/aXP60v7L0SOtjp2V0+ecvkzyMs5J9/2bku1gAAAAAAAAAAAAAAAAAAAKSSfJ80+TT6AcQ383YezL+8qX6HkSbq06U2dXU/zXp7HK5ODsncekvfdE6p/E4/h3n5q/3j6tBCZqu7ML0ZkscwmpEo0rqEaV1Bo1AagU1ApqE6UbBpFshbSLYSi2EoNkLQtWS0BNtMK+0yRVqZMjqfZLug60to5UdLLItYdclzrrfW1+TkuS9NfPl0ePi7fml4zrHUPi2+DSfEev3dPNpwQAAAAAAAAAAAAAAAAAAAAADE2rs2nMpsoyIqdVq0kujT8JJ+DT0epW1YtGpZcOa+G8ZKTqYcK3m2Bfsq91W6zqnq8e7TRWQ8n5NeKOTmwzjn7PoXTOpU5ePfpaPWP++zXxkYHU0uKRKuk1II0rxEo0ag0ag0ag0o2QlRsCLYTpRsJRbIStznoCbaYd1pkiGrkyPY9m+5D2hOOXmQ/Q63rXXL/VTT8vsr8enmbuDBv5peY6r1Ts3ixz595+n+3bUtOS5JdEuhvPKqgAAAAAAAAAAAAAAAAAAAAAAAGBtrZGPn0yoyYccJc0+k4S8Jxfg0VvSLRqWbj8jJgvGTHOphxHejdrJ2TZpZrZjzelOQl82X3ZfZl6ePgcrNgnHP2e96Z1XHy669LR6x/hq4T1Nd2PVNSBpJMlGldQhXUCgACjYSi2QlFsJW5z0JiFbW0w77tC8Q1MmV7TcDcGzPcMrOjKvDT4q6nrGeT6/dj6+Phy5m7hwb82eZ6n1bs3jxT595+n+3aaq4wjGMEoxilGMYpKMYpaJJeBvPLTO/MpgAAAAAAAAAAAAAAAAAAAAAAAAABYzcSrIrnVdCNtdi4ZwmtYyRExExqVqXtS0WrOphyPe/s+vwuK7BU8jG5ylVzlfSv8169fPXqc/NxZjzV7DpvXq5NY8/ifr7T/AIeNquT6GlMPT1tErqZC6SYQlqSg1Ao2BFshKLYStWWExDHa+mNrKyUYVxlOc2owhBOU5SfRJLqZa136NHNnrSJm06h1Dcfs0UHDJ2olOxaSrxOUq4Pqna/1n93p7m/i48R5s8l1Dq9su6YvEfX6unJG04SoAAAAAAAAAAAAAAAAAAAAAAAAAAAAADxe9vZ9j5rldjaYuU+baX0Nz+/FdH95fHU18vHrfzHiXY6f1nLxtVt81fp7x+TlG09nZODZ3OXXKqfPh15wsiv1oS6SXT+fM5uTFak6l7bic7Fya92Od/vCzGRibqSYFdSRRsgQlIEzpYstLxDDfJpm7vbvZm1bODFh8yLStvnqqavRvxen6q5/mbGPDN/Rxud1LHx4+afP0dn3S3Lw9lR4oLvsmS0sybEuN+cYL9Rei+LZ0MeKtPR5Dl87LyZ+afH0elMjSAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABhbV2Xj5tbpya421y8JdYv7UZLnF+qK2rFo1LLhz5MN4vjnUw5LvZuHkYHFdjcWTirVvlrfSvvJfWX3l8V4nPzcWa+a+Yey6b12mbWPN8tvr7T/AIeUhNPoaWnpInaYShOWgRM6Yt1yReKtbJliHuNzezi7L4b9oqdGO9JQoWsb7l5y8a1+Psb2Ljb82eW6h1rW6YfM/X/DruFiVY8I1UQhVXBaQhBKMYr2N2IiPR5i17XnutO5lfJVAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUA8Fvh2e15HFfs9Rpvesp0/Vpufi19h/g/HzNTNxot5r4l6DpnXL8fWPN81fr7x/mHLr651TlXbCVdlb4ZwmtJRfqjm2rNZ1L2+LPTLSL0ncSsV12XWRqphK22x8MK4LWUn/94l6Um06hr8nk0xVm1p1EOs7k9nlWG4ZGdw35S0lCH1qcd+a+1L73h4eZ0sWCKeZ9XiOodWvyJ7aeK/3l702HHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABpt4d2MLaKXyiv58VpC6t8F0V5cXivR6ox5MVb+rc4nPz8Wd4ra37eyO7u62Fs1P5NX9JPlO6x8d0l5cXgvRaIUx1p6I5XNzcmd5J/p7N2ZGoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/Z",
    description: ": This Project Majorly use for my Paper study purpose. Develop the project using Python and also Use various algorithm",
    tagimg: "https://image.flaticon.com/icons/png/512/643/643350.png",
    Previewlink: "",
    Githublink: "",
  },
  // {
  //   title: "Flappy Bird",
  //   cardImage: "assets/images/project-page/flappybird.png",
  //   description: "Flappy bird game built using React.js",
  //   tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
  //   Previewlink: "",
  //   Githublink: "",
  // },
  // {
  //   title: "Exercise Tracker",
  //   cardImage: "assets/images/project-page/exercise.jpg",
  //   description: "Exercise tracker built using basic redux.",
  //   tagimg: "https://miro.medium.com/max/2800/0*U2DmhXYumRyXH6X1.png",
  //   Previewlink: "",
  //   Githublink: "",
  // },
  // {
  //   title: "Recipe Ingredient Parser",
  //   cardImage: "assets/images/project-page/recipe.jpg",
  //   description: "Recipe Ingredient Parser built using JavaScript.",
  //   tagimg:
  //     "data:image/png;base64,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",
  //   Previewlink: "",
  //   Githublink: "",
  // },
  // {
  //   title: "Poker Game",
  //   cardImage: "assets/images/project-page/poker.jpg",
  //   description: "Poker game built using typescript.",
  //   tagimg: "https://miro.medium.com/max/816/1*mn6bOs7s6Qbao15PMNRyOA.png",
  //   Previewlink: "",
  //   Githublink: "",
  // },
  // {
  //   title: "Tic Tac Toe Game",
  //   cardImage: "assets/images/project-page/tic-tac-toe.png",
  //   description:
  //     "Tested a React Tic Tac Toe Game using Jest and React Testing Library.",
  //   tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
  //   Previewlink: "",
  //   Githublink: "",
  // },
  // {
  //   title: "Personal Book Library",
  //   cardImage: "assets/images/project-page/book.png",
  //   description: "Personal book library app built using JavaScript.",
  //   tagimg:
  //     "data:image/png;base64,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",
  //   Previewlink: "",
  //   Githublink: "",
  // },
  // {
  //   title: "Minesweeper Game",
  //   cardImage: "assets/images/project-page/minesweeper.jpg",
  //   description:
  //     "Minesweeper Game built using python Object Oriented Programming.",
  //   tagimg:
  //     "https://camo.githubusercontent.com/888e388801f947dec7c3d843942c277af25fe2b1aed1821542c4e711f210312a/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f632f63332f507974686f6e2d6c6f676f2d6e6f746578742e7376672f37363870782d507974686f6e2d6c6f676f2d6e6f746578742e7376672e706e67",
  //   Previewlink: "",
  //   Githublink: "",
  // },
  // {
  //   title: "Battery Life Calculator",
  //   cardImage: "assets/images/project-page/battery.png",
  //   description: "Built battery life calculator using Python.",
  //   tagimg:
  //     "https://camo.githubusercontent.com/888e388801f947dec7c3d843942c277af25fe2b1aed1821542c4e711f210312a/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f632f63332f507974686f6e2d6c6f676f2d6e6f746578742e7376672f37363870782d507974686f6e2d6c6f676f2d6e6f746578742e7376672e706e67",
  //   Previewlink: "",
  //   Githublink: "",
  // },
  // {
  //   title: "Movie Recommendation System",
  //   cardImage: "assets/images/project-page/movie-recommendation.jpeg",
  //   description: "Built using Tensorflow.",
  //   tagimg:
  //     "https://cdn-images-1.medium.com/max/1200/1*iDQvKoz7gGHc6YXqvqWWZQ.png",
  //   Previewlink: "",
  //   Githublink: "",
  // },
  // {
  //   title: "Music Recommendation Engine",
  //   cardImage: "assets/images/project-page/music.jpg",
  //   description: "Built using Python.",
  //   tagimg:
  //     "https://camo.githubusercontent.com/888e388801f947dec7c3d843942c277af25fe2b1aed1821542c4e711f210312a/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f632f63332f507974686f6e2d6c6f676f2d6e6f746578742e7376672f37363870782d507974686f6e2d6c6f676f2d6e6f746578742e7376672e706e67",
  //   Previewlink: "",
  //   Githublink: "",
  // },
];

// function for rendering project cards data
const showCards = () => {
  let output = "";
  projects.forEach(({ title, cardImage, Previewlink, Githublink }) => {
    output += `       
        <div class="column skill-card card" style="margin: 15px"data-aos="zoom-in-up" data-aos-easing="linear" data-aos-delay="300" data-aos-duration="600" >
          <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat;">
            <div class="header">
            </div>
            <div class="data">
              <div class="content">
              <div class="title-div">
                <h1 class="title"><a href="#">${title}</a></h1>
                </div>
            <ul class="menu-content"><br>
                  <li><a href="${Previewlink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-monitor"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg></a></li>
                  <li><a href="${Githublink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>`;
  });
  projectcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

function myFunction() {
  // Declare variables
  var input, button, i, skillcard, card, title;
  input = document.getElementById("myInput").value;
  input = input.toUpperCase();
  skillcard = document.getElementsByClassName("skill-card");
  card = document.getElementsByClassName("card");
  title = document.getElementsByClassName("title");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < button.length; i++) {
    if (
      button[i].innerHTML.toUpperCase().includes(input) ||
      title[i].innerHTML.toUpperCase().includes(input)
    ) {
      skillcard[i].style.display = "";
      card[i].style.display = "";
    } else {
      skillcard[i].style.display = "none";
      card[i].style.display = "none";
    }
  }
}
