import Home from './pages/Home'
import PostEdit from './pages/PostEdit'
import ScrollToTop from './components/ScrollToTop'
import {
   BrowserRouter as Router,
   Routes,
   Route,
   Navigate
} from 'react-router-dom'

const App = () => {
   return (
      <Router basename={'/blogsite'}>
         <ScrollToTop>
            <Routes>
               <Route exact path={'/'} element={<Home />} />
               <Route path={'/post/:id'} element={<PostEdit />} />
               <Route path={'*'} element={<Navigate to='/' />} />
            </Routes>
         </ScrollToTop>
      </Router>
   )
}

export default App