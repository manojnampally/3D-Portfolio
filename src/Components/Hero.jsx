import "boxicons/css/boxicons.min.css";
import Spline from "@splinetool/react-spline";
import BackgroungImg from "../assets/background.png";
const Hero = () => {
  return (
    <main className="flex flex-1 flex-col justify-between  h-full">
      <div className="flex py-10 relative">
        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="flex flex-col absolute md:gap-10 lg:top-12 lg:left-4 md:top-36 md:left-1 top-72 left-12 [@media(max-width:380px)]:top-28 [@media(max-width:380px)]:left-8"
        >
          <div className="introducing-container w-[230px] md:w-[300px] h-[33px] flex justify-center items-center mb-5 relative">
            <div>
              <i class="bx bxs-star-half">Developer Portfolio </i>
            </div>
          </div>

          <div className="lg:max-w-[500px] sm:max-w-[400px] max-w-[250px] leading-relaxed">
            <h1 className="lg:text-5xl sm:text-4xl text-2xl font-extrabold mb-5 bg-gradient-radical from-violet-400 to-white bg-clip-text text-transparent">
              Providing the best Project Experience
            </h1>
            <p className="max-w-[400px]">
              WITH OVER 3 YEARS OF REFINED EXPERTISE THIS DEVELOPER HAS
              METICULOUSLY CRAFTED SEAMLESS AND INTUTIVE USER EXPERIENCE
            </p>
          </div>
          <div className="mt-5">
            <a
              href="#"
              className="w-[208px] h-[33px] inline-flex justify-center items-center border border-gray-400 rounded-full text-sm tracking-wider contact-btn "
            >
              <i class="bx bx-send"> </i>CONTACT ME
            </a>
          </div>
        </div>

        <div
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="300"
          data-aos-offset="0"
          className="lg:w-[70%] lg:h-[70%] -z-10 fixed lg:top-[12%] md:right-[-15%] md:top-[20%] md:h-[50%] h-[35%] top-[10%] right-[14%]"
        >
          <Spline scene="https://prod.spline.design/3KMsoLzbl3Sv-Lnq/scene.splinecode" />
        </div>
      </div>

      <div className="mt-auto">
        <h1 className="lg:text-9xl md:text-8xl text-3xl font-extrabold mb-8 tracking-wider text-center bg-gradient-radical  from-white to-gray-600 bg-clip-text text-transparent [@media(max-width:380px)]:mb-2">
          WEB DEVELOPER
        </h1>
      </div>
      <img
        className="absolute -z-20 bg-cover min-w-full min-h-screen top-0 left-0"
        src={BackgroungImg}
        alt="background-img"
      />
    </main>
  );
};

export default Hero;
