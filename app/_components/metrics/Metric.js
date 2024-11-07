function Metric({ statsName, statsValue, isMillion }) {
  return (
    <div className="">
      <p className="text-metricNumber text-xl sm:text-2xl md:text-3xl font-semibold pb-2 sm:pb-3">
        {statsValue}
        {isMillion ? "M +" : " +"}
      </p>
      <p className="text-primary text-md">{statsName}</p>
    </div>
  );
}

export default Metric;
