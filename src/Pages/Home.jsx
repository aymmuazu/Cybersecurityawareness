import React from 'react'
import NavBar from '../Components/NavBar'
import imageBg from '../assets/img/campus.jpeg'
import SectionView from '../Components/Section'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom'
import CustomTitlePage from '../Components/CustomTitle'
import { userAlreadyLoggedIn } from '../Components/AuthMiddleware'

const Home = ({ app_name }) => {
 
  CustomTitlePage({ title: 'Home', app_name: app_name })
  return (
    <>
        <header className="bg-dark py-5">
            <div className="container px-5">
                <div className="row gx-5 align-items-center justify-content-center">
                    <div className="col-lg-8 col-xl-7 col-xxl-6">
                        <div className="my-5 text-center text-xl-start">
                            <h1 className="display-5 fw-bolder text-white mb-2">Final Year Student Software Project on:</h1>
                            <p className="lead fw-normal text-white-50 mb-4 fw-bold">
                                {app_name} <br />
                                By - <span>FCP/CCS/20/2012</span>
                            </p>
                            <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                                {userAlreadyLoggedIn ? (
                                    <>
                                        <Link to="/dashboard" className="btn btn-primary w-100 btn-lg px-4 me-sm-3">Go Back Home</Link> 
                                    </>
                                ) : (
                                    <>
                                        <Link to="/login" className="btn btn-primary w-100 btn-lg px-4 me-sm-3">Login</Link> 
                                        <Link to="/register" className="btn btn-primary w-100 btn-lg px-4 me-sm-3">Register</Link> 
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5 col-xxl-6 d-none d-xl-block text-center"><img className="img-fluid rounded-3 my-5" src={imageBg} alt="..." /></div>
                </div>
            </div>
        </header>
        <SectionView />
    </>
  )
}

export default Home