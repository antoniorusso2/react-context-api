import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DefaultLayout from './layout/DefaultLayout';
import HomePageMAin from './pages/HomePage/HomePageMain';
import AboutUs from './pages/About-us/AboutUsMain';
import PostsIndex from './pages/Posts/Index';
import NotFound from './pages/NotFound/NotFound';
import Show from './pages/Posts/Show';
import Store from './pages/Posts/Create';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            {/* homepage */}
            <Route path="/" Component={HomePageMAin}></Route>
            {/* about us page */}
            <Route path="/about" Component={AboutUs}></Route>
            {/* lista posts */}
            <Route path="/blog">
              {/* index */}
              <Route index Component={PostsIndex}></Route>
              {/* show */}
              <Route path=":id" Component={Show}></Route>
              {/* store */}
              <Route path="/blog/create" Component={Store}></Route>
              {/* destroy */}
            </Route>
            {/* 404 */}
          </Route>
          <Route path="*" Component={NotFound}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
