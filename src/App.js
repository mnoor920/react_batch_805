import logo from './logo.svg';
import './App.css';
import Layout from './layout';
import Homepage from './pages/homepage';
import About from './pages/about';
import ContactUS from './pages/contantUs';
import HttpsRequest from './pages/httpsRequest';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Layout >
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/contact_us' element={<ContactUS />} />
          <Route path='/about_us' element={<About />} />
          <Route path='/https_request' element={<HttpsRequest />} />
        </Routes>
        {/* <Homepage />
        <About />
        <ContactUS /> */}
      </Layout>

    </div>
  );
}

export default App;
