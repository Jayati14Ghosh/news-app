import style from '../style.css';
import {useState, useEffect} from 'react';

function PageTop(){
  const [goTop, setGoTop] = useState(false);
  const handlePageTop = ()=>{
      window.scrollTo(0, 0);
  }

  useEffect(() => {
    window.addEventListener("scroll", () => {
       if(window.scrollY > 500) {
           setGoTop(true);
       }
       else{
           setGoTop(false);
       }
    });
  }, [])

  return(
    <>
      { goTop && <p className="page-top" onClick={handlePageTop}>&#8673;</p>}
    </>
  )
}
export default PageTop
