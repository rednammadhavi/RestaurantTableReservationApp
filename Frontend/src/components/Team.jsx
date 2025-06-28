import React from "react";
import { data } from "../restApi.json";

const Team = () => {
  return (
    <section id="team" className="py-20 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            Our Team
          </h1>
          <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
            Meet the passionate professionals behind Book-a-Bite. Our team is dedicated to delivering the best dining experience for you.
          </p>
        </div>

        {/* Team Members */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10">
          {data[0].team.map((member) => (
            <div
              key={member.id}
              className="text-center"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-52 h-52 mx-auto mb-4 rounded-full object-contain border-4 border-orange-100 shadow-sm"
              />
              <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
              <p className="text-sm text-orange-600">{member.designation}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Team;
