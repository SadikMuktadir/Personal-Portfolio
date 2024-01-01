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
            <div className="card w-[400px] shadow-xl">
              <div className="card-body">
                <div className="h-[120px]">
                  <h2 className="text-[32px] px-3 text-center">
                    Website Design & Development
                  </h2>
                </div>
                <div className="divider"></div>
                <div>
                  <figure>
                    <img className="h-[350px] w-[350px]"
                      src="https://i.ibb.co/QnYGqN9/lee-campbell-Dt-Dl-Vpy-vv-Q-unsplash.jpg"
                      alt="Shoes"
                    />
                  </figure>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card w-[400px] bg-base-100 shadow-xl">
              <div className="card-body">
                <div className="h-[120px]">
                  <h2 className="text-[32px] px-3 text-center">E-commerce website</h2>
                </div>
                <div className="divider"></div>
                <div>
                  <figure>
                    <img className="h-[350px] w-[350px]"
                      src="https://i.ibb.co/FscVxxn/roberto-cortese-F1-I4-IN86-Ni-E-unsplash.jpg"
                      alt="Shoes"
                    />
                  </figure>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card w-[400px] bg-base-100 shadow-xl">
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
                    <img className="h-[350px] w-[350px]"
                      src="https://i.ibb.co/84d6s3V/igor-miske-JVSgc-V8-vb4-unsplash.jpg"
                      alt="Shoes"
                    />
                  </figure>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card w-[400px] bg-base-100 shadow-xl">
              <div className="card-body">
                <div className="h-[120px]">
                  <h2 className="text-[32px] px-3 text-center">MERN Stack Application</h2>
                </div>
                <div className="divider"></div>
                <div>
                  <figure>
                    <img className="h-[350px] w-[350px]"
                      src="https://i.ibb.co/Tmjf7g9/balazs-ketyi-x335-IZXxfc-unsplash.jpg"
                      alt="Shoes"
                    />
                  </figure>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card w-[400px] bg-base-100 shadow-xl">
              <div className="card-body">
                <div className="h-[120px]">
                  <h2 className="text-[32px] px-3 text-center">Fix Error</h2>
                </div>
                <div className="divider"></div>
                <div>
                  <figure>
                    <img className="h-[350px] w-[350px]"
                      src="https://i.ibb.co/QDR77Vs/clement-helardot-95-YRwf6-CNw8-unsplash.jpg"
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
