function Metric({ statsName, statsValue }) {
  return (
    <div className="">
      <p className="text-metricNumber text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold pb-2 sm:pb-4">
        {statsValue} +
      </p>
      <p className="text-primary text-md">{statsName}</p>
    </div>
  );
}

export default Metric;
