
import Hero from '../components/Hero'
import Projects from '../components/Projects/Projects'
import {Container} from '@material-ui/core'
import About from '../components/About'
import ViewMyResume from '../components/ViewMyResume'



export default function Home() {
  return (
    <Container>
     <Hero/>
     <Projects/>
     <About/> 
     <ViewMyResume/>
    </Container>
  )
}
