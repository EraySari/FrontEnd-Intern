import TeamCart from "./TeamCart";

function TeamGroup({ teamData }) {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-10 lg:gap-20 pt-8 sm:pt-14">
      {teamData.map((teamMember) => (
        <TeamCart
          key={teamMember.name}
          name={teamMember.name}
          position={teamMember.position}
          photo={teamMember.image}
        />
      ))}
    </div>
  );
}

export default TeamGroup;
