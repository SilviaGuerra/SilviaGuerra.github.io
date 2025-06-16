import { Carousel } from "flowbite-react";

interface CardProjectProps {
  alt: string;
  descriptionCard: string;
  img: Array<string>;
  titleCard: string;
  link?: string;
}

const imgCarousel = (props: CardProjectProps) => {
  return (
    // <div className="h-96 w-96 sm:h-64 xl:h-80 2xl:h-96">
    <div className="h-48 w-96">
      <Carousel indicators={false} leftControl=" " rightControl=" ">
        {props.img.map((element: string) => {
          return <img src={element} className="" alt={props.alt} />;
        })}
      </Carousel>
    </div>
  );
};

const CardProject = (props: CardProjectProps) => {
  return (
    <section className="mb-6 md:m-3">
      <a
        href={props.link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
      >
        {imgCarousel(props)}
        <div className="flex flex-col justify-between p-4 mb-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-primary">
            {props.titleCard}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {props.descriptionCard}
          </p>
        </div>
      </a>
    </section>
  );
};

export default CardProject;
