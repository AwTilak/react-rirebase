
import "../css/login.css"
import React from 'react'

function Login() {
    return (
        <>
            <section className="vh-100 gradient-custom">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="container col-12 col-md-8 col-lg-6 col-xl-5">
                            <div className="card bg-dark text-white">
                                <div className="mb-md-5 mt-md-4 p-5 text-center">
                                    <form >
                                        <h2 className="fs-4 fw-bold mb-3 text-uppercase ">Login</h2>
                                        {/* <p className="text-white-50 mb-5">Please enter your login and password!</p> */}


                                        <div className="form-outline form-white mb-4">
                                            <input type="email"
                                                className="form-control form-control-lg"
                                                name="email"
                                                placeholder="username/email"
                                                autoComplete="off"
                                            />
                                        </div>

                                        <div className="form-outline form-white mb-4">
                                            <input type="password"
                                                className="form-control form-control-lg"
                                                name="password"
                                                placeholder="password"
                                                autoComplete="off"
                                            />
                                        </div>
                                        <button className="btn btn-outline-light btn-lg px-5 mb-2"
                                            type="submit"

                                        >Login</button>

                                        <div>
                                            <p className="mb-0">Don't have an account? <a href="#!" className="text-white-50 fw-bold">Sign Up</a>
                                            </p>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login