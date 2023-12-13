import react from "../assets/react.svg";
import css from "../assets/css.svg";
import html from "../assets/html.svg";
import javascript from "../assets/javascript.svg";
import tailwind from "../assets/tailwind.svg";
import node from "../assets/node.svg";
import myPhoto from "../assets/myPhoto.jpg";

const About = () => {
  return (
    <div id="about" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16 my-6">
      <h1 className="text-4xl font-bold text-center text-[#001b5e] ">
        About Me
      </h1>
      <div className="grid sm:grid-cols-2 gap-15">
        <div className="flex justify-center items-center p-8">
          <img
            className="rounded-full w-[60%]"
            src={myPhoto}
            alt="a photo with me"
          />
        </div>
        <div className="flex flex-col justify-center items-center p-8 gap-5">
          <p>
            <span className="pl-5">
              I'm George, a web developer based in Pitesti.
            </span>
            I spend my time building websites and dabbling in the world of
            coding. It's pretty neat to take an idea and turn it into something
            you can click around, right?
            <br></br>
            <br></br>
            <span className="pl-5">Beyond coding, photography is my jam.</span>
            There's something magical about freezing moments in time through the
            lens.When I'm not focusing on photography, I'm diving into my other
            passion: American football. The strategy and intensity of the game
            fascinate me.
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-10">
        <h3 className="text-lg font-bold text-[#001b5e] my-6">
          Technologies I've worked with:
        </h3>
        <div className=" flex justify-between p-8 items-center">
          <img
            className="w-[5%] hover:scale-150 ease-in duration-200 cursor-pointer "
            src={html}
            alt="html logo"
          />
          <img
            className="w-[5%] hover:scale-150 ease-in duration-200 cursor-pointer"
            src={css}
            alt="css logo"
          />
          <img
            className="w-[5%] hover:scale-150 ease-in duration-200 cursor-pointer"
            src={javascript}
            alt="javascript logo"
          />
          <img
            className="w-[5%] hover:scale-150 ease-in duration-200 cursor-pointer"
            src={tailwind}
            alt="tailwind logo"
          />
          <img
            className="w-[5%] hover:scale-150 ease-in duration-200 cursor-pointer"
            src={react}
            alt="react logo"
          />
          <img
            className="w-[5%] hover:scale-150 ease-in duration-200 cursor-pointer"
            src={node}
            alt="node logo"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
