import { RouterProvider } from "react-router-dom";
import router from "./Router/Routes/Routes";
import { Toaster } from "react-hot-toast";
import "react-photo-view/dist/react-photo-view.css";
import "./App.css";

function App() {
  return (
    <div className="max-w-screen-xl mx-auto">
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
