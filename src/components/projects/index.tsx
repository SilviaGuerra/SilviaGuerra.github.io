import CardProject from "./cardProject";
import Datalab1 from "../../assets/img/Datalab.png";
import Datalab2 from "../../assets/img/Datalab-2.png";
import Anay1 from "../../assets/img/Anay-1.jpg";
import Anay2 from "../../assets/img/Anay-2.jpg";
import Anay3 from "../../assets/img/Anay-3.jpg";
import Davivienda1 from "../../assets/img/Davivienda1.png";
import Davivienda2 from "../../assets/img/Davivienda2.png";
import Cityparking from "../../assets/img/Cityparking.png";
import Finverommerce1 from "../../assets/img/finverommerce1.png";
import Finverommerce2 from "../../assets/img/finverommerce2.png";
import Finverommerce3 from "../../assets/img/finverommerce3.png";
import Finverommerce4 from "../../assets/img/finverommerce4.png";
import Finverommerce5 from "../../assets/img/finverommerce5.png";
import Finverommerce6 from "../../assets/img/finverommerce6.png";

const Projects = () => {
  return (
    <>
      <section className="flex justify-center items-center m-10">
        <div className="flex flex-col xl:flex-row">
          <CardProject
            alt={"Data lab imágenes"}
            descriptionCard={
              "Es un freelance que realicé en 8 días, consiste en un sitio web de la empresa para describir lo que hacen"
            }
            img={[Datalab1, Datalab2]}
            titleCard={"Data Lab"}
          />
          <CardProject
            alt={"Davivienda"}
            descriptionCard={
              "Portal para pagos que ayuda al banco Davivienda (Colombia)"
            }
            img={[Davivienda1, Davivienda2]}
            titleCard={"Davivienda"}
            link="https://portalpagos.davivienda.com/#/"
          />
        </div>
      </section>
      <section className="flex justify-center items-center m-10">
        <div className="flex flex-col xl:flex-row">
          <CardProject
            alt={"Cityparking formulario imagen muestra"}
            descriptionCard={
              "Sitio para el pago de servicio de servicios urbanos en Colombia https://city-parking.com/"
            }
            img={[Cityparking]}
            titleCard={"CityParking"}
          />
          <CardProject
            alt={"Anay imágenes"}
            descriptionCard={
              "Herramienta interna de Yana que se usa para crear y simular una conversación del bot. Importar y exportar las conversaciones creadas"
            }
            img={[Anay1, Anay2, Anay3]}
            titleCard={"Anay"}
          />
        </div>
      </section>
      <section className="flex justify-center items-center m-10">
        <div className="flex flex-col xl:flex-row">
          <CardProject
            alt={"finverommerce"}
            descriptionCard={`En 2024, presenté este tipo e-commerce como prueba para Finvero 
              (donde trabaje hasta hace poco) basándome en una prueba para MeLi meses atrás. 
              Consiste en que debes loggearte con un usuario predeterminado para poder agregar 
              un producto al carrito. Filtra por productos`}
            img={[
              Finverommerce1,
              Finverommerce2,
              Finverommerce3,
              Finverommerce4,
              Finverommerce5,
              Finverommerce6,
            ]}
            titleCard={"Finverommerce"}
            link="https://finverommerce.netlify.app/"
          />
          {/* <CardProject
            alt={"titulaje"}
            descriptionCard={
              "Desde el 2019, formo parte de la Orquesta Sinfónica de Minería como subtituladora de obras en inglés, alemán, francés, italiano, ruso y latín."
            }
            img={[SilviaG]}
            titleCard={"Subtítulos"}
          /> */}
        </div>
      </section>
    </>
  );
};

export default Projects;
