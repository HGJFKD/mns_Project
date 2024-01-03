
import SideBar from './featchers/global/layout/sideBar/SideBar'
import ErrorBoundary from './featchers/global/layout/main/ErrorBoundary'
import { useState } from 'react'
import { Hamburger } from './featchers/global/layout/main/Hamburger'

function App() {

  const [open, setOpen] = useState<boolean>()

  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <>
      <ErrorBoundary>
        <Hamburger open={open} setOpen={setOpen} handleClick={handleClick} />
        <SideBar
          open={open}
          setOpen={setOpen}
          handleClick={handleClick}
        />
      </ErrorBoundary>

    </>
  )
}

export default App
