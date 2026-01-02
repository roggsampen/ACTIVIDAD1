import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CustomHeader } from "./components/CustomHeader";
import { HomePage } from './components/HomePage';
import { CustomFooter } from "./components/CustomFooter";
import { Detalle } from './views/Detalle';
import { GlovalProvider } from './context/GlobalContext';
import Landing from './views/Landing';



function AppContent() {

  return(
    <>
      {/*Header*/}
      <CustomHeader />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/relatos" element={<HomePage />} />
        <Route path='/detalle/:id' element={<Detalle />} />
      </Routes>

      {/*Footer*/}
      <CustomFooter />
    </>
  );
}

export const App = () => {
  return(
    <GlovalProvider >
      <Router>
        <AppContent />
      </Router>
    </GlovalProvider>
  );
}