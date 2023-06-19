interface SectionTitleType {
  title: string;
  imageLink: string;
}

const SectionTitle = ({ title, imageLink }: SectionTitleType) => {
  return (
    <div className="text-xl font-semibold mb-10 w-full flex justify-center items-center gap-3 ml-[-1rem]">
      <img src={imageLink} alt="section title sign" width={30} />
      <h2>{title}</h2>
    </div>
  );
};

export default SectionTitle;
