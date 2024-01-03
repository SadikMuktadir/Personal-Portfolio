import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Skill = () => {
  useEffect(() => {
    AOS.init({ duration: "1000" });
  }, []);
  return (
    <div data-aos="zoom-in" className="mb-[100px]">
      <div className="mb-[80px]">
        <h1 className="text-[40px] lg:text-[64px] font-semibold text-center">
          My <span className="text-[#FD853A]">Skills</span>
        </h1>
      </div>
      <div className="my-[50px] text-center">
        <h1 className="text-[25px] lg:text-[40px] font-sm">
          <span className="text-[#FD853A]">Tools & Design</span> Skills
          Development Skills
        </h1>
      </div>
      <div className="flex justify-center items-center">
        <div className="w-[30%] flex mt-[20px]">
          <div className="h-[50px] w-[50px] lg:w-[100px] mr-3 lg:mr-8 flex flex-col justify-center items-center">
            <img
              className=" h-[100px] w-[50px]"
              src="vs-removebg-preview.png"
              alt=""
            />
            <p className="text-[12px] md:text-[15px]">VS Code</p>
          </div>
          <div className="h-[50px] w-[50px] lg:w-[100px] mr-3 lg:mr-8 flex flex-col justify-center items-center">
            <img
              className="h-[100px] w-[50px]"
              src="git-removebg-preview.png"
              alt=""
            />
            <p className="text-[12px] md:text-[15px]">GitHub</p>
          </div>
          <div className="h-[50px] w-[50px] lg:w-[100px] mr-3 lg:mr-8 flex flex-col justify-center items-center">
            <img
              className="h-[100px] w-[100px] lg:w-[200px]"
              src="figma-removebg-preview.png"
              alt=""
            />
            <p className="text-[12px] md:text-[15px] mt-4">Figma</p>
          </div>
          <div className="h-[50px] w-[50px] lg:w-[100px] mr-3 lg:mr-8 flex flex-col justify-center items-center">
            <img
              className="h-[100px] w-[100px] lg:w-[200px]"
              src="canva-removebg-preview.png"
              alt=""
            />
            <p className="text-[12px] md:text-[15px] mt-4">Canva</p>
          </div>
        </div>
      </div>
      <div className="my-[50px] text-center">
        <h1 className="text-[25px] lg:text-[40px] font-sm">
          <span className="text-[#FD853A]">Development</span> Skills
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="mt-[80px] flex">
          <div className="h-[50px] w-[50px] lg:w-[100px] mr-3 lg:mr-8 flex flex-col justify-center items-center">
            <img
              className="h-[80px] w-[80px]"
              src="html-removebg-preview.png"
              alt=""
            />
            <p className="text-[12px] md:text-[15px] mt-4">HTML5</p>
          </div>
          <div className="h-[50px] w-[50px] lg:w-[100px] mr-3 lg:mr-8 flex flex-col justify-center items-center">
            <img
              className="h-[80px] w-[80px]"
              src="css-removebg-preview.png"
              alt=""
            />
            <p className="text-[12px] md:text-[15px] mt-4">CSS3</p>
          </div>
          <div className="h-[50px] w-[50px] lg:w-[100px] mr-3 lg:mr-8 flex flex-col justify-center items-center">
            <img
              className="h-[80px] w-[80px]"
              src="tailwind-removebg-preview.png"
              alt=""
            />
            <p className="text-[12px] md:text-[15px] mt-11">Tailwind CSS</p>
          </div>
          <div className="h-[50px] w-[50px] lg:w-[100px] mr-3 lg:mr-8 flex flex-col justify-center items-center">
            <img
              className="h-[80px] w-[80px]"
              src="bootstrap-logo-removebg-preview.png"
              alt=""
            />
            <p className="text-[12px] md:text-[15px] mt-2">Bootstrap</p>
          </div>
          <div className="h-[50px] w-[50px] lg:w-[100px] mr-3 lg:mr-8 flex flex-col justify-center items-center">
            <img
              className="h-[80px] w-[80px]"
              src="js-removebg-preview.png"
              alt=""
            />
            <p className="text-[12px] md:text-[15px] mt-8">JavaScript</p>
          </div>
        </div>
        <div className="mt-[100px] flex">
          <div className="h-[50px] w-[50px] lg:w-[100px] mr-3 lg:mr-8 flex flex-col justify-center items-center">
            <img
              className="h-[80px] w-[80px]"
              src="react-removebg-preview.png"
              alt=""
            />
            <p className="text-[12px] md:text-[15px] mt-4">React JS</p>
          </div>
          <div className="h-[50px] w-[50px] lg:w-[100px] mr-3 lg:mr-8 flex flex-col justify-center items-center">
            <img
              className="h-[80px] w-[80px]"
              src="node-removebg-preview.png"
              alt=""
            />
            <p className="text-[12px] md:text-[15px] mt-4">Node JS</p>
          </div>
          <div className="h-[50px] w-[50px] lg:w-[100px] mr-3 lg:mr-8 flex flex-col justify-center items-center">
            <img
              className="h-[80px] w-[80px]"
              src="png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo-removebg-preview.png"
              alt=""
            />
            <p className="text-[12px] md:text-[15px] mt-4">Express JS</p>
          </div>
          <div className="h-[50px] w-[50px] lg:w-[100px] mr-3 lg:mr-8 flex flex-col justify-center items-center">
            <img
              className="h-[80px] w-[80px]"
              src="mongo-removebg-preview.png"
              alt=""
            />
            <p className="text-[12px] md:text-[15px] mt-4">MongoDB JS</p>
          </div>
          <div className="h-[50px] w-[50px] lg:w-[100px] lg:mr-8 flex flex-col justify-center items-center">
            <img
              className="h-[80px] w-[80px]"
              src="fire-removebg-preview.png"
              alt=""
            />
            <p className="text-[12px] md:text-[15px] mt-4">Firebase</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
