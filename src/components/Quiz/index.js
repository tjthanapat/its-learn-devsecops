import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Question from './Question';
import { quiz } from './quiz';

const DevSecOpsQuiz = () => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <section className="px-10 pb-8">
      <div className="mx-auto max-w-screen-lg flex justify-center">
          <button
            onClick={handleClickOpen}
            className={
              'animate__animated animate__slow animate__bounce animate__infinite '+
              'px-8 py-2 rounded-full ' +
              'border border-indigo-500 bg-indigo-500 hover:bg-indigo-600  ' +
              'transition duration-500 ease select-none ' +
              'font-mitr text-2xl text-white'
            }
          >
            เริ่มทำ quiz
          </button>
      </div>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <DialogContent>
          <div>
            <p className="font-mitr text-2xl mb-2">DevSecOps Quiz</p>
            <div className="mt-5 space-y-5">
              {quiz.questions.map((question, i) => (
                <Question key={i} question={question} />
              ))}
            </div>
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
    </section>
  );
};

export default DevSecOpsQuiz;
