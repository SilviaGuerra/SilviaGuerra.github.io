interface TitleSectionProps {
  id: string;
  img: string;
  alt: string;
  titleSection: string;
}

const TitleSection = (props: TitleSectionProps) => {
  return (
    <section className="flex items-center justify-center">
      <hr className="inline-block w-20 h-1 bg-primary rounded-sm " />
      <img src={props.img} alt={props.alt} className="w-20 mx-10" />
      <h1 className="text-primary mr-10 text-2xl">{props.titleSection}</h1>
      <hr className="inline-block w-20 h-1 bg-primary rounded-sm" />
    </section>
  );
};

export default TitleSection;
