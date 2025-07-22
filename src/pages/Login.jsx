import React from "react";
import {Login as LoginComponent} from '../components'

function Login(){
    return(
        <div className="login-container" style={{ background: '#0a192f', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className="rounded-xl" style={{ boxShadow: '0 8px 40px 8px rgba(0,0,0,0.75)' }}>
            <LoginComponent/>
          </div>
        </div>
    )
}
export default Login;