import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';

const Footer = () => {
  return (
    <footer className="p-10 bg-indigo-100 bg-gradient-to-b from-indigo-100 via-indigo-100 to-indigo-300">
      <div className="mx-auto max-w-screen-lg text-sm pb-14">
        <p>
          Learn DevSecOps | <CreatorNote /> | <References />
        </p>
      </div>
    </footer>
  );
};

const CreatorNote = () => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <button
        onClick={handleClickOpen}
        className="text-indigo-500 hover:text-indigo-600"
      >
        Creators
      </button>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="xs">
        <DialogContent>
          <div>
            <p className="font-mitr text-lg mb-2">รายชื่อผู้จัดทำ</p>
            <ul>
              <li>ตุลธร วงศ์ชัย</li>
              <li>ธนภัทร ธีรรัตตัญญู</li>
              <li>นนทพัทธ์ เทศปัญ</li>
              <li>บุคอรีย์ หมาดทิ้ง</li>
              <li>รมิตา ศรีภูธร</li>
              <li>ศิรา อัตตวนิช</li>
            </ul>
            <div className="mt-6 pb-10">
              <button
                onClick={handleClose}
                autoFocus
                className="float-right text-indigo-500 hover:bg-indigo-500 hover:text-white px-5 py-1 rounded-md border border-indigo-500"
              >
                ปิด
              </button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

const References = () => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <button
        onClick={handleClickOpen}
        className="text-indigo-500 hover:text-indigo-600"
      >
        References
      </button>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <div>
            <p className="font-mitr text-lg mb-2">แหล่งอ้างอิง</p>
            <ul className="references list-dashed list-inside text-sm">
              <li>
                Bhandari, Parveen. (2022). DevSecOps Pipeline - A Complete
                Overview. Retrieved from{' '}
                <a
                  href="https://www.xenonstack.com/insights/guide-devsecops-pipeline"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Xenonstack
                </a>
              </li>
              <li>
                Boonmathanaruk, Patchara. (2021). DevSecOps คืออะไร?
                ทำไมทุกองค์กรต้องให้ความสำคัญเป็นอย่างมากในปัจจุบัน. Retrieved
                from{' '}
                <a
                  href="https://blog.skooldio.com/what-is-devsecops/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Skooldio
                </a>
              </li>
              <li>
                Deploy App ง่าย ๆ ได้ผลลัพธ์อย่างมือโปร ด้วย 15
                เครื่องมือที่ใช้ร่วมกับ Kubernetes. (2020). Retrieved from{' '}
                <a
                  href="https://blog.skooldio.com/15-tools-for-k8s/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Skooldio
                </a>
              </li>
              <li>
                DevSecOps and the cyber imperative. (2019). Retrieved from{' '}
                <a
                  href="https://www2.deloitte.com/content/dam/Deloitte/uk/Documents/technology/deloitte-uk-tech-trends-2019-chapter7-devsecops.pdf"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Deloitte
                </a>
              </li>
              <li>
                DevSecOps Case Study. (n.d.). Retrieved from{' '}
                <a
                  href="https://www.makpar.com/devsecops-case-study"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Makpar
                </a>
              </li>
              <li>
                Docker คืออะไร. (n.d.). Retrieved from{' '}
                <a
                  href="https://aws.amazon.com/th/docker/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Amazon Web Services
                </a>
              </li>
              <li>
                Jenkins คืออะไร. (n.d.). Retrieved from{' '}
                <a
                  href="https://www.4xtreme.com/2019/09/12/jenkins-คืออะไร/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  4 Xtreme
                </a>
              </li>
              <li>
                Junchotchoung, Tunyapron. (2021). ช่วยพัฒนาซอฟต์แวร์ให้รวดเร็ว
                และปลอดภัยด้วย DevSecOps. Retrieved from{' '}
                <a
                  href="https://www.tangerine.co.th/highlight/dev-sec-ops-software-development/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  tangerine
                </a>
              </li>
              <li>
                Maric, Nedim. (2021). What Is DevSecOps? Adding Security to the
                SDLC. Retrieved from{' '}
                <a
                  href="https://brightsec.com/blog/devsecops/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Bright Security
                </a>
              </li>
              <li>
                Montha, Sakul. (2017). Vault คืออะไร เอามาทำอะไรกับงานของเราได้
                ?. Retrieved from{' '}
                <a
                  href="https://iamgique.medium.com/vault-คืออะไร-เอามาทำอะไรกับงานของเราได้-bee679750df4"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Sakul Montha's Medium
                </a>
              </li>
              <li>
                Moradov, Oliver. (2022). DevSecOps vs DevOps: What’s Different
                and How to Make the Move. Retrieved from{' '}
                <a
                  href="https://brightsec.com/blog/devsecops-vs-devops/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Bright Security
                </a>
              </li>
            </ul>
            <div className="mt-6 pb-10">
              <button
                onClick={handleClose}
                autoFocus
                className="float-right text-indigo-500 hover:bg-indigo-500 hover:text-white px-5 py-1 rounded-md border border-indigo-500"
              >
                ปิด
              </button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Footer;
