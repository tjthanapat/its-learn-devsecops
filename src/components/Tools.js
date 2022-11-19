import React from 'react';

const Tools = (props) => {
    const { name, Icon, url } = props;
    return (
        <a href={url} target="_blank" rel="noopener noreferrer">
            <div className="bg-indigo-200 bg-opacity-50 rounded-2xl p-5 text-center hover:bg-opacity-100 hover:scale-105 transition duration-500 ease select-none">
                <img
                    className="h-20 mx-auto"
                    src={Icon}
                    alt="DevSecOpsCycle by Dynatrace"
                />
                <p className="font-mitr text-xl text-indigo-500">{name}</p>
            </div>
        </a>

    );
};

const ShowTools = () => {
    return (
        <section className="py-20 px-10 bg-indigo-100 ">
            <h2 className='text-center align-text-middle text-4xl text-indigo-500 mb-7'>ตัวอย่างเครื่องมือ</h2>
            <div className="mx-auto max-w-screen-lg ">
                <div className="sm:col-span-2 grid lg:grid-cols-3 sm:grid-cols-1 gap-5">
                    <div className="grid grid-cols-2 gap-x-9 gap-y-4">
                        <Tools
                            Icon="/assets/docker.png"
                            name="Docker"
                            url="https://www.docker.com/"
                        />
                        <Tools
                            Icon="/assets/jenkins.png"
                            name="Jenkins"
                            url="https://www.jenkins.io/"
                        />
                        <h2 className='col-span-2 text-center text-2xl text-indigo-500 '>DevOps</h2>
                    </div>
                    <div className="lg:grid grid-cols-1 gap-9 content-start">

                    </div>
                    <div className="grid grid-cols-2 gap-x-9 gap-y-4">
                        <Tools
                            Icon="/assets/vault.png"
                            name="Vault"
                            url="https://www.vaultproject.io/"
                        />
                        <Tools
                            Icon="/assets/aq.png"
                            name="Aqua"
                            url="https://www.aquasec.com/"
                        />
                        <h2 className='col-span-2 text-center text-2xl text-indigo-500'>DevSecOps</h2>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ShowTools;
