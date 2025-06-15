import Puzzle from "../../assets/img/puzzle-piece.svg";
import Window from "../../assets/img/window.svg";
import Rocket from "../../assets/img/toy-rocket.svg";
import Palette from "../../assets/img/paint-palette.svg";

const Knowledges = () => {
  return (
    // <section className="grid grid-rows-3 grid-flow-col gap-4">
    <section className="flex justify-center items-center flex-col mx-10 md:flex-row">
      <div className="flex items-center justify-center flex-col my-10 md:w-1/2 md:h-96">
        <div className="md:h-60">
          <img src={Window} alt="Creación de páginas" className="w-40 mb-6" />
        </div>
        <p className="text-colorText text-xl text-center align-text-bottom">
          Creación de páginas web responsive y uso de frameworks
        </p>
      </div>
      <div className="flex items-center justify-center flex-col my-10 md:w-1/2 md:h-96">
        <div className="md:h-60">
          <img src={Puzzle} alt="Consumo API" className="w-40 mb-6" />
        </div>
        <p className="text-colorText text-xl text-center align-text-bottom">
          Consumo de API para mostrar información
        </p>
      </div>
      <div className="flex items-center justify-center flex-col my-10 md:w-1/2 md:h-96">
        <div className="flex items-center md:h-60">
          <img
            src={Rocket}
            alt="Herramientas para páginas web"
            className="w-40 mb-6"
          />
        </div>
        <p className="text-colorText text-center text-xl p-5 align-text-bottom">
          JavaScript, React, Redux, Typescript para páginas web
        </p>
      </div>
      <div className="flex items-center justify-center flex-col my-10 md:w-1/2 md:h-96">
        <div className="flex items-center md:h-60">
          <img
            src={Palette}
            alt="Herramientas para páginas web"
            className="w-40 mb-6"
          />
        </div>
        <p className="text-colorText text-center text-xl p-5 align-text-bottom">
          Uso de frameworks para estilos como Sass, Tailwind, Bootstrap,
          AntDesign...
        </p>
      </div>
    </section>
  );
};

export default Knowledges;
