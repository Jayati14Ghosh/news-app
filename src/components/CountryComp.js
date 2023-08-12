import ind from '../images/ind.jpg';
import jp from '../images/jp.jpg';
import nl from '../images/nl.jpg';
import sa from '../images/sa.jpg';
import sk from '../images/sk.jpg';
import us from '../images/us.jpg';
import { Tooltip as ReactTooltip } from "react-tooltip";
import {Link} from 'react-router-dom';
function CountryComp({handleCountryChange}){
  return(
    <>
      <div onChange={handleCountryChange} className="country-group">
        <Link to="/news-app/india" className="d-block">
          <img src={ind} alt="India" data-tooltip-id="my-tooltip-in" />
          <ReactTooltip variant="error" id="my-tooltip-in" place="top"  content="India"/>
        </Link>

        <Link to="/news-app/japan" className="d-block">
          <img src={jp} alt="Japan" data-tooltip-id="my-tooltip-jp" />
          <ReactTooltip variant="error" id="my-tooltip-jp" place="top"  content="Japan"/>
        </Link>

        <Link to="/news-app/netherlands" className="d-block">
          <img src={nl} alt="Netherlands" data-tooltip-id="my-tooltip-nl" />
          <ReactTooltip variant="error" id="my-tooltip-nl" place="top"  content="Netherlands"/>
        </Link>

        <Link to="/news-app/south-africa" className="d-block">
          <img src={sa} alt="South Africa" data-tooltip-id="my-tooltip-sa" />
          <ReactTooltip variant="error" id="my-tooltip-sa" place="top"  content="South Africa"/>
        </Link>

        <Link to="/news-app/south-korea" className="d-block">
          <img src={sk} alt="South Korea" data-tooltip-id="my-tooltip-sk" />
          <ReactTooltip variant="error" id="my-tooltip-sk" place="top"  content="South Korea"/>
        </Link>

        <Link to="/news-app" className="d-block">
          <img src={us} alt="United States" data-tooltip-id="my-tooltip-us" />
          <ReactTooltip variant="error" id="my-tooltip-us" place="top"  content="United States"/>
        </Link>
      </div>
    </>
  )
}
export default CountryComp
