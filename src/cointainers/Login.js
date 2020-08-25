import React, { useState} from 'react'
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../store/actions/auth'



const Login = ({ login }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    
    const { email, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        
        login(email, password);
    };
    
    // Is the userr authenticated?
    // Redirect them to the home page

    return (
        <div className="container mt-5">
                <h1>Sing In</h1>
                <p>Sgn into your account</p>
               

                <form onSubmit={e => onSubmit(e)}>
                    <div className="form-group">
                        <input 
                            type="email" 
                            className="form-control"
                            placeholder='Email'
                            name='email'
                            value={email}
                            onChange={e => onChange(e)}
                            required 
                        />

                    </div>
                    <div className="form-group">
                        <input 
                            type="password" 
                            className="form-control"
                            placeholder='Password'
                            name='password'
                            value={password}
                            onChange={e => onChange(e)}
                            minLength='8'
                            required 
                        />

                    </div>
                    <button className="btn btn-primary" type='submit'>login </button>
                </form>
                <p className="mt-3">
                nao tem uma conta? <Link to='/signup'>Sign Up</Link>
                </p>
                <p className="mt-3">
                    esqueceu sua senha? <Link to='/reset-password'>ResetPassword</Link>
                </p>
                

        </div>


    );
};

//const mapStateProps = state => ({
    // is authenticated?
//});

export default connect(null, { login })(Login);
