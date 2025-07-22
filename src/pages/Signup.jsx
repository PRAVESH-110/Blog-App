import React from "react";
import {Signup as SignupComponent} from '../components'

function Signup(){
    return(
        <div className="signup-container" style={{ background: '#0a192f', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className="rounded-xl" style={{ boxShadow: '0 8px 40px 8px rgba(0,0,0,0.45)' }}>
            <SignupComponent/>
          </div>
        </div>
    )
}
export default Signup;