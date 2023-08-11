import CountryComp from './CountryComp';
function Breadcrumb({category,country,page,handleCountryChange}){
  return(
    <>
    <div className="topnews-country-main-group">
      <h2 className="news-heading">
        <span>Top News - </span>
        {country==='in'?'India ':''}
        {country==='jp'?'Japan ':''}
        {country==='nl'?'Netherlands ':''}
        {country==='sa'?'South Africa ':''}
        {country==='kr'?'South Korea ':''}
        {country==='us'?'United States ':''}
      </h2>
      <CountryComp        
        handleCountryChange={handleCountryChange}
      />
    </div>
    <p className="breadcrum"> {country} / {category} / page no {page}</p>
    </>
  )
}
export default Breadcrumb
