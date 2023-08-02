import React, { useState, useEffect } from 'react';
import UserInfo from './../components/UserInfo';
import axios from 'axios';
import Header from '../components/Header';
import Modal from '../components/Modal';
import '../style/homePage.css';

const UserPage = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('/users');
        const data = await response.data;

        setAllUsers(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container">
      <Header />
      {allUsers.map((user, index) => (
        <UserInfo key={index} user={user} />
      ))}
      <button className="recognize-button" onClick={() => setIsModalOpen(true)}>Recognize your colleague!</button>
      {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} users={allUsers} />}
      {isModalOpen && <div className="modal-backdrop" onClick={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default UserPage;
