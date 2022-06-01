
import React from 'react'
import "../css/login.css"
function Register() {
    return (
        <>
            <section class="m-0 vh-100 gradient-custom">
                <div class='container p-3 h-100'>
                    <div class='row d-flex justify-content-center align-items-center h-100'>
                        <div class='container col-12 col-md-8 col-lg-6 col-xl-5'>
                            <div class='card bg-dark text-white' >
                                <div className='m-5 text-center' >
                                    <form>
                                        <h2 className="fs-4 fw-bold mb-3 text-uppercase ">Create Account</h2>
                                        <div class="form-outline mb-4">
                                            <input type="text"
                                                class="form-control form-control-lg"
                                                name='name'
                                                value=""
                                                placeholder='full name'
                                                required
                                            />
                                        </div>

                                        <div class="form-outline mb-4">
                                            <input type="email"
                                                class="form-control form-control-lg"
                                                name='email'
                                                value=""
                                                placeholder='email'
                                                required
                                            />
                                        </div>

                                        <div class="form-outline mb-4">
                                            <input type="password"
                                                class="form-control form-control-lg"
                                                name='password'
                                                value=""
                                                placeholder='password'
                                                required
                                            />
                                        </div>

                                        <div class="form-outline mb-4">
                                            <input type="password"
                                                class="form-control form-control-lg"
                                                name='confirm'
                                                value=""
                                                placeholder='confirm password'
                                                required
                                            />
                                        </div>

                                        <div class="d-flex justify-content-center">
                                            <button type="submit"
                                                class="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Register</button>
                                        </div>

                                        <p class="text-center text-muted text-white-50 mt-5 mb-0">Have already an account? <a href="#!"
                                            class="fw-bold text-body text-white-50 "><u>Login here</u></a></p>

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

export default Register