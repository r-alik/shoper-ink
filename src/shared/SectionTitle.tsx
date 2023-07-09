interface SectionTitleType {
  title: string;
  imageLink?: string;
}

const SectionTitle = ({ title, imageLink }: SectionTitleType) => {
  return (
    <div className="mb-10 w-full flex justify-center items-center gap-3 ml-[-1rem] text-xl md:text-2xl font-semibold text-Gray-dark lg:text-3xl">
      {imageLink && <img src={imageLink} alt="section title sign" width={30} />}
      <h2>{title}</h2>
    </div>
  );
};

export default SectionTitle;
