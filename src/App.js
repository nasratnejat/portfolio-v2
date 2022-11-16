import './App.css'
import Header from './components/header/Header'
import Home from './components/home/Home'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Services from './components/services/Services'
import Qualification from './components/qualification/Qualification'
// import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer.jsx'
import ScrollUp from './components/scrollUp/ScrollUp'
// import AnimatedCursor from 'react-animated-cursor'
import { motion, useScroll, useSpring } from 'framer-motion'

const App = () => {
	const { scrollYProgress } = useScroll()
	const scaleX = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
		restDelta: 0.001,
	})
	return (
		<>
			<motion.div className='progress-bar' style={{ scaleX }} />{' '}
			{/* <AnimatedCursor
				innerSize={20}
				outerSize={10}
				color='222, 222, 222,'
				outerAlpha={0.2}
				innerScale={0.7}
				outerScale={5}
			/> */}
			<Header />
			<main className='main'>
				<Home />
				<About />
				<Qualification />
				<Skills />
				<Services />
				{/* <Testimonials /> */}
				<Contact />
			</main>
			<ScrollUp />
			{/* <Footer/> */}
		</>
	)
}

export default App
