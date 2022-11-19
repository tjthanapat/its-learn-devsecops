import React from 'react';

const Tools = (props) => {
    const { name, Icon } = props;
    return (
        <div className="bg-indigo-200 bg-opacity-50 rounded-2xl p-5 text-center hover:bg-opacity-100 transition duration-500 ease select-none">
            <img
                className="h-20 mx-auto"
                src={Icon}
                alt="DevSecOpsCycle by Dynatrace"
            />
            <p className="font-mitr text-xl text-indigo-500">{name}</p>
        </div>
    );
};

const ShowTools = () => {
    return (
        <section className="py-10 px-10 bg-indigo-100 ">
            <h2 className='text-center align-text-middle text-3xl text-indigo-500 mb-10'>ตัวอย่างเครื่องมือ</h2>
            <div className="mx-auto max-w-screen-lg ">
                <div className="grid grid-cols-3 gap-5">
                    <div className="grid grid-cols-2 gap-9">
                        <h2 className='col-span-2 text-center text-2xl text-indigo-500'>DevOps</h2>
                        <Tools
                            Icon="/assets/docker.png"
                            name="Docker"
                        />
                        <Tools
                            Icon="/assets/jenkins.png"
                            name="Jenkins"
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-9">
                    </div>
                    <div className="grid grid-cols-2 gap-9">
                        <h2 className='col-span-2 text-center text-2xl text-indigo-500'>DevSecOps</h2>
                        <Tools
                            Icon="/assets/vault.png"
                            name="Vault"
                        />
                        <Tools
                            Icon="/assets/aq.png"
                            name="Aqua"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ShowTools;