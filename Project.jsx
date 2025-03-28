import "./Project.css"
import { useState } from 'react';

const Project = () => {

const [Ison, setIson] = useState(false);

const BtnClick = ()=>{
  setIson(!Ison);
}

const OnOff =Ison? "on":"off";



  return (
    <div className='main'onClick={BtnClick}>
      <div className={`inner${OnOff} `}>
        <span className='span'>{OnOff}</span>
      </div>
    </div>
  );
};

export default Project;


