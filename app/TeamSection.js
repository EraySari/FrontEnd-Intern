import TeamCart from "./TeamCart";
import teamPhoto1 from "@/public/teamPhoto1.png";
import teamPhoto2 from "@/public/teamPhoto2.png";
import teamPhoto3 from "@/public/teamPhoto3.png";
import TeamTitle from "./TeamTitle";
import TeamGroup from "./TeamGroup";

function TeamSection() {
  //fake api verisi
  const teamData = [
    { name: "Ester Howard", position: "Founder", image: teamPhoto1 },
    { name: "Cody Fisher", position: "Developer", image: teamPhoto2 },
    { name: "Brooklyn Simmons", position: "Designer", image: teamPhoto3 },
  ];

  return (
    <div className=" px-8 sm:px-12 pt-40 mb-32 sm:text-2xl font-semibold">
      <TeamTitle />
      <TeamGroup teamData={teamData} />
    </div>
  );
}

export default TeamSection;
