function Into({ baslik, text }) {
  return (
    <main className="bg-blue-300 relative z-20 py-44">
      <h3 className="text-4xl font-bold">{baslik}</h3>
      <p className="font-semibold text-2xl">{text}</p>
    </main>
  );
}

export default Into;
