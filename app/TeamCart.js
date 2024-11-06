import Image from "next/image";

function TeamCart({ name, position, photo }) {
  return (
    <div className="p-6 h-full shadow-even">
      <Image src={photo} alt={name} className="" />
      <h3 className="sm:pt-6">{name}</h3>
      <p className="text-base text-gray-400">{position}</p>
    </div>
  );
}

export default TeamCart;
