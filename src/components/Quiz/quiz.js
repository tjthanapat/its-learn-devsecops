export const quiz = {
  quizTitle: 'DevSecOps Quiz',
  questions: [
    {
      question:
        'ข้อใดต่อไปนี้ไม่เกี่ยวข้องกับแนวคิดของ DevOps',
      choices: [
        'ทำให้สามารถส่งมอบซอฟต์แวร์ได้อย่างรวดเร็ว แต่ยังคงคุณภาพได้ดีอยู่',
        'มีการตรวจสอบโค้ดแบบอัตโนมัติ (code scan) และการตรวจสอบความมั่นคงปลอดภัยหรือช่องโหว่บน environment ของการนำไปใช้ (deploy)',
        'เป็นการทำงานแบบส่วนย่อยๆ เพื่อให้นำไปสร้าง (build) ทดสอบ (test) และนำไปใช้ (deploy) เพื่อเก็บข้อเสนอแนะได้หลายๆ ครั้งและนำมาพัฒนาแก้ไขต่อไป',
        'ลดปัญหาการทำงานแบบเดิมที่ต้องเลือกระหว่างความเสถียรภาพกับความเร็วในการส่งมอบ',
      ],
      correctAnswer: 1,
      explanation: `การตรวจสอบโค้ดแบบอัตโนมัติ (code scan) และการตรวจสอบความมั่นคงปลอดภัยหรือช่องโหว่บน environment
      เป็นแนวคิดของ DevSecOps ที่นำกระบวนการรักษาความมั่นคงปลอดภัยไว้ใน pipeline การพัฒนาซอฟต์แวร์ `,
    },
    {
      question:
        'ข้อใดเรียงลำดับขั้นตอนการทำงานใน pipeline ของ DevOps ได้ถูกต้อง',
      choices: [
        'Code > Automated Test > Build > Deploy TEST > Automated Test > Security Test > Deploy PRODUCTION',
        'Code > Automated Test > Build > Deploy TEST > Security Test > Automated Test > Deploy PRODUCTION',
        'Code > Build > Automated Test > Deploy TEST > Security Test > Automated TEST > Deploy PRODUCTION',
        'Code > Deploy TEST > Build > Automated Test > Security Test > Automated TEST > Deploy PRODUCTION',
      ],
      correctAnswer: 0,
      explanation: `ลำดับขั้นตอน การทำงานใน pipeline ของ DevOps เป็นดังนี้
      Code > Automated Test > Build > Deploy TEST > Automated Test > Security Test > Deploy PRODUCTION
        สำหรับ DevSecOps pipeline จะมีลักษณะเดียวกันกับ DevOps  แต่มีการเพิ่มเติม Security Policy และ Security Tools เข้ามา`,
    },
    {
      question:
        'ขั้นตอนใดของ DevSecOps ที่จะสังเกตการณ์ตรวจสอบสิ่งที่ไม่ถูกต้องหรือผิดปกติขณะซอฟต์แวร์ถูกใช้งาน',
      choices: [
        'Threat Modeling',
        'Remediation',
        'Monitoring',
        'Access Control',
      ],
      correctAnswer: 2,
      explanation: 'Monitoring เป็นขั้นตอนที่ 5 ของทำงานของ DevSecOps ที่สังเกตการณ์การทำงานซอฟต์แวร์ที่ส่งมอบไป เนื่องจากอาจจะค้นพบภัยการกำหนดค่าที่ไม่ถูกต้อง (misconfiguration) และปัญหาด้านความมั่นคงปลอดภัยอื่นๆ',
    },
    {
      question:
        'ข้อใดไม่ใช่เครื่องมือในการตรวจสอบหาช่องโหว่ (vulnerability)',
      choices: [
        'Static Application Security Testing (SAST)',
        'Dynamic Application Security Testing (DAST)',
        'Software Composition Analysis (SCA)',
        'Usability Testing',
      ],
      correctAnswer: 3,
      explanation: 'Static Application Security Testing (SAST) Dynamic Application Security Testing (DAST) และ Software Composition Analysis (SCA) เป็นเครื่องมือที่ใช้ในการตรวจสอบหาช่องโหว่ ซึ่งเป็นส่วนหนึ่งของขั้นตอนการค้นหาและทดสอบทางด้านความมั่นคงปลอดภัย (Security Scanning and Testing) ในส่วนของงานความมั่นคงปลอดภัยใน DevSecOps',
    },
  ],
};
