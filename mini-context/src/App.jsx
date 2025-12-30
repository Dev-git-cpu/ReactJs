import './App.css'
import UserContactProvider from './Context/UserContactProvider'
import Login from './component/Login'
import Profile from './component/Profile'

function App() {

  return (
    <UserContactProvider>
     <h1>Context Api</h1>
     <Login/>
     <Profile/>
    </UserContactProvider>
  )
}

export default App
