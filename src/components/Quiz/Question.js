import React from 'react';

const Question = (props) => {
  const {question} = props;
  const [answer, setAnswer] = React.useState('');

  const handleChange = (event) => {
    setAnswer(event.target.value);
  };
  return (
    <div>
      <p className="font-mitr text-lg">{question.question}</p>
      <ul className="my-3 space-y-2">
        {question.choices.map((choice, i) => (
          <li key={i}>
            <button
              value={choice}
              onClick={handleChange}
              className={
                'w-full px-5 py-2 text-left rounded-lg ' +
                'bg-gray-100 hover:bg-gray-200 ' +
                `${
                  answer === choice
                    ? answer === question.choices[question.correctAnswer]
                      ? 'disabled:bg-green-700 disabled:bg-opacity-30'
                      : 'disabled:bg-red-700 disabled:bg-opacity-30'
                    : 'disabled:bg-gray-100'
                }`
              }
              disabled={!!answer}
            >
              {i + 1}. {choice}
            </button>
          </li>
        ))}
      </ul>
      {!!answer && (
        <div>
          <p>
            คำตอบที่ถูกต้อง: {question.correctAnswer + 1}.{' '}
            {question.choices[question.correctAnswer]}{' '}
          </p>
          <p>{question.explanation}</p>
        </div>
      )}
    </div>
  );
};

export default Question;
