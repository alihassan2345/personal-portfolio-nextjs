import Main from "@/app/components/Main"
import About from "@/app/components/About"

import Contact from "@/app/components/Contact"
import Services from "@/app/components/Services"


function Home() {
  return (
    <div>
      <Main/>
      <About/>
      <Services/>
    
      <Contact/>
    </div>
  )
}

export default Home