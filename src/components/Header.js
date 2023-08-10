import style from '../style.css';
import DarkMode from './DarkMode'

function Header(){
  const today = new Date();
  const month = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN",
  "JUL", "AUG", "SEPT", "OCT", "NOV", "DEC"];
  const weekday = ['SUNDAY','MONDAY','TUESDAY','WEDNESDAY','THURSDAYDAY','FRIDAY','SATURDAY'];
  const todayDt = weekday[today.getDay()] + " - " + ( month[today.getMonth()+1]) + " " + today.getDate() + ", " + today.getFullYear();
  return(
    <>
      <header className="header-top-main-group">
        <div className="container-block">
          <div className="header-top-group">
            <p>{todayDt}</p>
            <h1 className="logo">WORLD NEWS</h1>
            <DarkMode/>
          </div>
        </div>
      </header>
    </>
  )
}
export default Header
