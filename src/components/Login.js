import React from 'react';
import Button from '@material-ui/core/Button';
import Logo_menu from '../logo_lamborghini/Logo_menu.png';
import './Login.css';
import './Login01.css';

class Login extends React.Component{
    state={
        email:'',
        pwd:''
    }

    handleChange = (e) =>{
        const {name,value} = e.target
        this.setState({[name]:value})
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        this.props.isLogin(true)
    }
    render(){
        return(
            <div className='login'>
               
            
                    <form onSubmit = {this.handleSubmit}>
                        <input type='email' name='jheanpool0210@gmail.com' placeholder='email...' required onChange={this.handleChange}/>
                        <input type='password' name='123456789' placeholder='password...' required onChange={this.handleChange}/>
                        <button href={this.handleSubmit}>Log In</button>

                       <div className="logo_login">

                          <Button href="http://localhost:5000/Entrada"><img src={Logo_menu} alt="Logo_menu" width="120%" /></Button>
                        
                       </div>

                    </form>
                    
            </div>
        )
    }
}

export default Login;