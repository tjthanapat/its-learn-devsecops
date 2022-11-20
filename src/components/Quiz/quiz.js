export const quiz = {
  quizTitle: 'React Quiz Component Demo',
  quizSynopsis:
    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim',
  questions: [
    {
      question:
        'ข้อใดต่อไปนี้ไม่เกี่ยวข้องกับแนวคิดของ DevOps',
      choices: [
        'ทำให้สามารถส่งมอบซอฟต์แวร์ได้อย่างรวดเร็ว แต่ยังคงคุณภาพได้ดีอยู่',
        'มีการตรวจสอบโค้ดแบบอัตโนมัติ (code scan) และการตรวจสอบความมั่นคงปลอดภัยหรือช่องโหว่บนสิ่งแวดล้อม (environment) ของการนำไปใช้ (deploy)',
        'เป็นการทำงานแบบส่วนย่อย ๆ เพื่อให้นำไปสร้าง (build) ทดสอบ (test) และนำไปใช้ (deploy) เพื่อเก็บข้อเสนอแนะได้หลาย ๆ ครั้งและนำมาพัฒนาแก้ไขต่อไป',
        'ลดปัญหาการทำงานแบบเดิมที่ต้องเลือกระหว่างความเสถียรภาพกับความเร็วในการส่งมอบ',
      ],
      correctAnswer: 1,
      explanation: `คำอธิบายคำตอบ: ตรวจสอบโค้ดแบบอัตโนมัติ (code scan) และ การตรวจสอบความมั่นคงปลอดภัยหรือช่องโหว่บนสิ่งแวดล้อม (environment)
      เป็นแนวคิดของ DevSecOps ที่นำกระบวนการรักษาความมั่นคงปลอดภัยไว้ในไปป์ไลน์การพัฒนาซอฟต์แวร์ `,
      point: 20,
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
      explanation: `คำอธิบายคำตอบ: ลำดับขั้นตอน การทำงานใน pipeline ของ DevOps เป็นดังนี้
      Code > Automated Test > Build > Deploy TEST > Automated Test > Security Test > Deploy PRODUCTION
        สำหรับ DevSecOps pipeline จะมีลักษณะเดียวกันกับ DevOps  แต่มีการเพิ่มเติม Security Policy และ Security Tools เข้ามา`,
      point: 20,
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
      explanation: 'คำอธิบายคำตอบ: Monitoring เป็นขั้นตอนที่ 5 ของทำงานของ DevSecOps ที่สังเกตการณ์การทำงานซอฟต์แวร์ที่ส่งมอบไป เนื่องจากอาจจะค้นพบภัยการกำหนดค่าที่ไม่ถูกต้อง (misconfiguration) และปัญหาด้านความมั่นคงปลอดภัยอื่น ๆ ',
      point: 20,
    },
  ],
};
