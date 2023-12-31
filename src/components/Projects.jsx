import ProjectItem from "./ProjectItem";
import restaurantApp from "../assets/restaurantApp.avif";
import sketchApp from "../assets/sketchApp.avif";
import weatherApp from "../assets/weatherApp.avif";
import whackApp from "../assets/whackApp.avif";
import cvBuilder from "../assets/cvBuilder.avif";
import memoryCard from "../assets/memoryCard.avif";

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Projects
      </h1>
      <p className="text-center py-8">
        Hey there! Welcome to my portfolio—a collection of cool projects that
        track my path as a web developer. These projects are like snapshots of
        my journey, showing how I've leveled up from basic HTML to creating
        full-on web applications. I've played around with HTML, CSS, and
        JavaScript, then jumped into fancy stuff like React and Tailwind to make
        web pages shine. Thanks for stopping by and checking out my work!
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem
          link="https://github.com/GeorgeOprea1/cv-builder"
          img={cvBuilder}
          title="cvBuilderApp"
          used="React"
        />
        <ProjectItem
          link="https://github.com/GeorgeOprea1/memory-card-game"
          img={memoryCard}
          title="memoryCardApp"
          used="React"
        />
        <ProjectItem
          link="https://github.com/GeorgeOprea1/weatherApp"
          img={weatherApp}
          title="weatherApp"
          used="JavaScript"
        />
        <ProjectItem
          link="https://github.com/GeorgeOprea1/etch-a-sketch."
          img={sketchApp}
          title="sketchApp"
          used="JavaScript"
        />
        <ProjectItem
          link="https://github.com/GeorgeOprea1/whack-a-mole"
          img={whackApp}
          title="whackApp"
          used="JavaScript"
        />
        <ProjectItem
          link="https://github.com/GeorgeOprea1/restaurant-page"
          img={restaurantApp}
          title="RestaurantApp"
          used="JavaScript"
        />
      </div>
    </div>
  );
};

export default Projects;
