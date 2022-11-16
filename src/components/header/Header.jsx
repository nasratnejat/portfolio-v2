import React, { useState } from 'react'
import './header.css'
import logo from '../../assets/logo.png'
import { motion } from 'framer-motion'

const Header = () => {
	// Toggle Menu
	const [Toggle, showMenu] = useState(false)

	return (
		<header className='header'>
			<nav className='nav container'>
				<a href='index.html' className='nav__logo'>
					{/* <img src={logo} alt='' /> */}
					<h1>&lt; / &gt;</h1>
				</a>
				<motion.div
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{
						duration: 0.8,
						delay: 0.5,
						ease: [0, 0.71, 0.2, 1.01],
					}}
					className={Toggle ? 'nav__menu show-menu' : 'nav__menu'}>
					<ul className='nav__list grid'>
						<li className='nav__item'>
							<a href='#home' className='nav__link'>
								<i className='uil uil-estate nav__icon'></i>Home
							</a>
						</li>
						<li className='nav__item'>
							<a href='#about' className='nav__link'>
								<i className='uil uil-user nav__icon'></i>About
							</a>
						</li>
						<li className='nav__item'>
							<a href='#qualifications' className='nav__link'>
								<i className='uil uil-file-alt nav__icon'></i>Qualifications
							</a>
						</li>
						<li className='nav__item'>
							<a href='#skills' className='nav__link'>
								<i className='uil uil-scenery nav__icon'></i>Skills
							</a>
						</li>
						<li className='nav__item'>
							<a href='#services' className='nav__link'>
								<i className='uil uil-briefcase-alt nav__icon'></i>Projects
							</a>
						</li>
						<li className='nav__item'>
							<a href='#contact' className='nav__link'>
								<i className='uil uil-message nav__icon'></i>Contact
							</a>
						</li>
					</ul>
					<i
						className='uil uil-times nav__close'
						onClick={() => showMenu(!Toggle)}></i>
				</motion.div>
				<div className='nav__toggle' onClick={() => showMenu(!Toggle)}>
					<i className='uil uil-apps'></i>
				</div>
			</nav>
		</header>
	)
}

export default Header
