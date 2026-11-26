import { Routes, Route } from "react-router"
import { useEffect, useState } from "react"
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import Home from "./pages/Home/Home"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import NavigationBar from "./Components/NavigationBar/NavigationBar"
import Settings from "./pages/Settings/Settings"
import Archive from "./pages/Archive/Archive"

function App() {

  const queryClient = new QueryClient()

  const [bookmarks, setBookmarks] = useState(JSON.parse(localStorage.getItem("bookmarks")) || [])

  useEffect(() => {
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks))
  }, [bookmarks])


  const [selectedCatagories, setSelectedCatagories] = useState(JSON.parse(localStorage.getItem("selectedCatagories") || JSON.stringify(["health", "movies", "politics"])))

  useEffect(() => {
    console.log(selectedCatagories)
    localStorage.setItem("selectedCatagories", JSON.stringify(selectedCatagories))
  }, [selectedCatagories])

  const [isDarkmode, setIsDarkmode] = useState(localStorage.getItem("isDarkmode") || "light")

  function handleDarkmode() {
    if (isDarkmode == "dark") {
      document.documentElement.style.colorScheme = "light"
      setIsDarkmode("light")
    } else {
      document.documentElement.style.colorScheme = "dark"
      setIsDarkmode("dark")
    }

  }

  useEffect(() => {
    document.documentElement.style.colorScheme = isDarkmode
    localStorage.setItem("isDarkmode", isDarkmode)
  }, [isDarkmode])





  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Home selectedCatagories={selectedCatagories} bookmarks={bookmarks} setBookmarks={setBookmarks}/>} />
          <Route path="/Settings" element={<Settings handleDarkmode={handleDarkmode} selectedCatagories={selectedCatagories} setSelectedCatagories={setSelectedCatagories} />} />
          <Route path="/Saves" element={<Archive bookmarks={bookmarks} setBookmarks={setBookmarks}/>} />
        </Routes>
        <NavigationBar />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  )
}

export default App
