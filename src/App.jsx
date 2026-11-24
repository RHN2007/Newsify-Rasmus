import { Routes, Route } from "react-router"
import { useState } from "react"
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import Home from "./pages/Home/Home"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import NavigationBar from "./Components/NavigationBar/NavigationBar"

function App() {

  const queryClient = new QueryClient()

  const [selectedCatagories, setSelectedCatagories] = useState(["health", "movies", "politics"])

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Home selectedCatagories={selectedCatagories} />} />
        </Routes>
        <NavigationBar />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  )
}

export default App
