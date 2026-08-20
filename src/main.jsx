import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './Components/Home/Home.jsx'
import Banner from './Components/Banner/Banner.jsx'
import Roots from './Components/Roots/Roots.jsx'
import ListedBook from './Components/ListedBook/ListedBook.jsx'
import PagesToRoad from './Components/PagesToRead/PagesToRoad.jsx'
import BookDetails from './Components/BookDetails/BookDetails.jsx'
import NotFoundPage from './Components/NotFoundPage/NotFoundPage.jsx'
import FeaturedArticles from './Components/FeaturedArticles/FeaturedArticles.jsx'
import Reviews from './Components/Reviews/Reviews.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Roots></Roots>,
    errorElement: <NotFoundPage></NotFoundPage>,
    children:[
      {
        path:'home',
        element: <Home></Home>
      },
      {
        path: 'listedBook',
        element: <ListedBook></ListedBook>,
        loader: () => fetch('/book.json')
      },
      {
        path: 'pagesToRead',
        element: <PagesToRoad></PagesToRoad>,
        loader: () => fetch('/book.json')

      },
      {
        path: 'bookDetails/:id',
        element: <BookDetails></BookDetails>,
        loader: () => fetch('/book.json')
      },
      {
        path: 'featuredArticles',
        element: <FeaturedArticles></FeaturedArticles>,
        loader: () => fetch('/book.json')
      },
      {
        path: 'reviews',
        element: <Reviews></Reviews>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
