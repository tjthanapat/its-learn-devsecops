import React, { useState } from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

const CaseStudies = () => {
  const [selectedCase, setSelectedCase] = useState('1');
  return (
    <section className="px-10 pb-24">
      <div className="mx-auto max-w-screen-lg">
        <h2 className="text-center text-3xl text-indigo-500 mb-3">
          กรณีศึกษาที่น่าสนใจ
        </h2>
        <div className="flex justify-center mb-5">
          <ToggleCase
            selectedCase={selectedCase}
            setSelectedCase={setSelectedCase}
          />
        </div>
        <Case caseStudy={caseStudies[0]} show={selectedCase === '1'} />
        <Case caseStudy={caseStudies[1]} show={selectedCase === '2'} />
      </div>
    </section>
  );
};

const ToggleCase = (props) => {
  const { selectedCase, setSelectedCase } = props;
  const handleSelectCase = (event, caseId) => {
    if (caseId !== null) {
      setSelectedCase(caseId);
    }
  };
  return (
    <ToggleButtonGroup
      value={selectedCase}
      exclusive
      onChange={handleSelectCase}
    >
      <ToggleButton value="1">
        <p>กรณีศึกษาที่ 1</p>
      </ToggleButton>
      <ToggleButton value="2">
        <p>กรณีศึกษาที่ 2</p>
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

const caseStudies = [
  {
    title: 'การนำ DevSecOps มาใช้ของหน่วยงานรัฐบาลกลางสหรัฐอเมริกา',
    image: '/assets/us-federal.png',
    content: (
      <>
        <p>
          หน่วยงานรัฐบาลกลางสหรัฐอเมริกา (Federal Agency)
          มีความมุ่งเน้นที่จะใช้หลักการ Agile และ DevSecOps
          เพื่อนำมาเติมเต็มวงจรการพัฒนาซอฟต์แวร์แบบดั้งเดิมในลักษณะที่เป็นแบบ
          waterfall ทางหน่วยงานรัฐบาลกลางจำเป็นต้องปรับกระบวนการทางธุรกิจ
          สถาปัตยกรรมซอฟต์แวร์และเครื่องมือใหม่
          นับว่าเป็นความท้าทายครั้งใหญ่ที่ไม่เคยพบเจอมาก่อนของหน่วยงานรัฐบาลกลาง
          เนื่องจากข้อมูลของหน่วยงานรัฐบาลกลางนับว่าเป็นข้อมูลที่ละเอียดอ่อนและต้องการพัฒนาซอฟต์แวร์ให้เสถียรและมีความปลอดภัยมากที่สุด
          ทางบริษัท Makpar
          ซึ่งเป็นบริษัทด้านการให้คำปรึกษาด้านเทคโนโลยีสารสนเทศสัญชาติอเมริกา
          ได้เข้ามาจัดการปัญหานี้ให้แก่หน่วยงานรัฐบาลกลาง
        </p>
        <p>
          Makpar
          ได้เข้ามาเปลี่ยนแปลงการทำงานระหว่างทีมนักพัฒนาและทีมระบบความปลอดภัย
          ให้ทำงานร่วมกันภายใต้หลักการ Agile ทาง Makpar
          ได้ยกระดับความปลอดภัยของโค้ดโดยนำหลักการ Security as Code
          นำมาปรับใช้กับทีม โดยหลักการ Security as Code
          เป็นหลักการที่เกี่ยวกับนำความปลอดภัยมาใช้ร่วมกับการทำงานและเครื่องมือของ
          DevOps
          โดยการตรวจจับการเปลี่ยนแปลงของโค้ดและรวมไปถึงการมีที่ในการทดสอบความปลอดภัย
          ทดสอบระบบและส่งมอบระบบโดยไม่ก่อให้เกิดความล่าช้าและค่าใช้จ่ายเพิ่มเติม
        </p>
        <p>
          การส่งมอบอย่างต่อเนื่อง (Continuous Delivery: CD)
          เป็นกระบวนการหนึ่งที่นำมาใช้ในการป้องกันโค้ด
          มีส่วนช่วยให้นักพัฒนาสามารถจัดการกับปัญหาและข้อยกเว้นได้
          รวมไปถึงการตรวจสอบพารามิเตอร์ให้ทำงานได้อย่างปกติ
          ซึ่งจะสามารถสร้างความน่าเชื่อถือในการทำงานของระบบได้มากขึ้น
          ทีมนักพัฒนาจะได้ทราบแนวทางการปฏิบัติที่ไม่ควร เช่น
          การเขียนโค้ดที่ดูยากและไม่จำเป็น
          หรือการพยายามสร้างรูปแบบการเข้ารหัสด้วยตัวเองที่มีความปลอดภัยต่ำ
          ทำให้สามารถตรวจหาช่องโหว่ได้แต่ช่วงต้นของกระบวนการ
          อีกทั้งยังเพิ่มความปลอดภัยการจัดเก็บ logging
          ให้ไม่สามารถแก้ไขเปลี่ยนแปลงหรือทำการลบได้ตั้งแต่ต้นจนจบกระบวนการ
        </p>
        <p>
          แหล่งที่มา{' '}
          <a
            href="https://www.makpar.com/devsecops-case-study"
            rel="noopener noreferrer"
            target="_blank"
            className="text-indigo-500"
          >
            Makpar
          </a>
        </p>
      </>
    ),
  },
  {
    title:
      'การเปลี่ยนจาก DevOps เป็น DevSecOps ของสถาบันโรคภูมิแพ้และโรคติดเชื้อแห่งชาติ สหรัฐอเมริกา',
    image: '/assets/niaid.png',
    content: (
      <>
        <p>
          สถาบันโรคภูมิแพ้และโรคติดเชื้อแห่งชาติ (National Institute of Allergy
          and Infectious Diseases: NIAID) สหรัฐอเมริกา
          เป็นหน่วยงานของรัฐที่ทำการศึกษาวิจัยและสนับสนุนงานวิจัยเพื่อป้องกันโรคติดต่อและโรคทางระบบภูมิคุ้มกัน
          จากบทความ DevSecOps and the cyber imperative (Deloitte, 2019) จากเดิม
          NIAID ใช้แนวคิดของ DevOps
          ในการพัฒนาและส่งมอบซอฟต์แวร์สำหรับใช้ในการสนับสนุนการทำวิจัย
          แต่เนื่องด้วยความจำเป็นในการปกป้องข้อมูล ทางการแพทย์ที่อ่อนไหว
          (sensitive health data) NIAID จึงนำแนวคิด DevSecOps เข้ามาใช้
        </p>
        <p>
          คุณ Joe Croghan หัวหน้าฝ่ายวิศวกรรมซอฟต์แวร์ของ NIAID กล่าวถึงการนำ
          Fortify เครื่องมือทางด้าน ความมั่นคงปลอดภัย เข้ามาใช้ใน pipeline
          เพื่อตรวจหาช่องโหว่ (vulnerability) คุณ Croghan มองว่า การนำเครื่องมือ
          Fortify เข้ามาใช้เป็นเพียงหนึ่งในสามส่วนของแนวคิด DevSecOps เท่านั้น
          เพราะเขาคิดว่า DevSecOps ประกอบไปด้วยการจัดการ วัฒนธรรม และเทคโนโลยี
          เขายังหวังไว้อีกว่า ในอีกหนึ่งปีข้างหน้า
          เขาจะสามารถสร้างการเปลี่ยนแปลงทางด้านวัฒนธรรมและการจัดการที่สอดคล้องกับแนวคิด
          DevSecOps
          ให้กับทีมวิศวกรรมซอฟต์แวร์เพื่อที่จะสามารถส่งมอบซอฟต์แวร์ที่ปลอดภัยได้อย่างรวดเร็วให้กับผู้ใช้
        </p>
        <p>
          แหล่งที่มา{' '}
          <a
            href="https://www2.deloitte.com/content/dam/Deloitte/uk/Documents/technology/deloitte-uk-tech-trends-2019-chapter7-devsecops.pdf"
            rel="noopener noreferrer"
            target="_blank"
            className="text-indigo-500"
          >
            Deloitte
          </a>
        </p>
      </>
    ),
  },
];

const Case = (props) => {
  const { caseStudy, show } = props;
  const { title, image, content } = caseStudy;
  if (show) {
    return (
      <div className="case-study grid grid-cols-5 gap-5 rounded-lg px-5 py-10 bg-indigo-200 bg-opacity-25">
        <div className="col-span-full md:col-span-2 lg:col-span-1">
          <img
            className="w-full max-w-xs mx-auto rounded-lg"
            src={image}
            alt={title}
          />
        </div>
        <div className="col-span-full md:col-span-3 lg:col-span-4">
          <h3 className="font-mitr text-xl mb-5">{title}</h3>
          <div className="content space-y-5 md:max-h-56 md:overflow-y-scroll">
            {content}
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default CaseStudies;
