import { useState } from "react";
import styles from "../styles/Register.module.scss";
import { useNavigate } from 'react-router-dom';

function Register() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [phoneNum, setPhoneNum] = useState('');
    const [agree, setAgree] = useState(false);
    const [passwordError, setPasswordError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [phoneNumError, setPhoneNumError] = useState('');

    const navigate = useNavigate();

    const isEmail = (value) => {
        const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return value.match(emailFormat);
    }

    const isValidPhoneNumber = (value) => {
        const format = /^\d{10}$/;
        return value.match(format);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!isEmail(email)){
            setEmailError(true);
        } else if(password !== confirmPassword){
            setPasswordError(true);
        } else if(!isValidPhoneNumber(phoneNum)){
            setPhoneNumError(true)
        } else{
            setPhoneNumError(false);
            setEmailError(false);
            setPasswordError(false);

            localStorage.setItem('auth-success', true);

            navigate('/');
        }
        
    }

    return (
        <div className={styles.register}>
            <h1 className={styles.form__heading}>Create an account</h1>

            <form onSubmit={handleSubmit}>
                <div className={styles.input__field}>
                    <label htmlFor="email">Your email address</label>
                    <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {emailError && <span className={styles.error}> Enter a valid email address</span>}
                </div>

                <div className={styles.input__field}>
                    <label htmlFor="email">Your password</label>
                    <input 
                        type="password" 
                        name="password" 
                        id="password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {passwordError && <span className={styles.error}> Passwords don't match</span>}
                </div>

                <div className={styles.input__field}>
                    <label htmlFor="confirm_password">Confirm your password</label>
                    <input
                        type="password"
                        name="confirm_password"
                        id="confirm_password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    {passwordError && <span className={styles.error}> Passwords don't match</span>}
                </div>

                <div className={styles.input__field}>
                    <label htmlFor="email">Your name</label>
                    <input type="text" name="name" id="name" />
                </div>

                <div className={styles.input__field}>
                    <label htmlFor="phone_num">Your phone number</label>
                    <input 
                        type="text" 
                        name="phone_num" 
                        id="phone_num" 
                        value={phoneNum}
                        onChange={(e) => setPhoneNum(e.target.value)}
                    />
                    {phoneNumError && <span className={styles.error}> Enter a valid 10 digit contact number </span>}
                </div>

                <div id={styles.input__check}>
                    <label htmlFor="agree__TC"></label>
                    <div className="check__container">
                        <input 
                            type="checkbox" 
                            name="agree__TC" 
                            id="agree__TC" 
                            checked={agree}
                            onChange={() => setAgree(val => !val)} 
                        /> I read and
                        agree to all the Terms and Conditions
                    </div>
                </div>

                <div id={styles.submit__btn}>
                    <button type="submit">Create account</button>
                </div>

            </form>
        </div>
    );
}

export default Register;
