import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Outlet, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Header from './header';
import Task1 from './tasks/Task1';
import Task4 from './tasks/Task4';
import Task3 from './tasks/Task3';
import Task2 from './tasks/Task2';
import Fifteens from './tasks/Fifteens';

const Root = () => {
    return (
        <div className='container'>
            <Header />
            <Outlet />
        </div>
    );
}


const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path='/' element={ <Root/> }>
        <Route index element={ <App/> }/>
        <Route path="task1" element={ <Task1/> }/>
        <Route path="task2" element={ <Task2/> }/>
        <Route path="task3" element={ <Task3/> }/>
        <Route path="task4" element={ <Task4/> }/>
        <Route path="fifteens" element={ <Fifteens/> }/>
        <Route path="*" element={ <App/> }/>
      </Route>
  )
);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
