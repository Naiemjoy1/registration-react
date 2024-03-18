import './App.css'
import Registration from './Components/Registration'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      <div>
        <Registration></Registration>
        <ToastContainer />
      </div>
      
    </>
  )
}

export default App
