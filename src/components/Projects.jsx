import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: "1000" });
  }, []);
  return (
    <div data-aos="zoom-in" className="mb-[100px]">
      <div className="mb-[80px]">
        <h1 className="text-[40px] lg:text-[64px] font-semibold text-center">
          My <span className="text-[#FD853A]">Projects</span>
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row">
        <div className="card w-[300px] lg:w-[400px] shadow-xl lg:mr-6">
          <div className="card-body">
            <div className="h-[80px]">
              <h2 className="text-[32px] px-3 text-center">
                Restaurant Website
              </h2>
            </div>
            <div className="divider"></div>
            <div>
              <figure>
                <img
                  className="h-[200px] lg:h-[350px] w-[200px] lg:w-[350px]"
                  src="https://i.ibb.co/YfLcxhD/brooke-lark-lc-Z9-Nxh-OSlo-unsplash.jpg"
                  alt="Shoes"
                />
              </figure>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row my-4 mx-auto">
            <div>
              <a
                href="https://wizard-8c012.web.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  className="mr-4 text-[#171717] hover:text-white bg-white hover:bg-[#FD853A] w-[200px] mb-2 lg:mb-0 lg:w-[150px] rounded-[35px] px-[60px] py-[30px]"
                  style={{ border: "1px solid #171717", padding: "13px 25px" }}
                >
                  <h1 className="text-[20px] text-center font-semibold">
                    Live Link
                  </h1>
                </div>
              </a>
            </div>
            <div>
              <a
                href="https://github.com/SadikMuktadir/bistro"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  className="text-[#171717] hover:text-white bg-white hover:bg-[#FD853A] w-[200px] rounded-[35px] px-[60px] py-[30px]"
                  style={{ border: "1px solid #171717", padding: "13px 25px" }}
                >
                  <h1 className="text-[20px] text-center font-semibold">
                    GitHub Link
                  </h1>
                </div>
              </a>
            </div>
          </div>
          <div className="flex justify-around my-2">
            <div
              className="w-100px rounded-[35px] my-auto"
              style={{ border: "1px solid #667085", padding: "5px 10px" }}
            >
              <p className="text-[15px] text-[#667085]">React JS</p>
            </div>
            <div
              className="w-100px rounded-[35px] my-auto"
              style={{ border: "1px solid #667085", padding: "5px 10px" }}
            >
              <p className="text-[15px] text-[#667085]">Tailwind CSS</p>
            </div>
            <div
              className="w-100px rounded-[35px] my-auto"
              style={{ border: "1px solid #667085", padding: "5px 10px" }}
            >
              <p className="text-[15px] text-[#667085]">Node JS</p>
            </div>
            <div
              className="w-100px rounded-[35px] my-auto"
              style={{ border: "1px solid #667085", padding: "5px 10px" }}
            >
              <p className="text-[15px] text-[#667085]">Express JS</p>
            </div>
          </div>
          <div className="flex my-2 ml-[5px]">
            <div
              className="w-100px mr-[10px] rounded-[35px] my-auto"
              style={{ border: "1px solid #667085", padding: "5px 10px" }}
            >
              <p className="text-[15px] text-[#667085]">MongoBD</p>
            </div>
            <div
              className="w-100px rounded-[35px] my-auto"
              style={{ border: "1px solid #667085", padding: "5px 10px" }}
            >
              <p className="text-[15px] text-[#667085]">Firebase</p>
            </div>
          </div>
        </div>
        <div className="card w-[300px] lg:w-[400px] shadow-xl">
          <div className="card-body">
            <div className="h-[80px]">
              <h2 className="text-[32px] px-3 text-center">
                Medical Camp Management
              </h2>
            </div>
            <div className="divider"></div>
            <div>
              <figure>
                <img
                  className="h-[200px] lg:h-[350px] w-[200px] lg:w-[350px]"
                  src="https://i.ibb.co/Wvr62fb/national-cancer-institute-DK-4-VWK1tw-unsplash.jpg"
                  alt="Shoes"
                />
              </figure>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row my-4 mx-auto">
            <div>
              <a
                href="https://medical-99924.web.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  className="mr-4 text-[#171717] hover:text-white bg-white hover:bg-[#FD853A] w-[200px] mb-2 lg:mb-0 lg:w-[150px] rounded-[35px] px-[60px] py-[30px]"
                  style={{ border: "1px solid #171717", padding: "13px 25px" }}
                >
                  <h1 className="text-[20px] text-center font-semibold">
                    Live Link
                  </h1>
                </div>
              </a>
            </div>
            <div>
              <a
                href="https://github.com/SadikMuktadir/medical-camp-management"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  className="text-[#171717] hover:text-white bg-white hover:bg-[#FD853A] w-[200px] rounded-[35px] px-[60px] py-[30px]"
                  style={{ border: "1px solid #171717", padding: "13px 25px" }}
                >
                  <h1 className="text-[20px] text-center font-semibold">
                    GitHub Link
                  </h1>
                </div>
              </a>
            </div>
          </div>
          <div className="flex justify-around my-2">
            <div
              className="w-100px rounded-[35px] my-auto"
              style={{ border: "1px solid #667085", padding: "5px 10px" }}
            >
              <p className="text-[15px] text-[#667085]">React JS</p>
            </div>
            <div
              className="w-100px rounded-[35px] my-auto"
              style={{ border: "1px solid #667085", padding: "5px 10px" }}
            >
              <p className="text-[15px] text-[#667085]">Tailwind CSS</p>
            </div>
            <div
              className="w-100px rounded-[35px] my-auto"
              style={{ border: "1px solid #667085", padding: "5px 10px" }}
            >
              <p className="text-[15px] text-[#667085]">Node JS</p>
            </div>
            <div
              className="w-100px rounded-[35px] my-auto"
              style={{ border: "1px solid #667085", padding: "5px 10px" }}
            >
              <p className="text-[15px] text-[#667085]">Express JS</p>
            </div>
          </div>
          <div className="flex my-2 ml-[5px]">
            <div
              className="w-100px mr-[10px] rounded-[35px] my-auto"
              style={{ border: "1px solid #667085", padding: "5px 10px" }}
            >
              <p className="text-[15px] text-[#667085]">MongoBD</p>
            </div>
            <div
              className="w-100px rounded-[35px] my-auto"
              style={{ border: "1px solid #667085", padding: "5px 10px" }}
            >
              <p className="text-[15px] text-[#667085]">Firebase</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
