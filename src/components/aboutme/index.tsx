import SilviaG from "../../../src/assets/img/SilviaG.jpg";
import { Badge, Card } from "flowbite-react";
import { Music, BookOpen, PenTool, Cat, MicVocal } from "lucide-react";

const technicalSkills = [
  "JavaScript",
  "HTML",
  "CSS",
  "ReactJs",
  "React Native",
  "Redux",
  "TypeScript",
  "Illustrator",
  "Figma",
  "Sass",
  "Bootstrap",
  "Tailwind",
  "Material Design",
  "Ant Design",
];

const softSkills = [
  "Atención al detalle",
  "Paciencia",
  "Entusiasmo",
  "Creatividad",
  "Trabajo en equipo",
  "Empatía",
];

const interests = [
  {
    icon: <Music className="w-5 h-5" />,
    title: "Orquesta Sinfónica de Minería",
    description:
      "Soy parte de la orquesta desde el 2019 como subtituladora de obras en inglés, alemán, francés, italiano, ruso y latín.",
  },
  {
    icon: <MicVocal className="w-5 h-5" />,
    title: "Canto",
    description: "Me gusta cantar, aunque sea quedito",
  },
  {
    icon: <BookOpen className="w-5 h-5" />,
    title: "Lectura",
    description:
      "Disfruto sumergirme en buenos libros que me alejen un poco de la realidad",
  },
  {
    icon: <PenTool className="w-5 h-5" />,
    title: "Escritura",
    description:
      "Tengo un blog que me ayuda a desahogar ideas y plasmarlas en textos",
  },
  {
    icon: <Cat className="w-5 h-5" />,
    title: "Gatos",
    description:
      "Tengo 14 gatos y 2 perritas, no estoy segura si son de apoyo emocional o el mayor caos de mi vida",
  },
];

const AboutMe = () => {
  return (
    <>
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
            Disfruto unir mundos distintos: el arte, el lenguaje y la
            tecnología.
          </p>
        </div>
      </section>
      <section className="flex justify-start flex-col m-6 md:ml-40 md:flex-row">
        <div className="md:w-1/2">
          <h3 className="text-secondary block">Skills técnicos</h3>
          <div className="flex flex-wrap gap-2 my-3">
            {technicalSkills.map((skill) => (
              <Badge
                color="pink"
                className="cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
        <div className="md:w-1/2">
          <h5 className="text-secondary">Skills blandos</h5>
          <div className="flex flex-wrap gap-2 my-3">
            {/* <Badge color="pink" size="sm" style={{ color: "white" }}> */}
            {softSkills.map((skill) => (
              <Badge
                color="pink"
                className="cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </section>
      <section className="flex justify-center items-center">
        <Card className="max-w-4xl m-3 dark:bg-pink-200 dark:border-slate-200">
          <h5 className="text-2xl text-secondary font-bold tracking-tight">
            Mis pasiones e intereses
          </h5>
          <p className="font-normal text-colorText">
            Disfruto unir mundos distintos: el arte, el lenguaje y la
            tecnología. La música y la creatividad acompañan mis días de
            desarrollo.
          </p>
          <div className="grid gap-3">
            {interests.map((interest, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-3 rounded-lg bg-pinklight/50 hover:bg-pinklight transition-colors"
              >
                <div className="text-secondary mt-0.5">{interest.icon}</div>
                <div>
                  <h5 className="font-semibold text-secondary text-sm">
                    {interest.title}
                  </h5>
                  <p className="text-colorText text-xs">
                    {interest.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </section>
    </>
  );
};

export default AboutMe;
