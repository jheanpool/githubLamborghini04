import React from 'react';
import Button from '@material-ui/core/Button';
import './Sign_Up.css';
import './Sign_Up01.css';
import './Sign_Up02.css';


class Sing_In extends React.Component{
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

         

            <div className="login01">
               
                    <form onSubmit = {this.handleSubmit}>
                        <div className="email_up">
                           <p>Create your account</p>
                        </div>
                        <input type='email' name='jheanpool0210@gmail.com' placeholder='Email adress' required onChange={this.handleChange}/>
                        <input type='password' name='123456789' placeholder='Write a password.' required onChange={this.handleChange}/>
                        
                 
                        <button onSubmit={this.handleSubmit}>Login</button>
                 

                       <div className="icono_login">

                          <Button href="http://localhost:5000/Entrada"><svg xmlns="http://www.w3.org/2000/svg" 
                          width="65" height="65" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                          <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                          </svg></Button>
                        
                       </div>

                    </form>
                    
            </div>
      
         
        )
    }
}

export default Sing_In;