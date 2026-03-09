import './App.css'
import Button from './Components/atoms/Button/Button';
// import MainTemplate from './Components/templates/MainTemplate'
// import { DashboardTemplate } from './Components/Templates'

function App() {
  return (
    <>
      <Button children={'Hola'} variant='primary'/>
      <Button children={'Pepe'} variant='secondary'/>
      <Button children={'Terciario'} variant='tertiary'/>
    </>
    
    // <DashboardTemplate>
    //   <h1 className="text-3xl font-bold mb-4 text-white">Hola Dashboard</h1>
    // </DashboardTemplate>
  )
}

export default App
