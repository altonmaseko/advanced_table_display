
import Main from './components/Main'
import Sidebar from './components/Sidebar'
import './index.css'

const App = () => {
  return (
    <div className='flex overflow-hidden border-[1px] border-white relative max-h-screen'>
      <Sidebar />
      <main className='w-[calc(100vw-60px)] bg-[#151b23] p-8  flex flex-col gap-6 text-white relative'>
        <Main />
      </main>

    </div>
  )
}

export default App