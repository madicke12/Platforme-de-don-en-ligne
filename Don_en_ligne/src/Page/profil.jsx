import { useState } from 'react';
import axios from 'axios';

const ProfilePage = () => {
  const [name, setName] = useState('John');
  const [lastName, setLastName] = useState('Doe');
  const [phone, setPhone] = useState('123456789');
  const [description, setDescription] = useState('Lorem ipsum dolor sit amet.');
  const [profilePic, setProfilePic] = useState(null);
  const [donationHistory, setDonationHistory] = useState([]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleProfilePicChange = (e) => {
    setProfilePic(e.target.files[0]);
  };

  const handleSaveProfile = async () => {
    const formData = new FormData();
    formData.append('profilePic', profilePic);
    formData.append('name', name);
    formData.append('lastName', lastName);
    formData.append('phone', phone);
    formData.append('description', description);

    try {
      const response = await axios.post('/api/donor/profile', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // Handle success response
      console.log(response.data);
    } catch (error) {
      // Handle error
      console.error(error);
    }
  };

  const loadDonationHistory = async () => {
    try {
      const response = await axios.get('/api/donor/donations');
      setDonationHistory(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Profil du Donateur</h2>

      <div>
        <label htmlFor="profilePic">Photo de profil</label>
        <input
          type="file"
          id="profilePic"
          accept="image/*"
          onChange={handleProfilePicChange}
        />
      </div>

      <div>
        <label htmlFor="name">Nom</label>
        <input type="text" id="name" value={name} onChange={handleNameChange} />
      </div>

      <div>
        <label htmlFor="lastName">Prénom</label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={handleLastNameChange}
        />
      </div>

      <div>
        <label htmlFor="phone">Téléphone</label>
        <input
          type="text"
          id="phone"
          value={phone}
          onChange={handlePhoneChange}
        />
      </div>

      <div>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          value={description}
          onChange={handleDescriptionChange}
        ></textarea>
      </div>

      <button onClick={handleSaveProfile}>Enregistrer</button>

      <div>
        <h3>Historique des dons</h3>
        {donationHistory.map((donation) => (
          <div key={donation.id}>
            <p>Montant: {donation.amount}</p>
            <p>Date: {donation.date}</p>
          </div>
        ))}
        <button onClick={loadDonationHistory}>Charger l'historique des dons</button>
      </div>
    </div>
  );
};

export default ProfilePage;
