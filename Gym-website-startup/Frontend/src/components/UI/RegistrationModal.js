import React, { useState, useEffect } from 'react';
import '../../styles/RegistrationModal.css';
import axios from 'axios'; // Import Axios

const RegistrationModal = ({ onClose, isOpen }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    gender: '',
    comments: '',
  });

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Make a POST request to your server
      const response = await axios.post('/api/submit-form', formData);

      if (response.status === 200) {
        // Form submitted successfully
        setIsFormSubmitted(true);

        // Automatically close the modal after 3 seconds
        setTimeout(() => {
          setIsFormSubmitted(false);
          onClose();
        }, 3000);
      } else {
        // Handle errors here
      }
    } catch (error) {
      // Handle network or server errors
      console.error(error);
    }
  };

  useEffect(() => {
    if (isFormSubmitted) {
      // Automatically close the modal after 3 seconds
      setTimeout(() => {
        setIsFormSubmitted(false);
        onClose();
      }, 3000);
    }
  }, [isFormSubmitted, onClose]);

  return (
    <div className={`modal-overlay ${isOpen ? 'open' : 'close'}`}>
      <div className="registration-modal">
        <h3>Registration Form</h3>
        {isFormSubmitted ? (
          <p>Form submitted successfully. We will contact you soon.</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="tel"
                name="number"
                value={formData.number}
                onChange={handleChange}
                placeholder="Phone Number"
                required
              />
            </div>
            <div className="form-group">
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div className="form-group">
              <textarea
                name="comments"
                value={formData.comments}
                onChange={handleChange}
                placeholder="Comments"
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default RegistrationModal;
