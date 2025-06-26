import "boxicons/css/boxicons.min.css";

const Header = () => {
  return (
    <header
      data-aos="fade-down"
      data-aos-easing="linear"
      className="z-10 flex justify-between items-center mb-24 pt-10"
    >
      <div className="lg:text-5xl font-extrabold text-2xl">MANOJ NAMPALLY</div>
      <div className="flex gap-5">
        <a className="text-2xl hover:text-gray-500 duration-300" href="https://linkedin.com/in/manojnampally">
          <i class="bx bxl-linkedin" />
        </a>
        <a className="text-2xl hover:text-gray-500 duration-300" href="https://github.com/manojnampally">
          <i class="bx bxl-github" />
        </a>
      </div>
    </header>
  );
};

export default Header;
