import Metric from "./Metric";

function Metrics() {
  //stats data
  const metricData = [
    { statsName: "Clients Worldwide", statsValue: 350, isMillion: false },
    { statsName: "Team Members", statsValue: 20, isMillion: false },
    { statsName: "Projects Completed", statsValue: 100, isMillion: false },
    { statsName: "Revenue Generated", statsValue: 85, isMillion: true },
  ];
  return (
    <div className="flex justify-center items-center gap-3 sm:gap-20 md:gap-28 lg:gap-40 xl:gap-54 2xl:gap-64 bg-metric py-12 px-8">
      {metricData.map((stats) => (
        <Metric
          key={stats.statsName}
          statsName={stats.statsName}
          statsValue={stats.statsValue}
          isMillion={stats.isMillion}
        />
      ))}
    </div>
  );
}

export default Metrics;
