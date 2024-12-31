import React, { useState } from 'react';
import { Card, Radio, Button, message } from 'antd';
import { shuffledLogicalQuestions } from './LogicalAssessmentQuestions';

const LogicalAssessment = () => {
  const [selectedAnswers, setSelectedAnswers] = useState(new Array(10).fill(null));
  const [showResults, setShowResults] = useState(false);

  const handleSelectAnswer = (index, selectedOption) => {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[index] = selectedOption;
    setSelectedAnswers(newSelectedAnswers);
  };

  const handleSubmit = () => {
    setShowResults(true);

    const correctCount = shuffledLogicalQuestions.slice(0, 10).reduce((count, question, index) => {
      return question.correctAnswer === selectedAnswers[index] ? count + 1 : count;
    }, 0);

    const totalQuestions = 10;
    const wrongCount = totalQuestions - correctCount;

    message.info(`You answered ${correctCount} questions correctly and ${wrongCount} questions incorrectly.`);
  };

  return (
    <Card title="Logical Aptitude Assessment">
      {shuffledLogicalQuestions.slice(0, 10).map((q, index) => (
        <div key={index} style={{ marginBottom: '16px' }}>
          <p>{q.question}</p>
          <Radio.Group options={q.options} onChange={(e) => handleSelectAnswer(index, e.target.value)} />
          {showResults && (
            <div style={{ marginTop: '8px', color: q.correctAnswer === selectedAnswers[index] ? 'green' : 'red' }}>
              {q.correctAnswer === selectedAnswers[index] ? 'Correct!' : `Wrong! Correct answer: ${q.correctAnswer}`}
            </div>
          )}
        </div>
      ))}
      <Button type="primary" onClick={handleSubmit}>
        Submit
      </Button>
    </Card>
  );
};

export default LogicalAssessment;
