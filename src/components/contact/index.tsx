import Mail from "../../assets/img/mail.svg";

const Contact = () => {
  return (
    <section className="bg-primary flex justify-center items-center h-20">
      {/* <div className="grid grid-flow-col auto-cols-max mr-40"> */}
      <div className="mr-8 lg:mr-20">
        <img src={Mail} alt="mail" className="inline w-5" />
        <span className="text-colorText ml-3">silvia.guerrahdz@gmail.com</span>
      </div>
      <div>
        <p className="text-colorText">
          <a
            href="https://github.com/SilviaGuerra/"
            target="_blank"
            rel="noreferrer"
          >
            GitHib
          </a>
        </p>
        <p className="text-colorText">
          <a
            href="https://www.linkedin.com/in/silvia-guerra-65249a130/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </p>
      </div>
    </section>
  );
};

export default Contact;
