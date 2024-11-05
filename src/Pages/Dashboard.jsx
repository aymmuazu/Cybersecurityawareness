import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useUserData from '../Components/UserData';
import CustomAlert from '../Components/CustomAlert';
import CustomTitlePage from '../Components/CustomTitle';
import { userAlreadyLoggedIn } from '../Components/AuthMiddleware';

const Dashboard = ({ app_name }) => {
  const [showLoader, setShowLoader] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useUserData();

  CustomTitlePage({ title: 'Dashboard', app_name: app_name })

  const userData = useSelector((state) => state.auth.user);
  const isLoading = useSelector((state) => state.auth.isLoading);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 150);
    return () => clearTimeout(timer);
  }, [dispatch]);


  if (showLoader || (userData == null && isLoading)) {
    <CustomAlert 
      message="Loading...."
      alertStyle="alert-info"
    />
    return;

  }else if (userData !== null && !isLoading) {
    const { first_name, username } = userData;
    return (
      <>
        <div className="container pt-5 mb-5">
            <h3 className="mb-4 fw-bold">Welcome {first_name}, <span className="badge bg-dark">User</span></h3>

            <div className="container mt-5 mb-5">
              <div className="row">
                <div className="col-md-5">
                  <a href="" className="btn btn-dark fw-bold w-100 btn-lg mb-2">Manage Awareness</a>
                  <a href="" className="btn btn-primary fw-bold w-100 btn-lg mb-2">Add Awareness</a>
                  <a href="" className="btn btn-dark fw-bold w-100 btn-lg mb-2">Platform Users</a>
                </div>
              </div>
            </div>

            <hr />
              <a href="" className="btn fw-bold btn-danger">Log Out</a>
          </div>
      </>
    )
  }
}

export default Dashboard