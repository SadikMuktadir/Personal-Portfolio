import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
const MyServices = () => {
  return (
    <div className="mb-[100px]">
      <div className="mb-[80px]">
        <h1 className="text-[64px] font-semibold text-center">
          My <span className="text-[#FD853A]">Services</span>
        </h1>
      </div>
      <div>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="card h-[500px] w-[400px] shadow-xl">
              <div className="card-body">
                <div className="h-[120px]">
                  <h2 className="text-[32px] px-3 text-center">
                    Website Design & Development
                  </h2>
                </div>
                <div className="divider"></div>
                <div>
                  <figure>
                    <img
                      src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                      alt="Shoes"
                    />
                  </figure>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card h-[500px] w-[400px] bg-base-100 shadow-xl">
              <div className="card-body">
                <div className="h-[120px]">
                  <h2 className="text-[32px] px-3 text-center">E-commerce website</h2>
                </div>
                <div className="divider"></div>
                <div>
                  <figure>
                    <img
                      src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                      alt="Shoes"
                    />
                  </figure>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card h-[500px] w-[400px] bg-base-100 shadow-xl">
              <div className="card-body">
                <div className="h-[120px]">
                  <div className="h-[120px]">
                    <h2 className="text-[32px] px-3 text-center">
                      Single page Application
                    </h2>
                  </div>
                </div>
                <div className="divider"></div>
                <div>
                  <figure>
                    <img
                      src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                      alt="Shoes"
                    />
                  </figure>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card h-[500px] w-[400px] bg-base-100 shadow-xl">
              <div className="card-body">
                <div className="h-[120px]">
                  <h2 className="text-[32px] px-3 text-center">MERN Stack Application</h2>
                </div>
                <div className="divider"></div>
                <div>
                  <figure>
                    <img
                      src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                      alt="Shoes"
                    />
                  </figure>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card h-[500px] w-[400px] bg-base-100 shadow-xl">
              <div className="card-body">
                <div className="h-[120px]">
                  <h2 className="text-[32px] px-3 text-center">Fix Error</h2>
                </div>
                <div className="divider"></div>
                <div>
                  <figure>
                    <img
                      src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                      alt="Shoes"
                    />
                  </figure>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
// className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/1s88Brj/Frame-65.png)'}}
export default MyServices;
