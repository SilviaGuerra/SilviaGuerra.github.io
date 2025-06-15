import Github from "../../assets/img/github(1).svg";
import LinkedIn from "../../assets/img/linkedin-cafe.svg";

const Fold = () => {
  return (
    <section className="bg-white">
      <div className="py-8 px-4 mb-40 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-colorText md:text-5xl lg:text-6xl">
          Silvia Guerra Hernández
        </h1>
        <p className="mb-8 text-lg font-normal text-colorText lg:text-xl sm:px-16 lg:px-48">
          Desarrolladora Front-end
        </p>
        <button className="bg-primary text-colorText p-3 rounded-r-md rounded-s-md">
          <a
            href="silviaguerrafront.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="silviaguerrafront.pdf"
          >
            Descarga CV
          </a>
        </button>
        <div className="flex flex-row justify-center space-x-10 mt-10">
          <a
            href="https://github.com/SilviaGuerra/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Github} alt="Github" className="w-16" />
          </a>
          <a
            href="https://www.linkedin.com/in/silvia-guerra-65249a130/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={LinkedIn} alt="LinkedIn" className="w-16" />
          </a>
        </div>
      </div>
      <div className="bg-gradient-to-b from-primary to-transparent w-full h-3/4 absolute top-0 left-0 z-0"></div>
    </section>
  );
};

export default Fold;
