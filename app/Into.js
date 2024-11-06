function Into({ title, text }) {
  return (
    <main className="bg-primary relative pt-60 sm:pt-72 pb-24 sm:pb-40 px-20 sm:px-24 ">
      <h3 className="text-4xl font-bold py-5">{title}</h3>
      <p className="font-semibold text-2xl">{text}</p>
    </main>
  );
}

export default Into;
