import React from 'react';
import GroupsIcon from '@mui/icons-material/Groups';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';

const ConceptCard = (props) => {
  const { title, desc } = props;
  const Icon = props.icon;
  return (
    <div className="bg-indigo-200 bg-opacity-50 rounded-2xl p-5 text-center hover:bg-opacity-100 transition duration-500 ease select-none">
      <p className="my-5">
        <Icon sx={{ fontSize: 80, color: ' rgb(79 70 229/ .5)' }} />
      </p>
      <p className="font-mitr text-xl text-indigo-500">{title}</p>
      <p>{desc}</p>
    </div>
  );
};

const MainIdea = () => {
  return (
    <section className="px-10 py-24">
      <div className="mx-auto max-w-screen-lg">
        <img
          className="w-full max-w-xl mx-auto hover:scale-105 transition duration-500 ease select-none"
          src="/assets/decsecops-cycle.png"
          alt="DevSecOpsCycle by Dynatrace"
        />
        <h2 className='text-center text-2xl text-indigo-500 my-10'>"เพื่อส่งมอบซอฟต์แวร์ที่ปลอดภัยได้อย่างรวดเร็ว"</h2>
        <div className="grid grid-cols-3 gap-5">
          <ConceptCard
            icon={GroupsIcon}
            title="Collaboration"
            desc="ทั้ง dev, ops, และ sec ทำงานและมีความรับผิดชอบร่วมกัน"
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
    </section>
  );
};

export default MainIdea;
