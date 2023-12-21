import React, { useState, useEffect } from 'react';

const BMIcalc = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [BMIIndex, setBMIIndex] = useState('');
  const [BMICategory, setBMICategory] = useState('');

  useEffect(() => {
    const calculateBMI = () => {
      if (height && weight) {
        const heightInMeters = height / 100;
        const BMI = (weight / (heightInMeters * heightInMeters)).toFixed(2);
        setBMIIndex(BMI);
        determineBMICategory(BMI);
      } else {
        setBMIIndex('');
        setBMICategory('');
      }
    };

    const determineBMICategory = (BMI) => {
      if (BMI < 18.5) {
        setBMICategory('Underweight');
      } else if (BMI >= 18.5 && BMI < 24.9) {
        setBMICategory('Normal weight');
      } else if (BMI >= 25 && BMI < 29.9) {
        setBMICategory('Overweight');
      } else {
        setBMICategory('Obese');
      }
    };

    calculateBMI();
  }, [height, weight]);

  const handleInputHeight = (e) => {
    setHeight(e.target.value);
  };

  const handleInputWeight = (e) => {
    setWeight(e.target.value);
  };

  return (
    <>
      <h1>BMI Calculator</h1>
      <label htmlFor='height'>Enter your Height (in cm)</label>
      <input type="number" placeholder="Enter Height" value={height} onChange={handleInputHeight} /><br/>
      <label htmlFor='weight'>Enter your Weight (in kg)</label>
      <input type="number" placeholder="Enter Weight" value={weight} onChange={handleInputWeight} /><br/>
      <hr />
      <div>
        <label htmlFor='BMIIndex'>Your BMI Index is</label>
        <input type="text" value={BMIIndex} disabled />
      </div>
      <div>
        <p>Your BMI Category: {BMICategory}</p>
      </div>
    </>
  );
};

export default BMIcalc;
