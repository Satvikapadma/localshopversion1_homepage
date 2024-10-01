import React, { useState } from 'react'
import Nav from "../narbar/Nav"
import "./Redg.css";
import { useNavigate } from 'react-router-dom';
const Redg = () => {

    const navigation=useNavigate("")
    const [input, setInput] = useState({ name: "",phone: "", password: "" });
    const [eye, seteye] = useState(true);

    const handleInput = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        setInput({ ...input, [name]: value });
    }

    const register = async (e) => {
        e.preventDefault();
        try {

            alert("register successful");
        } catch (e) {
            alert("something wrong");
        }
    }

    return (
        <>

            
            <div className="container">
              <div className="containertop">  <Nav></Nav>
              </div>
              <div className="containerbody">
                <section className="leftRegistration">
                    <form className="RegistrationForm" onSubmit={register}>
                        <h2>Welcome Back</h2>
                        <p onClick={()=>navigation("/shoping/signin")}>Have an Account?<a href="">Sign In</a></p>
                        <div className="inside-form">


                        <label htmlFor="">Name</label>
                            <div className="inputBox">
                            <i className="fa-solid fa-user"></i><input type="text" required placeholder='Enter your name' name='name' onChange={(e) => handleInput(e)} />
                            </div>

                            <label htmlFor="">Phone Number</label>
                            <div className="inputBox">
                            <i className="fa-solid fa-user"></i><input type="text" required placeholder='Enter phone number' name='phone' onChange={(e) => handleInput(e)} />
                            </div>

                            <label htmlFor="">Password</label>
                            
                            < div className="inputBox">
                            {
                                eye ? <i onClick={()=>seteye(!eye)} className="fa-solid fa-eye"></i>:<i onClick={()=>seteye(!eye)}class="fa-solid fa-eye-slash"></i>
                            }
                               
                            {/* <i class="fa-solid fa-eye-slash"></i> */}
                            <input type={eye? "password":"text"} required placeholder='Enter Password' name='password' onChange={(e) => handleInput(e)} />
                            </div>

                            <label htmlFor="">Confirm Password</label>
                            
                            < div className="inputBox">
                            {
                                eye ? <i onClick={()=>seteye(!eye)} className="fa-solid fa-eye"></i>:<i onClick={()=>seteye(!eye)}class="fa-solid fa-eye-slash"></i>
                            }
                               
                            {/* <i class="fa-solid fa-eye-slash"></i> */}
                            <input type={eye? "password":"text"}  required placeholder='Enter Confirm Password' name='confirmpassword' onChange={(e) => handleInput(e)} />
                            </div>

                            <button>SignUp</button>
                        </div>

                    </form>
                </section>
                <section className="rightRegister">

                    <div className="register-right-image">
                        <lottie-player src="https://lottie.host/f6584c2b-6f1f-48a6-a30d-9fedd307a977/yyaEg3cAjH.json" background="transparentf" speed="1" style={{width:"500px",height:"500px"}} loop autoplay direction="1" mode="normal"></lottie-player>

                    </div>
                </section>
            </div>
            </div>
            
        </>
    )
}

export default Redg