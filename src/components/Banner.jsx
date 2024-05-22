import { MdEmail } from "react-icons/md";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
const Banner = () => {
  return (
    <div className="ml-[20px] lg:ml-[0px] my-[100px] flex flex-col-reverse lg:flex-row justify-between">
      <div className="">
        <div
          className=" text-[#171717] hover:text-white bg-white hover:bg-[#FD853A] mb-3 w-[105px] rounded-[35px]"
          style={{ border: "1px solid #171717", padding: "13px 25px" }}
        >
          <h1 className="text-[20px] font-semibold">Hello</h1>
        </div>
        <div>
          <p className="text-[40px] lg:text-[60px] font-semibold mb-[30px]">
            I am <span className="text-[#FD853A]">Sadik</span>,<br />
            <span className="text-[#FD853A]">Front-End</span> Web Developer
          </p>
          <div className="flex mb-2">
            <div className="flex justify-center items-center">
              <MdEmail className="text-[20px] mr-4" />
            </div>
            <p className="text-[15px] lg:text-[25px]">sadikmuktadir2.0@gmail</p>
          </div>
          <div className="flex mb-2">
            <div className="flex justify-center items-center">
              <FaPhoneAlt className="text-[20px] mr-4" />
            </div>
            <p className="text-[15px] lg:text-[25px]">+880 01849-142810</p>
          </div>
          <div className="flex mb-2">
            <div className="flex justify-center items-center">
              <FaMapMarkerAlt className="text-[20px] mr-4" />
            </div>
            <p className="text-[15px] lg:text-[25px]">Rajshahi , Bangladesh</p>
          </div>
        </div>
        <div className="flex mb-5">
          <div className="h-[50px] w-[50px] mr-3">
            <a href="https://www.facebook.com/sadikmuktadir.mithun" target="_blank"
              rel="noopener noreferrer"> <img src="https://i.ibb.co/qymLgdr/images.png" alt="" /></a>
          </div>
          <a href="https://wa.me/+88001849142810" target="_blank"
            rel="noopener noreferrer">
            <div className="h-[50px] w-[50px] mr-3">
              <img src="https://i.ibb.co/vzJ98Qb/download.png" alt="" />
            </div>
          </a>
          <a href="https://www.linkedin.com/in/md-sadik-moktadir-mithun-18b9b828b" target="_blank"
            rel="noopener noreferrer">
            <div className="h-[50px] w-[50px] mr-3">
              <img src="https://i.ibb.co/ZMPsJN2/png-transparent-linkedin-logo-linkedin-logo-computer-icons-business-symbol-linkedin-icon-miscellaneo.png" alt="" />
            </div>
          </a>

          <a href="https://github.com/SadikMuktadir" target="_blank"
            rel="noopener noreferrer">
            <div className="h-[50px] w-[50px]">
              <img
                src="https://i.ibb.co/qyqBcFz/Git-Hub-Mark-ea2971cee799.png"
                alt=""
              />
            </div>
          </a>
        </div>
        <div>
          {/* <div
            className="mt-[40px] text-[#171717] hover:text-white bg-white hover:bg-[#FD853A] w-[250px] rounded-[35px] px-[60px] py-[30px]"
            style={{ border: "1px solid #171717", padding: "13px 25px" }}
          >
            <a href="SadikMoktadirResume.pdf" download>
              <div className="flex">
                <div className="mr-2">
                  <MdDownload className="text-[30px]" />
                </div>
                <h1 className="text-[20px] text-center font-semibold">
                  Download CV
                </h1>
              </div>
            </a>
          </div> */}
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="h-[200px] lg:h-[360px] w-[200px] lg:w-[360px]">
          <img
            className="rounded-[180px]"
            src="photo1703232155.jpeg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
{
  /* <div className="flex">
        <div className="flex flex-col justify-center">
          <img
            className="w-[30px] h-[30px]"
            src="../../public/logo/quote-up.png"
            alt=""
          />
          <p className="my-2 w-[250px] text-[#344054] text-[20px] font-bold">
            I use MongoDB , Express JS , React JS and Node JS for creating
            Full-stack web application.
          </p>
        </div>
        <div className="flex flex-col justify-center items-end">
          <img src="../../public/logo/Frame 4.png" alt="" />
          <p className="text-[#344054] text-[30px] font-bold my-2">6+ Months</p>
          <p className="text-[#344054] text-[20px] font-bold">Experince</p>
        </div>
      </div> */
}
