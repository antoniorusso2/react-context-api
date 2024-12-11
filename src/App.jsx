import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import PostsContext from './contexts';

import DefaultLayout from './layout/DefaultLayout';
import HomePageMAin from './pages/HomePage/HomePageMain';
import AboutUs from './pages/About-us/AboutUsMain';
import NotFound from './pages/NotFound/NotFound';
import Show from './pages/Posts/Show';
import Store from './pages/Posts/Create';
import PostsPage from './pages/Posts/PostsPage';
import axios from 'axios';
import { URI } from './config';

function App() {
  const [posts, setPosts] = useState([]);
  const [currentPost, setCurrentPost] = useState(null);

  function fetchData() {
    axios
      .get(URI + '/posts')
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        setPosts([]);
        console.error(err);
      });
  }

  return (
    <>
      <PostsContext.Provider value={{ posts, fetchData, currentPost, setCurrentPost }}>
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
                <Route index Component={PostsPage}></Route>
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
      </PostsContext.Provider>
    </>
  );
}

export default App;
