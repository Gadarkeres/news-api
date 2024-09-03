import News from "./news";

export default async function NewsContainer() {
  //simular carregamento
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return (
    <section className="min-w-full min-h-screen flex flex-col justify-center items-center lg:flex-row flex-wrap lg:gap-5 mt-5">
      {Array.from({ length: 10 }).map((_, index) => (
        <News key={index} />
      ))}
    </section>
  );
}
