import ind from '../images/ind.jpg';
import jp from '../images/jp.jpg';
import nl from '../images/nl.jpg';
import sa from '../images/sa.jpg';
import sk from '../images/sk.jpg';
import us from '../images/us.jpg';
import { Tooltip as ReactTooltip } from "react-tooltip";
function CountryComp({handleCountryChange}){
  return(
    <>
      <div onChange={handleCountryChange} className="country-group">
        <input type="radio" value="in" name="country" id="in"/>
        <label htmlFor="in" data-tooltip-id="my-tooltip-in" ><img src={ind} alt="India" /></label>
        <ReactTooltip variant="error" id="my-tooltip-in" place="top"  content="India"/>

        <input type="radio" value="jp" name="country" id="jp"/>
        <label htmlFor="jp" data-tooltip-id="my-tooltip-jp" ><img src={jp} alt="Japan" /></label>
        <ReactTooltip variant="error" id="my-tooltip-jp" place="top"  content="Japan"/>

        <input type="radio" value="nl" name="country" id="nl"/>
        <label htmlFor="nl" data-tooltip-id="my-tooltip-nl" ><img src={nl} alt="Netherlands" /></label>
        <ReactTooltip variant="error" id="my-tooltip-nl" place="top"  content="Netherlands"/>

        <input type="radio" value="sa" name="country" id="sa"/>
        <label htmlFor="sa" data-tooltip-id="my-tooltip-sa" ><img src={sa} alt="South Africa" /></label>
        <ReactTooltip variant="error" id="my-tooltip-sa" place="top"  content="South Africa"/>

        <input type="radio" value="kr" name="country" id="kr"/>
        <label htmlFor="kr" data-tooltip-id="my-tooltip-sk" ><img src={sk} alt="South Korea" /></label>
        <ReactTooltip variant="error" id="my-tooltip-sk" place="top"  content="South Korea"/>

        <input type="radio" value="us" name="country" id="us"/>
        <label htmlFor="us" data-tooltip-id="my-tooltip-us" ><img src={us} alt="United States" /></label>
        <ReactTooltip variant="error" id="my-tooltip-us" place="top"  content="United States"/>
      </div>
    </>
  )
}
export default CountryComp
