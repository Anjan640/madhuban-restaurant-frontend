import React from 'react'
import './Login.css'
function Login() {
  return (
    <div >
      <div className="container">
        <div className="card card-login mx-auto text-center bg-dark">
          <div className="card-header mx-auto bg-dark">
            <span> <img src="https://amar.vote/assets/img/amarVotebd.png" className="w-75" alt="Logo"/> </span><br />
            <span className="logo_title mt-5"> Login Dashboard </span>

          </div>
          <div className="card-body">
            <form action="" method="post">
              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text"><i className="fas fa-user"></i></span>
                </div>
                <input type="text" name="email" className="form-control" placeholder="Username"/>
              </div>

              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text"><i className="fas fa-key"></i></span>
                </div>
                <input type="password" name="password" className="form-control" placeholder="Password"/>
              </div>

              <div className="form-group">
                <input type="button" name="btn" value="Login" className="btn btn-outline-danger float-right login_btn"/>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
