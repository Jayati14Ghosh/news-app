import Header from './components/Header';
import AllNews from './components/AllNews';
import Footer from './components/Footer';
import PageTop from './components/PageTop';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {useState} from 'react';

function App() {
  const [country,setCountry] = useState("us");
  return (
    <>
      <Header/>
      <div className="container-block">
        <Router>
            <Routes>
              <Route path="/news-app/india" element={<AllNews key="in" country={`in`} />} />
              <Route path="/news-app/japan" element={<AllNews key="jp" country={`jp`}/>}/>
              <Route path="/news-app/netherlands" element={<AllNews key="nl" country={`nl`} />} />
              <Route path="/news-app/south-africa" element={<AllNews key="sa" country={`sa`} />} />
              <Route path="/news-app/south-korea" element={<AllNews key="kr" country={`kr`} />} />
              <Route path="/news-app" element={<AllNews key="us" country={`us`} />} />
            </Routes>
        </Router>
      </div>
      <Footer/>
      <PageTop/>
    </>
  );
}

export default App;
