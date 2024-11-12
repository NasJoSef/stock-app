import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import { QueryClient, QueryClientProvider } from 'react-query'

function App() {
  
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  )
}

export default App
