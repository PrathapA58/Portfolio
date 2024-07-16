AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Software Development Intern",
    cardImage: "data:image/png;base64,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",
    place: "Hackerrank",
    time: "(July, 2024)",
    desp: "<li> I'm learning how to use frameworks like React for front-end development and Node.js for backend tasks under the guidance of experienced developers.</li> <li> I actively participate in coding new features and enhancing existing functionalities of HackerRank's platform.</li>",
  },
  // {
  //   title: "Student Developer",
  //   cardImage: "assets/images/experience-page/gsoc.png",
  //   place: "Google Summer Of Code",
  //   time: "(Mar - Aug, 2019)",
  //   desp: "<li>Worked with MOZILLA as a part of Google Summer Of Code.</li><li>Worked on Extension Activity Monitor which is a privileged extension for Firefox that uses the activityLog API (privileged API) to monitor the activities of the other installed extensions.</li><li>The activityLog API listens for logs from other installed extensions.</li>",
  // },
  // {
  //   title: "Research Intern",
  //   cardImage: "assets/images/experience-page/IIT_Bombay.jpg",
  //   place: "IIT, Bombay",
  //   time: "(Dec, 19 - Jan, 20)",
  //   desp: "<li>Worked on the project “LTI (Learning Tools Interoperability) 2.0 standards Implementation for ekShiksha.</li><li>Designed a software that would help faculty to create a quiz using the questions from the database based on his/her choice of topics and he should be provided with various facilities and options to create a quiz of his choice.</li>",
  // },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "7-Day Python and Deep Learning bootcamp",
    cardImage: "data:image/png;base64,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",
    description:
      "immersed myself in the fundamentals and applications of Artificial Intelligence (AI) and Deep Learning (DL).",
  },
  {
    title: "Microsoft Student Ambassadors",
    cardImage: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAABnRSTlMAAAAAAABupgeRAAAAWklEQVR4AWP4FKBEJPrip8wABrV7GOp3EYtGhgWjFoxaMGrBqAXf/OSIRD995CEWVO9hqN1FLBoOYNlnotF3iI7/O4lHQOVL3hONPo9agB2NWjBqwagFoxYAAB2zMZ7bQW2tAAAAAElFTkSuQmCC",
    description:
      "Being a Student Ambassador gives you the feeling of belonging. It not only helped me learn new skills but also gain confidence",
  },
  {
    title: "AI for Indida",
    cardImage: "data:image/jpeg;base64,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",
    description:
      "Build A Face Reconition Applicaation using Python, organized by GUVI and Google For Education Partner",
  },
  {
    title: "Ethical Hacking Workshop",
    cardImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOsqyijy67SnX1VsnRtOFjepgdjvW0YVRuFA&s",
    description:
      "To participate ethical hacking workshop on Stupid Skills",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "The Uplift Project",
    subtitle: "Mentor",
    image: "assets/images/experience-page/uplift.png",
    // desp: "I would be responsible for guiding 100s of participants across the globe in their first steps towards Applied Data Science and building end-to-end machine learning projects.",
    // href: "https://uplift.girlscript.tech/",
  },
  // {
  //   title: "ULHacks",
  //   subtitle: "Judge",
  //   image: "assets/images/experience-page/ulhacks.png",
  //   desp: "ULHacks is a 36 hour long hackathon organized with an aim to enable students to create a project which empowers learning.",
  //   href: "https://ulhacks.com/",
  // },
  // {
  //   title: "WaffleHacks",
  //   subtitle: "Judge",
  //   image: "assets/images/experience-page/wafflehacks.png",
  //   desp: "WaffleHacks 2021 is an upcoming 48-hour student-organized hackathon with an aim to bring technical solutions to local communities and small businesses.",
  //   href: "https://wafflehacks.org/",
  // },
  // {
  //   title: "Elevate Tech",
  //   subtitle: "Judge",
  //   image: "assets/images/experience-page/elevate.png",
  //   desp: "Elevate Hacks is an upcoming all-female virtual hackathon coming from AUGUST 14th to 15th.",
  //   href: "https://elevatetech.codes/",
  // },
  // {
  //   title: "PitchTeen",
  //   subtitle: "Judge",
  //   image: "assets/images/experience-page/pitchteen.png",
  //   desp: "PitchTeen 2.0 was a tech startup competition for female and non-binary communities in high school and college from all over the world with an aim to create a safe and encouraging place for women to help them explore tech and business fields.",
  //   href: "https://www.linkedin.com/company/pitchteen/about/",
  // },
  // {
  //   title: "Hack-A-Solution",
  //   subtitle: "Judge",
  //   image: "assets/images/experience-page/hackasolution.png",
  //   desp: "Hack-a-Solution 2021 is a 24 hour long hackathon organized by Frisco students to raise awareness of world issues through technology.",
  //   href: "https://hackasolution.devpost.com/",
  // },
  // {
  //   title: "UniGlobe Hacks",
  //   subtitle: "Judge",
  //   image: "assets/images/experience-page/uniglobe.png",
  //   desp: "UniGlobe Hacks 2.0 is an upcoming 4-day long hackathon run by high school students held during 28-31 July 2021.",
  //   href: "https://uniglobe-hacks.devpost.com/",
  // },
  // {
  //   title: "AtlasHacks",
  //   subtitle: "Mentor",
  //   image: "assets/images/experience-page/atlas.png",
  //   desp: "AtlasHacks II is a 3-day virtual hackathon that aims to foster creativity within hackers all around the world.",
  //   href: "https://atlashacks2.devpost.com/",
  // },
  // {
  //   title: "NeoHacks",
  //   subtitle: "Judge",
  //   image: "assets/images/experience-page/neo.png",
  //   desp: "NeoHacks is an upcoming 48-hour hackathon taking place July 23-25, 2021 where hundreds of students from around the world will come together virtually to learn new skills, meet new friends, and build awesome projects. We provide beginner-friendly workshops, mentorship, fun games, and more.",
  //   href: "https://neohacks.org/",
  // },
  // {
  //   title: "Mission Inspired",
  //   subtitle: "Judge",
  //   image: "assets/images/experience-page/mission.png",
  //   desp: "InspireEd Hacks is a nationwide initiative organized by the student-for-student nonprofit, Mission InspirEd, challenging students ages 10-18 to synthesize their creativity and coding experience into a product beneficial to the educational community.",
  //   href: "https://www.missioninspired.org/hackathon",
  // },
  // {
  //   title: "Hack3",
  //   subtitle: "Judge",
  //   image: "assets/images/experience-page/hack3.png",
  //   desp: "Hack3 2021 is an upcoming global online hackathon that aims to enable high school students to learn computer science, with a broader message of (everyone can code) targeting underrepresented demographics to improve diversity and inclusion of individuals in the computer technology space.",
  //   href: "https://hack3.co/",
  // },
  // {
  //   title: "JITHack",
  //   subtitle: "Mentor",
  //   image: "assets/images/experience-page/jithack.png",
  //   desp: "JITHack is an upcoming virtual design and development hackathon organized by the students of Jyothy Institute of Technology, Bengaluru on June 26, 2021, where participants have 24 hours to build something incredible.",
  //   href: "https://jithack.netlify.app/",
  // },
  // {
  //   title: "Recess Hacks",
  //   subtitle: "Mentor",
  //   image: "assets/images/experience-page/recess.png",
  //   desp: "Recess Hacks is an upcoming hackathon for high school students in the Greater Toronto Area that strives to encourage innovation among high school students and get involved in technology.",
  //   href: "https://recesshacks.com/",
  // },
  // {
  //   title: "Citro Tech",
  //   subtitle: "Mentor",
  //   image: "assets/images/experience-page/citro.png",
  //   desp: "Citro Hacks 2021 is an upcoming all-inclusive online hackathon organized by Citro Tech, a student led organization dedicated to empowering minorities in the tech field</li>",
  //   href: "https://citro.tech/",
  // },
  // {
  //   title: "NHacks",
  //   subtitle: "Judge",
  //   image: "assets/images/experience-page/nhacks.png",
  //   desp: "NHacks VI was a hackathon that aimed to encourage students everywhere to develop skills in computer science by creating tangible products that they're proud of. It initially started as Michigan's largest high school hackathon.",
  //   href: "https://nhacks-vi.devpost.com/",
  // },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp, href }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="${href}" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
