import { useNavigate } from 'react-router-dom';
import '../style/confirmPage.css';
import Header from '../components/Header';

const ConfirmPage = () => {
    const navigate = useNavigate();

    return (
        <div>
        <Header />
        <div className="confirm-container">
            <div className="image-container">
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/3b/Eo_circle_green_checkmark.svg" alt="Success" />
            </div>
            <div className="message">Success!</div>
            <div className="message">Thank you so much for sharing your recognization, your coleague and their maneger has been noticed</div>
            <button className="complete-btn" onClick={() => navigate('/home')}>Complete</button>
        </div>
        </div>
    );
};

export default ConfirmPage;
