
import Hero from '../components/Hero'
import Projects from '../components/Projects/Projects'
import {Container} from '@material-ui/core'


export default function Home() {
  return (
    <Container>
     <Hero/>
     <Projects/>
    </Container>
  )
}
