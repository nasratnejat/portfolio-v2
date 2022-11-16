import React from 'react'
import './skills.css'
import Frontend from './Frontend'
import Backend from './Backend'
import { motion } from 'framer-motion'

const Skills = () => {
	return (
		<section className='skills section' id='skills'>
			<h2 className='section__title'>Skills</h2>
			<span className='section__subtitle'></span>
			<motion.div
				initial={{
					opacity: 0,
				}}
				transition={{
					duration: 1.5,
				}}
				whileInView={{ opacity: 1 }}
				className='skills__container container grid'>
				<Frontend />
				<Backend />
			</motion.div>
		</section>
	)
}

export default Skills
