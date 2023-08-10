import AllNews from './components/AllNews';
import Header from './components/Header';
import Footer from './components/Footer';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import style from './style.css';
import {useState} from 'react';

function App() {
  const [category, setCategory] = useState("general");
  return (
    <>
    <Header/>
    <div className="container-block">
      <Router>
          <Routes>
            <Route path="/" element={<AllNews key="general" category={`general`} />} />
            <Route path="/health" element={<AllNews key="health" category={`health`}/>}/>
            <Route path="/business" element={<AllNews key="business" category={`business`} />} />
            <Route path="/entertainment" element={<AllNews key="entertainment" category={`entertainment`} />} />
            <Route path="/science" element={<AllNews key="science" category={`science`} />} />
            <Route path="/sports" element={<AllNews key="sports" category={`sports`} />} />
            <Route path="/technology" element={<AllNews key="technology" category={`technology`} />} />
          </Routes>
      </Router>
    </div>
    <Footer/>
    </>
  );
}

export default App;
