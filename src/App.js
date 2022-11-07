import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import AddUser from './components/AddUser';
import Home from './components/Home';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home></Home>,
    },
    {
      path: '/user/add',
      element: <AddUser></AddUser>
    }
])


  return (
    <div className="App">
      <RouterProvider router = {router}></RouterProvider>
    </div>
  );
}

export default App;
