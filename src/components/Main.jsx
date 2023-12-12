import bgImage from "../assets/bgImage.jpg";
import { TypeAnimation } from "react-type-animation";
import { FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-left scale-x-[-1]"
        src={bgImage}
        alt="background iamge"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center ">
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">
            I'm George
          </h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
            I'm a
            <TypeAnimation
              sequence={[
                "web developer",
                2000,
                "tech enthusiast",
                2000,
                "coder",
                2000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "1em", paddingLeft: "5px" }}
              repeat={Infinity}
            />
          </h2>
          <div className="flex justify-between pt-6 max-w-[200px] w-full">
            <a href="https://github.com/GeorgeOprea1">
              <FaGithub
                className="cursor-pointer hover:scale-150 ease-in duration-200"
                size={20}
              />
            </a>
            <a href="/">
              <FaLinkedinIn
                className="cursor-pointer hover:scale-150 ease-in duration-200"
                size={20}
              />
            </a>{" "}
            <a href="/">
              <FaInstagram
                className="cursor-pointer hover:scale-150 ease-in duration-200"
                size={20}
              />
            </a>
            <a href="#contact">
              <MdEmail
                className="cursor-pointer hover:scale-150 ease-in duration-200"
                size={20}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
