import { useForm } from "react-hook-form";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: "1000" });
  }, []);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div data-aos="zoom-in" className="flex flex-col items-center justify-center">
      <div>
        <p className="text-center text-[#98A2B3] text-[20px]">Get In Touch</p>
      </div>
      <div className="mb-[80px]">
        <h1 className="text-[64px] font-semibold text-center">
          <span className="text-[#FD853A]">Contact </span>
          <span className=""> Me</span>
        </h1>
      </div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex mb-[40px]">
            <div className="mr-[50px]">
              <label className="label">
                <span className="label-text mb-1 text-[20px]">First name</span>
              </label>
              <input
                className="input input-bordered border-[#FD853A] w-[500px] h-[64px]"
                type="text"
                placeholder="Enter Your Name"
                {...register("firstName")}
                required
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text mb-1 text-[20px]">Last name</span>
              </label>
              <input
                className="input input-bordered border-[#FD853A] w-[500px] h-[64px]"
                type="text"
                placeholder="Enter Your Last Name"
                {...register("lastName")}
                required
              />
            </div>
          </div>
          <div className="flex mb-[40px]">
            <div className="mr-[50px]">
              <label className="label">
                <span className="label-text mb-1 text-[20px]">Email</span>
              </label>
              <input
                className="input input-bordered border-[#FD853A] w-[500px] h-[64px]"
                type="email"
                placeholder="Enter Your Email"
                {...register("email")}
                required
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text mb-1 text-[20px]">
                  Phone number
                </span>
              </label>
              <input
                className="input input-bordered border-[#FD853A] w-[500px] h-[64px]"
                type="number"
                placeholder="Enter Your Phone number"
                {...register("phone")}
                required
              />
            </div>
          </div>
          <div>
            <div>
              <label className="label">
                <span className="label-text mb-1 text-[20px]">Message</span>
              </label>
              <input
                className="input input-bordered border-[#FD853A] w-[1050px] h-[240px]"
                type="text"
                placeholder="Enter Your Message"
                {...register("message")}
                required
              />
            </div>
          </div>
          <div className="bg-[#FD853A] w-[115px] mt-[60px] mx-auto">
            <input
              style={{ border: "1px solid #171717", padding: "13px 25px" }}
              className="cursor-pointer text-[20px] text-center font-semibold text-white"
              type="submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
