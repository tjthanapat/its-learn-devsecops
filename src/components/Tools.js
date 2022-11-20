import React from 'react';

const ToolCard = (props) => {
  const { name, icon, url } = props;
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <div className="tool-card bg-indigo-200 bg-opacity-50 rounded-2xl p-5 text-center hover:bg-opacity-100 transition duration-500 ease">
        <img className="h-20 mx-auto my-5 transition duration-500 ease" src={icon} alt={name} />
        <p className="font-mitr text-xl text-indigo-500">{name}</p>
      </div>
    </a>
  );
};

const ShowTools = () => {
  return (
    <section className="py-24 px-10 bg-indigo-100 ">
      <h2 className="text-center align-text-middle text-3xl text-indigo-500 mb-10">
        ตัวอย่างเครื่องมือ
      </h2>
      <div className="mx-auto max-w-screen-lg ">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          <ToolCard
            icon="assets/tool-docker.png"
            name="Docker"
            url="https://www.docker.com/"
          />
          <ToolCard
            icon="assets/tool-jenkins.png"
            name="Jenkins"
            url="https://www.jenkins.io/"
          />

          <ToolCard
            icon="assets/tool-vault.png"
            name="Vault"
            url="https://www.vaultproject.io/"
          />
          <ToolCard
            icon="assets/tool-aqua.png"
            name="Aqua"
            url="https://www.aquasec.com/"
          />
        </div>
      </div>
    </section>
  );
};

export default ShowTools;
