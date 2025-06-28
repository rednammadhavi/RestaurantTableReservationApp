import React from "react";
import { data } from "../restApi.json";

const Team = () => {
  return (
    <section id="team" className="py-16 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">Our Team</h1>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Meet the passionate professionals behind Book-a-Bite. Our team is dedicated to delivering the best dining experience for you.
          </p>
        </div>

        {/* Team Members */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {data[0].team.map((member) => (
            <div
              key={member.id}
              className="hover:shadow-lg transition duration-300 p-6 text-center"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-30 h-30 rounded-full mx-auto mb-4 object-cover border-4 border-indigo-100"
              />
              <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
              <p className="text-sm text-indigo-500">{member.designation}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Team;
