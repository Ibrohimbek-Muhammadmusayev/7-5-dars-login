import { Navigate } from 'react-router-dom'
import './App.css'
import Navbar from './companents/navbar'

function App() {
  const navigateTo = (path) => {
    return <Navigate to={path} />
  }

  const state = localStorage.getItem('creatUser')
  return (
    <>{state === 'true' && state !== null ? 
      <header>
        <nav className='max-w-[100%]'>
          <Navbar/>
        </nav>
        <div className="mt-[30px] pt-[30px] pb-[30px] max-w-[1550px] gap-[20px] h-[100%] bg-[#fefae0]">
          <div className="flex justify-center max-w-[1440px] gap-[20px] h-[100%]">
            <div className="w-[200px] h-[100%] flex flex-col bg-slate-500">
              <button>Top</button>
              <button>Shop</button>
              <button>Storage korzinka</button>
            </div>
            <div className="w-[1040px] h-[100%] bg-slate-800">salom</div>
          </div>
        </div>
      </header>
      : navigateTo('/login')
      }
    </>
  )
}

export default App
