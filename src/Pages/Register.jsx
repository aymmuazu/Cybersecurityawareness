import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import CustomInput from '../Components/CustomInput';
import CustomButton from '../Components/CustomButton';
import CustomAlert from '../Components/CustomAlert';
import { useDispatch } from 'react-redux';
import CustomTitlePage from '../Components/CustomTitle';
import { register } from '../Stores/reducer/auth';
import WrapperBanner from '../Components/WrapperBanner';

const Register = ({ app_name }) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  CustomTitlePage({ title: 'Register', app_name: app_name })

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstname, setFirstName] = useState('');
  const [surname, setSurname] = useState('');
  const [alertNotification, setAlertNotification] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertStyle, setAlertStyle] = useState('');

  const [buttonText, setButtonText] = useState('Register');
  const [buttonDisable, setButtonDisable] = useState(false);

  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    setShowLoader(true);
    setTimeout(() => {
        setShowLoader(false);
    }, 1000);
  }, [navigate]);

  const showAlert = (message, style) => {
    setAlertNotification(true);
    setAlertMessage(message);
    setAlertStyle(style);
    setButtonDisable(false);
    setButtonText('Register');
    setTimeout(() => {
      setAlertNotification(false);
    }, 1000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonText('Processing...');
    setButtonDisable(true);

    if(username == '' || password == '' || confirmPassword == '' || firstname == '' || surname == ''){
      showAlert('All fields are required', 'alert-warning');
    }else if (password !== confirmPassword) {
      showAlert('Invalid Password Combination', 'alert-warning');
    }else{

      dispatch(register({ username, password, first_name: firstname, surname })).then((action) => {
        switch (action.type) {
          case register.pending.type:
              showAlert('Loading....', 'alert-info');
              break;
      
          case register.rejected.type:
              showAlert('Something went wrong.', 'alert-warning')
              break;

          case register.fulfilled.type:
              showAlert('Account created successfully.', 'alert-success')
              setTimeout(() => {
                navigate('/login');
              }, 1000);
              break;
          default:
              break;
      }
      });

    }
  }

  return (
    <>
    <div className="container pt-5 mb-5">
      {showLoader ? 
        (<>
          <WrapperBanner />
        </>): 
        (<>
          <h2 className="mb-4 fw-bold">Registration System</h2>
            {alertNotification && (
              <CustomAlert 
                message={alertMessage}
                alertStyle={alertStyle}
              />
            )}

            <div className="regStyle col-md-5">
              <form onSubmit={handleSubmit}>
                <CustomInput 
                  labelTitle="Username"
                  action={setUsername}
                  type="text"
                  length={20}
                />

                <CustomInput 
                  labelTitle="Password"
                  action={setPassword}
                  type="password"
                  length={20}
                />

                <CustomInput 
                  labelTitle="Confirm Password"
                  action={setConfirmPassword}
                  type="password"
                  length={20}
                />

                <CustomInput 
                  labelTitle="First Name"
                  action={setFirstName}
                  type="text"
                  length={20}
                />

                <CustomInput 
                  labelTitle="Surname"
                  action={setSurname}
                  type="text"
                  length={20}
                />

                <div className="form-group pt-4">
                  <CustomButton 
                    type="submit"
                    width={100}
                    buttonText={buttonText}
                    disable={buttonDisable}
                  />
                </div>

                <p className="pt-4">
                  Already have an account ? <Link to="/login">Login</Link>
                </p>
              </form>
            </div>
        </>)
      }
    </div>
    </>
  )
}

export default Register