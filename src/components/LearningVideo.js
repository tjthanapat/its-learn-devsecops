import React from 'react';

const LearningVideo = () => {
  return (
    <section className="learning-vdo py-24 px-10 bg-indigo-500 ">
      <div className="mx-auto max-w-screen-lg lg:flex lg:justify-center">
        <div
          id="learning-vdo-text"
          className="mb-10 lg:mb-0 lg:mr-10 lg:max-w-sm"
        >
          <h2>
            <p className="font-medium text-6xl text-white">ทำความรู้จัก</p>
            <p className="mt-2 text-3xl text-indigo-800">กับ DevSecOps</p>
          </h2>
          <p className="mt-10 text-lg text-indigo-100">
            การทำงานร่วมกันในการพัฒนาซอฟต์แวร์ ประกอบไปด้วย 3 ส่วนหลัก ได้แก่
            development, operations และ security
            โดยจะมีแนวคิดและกระบวนหลักเหมือนแนวคิดของ DevOps
            แต่ต่างกันตรงที่แนวคิดนี้เพิ่มในส่วนของตรวจสอบด้านความมั่นคงปลอดภัยเข้ามาในทุกส่วนของวงจรของ
            DevOps
          </p>
        </div>
        <div id="learning-vdo-video" className="w-full ">
          <div className="yt-wrapper ">
            <iframe
              className="rounded-3xl"
              src="https://www.youtube.com/embed/e-AnCpWRNho"
              title="Learn DevSecOps - YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          {/* To build for opening app locally, add video in public directory */
           /* and uncomment below element and comment above element */}
          {/* <video controls className="rounded-3xl w-full">
            <source src="Learn DevSecOps.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video> */}
        </div>
      </div>
    </section>
  );
};

export default LearningVideo;
