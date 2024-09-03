import News from "./news";

export default function NewsContainer() {
  return (
    <section className="min-w-full min-h-screen flex flex-col justify-center items-center lg:flex-row flex-wrap lg:gap-5 mt-5">
      {Array.from({ length: 6 }).map((_, index) => (
        <News key={index} />
      ))}
    </section>
  );
}
