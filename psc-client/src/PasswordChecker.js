import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Indicator from './Indicator';
import './PasswordChecker.css'

const PasswordChecker = () => {
    const [password, setPassword] = useState('');
    const [score, setScore] = useState(0);
    const [entropy, setEntropy] = useState(0);
    const [char_length, setChar_length] = useState(0);
    const [feedback, setFeedback] = useState([]);
    const [strength, setStrength] = useState('')
    
    
    const checkPassword = async (password) => {

        const txtPassword = document.getElementById('password');
        const capsLockWarn = document.querySelector('.capsLockOn');

        const checkCapsLock = (e) => {
            const isCapsLockOn = e.getModifierState('CapsLock');
            capsLockWarn.style.display = isCapsLockOn ? 'block' : 'none';
        };
    
        txtPassword.addEventListener('keydown', checkCapsLock);
        txtPassword.addEventListener('keyup', checkCapsLock);
        try {
            if (password === '') {
                setChar_length(0);
                setStrength('')
                setScore(0)
                setFeedback('')
                setEntropy(0)
            } else {
            const response = await axios.post('http://127.0.0.1:5000/check_password', { password });
            console.log(response.data)
            const { score, strength, feedback, char_length, entropy } = response.data;
            setScore(score)
            setFeedback(feedback);
            setStrength(strength)
            setChar_length(char_length)
            setEntropy(entropy)
        }
        } catch (error) {
            console.error('Error checking password strength', error);
        }
    };

    const handleChange = (event) => {
        const newPassword = event.target.value;
        setPassword(newPassword);
        checkPassword(newPassword);
    };

        const [passwordVisible, setPasswordVisible] = useState(false);
      
        const togglePasswordVisibility = () => {
          setPasswordVisible(!passwordVisible);
        };


    return (
        <div className='container'>
        <div className='sub-container'>
            <h1 className='text-center my-5'>Password Strength Checker</h1>
            <div className='sub-group'>
            <div className='txt-container'>
          
            <div className='entryarea'>
            <p className='capsLockOn'>Caps Lock On!</p>
            

            <input
                id='password'
                type={passwordVisible ? 'text' : 'password'}
                className='input'
                value={password}
                onChange={handleChange}
                required
            />
             <i className={`bi ${passwordVisible ? 'bi-eye' : 'bi-eye-slash'}`} onClick={togglePasswordVisibility} id='togglePassword' style={{
                float: 'right', 
                marginRight: '20px',
                marginTop: '10px',
                position: 'relative',
                zIndex: '2222'}}></i>
            
           <div className='label'>Enter your password</div>
            </div>
            </div>
            <Indicator entropy={entropy} />
            <div id="feedback" className='feedback-container'>
            <div className='fd-group-one'>
            {char_length ? <div className='fd-1'> {char_length} Characters </div> : '0 Characters' }
               <div className='fd-2'>Password Strength: {strength ? strength : 'Very weak'} </div> <div className='fd-3'>  Time to crack:  {score ? score  : '0 seconds' } </div>
            </div>
            
             <div>
            {feedback.length > 0 && feedback.map((item, index) => (
            <div key={index}>{item}</div>
             ))}
            </div>
            </div>
            </div>
            </div>
        </div>
    
     );
};

export default PasswordChecker;
