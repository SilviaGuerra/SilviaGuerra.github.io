import SilviaG from "../../../src/assets/img/SilviaG.jpg";

const AboutMe = () => {
  return (
    <section className="flex flex-col justify-center items-center m-3 md:flex-row">
      <div className="p-3 ">
        <img
          src={SilviaG}
          alt="Foto Silvia Guerra"
          className="rounded-full w-80 md:w-96"
        />
      </div>
      <div className="p-3 text-pretty shrink md:w-6/12">
        <p className="text-colorText text-lg">
          Me llamo Silvia, soy un apasionada frontend developer con amplia
          experiencia en el desarrollo de aplicaciones web utilizando
          tecnologías como HTML, CSS y JavaScript.
        </p>
        <br />
        <p className="text-colorText text-lg">
          Mi especialización se centra en la utilización del framework React
          para crear interfaces de usuario atractivas y dinámicas.
        </p>
        <br />
        <p className="text-colorText text-lg">
          Soy una apasionada por el aprendizaje constante y siempre estoy
          buscando maneras de mejorar mis habilidades técnicas.
        </p>
        <br />
        <p className="text-colorText text-lg">
          Disfruto unir mundos distintos: el arte, el lenguaje y la tecnología.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
