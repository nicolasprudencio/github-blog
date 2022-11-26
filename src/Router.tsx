import { Routes, Route, BrowserRouter } from 'react-router-dom'

import { DefaultLayout } from '~/layouts/DefaultLayout'
import { Home } from './Pages/Home'
import { Post } from './Pages/Post'

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/post/:postNumber" element={<Post />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
