import React, { useState } from 'react'
import './services.css'
import twitter from '../../assets/twitter.png'
import linkedin from '../../assets/Linkedin.png'
import slack from '../../assets/slack.png'
import { motion } from 'framer-motion'

const Services = () => {
	const [toggleState, setToggleState] = useState(0)
	const toggleTab = (index) => {
		setToggleState(index)
	}
	return (
		<section className='services section' id='services'>
			<h2 className='section__title'>PROJECTS</h2>
			<span className='section__subtitle'></span>
			<motion.div
				initial={{
					opacity: 0,
				}}
				whileInView={{
					opacity: 1,
				}}
				transition={{
					duration: 1.5,
				}}
				className='services__container container grid'>
				<div className='services__content'>
					<div>
						<img className='services__icon' src={twitter} />
						{/* <i className='uil uil-web-grid services__icon'></i> */}
						<h3 className='services__title'>
							Twitter-Clone
							<br />
						</h3>
					</div>
					<a href='https://twitter-clone-8a807.firebaseapp.com/'>
						<span className='services__button'>
							Demo
							{/* <i className='uil uil-arrow-right services__button-icon'></i> */}
						</span>{' '}
						/
					</a>
					<a href='https://github.com/nasratnejat/twitter-clone'>
						{' '}
						<span className='services__button'>
							{'  '}
							Github
							{/* <i className='uil uil-arrow-right services__button-icon'></i> */}
						</span>
					</a>
					<div
						className={
							toggleState === 1
								? 'services__modal active-modal'
								: 'services__modal'
						}>
						<div className='services__modal-content'>
							<i
								onClick={() => toggleTab(0)}
								className='uil uil-times services__modal-close'></i>
							<h3 className='services__modal-title'>Web Developer</h3>
							<p className='services__modal-description'>
								Service with more than 3 years of experience.Providing quality
								work to clients and companies.
							</p>
							<ul className='services__modal-services grid'>
								<li className='services__modal-service'>
									<i className='uil uil-check-circle services__modal-icon'></i>
									<p className='services__modal-info'>
										I develop the user interface.
									</p>
								</li>
								<li className='services__modal-service'>
									<i className='uil uil-check-circle services__modal-icon'></i>
									<p className='services__modal-info'>Web page development.</p>
								</li>
								<li className='services__modal-service'>
									<i className='uil uil-check-circle services__modal-icon'></i>
									<p className='services__modal-info'>
										I create ux element interactions.
									</p>
								</li>
								<li className='services__modal-service'>
									<i className='uil uil-check-circle services__modal-icon'></i>
									<p className='services__modal-info'>
										I position your company brand.
									</p>
								</li>
								<li className='services__modal-service'>
									<i className='uil uil-check-circle services__modal-icon'></i>
									<p className='services__modal-info'>
										Design and mockups of products for companies.
									</p>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className='services__content'>
					<div>
						<img className='services__icon' src={linkedin} />

						{/* <i className='uil uil-arrow services__icon'></i> */}
						<h3 className='services__title'>Linkedin-clone</h3>
					</div>
					<a href='https://linkedin-clone-69815.web.app/'>
						<span className='services__button'>
							Demo
							{/* <i className='uil uil-arrow-right services__button-icon'></i> */}
						</span>{' '}
						/
					</a>
					<a href='https://github.com/nasratnejat/linkedin-clone'>
						{' '}
						<span className='services__button'>
							{'  '}
							Github
							{/* <i className='uil uil-arrow-right services__button-icon'></i> */}
						</span>
					</a>

					<div
						className={
							toggleState === 2
								? 'services__modal active-modal'
								: 'services__modal'
						}>
						<div className='services__modal-content'>
							<i
								onClick={() => toggleTab(0)}
								className='uil uil-times services__modal-close'></i>
							<h3 className='services__modal-title'>Ui/Ux Desiger</h3>
							<p className='services__modal-description'>
								Service with more than 3 years of experience.Providing quality
								work to clients and companies.
							</p>
							<ul className='services__modal-services grid'>
								<li className='services__modal-service'>
									<i className='uil uil-check-circle services__modal-icon'></i>
									<p className='services__modal-info'>
										I develop the user interface.
									</p>
								</li>
								<li className='services__modal-service'>
									<i className='uil uil-check-circle services__modal-icon'></i>
									<p className='services__modal-info'>Web page development.</p>
								</li>
								<li className='services__modal-service'>
									<i className='uil uil-check-circle services__modal-icon'></i>
									<p className='services__modal-info'>
										I create ux element interactions.
									</p>
								</li>
								<li className='services__modal-service'>
									<i className='uil uil-check-circle services__modal-icon'></i>
									<p className='services__modal-info'>
										I position your company brand.
									</p>
								</li>
								<li className='services__modal-service'>
									<i className='uil uil-check-circle services__modal-icon'></i>
									<p className='services__modal-info'>
										Design and mockups of products for companies.
									</p>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className='services__content'>
					<div>
						<img className='services__icon' src={slack} />

						{/* <i className='uil uil-edit services__icon'></i> */}
						<h3 className='services__title'>Slack-clone</h3>
					</div>

					<a href='https://slack-clone2-c50c7.web.app/'>
						<span className='services__button'>
							Demo
							{/* <i className='uil uil-arrow-right services__button-icon'></i> */}
						</span>{' '}
						/
					</a>
					<a href='https://github.com/nasratnejat/slack-clone'>
						{' '}
						<span className='services__button'>
							{'  '}
							Github
							{/* <i className='uil uil-arrow-right services__button-icon'></i> */}
						</span>
					</a>

					<div
						className={
							toggleState === 3
								? 'services__modal active-modal'
								: 'services__modal'
						}>
						<div className='services__modal-content'>
							<i
								onClick={() => toggleTab(0)}
								className='uil uil-times services__modal-close'></i>
							<h3 className='services__modal-title'>Visual Designer</h3>
							<p className='services__modal-description'>
								Service with more than 3 years of experience.Providing quality
								work to clients and companies.
							</p>
							<ul className='services__modal-services grid'>
								<li className='services__modal-service'>
									<i className='uil uil-check-circle services__modal-icon'></i>
									<p className='services__modal-info'>
										I develop the user interface.
									</p>
								</li>
								<li className='services__modal-service'>
									<i className='uil uil-check-circle services__modal-icon'></i>
									<p className='services__modal-info'>Web page development.</p>
								</li>
								<li className='services__modal-service'>
									<i className='uil uil-check-circle services__modal-icon'></i>
									<p className='services__modal-info'>
										I create ux element interactions.
									</p>
								</li>
								<li className='services__modal-service'>
									<i className='uil uil-check-circle services__modal-icon'></i>
									<p className='services__modal-info'>
										I position your company brand.
									</p>
								</li>
								<li className='services__modal-service'>
									<i className='uil uil-check-circle services__modal-icon'></i>
									<p className='services__modal-info'>
										Design and mockups of products for companies.
									</p>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</motion.div>
		</section>
	)
}

export default Services
