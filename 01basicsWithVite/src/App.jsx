//removed few default code to make a new beginning

import Batman from "./Batman";
function App() {
  const username = "Babu"
  

  return (
    //components need to be enclosed within empty tags as only one elements is returned by default.
    <>
    {/* added a line of code to notice the difference and start coding as per requirements */}
    <h1>Thank you Chai aur Code (React with Vite) {username} | Babu Nair</h1>
    <Batman />
    </>
  )
}

export default App
