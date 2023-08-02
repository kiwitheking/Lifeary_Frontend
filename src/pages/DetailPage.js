import { useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/Header';
import '../style/pageDetail.css';

const DetailPage = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const { value1, value2 } = location.state;
    const [inputValue, setInputValue] = useState('');
    const [fromValue, setFromValue] = useState('');

    const handleSubmit = async () => {
        try {
            await axios.put(`/update/${value1}`, {
                recognization: { from: fromValue, value: value2, details: inputValue }
            });
            navigate('/confirmPage');
        } catch (error) {
            console.error("Error sending data:", error);
            alert('Failed to send data.');
        }
    };

    return (
        <div>
            <Header />
            <div className="card">
                <div>You are recognizing: <strong>{value1}</strong></div>
                <div>You think they are: <strong>{value2}</strong></div>
                <input
                    type="text"
                    value={fromValue}
                    onChange={(e) => setFromValue(e.target.value)}
                    placeholder="From who..."
                />
                <textarea
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    maxLength={280}
                    rows={7}
                    placeholder="Enter details..."
                />
                <div className="btn-container">
                    <button className="btn cancel" onClick={() => navigate('/home')}>Cancel</button>
                    <button className="btn" onClick={handleSubmit}>Submit</button>
                </div>
            </div>
        </div>
    );
};

export default DetailPage;
