import React from 'react';
import GroupsIcon from '@mui/icons-material/Groups';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';

const ConceptCard = (props) => {
  const { title, desc } = props;
  const Icon = props.icon;
  return (
    <div
      className={
        'lg:grid lg:grid-cols-4 rounded-2xl p-5 ' +
        'bg-indigo-200 bg-opacity-50 hover:bg-opacity-100 transition duration-500 ease '
      }
    >
      <div className="py-5 flex justify-center items-center">
        <Icon sx={{ fontSize: 64, color: 'rgb(79 70 229/ .5)' }} />
      </div>
      <div className="lg:col-span-3 lg:pl-5">
        <p className="font-mitr text-xl text-indigo-500">{title}</p>
        <p>{desc}</p>
      </div>
    </div>
  );
};

const MainIdea = () => {
  return (
    <section className="px-10 py-24">
      <div className="mx-auto max-w-screen-lg">
        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3 flex flex-col justify-center">
            <img
              className="w-full max-w-xl mx-auto hover:scale-105 transition duration-500 ease"
              src="assets/decsecops-cycle.png"
              alt="DevSecOpsCycle by Dynatrace"
            />
            <h2 className="text-center text-2xl text-indigo-500 mt-10">
              "เพื่อส่งมอบซอฟต์แวร์ที่ปลอดภัยได้อย่างรวดเร็ว"
            </h2>
          </div>
          <div className="lg:col-span-2 grid sm:grid-cols-3 lg:grid-cols-1 gap-5">
            <ConceptCard
              icon={GroupsIcon}
              title="Collaboration"
              desc="งาน development, operations, และ security ทั้งหมดทำงานร่วมกัน"
            />
            <ConceptCard
              icon={AllInclusiveIcon}
              title="CI/CD"
              desc="Continuous Integration และ Continuous Delivery ทำการ Code, Build, Test และ Deploy อย่างต่อเนื่อง"
            />
            <ConceptCard
              icon={VerifiedUserIcon}
              title="Security"
              desc="มีการทดสอบทางด้านความมั่นคงปลอดภัยตลอดทั้ง pipeline"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainIdea;
