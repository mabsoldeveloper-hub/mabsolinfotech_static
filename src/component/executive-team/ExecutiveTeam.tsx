import { FacebookFilled, GoogleOutlined, TwitterOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import React from 'react';

const executiveTeam = [
  {
    image: "images/Anjani-Kumar.webp",
    role: "CEO & Founder",
    name: "Anjani Kumar Pathak",
    description:
      "Anjani's passion for technology and commitment to excellence are the cornerstones of Mabsol Infotech. Under his guidance, the company has expanded its product offerings and grown its client base, achieving significant milestones in the tech industry.",
  },
  {
    image: "images/Bhupendra-Chaubey.webp",
    role: "CEO & Co-Founder",
    name: "Bhupendra Chaubey",
    description:
      "Bhupendra's deep understanding of technical architecture and scalable systems has been instrumental in building Mabsol’s robust platforms. He leads the engineering team with innovation and precision.",
  },
];

const ExecutiveTeam = () => {
  return (
    <div id='Team' className="h-auto px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32 py-20 bg-white">
      {/* Heading */}
      <div>
        <h1
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="text-3xl sm:text-4xl text-center font-bold text-[#185e9a] font-serif"
        >
          Executive <span className="text-black">Team</span>
        </h1>
        <div className="pt-4 w-full flex justify-center items-center">
          <hr className="w-[80%] border-t-4 border-[#185e9a]" />
        </div>
      </div>

      {/* Team Cards */}
      <div
        data-aos="zoom-in-left"
        className="flex flex-col lg:flex-row justify-center items-center gap-8 pt-10"
      >
        {executiveTeam.map((member, index) => (
          <Card
            key={index}
            className="!bg-gray-100 shadow-lg rounded-2xl w-full max-w-[450px]"
            styles={{ body: { padding: 0 } }}
          >
            <div className="p-6">
              {/* Image - fixed professional size */}
              <div className="h-[260px] sm:h-[280px] w-full overflow-hidden rounded-xl mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-xl transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Info */}
              <div className="flex flex-col items-center text-center">
                <span className="text-lg font-semibold text-gray-600">{member.role}</span>
                <span className="text-xl font-bold text-gray-800 mt-1">{member.name}</span>
                <p className="text-sm sm:text-base text-gray-600 mt-4 italic">
                  {member.description}
                </p>

                {/* Divider */}
                <div className="pt-6 w-full flex justify-center">
                  <hr className="w-[80%] border-t-2 border-[#185e9a]" />
                </div>

                {/* Social Icons */}
                <div className="flex gap-4 text-xl mt-4">
                  <a href="#" className='!text-[#185e9a]'><FacebookFilled /></a>
                  <a href="#" className='!text-[#185e9a]'><GoogleOutlined /></a>
                  <a href="#" className='!text-[#185e9a]'><TwitterOutlined /></a>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ExecutiveTeam;
