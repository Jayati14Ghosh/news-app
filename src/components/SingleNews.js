import style from '../style.css';
import noImage from '../images/noImage.jpg'
function SingleNews({no,title, description, link, img, date, name}){

  const dateFormat = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
  const cdate = (new Date(date)).toLocaleDateString('en-US', dateFormat);

  return(
    <>
      <div className="box-single-group">
        <div className="news-image"><img src={img?img:noImage} alt={title} /></div>
        <p className="box-date"><span>{cdate}</span></p>
        <p className="box-title"><a href={link}>{title}</a></p>
        <p className="box-text">{description} <span className="box-link"><a href={link} target="_blank">{name?"Read in "+name:"Read more"}</a></span></p>
      </div>
    </>
  )
}
export default SingleNews
