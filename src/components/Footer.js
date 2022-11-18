import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const Footer = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <footer className="p-10 bg-indigo-100 bg-gradient-to-b from-indigo-100 via-indigo-100 to-indigo-300">
      <div className="mx-auto max-w-screen-lg text-sm pb-14">
        <p>
          Learn DevSecOps |{' '}
          <button onClick={handleClickOpen} className="text-indigo-500 hover:text-indigo-600">Creator Note</button>
        </p>
        <Dialog open={open} onClose={handleClose}>
          <DialogContent>
            <div id="creators-note">
              <p className="font-mitr text-lg mb-2">รายชื่อผู้จัดทำ</p>
              <ul>
                <li>ตุลธร วงศ์ชัย</li>
                <li>ธนภัทร ธีรรัตตัญญู</li>
                <li>นนทพัทธ์ เทศปัญ</li>
                <li>บุคอรีย์ หมาดทิ้ง</li>
                <li>รมิตา ศรีภูธร</li>
                <li>ศิรา อัตตวนิช</li>
              </ul>
              <br/>
              <p className="font-mitr text-lg mb-2">แหล่งอ้างอิง</p>
              <ul>
                <li>
                  Boonmathanaruk, P. 2021. DevSecOps คืออะไร?
                  ทำไมทุกองค์กรต้องให้ความสำคัญเป็นอย่างมากในปัจจุบัน. จาก{' '}
                  <a
                    href="https://blog.skooldio.com/what-is-devsecops/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    skooldio.com
                  </a>
                </li>
                <li>
                  Moradov, O. 2022. DevSecOps vs DevOps: What’s Different and How to
                  Make the Move จาก{' '}
                  <a
                    href="https://brightsec.com/blog/devsecops-vs-devops/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    brightsec.com
                  </a>
                </li>
              </ul>
            </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} autoFocus>
              ปิด
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </footer>
  );
};

export default Footer;
