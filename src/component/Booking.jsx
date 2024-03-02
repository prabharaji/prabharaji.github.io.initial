import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "./Nav";
import Text from "./Text";
import Deck from "./Deck";
import Form from "./Form";


const formTog = false;

let lsInfoGrp=[];

function setFormTog(){
    // console.log(seats);
}

export const FormContext = React.createContext({formTog,setFormTog,formTog,setFormTog});

function Booking(){

    const navigate = useNavigate();

    const message="Click on an Available Seat to book your ticket.";

    const [formToggle, setFormToggle] = useState(false);
    const [submitToggle, setSubmitToggle] = useState(false);

    const bookedInfoGrpObj = localStorage.getItem("bookedInfoGrp");
    const bookedInfoGrp = JSON.parse(bookedInfoGrpObj);

    useEffect(()=>{
        if(bookedInfoGrpObj!==null){
            lsInfoGrp=bookedInfoGrp;
            // console.log(lsInfoGrp);
        }
    },[]);

    useEffect(()=>{
        if(submitToggle){
            const bookedInfoObj = localStorage.getItem("bookedInfo");
            const bookedInfo = JSON.parse(bookedInfoObj);

            lsInfoGrp.push(bookedInfo);
            localStorage.setItem("bookedInfoGrp",JSON.stringify(lsInfoGrp));

            navigate("/dashboard", { state: submitToggle });

            setSubmitToggle(!submitToggle);
        }
    },[submitToggle]);

    console.log("formTog");
    console.log(formToggle);
    console.log("submitTog");
    console.log(submitToggle);

    return (
        <div>
            <FormContext.Provider value={{formToggle,setFormToggle,submitToggle,setSubmitToggle}}>
                <form>
                    {formToggle && <Form/>}
                </form>
                
                <div className="outer-div">
                    {/* <h1>Hello World!</h1> */}
                    <Nav/>
                    <div className="view">
                        <Text msg={message}/>
                        <Deck/>
                    </div>
                </div>
            </FormContext.Provider>
            
        </div>
        
    );
}

export default Booking;