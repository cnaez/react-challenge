import Navbar from './Navbar'
import Footer from './Footer'
import './MainLayout.css'


const MainLayout = ({ children }) => {
  return (
    <div className='root'>
      <Navbar title='شرکت در حراجی' />
      { children }
      <Footer>Footer</Footer>
    </div>
  )
}

export default MainLayout
