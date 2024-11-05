import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import CustomInput from '../Components/CustomInput';
import CustomButton from '../Components/CustomButton';
import CustomAlert from '../Components/CustomAlert';
import { useDispatch } from 'react-redux';
import CustomTitlePage from '../Components/CustomTitle';
import WrapperBanner from '../Components/WrapperBanner';
import { login } from '../Stores/reducer/auth';

const Login = ({ app_name }) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  CustomTitlePage({ title: 'Login', app_name: app_name })

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const [alertNotification, setAlertNotification] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertStyle, setAlertStyle] = useState('');

  const [buttonText, setButtonText] = useState('Login');
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
    setButtonText('Login');
    setTimeout(() => {
      setAlertNotification(false);
    }, 1000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonText('Processing...');
    setButtonDisable(true);

    if(username == '' || password == ''){
      showAlert('All fields are required', 'alert-warning');
    }else{
      dispatch(login({ username, password })).then((action) => {
        switch (action.type) {
          case login.pending.type:
              showAlert('Loading....', 'alert-info');
              break;
      
          case login.rejected.type:
              showAlert('Something went wrong.', 'alert-warning')
              break;

          case login.fulfilled.type:
              showAlert('You are now login successfully.', 'alert-success')
              const token = action.payload.access_token;
              const userDetails = action.payload.user;
              const user = JSON.stringify(userDetails);
              
              localStorage.setItem('access_token', token);
              localStorage.setItem('user', user);
              
              setTimeout(() => {
                navigate('/dashboard');
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
          <h2 className="mb-4 fw-bold">Login System</h2>
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

                <div className="form-group pt-2">
                  <CustomButton 
                    type="submit"
                    width={100}
                    buttonText={buttonText}
                    disable={buttonDisable}
                  />
                </div>

                <p className="pt-4">
                  Not yet have an account ? <Link to="/register">Register</Link>
                </p>
              </form>
            </div>
        </>)
      }
    </div>
    </>
  )
}

export default Login