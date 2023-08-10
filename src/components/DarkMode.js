import {useState} from 'react';
import Switch from "react-switch";

function DarkMode(){
  const [mode, setMode] = useState(false);
  const [enable, setEnable] = useState("Enable")
  const handleMode = (checked)=>{
    setMode(!mode);
    if(mode===false){
      document.body.classList.remove("bg-dark");
      document.body.classList.add("bg-light");
      setEnable("Disable")
    }
    else{
      document.body.classList.add("bg-dark");
      document.body.classList.remove("bg-light");
      setEnable("Enable")
    }
  }
  return(
    <>
      <label className="dark-mode-group">
        {enable} Light Mode
        <Switch onChange={handleMode} checked={mode} />
      </label>
    </>
  )
}
export default DarkMode
