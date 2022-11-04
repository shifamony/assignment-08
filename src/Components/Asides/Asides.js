import React, { useState } from 'react';
import logo from '../../images/logo2.png';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import './Asides.css';

const Asides = ({cart}) => {
    console.log(cart);
   
   
    // ACTIVITY BUTTTON IS HERE
const  handleActivity = () => {
    toast("Wow Activity Completed!");
}

//ADD TO LIST FUNCTION
    let times = 0;
    for(const sp of cart){
      times = times + sp.time;

    }
    
//BREAK TIME
    const [count, setCount] = useState(0);

    
    return (
        <div className='aside-container'>
            
            <div>
                <div className='d-flex pt-4 ps-3'>
                <img src={logo} alt="" />
                <div className='ms-3'>
                    <h5 className='fw-bold'>Jhara Islam</h5>
                    <p ><span className='me-2'> <FontAwesomeIcon icon={faLocationDot} /></span>South Surma, Sylhet</p>
                </div>
                    
              </div>
            </div>
      {/* ======================================================= */}

            <div className='bg-warning d-flex justify-content-around py-3 my-4 rounded'>
                <div>
                    <h6 className='fw-bold'>55kg</h6>
                    <p className='fw-bold'>Weight</p>
                </div>
                <div>
                    <h6 className='fw-bold'>5.0</h6>
                    <p className='fw-bold'>Height</p>
                </div>
                <div>
                    <h6 className='fw-bold'>35</h6>
                    <p className='fw-bold'>Age</p>
                </div>
            </div> 

              {/* ======================================================= */}  
              <div>
                 <h4 className='ps-3 fw-bold'>Add Break</h4>
                 <div className='bg-dark rounded py-3 d-flex justify-content-around'>
                    <Button onClick={() => setCount(10)} className='rounded-circle p-2' type="button"> <span>10</span>s</Button> 
                 <Button onClick={() => setCount(20)} className='rounded-circle p-2' type="button"> <span>20</span>s</Button>
                 <Button onClick={() => setCount(30)} className='rounded-circle p-2' type="button"> <span>30</span>s</Button>
                 <Button onClick={() => setCount(40)} className='rounded-circle p-2' type="button"> <span>40</span>s</Button>
                 <Button onClick={() => setCount(50)} className='rounded-circle p-2' type="button"> <span>50</span>s</Button>
                
                 </div>
            </div>

     
               {/* ========================= SPORTS DETAILS  ============================== */}

            <div className='py-5'>
                <h4 className='ps-3 fw-bold '>Sports Details</h4>

                <div className='d-flex justify-content-around bg-success rounded py-3 mt-4'>
                    <h5 className='fw-bold text-white'>Sports Time</h5>
                    <p className='text-white'><span>{times}</span> Seconds</p>
                </div>
                <div className='d-flex justify-content-around bg-success rounded py-3  mt-4'>
                    <h5 className='fw-bold text-white'>Break Time</h5>
                    <p className='text-white'><span>{count}</span> Seconds</p>
                </div>
            </div>
        {/* ========================== ACTIVITY BUTTON  ============================= */}
            <div>
            <Button onClick={handleActivity} className='rounded w-100 p-2 fw-bold' type="button">Activity Completed</Button>
            <ToastContainer />
            </div>
        </div>
            
        
    );
};

export default Asides;