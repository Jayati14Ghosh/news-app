import {useState, useEffect} from 'react';
import axios from 'axios';
import style from '../style.css';
import noImage from '../images/noImage.jpg';
import Category from './Category';
import SingleNews from './SingleNews';
import Search from './Search';
import Breadcrumb from './Breadcrumb';
import Loader from './Loader';
import Marquee from "react-fast-marquee";

function AllNews({country,setCountry}){
  const [category, setCategory] = useState("general");
  const [bunchArticles, setBunchArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(17);
  const [totalArticlesNo, setTotalArticlesNo] = useState();
  const [query, setQuery] = useState("");
  const [completeQuery, setCompleteQuery] = useState("");
  const [loader, setLoader] = useState(true);

  const API_KEY = "f0b22a230a51451fa87bb51d07eccf0e"
  const API_URL = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${API_KEY}&category=${category}&page=${page}&pageSize=${pageSize}&q=${completeQuery}`;

  const getNews = async ()=>{
    const response = await axios.get(API_URL);
    setBunchArticles(response.data.articles);
    setTotalArticlesNo(response.data.totalResults);
    setLoader(false);
  }

  const handleNext = ()=>{
    setPage(page + 1);
    window.scrollTo(0, 0);
  }

  const handlePrev = ()=>{
    setPage(page-1);
    window.scrollTo(0, 0);
  }

  const handleCountryChange = (e)=>{
    setPage(1);
    window.scrollTo(0, 0);
  }

  const handleCategoryChange = (e)=>{
    setCategory(e.target.value);
    setPage(1);
    window.scrollTo(0, 0);
  }

  const handleSearchSubmit = (e)=>{
    e.preventDefault();
    setCompleteQuery(query);
    window.scrollTo(0, 0);
    setPage(1);
    setQuery("");
  }

  const handleQueryUpdate =(e)=>{
    setQuery(e.target.value);
  }

  const handleBackToOrigin = (e)=>{
    setCompleteQuery("");
    setPage(1);
  }

  useEffect(()=>{
    getNews()
  },[completeQuery, country, page, pageSize, category]);

  return(
    <>
    <div className="container-block">
      <div className="marquee-group">
        <div className="breaking-news">Breaking News</div>
        <Marquee pauseOnHover={true} height="10px">
          {bunchArticles.map((item, index)=>
              <span key={index}><a href={item.url} target="_blank">{item.title}</a></span>
            )
          }
        </Marquee>
      </div>
      <Breadcrumb
        category={category}
        country={country}
        page={page}
        handleCountryChange={handleCountryChange}
      />

      <div className="main-body">
        <div className="boxes-main-group">
          <div className="search-result-main-group">
              {
                completeQuery!=""?
                  totalArticlesNo>0?
                    <div><h2 className="search-result"><span className="fw-normal">Showing results for </span> <i>"{completeQuery}"</i><br/>Total {totalArticlesNo} Result{totalArticlesNo>1?'s':''} Found</h2><button type="button" className="go-back" onClick={handleBackToOrigin}>Go Back</button></div>:
                    <div><h2><span className="fw-normal">Sorry! No results were found for  </span><i>"{completeQuery}"</i></h2><p><button type="button" className="go-back" onClick={handleBackToOrigin}>Go Back</button></p></div>
                    :""
                }
            </div>
            {
              loader?<Loader/>:""
            }
            <div className="boxes-group">
              {!loader && bunchArticles.map((item, index)=>
                  <div className={`box box-${page}`} key={index}>
                    <SingleNews
                      no={index}
                      title={item.title}
                      description={item.description}
                      link={item.url}
                      img={item.urlToImage}
                      date={item.publishedAt}
                      name={item.source.name}
                      />
                  </div>
                )
              }
            </div>
            <div className="btn-group">
                {
                  page>1?<button className="btn-page" onClick={handlePrev}>← Previous page</button>:""
                }
                {
                  totalArticlesNo/page>pageSize?<button className="btn-page" onClick={handleNext}>Next Page →</button>:""
                }
            </div>
        </div>
        <div className="sidebar-group">
          <Search
            handleSearchSubmit={handleSearchSubmit}
            query={query}
            completeQuery={completeQuery}
            handleQueryUpdate={handleQueryUpdate}
            handleBackToOrigin={handleBackToOrigin}
          />

          <Category
            handleCategoryChange={handleCategoryChange}
          />
        </div>
      </div>
    </div>
      <p className="d-none">totalArticlesNo = {totalArticlesNo} page = {page} now division is {totalArticlesNo/page} </p>
    </>
  )
}
export default AllNews
