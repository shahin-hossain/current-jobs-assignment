import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout.jsx'
import Home from './components/Home/Home.jsx'
import Statistics from './components/Statistics/Statistics.jsx'
import AppliedJobs from './components/AppliedJobs/AppliedJobs.jsx'
import Blogs from './components/Blogs/Blogs.jsx'
import JobDetails from './components/JobDetails/JobDetails.jsx'
import { loaderAllData, loadJobData } from './DataLoader/DataLoader.js'
import ErrorPage from './components/ErrorPage/ErrorPage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout></Layout>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: 'statistics',
        element: <Statistics></Statistics>
      },
      {
        path: 'applied-jobs',
        element: <AppliedJobs></AppliedJobs>,
        loader: loadJobData,
      },
      {
        path: 'blogs',
        element: <Blogs></Blogs>,
        loader: () => fetch('blog.json')

      },
      {
        path: 'job-details/:id',
        element: <JobDetails></JobDetails>,
        loader: loaderAllData,
      },

      {
        path: '*',
        element: <ErrorPage></ErrorPage>
      },

    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
