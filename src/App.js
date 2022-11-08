import { RouterProvider } from 'react-router-dom';
import router from './Router/Routes/Routes';
import { Toaster } from "react-hot-toast";
import './App.css';

function App() {
  return (
    <div className="max-w-screen-xl mx-auto lg:mx-8">
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
