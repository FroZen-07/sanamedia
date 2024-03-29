// components/TeamSection.js
import Image from "next/image";

const TeamSection = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container sm:px-24 px-5 py-10 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Our Team</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven`t heard of them.</p>
        </div>
        <div className="flex flex-wrap -m-2">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TeamMember = ({ name, role, imageSrc }) => {
  return (
    <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
      <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
        <Image alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={imageSrc} height={720} width={600}/>
        <div className="flex-grow">
          <h2 className="text-gray-900 title-font font-medium">{name}</h2>
          <p className="text-gray-500">{role}</p>
        </div>
      </div>
    </div>
  );
};

const teamMembers = [
  { name: 'Holden Caulfield', role: 'UI Designer', imageSrc: '/coming_soon.jpg' },
  { name: 'Henry Letham', role: 'CTO', imageSrc: '/coming_soon.jpg' },
  { name: 'Oskar Blinde', role: 'Founder', imageSrc: '/coming_soon.jpg' },
  { name: 'John Doe', role: 'DevOps', imageSrc: '/coming_soon.jpg' },
  { name: 'Martin Eden', role: 'Software Engineer', imageSrc: '/coming_soon.jpg' },
  { name: 'Boris Kitua', role: 'UX Researcher', imageSrc: '/coming_soon.jpg' },
];

export default TeamSection;
