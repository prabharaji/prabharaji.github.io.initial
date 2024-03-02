import React, { useState,useContext, useEffect } from "react";
import Text from "./Text";
import {FormContext} from "./Booking";


export let submit = false;
export let info = {
    "fname" : "",
    "lname" : "",
    "email" : ""
}



function Form(props){
    // console.log(props);
    const {formToggle, setFormToggle, submitToggle, setSubmitToggle} = useContext(FormContext);
   

    const [fname, setFName] = useState("");
    const [lname, setLName] = useState("");
    const [email, setEmail] = useState("");


    const formMsg="Please enter your details to continue.";

    

    function handleChange(event){
        const {name,value} = event.target;
        if(name==="fname"){
            setFName(value);
        }
        else if(name==="lname"){
            setLName(value);
        }
        else if(name==="email"){
            setEmail(value);
        }
    }

    // console.log(fname);
    // console.log(lname);
    // console.log(email);
    

    

    function handleClick(event){
        const evt = event.target;
        if(evt.id === "Cancel"){
            setFormToggle(!formToggle);
            // setBtnToggle(!btnToggle); 
        }
        else if(evt.id === "Submit"){
            info.fname = fname;
            info.lname = lname;
            info.email = email;

            console.log(info);

            // setSubmitToggle(!submitToggle);
            
            setFormToggle(!formToggle);
            setSubmitToggle(!submitToggle);
            
            
            // setBtnToggle(!btnToggle); 
            
        }
        event.preventDefault();
    }

    if(formToggle){
        info = {
            "fname" : "",
            "lname" : "",
            "email" : ""
        }
    }

    // useEffect(()=>{
    //     if(submitToggle){
    //         const bookedInfoObj = localStorage.getItem("bookedInfo");
    //         const bookedInfo = JSON.parse(bookedInfoObj);

    //         lsInfoGrp.push(bookedInfo);
    //         localStorage.setItem("bookedInfoGrp",JSON.stringify(lsInfoGrp));

    //         setSubmitToggle(!submitToggle);
    //     }
    // },[submitToggle]);

    return(
        <div className="form">
            <div className="form-inner">
                <Text msg={formMsg}/>
                <div className="fields">
                    <div>
                        <label>First Name</label>
                        <input type="text" name="fname" required className="finput" value={fname} onChange={handleChange}/>
                    </div>
                    <div>
                        <label>Last Name</label>
                        <input type="text" name="lname" required className="finput" value={lname} onChange={handleChange}/>
                    </div>
                    <div>
                        <label>Email Address</label>
                        <input type="email" name="email" required className="finput" value={email} onChange={handleChange}/>
                    </div>
                </div>
                <div className="form-btn-area">
                    <div className="book-btn form-btn">
                        <button type="submit" className="cancel-btn" onClick={handleClick} id="Cancel">Cancel</button>
                    </div>
                    <div className="book-btn form-btn">
                        <button type="submit" onClick={handleClick} id="Submit" >Submit</button>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Form;