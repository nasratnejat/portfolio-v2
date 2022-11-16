import React from 'react'
import Social from '../home/Social'
import Data from '../home/Data'
import ScrollDown from '../home/ScrollDown'
import '../home/home.css'
import { motion } from 'framer-motion'
const Home = () => {
	return (
		<section className='home section' id='home'>
			<div className='home__container container grid'>
				<div className='home__content grid'>
					<motion.div
						initial={{ opacity: 0, scale: 0.5 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{
							default: {
								duration: 0.3,
								ease: [0, 0.71, 0.2, 1.01],
							},
							scale: {
								type: 'spring',
								damping: 5,
								stiffness: 100,
								restDelta: 0.001,
							},
						}}>
						<Social />
					</motion.div>
					<div className='home__img'></div>
					{/* <motion.div></motion.div>  */}
					<Data />
				</div>
				<ScrollDown />
			</div>
		</section>
	)
}

export default Home
