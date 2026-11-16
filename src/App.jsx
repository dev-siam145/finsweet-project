import ErrorPage from "./components/common/ErrorPage";
import RootLayout from "./components/layouts/RootLayout";
import AboutIndex from "./pages/about/AboutIndex";
import BlogIndex from "./pages/blog/BlogIndex";
import BlogSingleIndex from "./pages/blogSingle/BlogSingleIndex";
import HomeIndex from "./pages/home/HomeIndex";
import {
  BrowserRouter,
  Routes,
  Route,
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
} from "react-router";

const routes = createRoutesFromElements(
  <>
    <Route element={<RootLayout />}>
      <Route path="/" element={<HomeIndex />} />
      <Route path="/about" element={<AboutIndex/>} />
      <Route path="/blog" element={<BlogIndex/>} />
      <Route path="/blog/:slug" element={<BlogSingleIndex/>} />
    </Route>
    <Route path="*" element={<ErrorPage />} />
  </>,
);

const router = createBrowserRouter(routes);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
