import Navbar from './Components/Navbar'
import './App.css';
import Footer from './Components/Footer';
import Home from './Components/Home';
import AIVoice from './Components/AIVoice';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';

function App() {
  const router = createBrowserRouter([
    {
      path : "/",
      element:<> <Navbar/> <Home/> <Footer/> </>
     },
    {
      path: "aivoice",
      element: <> <Navbar/> <AIVoice/> <Footer/> </> 
    }
  ])
  return (
    <>
    <RouterProvider router={router}/>
    </>
  );
}

export default App;
