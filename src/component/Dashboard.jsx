import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Nav from "./Nav";
import Text from "./Text";
import InfoGrp from "./InfoGrp";

function Dashboard(){
    const message="View Passenger details.";
    const bookedInfoGrpObj = localStorage.getItem("bookedInfoGrp");
    const bookedInfoGrp = JSON.parse(bookedInfoGrpObj);

    const [infoSeen, setInfoSeen] = useState(false);

    const location = useLocation();
    const submitToggle = location.state;

    useState(()=>{
        console.log("dashboard initial render");
        if(bookedInfoGrpObj!==null){
            if(!infoSeen){
                setInfoSeen(!infoSeen);
            } 
        }
    },[]);

    useEffect(()=>{
        console.log("submitState");
        console.log(submitToggle);
        if(submitToggle){
            if(!infoSeen){
                setInfoSeen(!infoSeen);
            }  
        }
    },[submitToggle]);

    return (

        <div className="outer-div">
            {/* <h1>Hello World!</h1> */}
            <Nav/>
            <div className="view">
                <Text msg={message}/>
                <div className="container">
                    {infoSeen && <InfoGrp/>} 

                    {/* <div className="info">
                        <div>
                            <img src="person.png" alt="person-img"/>
                        </div>
                        <div>Prabha L</div>
                        <div className="properties">
                            <div>
                                <img src="view.png" alt="view-img"/>
                            </div>
                            <div>
                                <img src="edit.png" alt="edit-img"/>
                            </div>
                            <div>
                                <img src="delete.png" alt="delete-img"/>
                            </div>
                        </div>
                    </div> */}

                </div>
                </div>
        </div>
        
    );
}

export default Dashboard;