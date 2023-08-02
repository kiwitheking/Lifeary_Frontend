import React, { useState } from "react";
import '../style/selectStyle.css';
import { useNavigate } from 'react-router-dom';

const Modal = ({ onClose, users }) => {
  const navigate = useNavigate();
  const [selectedValue1, setSelectedValue1] = useState("");
  const [selectedValue2, setSelectedValue2] = useState("");

  const handleSubmit = () => {
    navigate('/detail', { state: { value1: selectedValue1, value2: selectedValue2 } });
  };

  const userNames = users;
  let newArray = [];
  userNames.map((user) => newArray.push(user.name));

  return (
    <div className="modal-container">
      <div className="instruction">Select Who you want to Recognize:</div>
      <select className='select-style' onChange={(e) => setSelectedValue1(e.target.value)}>
      <option></option>
        {newArray.map((name, index) => (
          <option key={index}>{name}</option>
        ))}
      </select>
      <div className="instruction">Select the value you think they are:</div>
      <select className='select-style' onChange={(e) => setSelectedValue2(e.target.value)}>
        <option></option>
        <option>Well Done</option>
        <option>Great Job</option>
        <option>Top Notch</option>
        <option>Super Work</option>
        <option>On Point</option>
        <option>Excellent!</option>
        <option>High Five</option>
        <option>Nailed It</option>
        <option>First Rate</option>
        <option>Bravo!</option>
      </select>
      <div className="modal-buttons-container">
        <button className="modal-button close" onClick={onClose}>Close</button>
        <button className="modal-button" onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default Modal;
