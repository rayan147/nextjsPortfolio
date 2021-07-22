
import Hero from '../components/Hero/Hero'
import Projects from '../components/Projects/Projects'
import {Container} from '@material-ui/core'
import About from '../components/About/About'
import ViewMyResume from '../components/ViewMyResume/ViewMyResume'
import Footer from '../layout/Footer'



export default function Home() {
  return (
    <Container>
      <main>
     <Hero/>
     <Projects/>
     <About/> 
     <ViewMyResume/>
     </main>
     <Footer/>
    </Container>
  )
}
