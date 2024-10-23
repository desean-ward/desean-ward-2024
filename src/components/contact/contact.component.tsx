import React, { useState, useEffect, useRef, CSSProperties } from 'react';

// import axios from 'axios';

// import emailjs from 'emailjs-com';

import {
	ContactContainer,
	ContactWrapper,
	ContentWrapper,
	LeftSide,
	LeftSideWrapper,
	RightSide,
	SocialIcons,
	FormWrapper,
	NamePhoneWrapper,
	Field,
	Input,
	TextArea,
	BackToTop,
	Spinner,
	ButtonWrapper,
	ContactHeader,
} from './contact.styles';

import Image from 'next/image';
import Link from 'next/link';

// import contact from '../../../public/assets/contact.jpg';

// import { CustomIcon } from '../customs/custom-icon.component';

import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';

import { motion } from 'framer-motion';
// import { toast } from 'react-toastify';

// import { sendContactForm } from '@/lib/api';
//import SendmailTransport from 'nodemailer/lib/sendmail-transport';

const Contact = () => {
	/**
	 * *** Initialize Form Values ***
	 */
	const initialValues = {
		name: '',
		phone: '',
		email: '',
		subject: '',
		message: '',
	};
	const [formValues, setFormValues] = useState(initialValues);
	const [isSubmitting, setIsSubmitting] = useState(false);

	const [nameHighlight, setNameHighlight] = useState(false);
	const [phoneHighlight, setPhoneHighlight] = useState(false);
	const [emailHighlight, setEmailHighlight] = useState(false);
	const [subjectHighlight, setSubjectHighlight] = useState(false);
	const [messageHighlight, setMessageHighlight] = useState(false);

	/**
	 * **** Email Regex Validation ****
	 */
	const emailFormat =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	/**
	 * **** Validate The Form Fields Before Submitting ****
	 */
	const validate = values => {
		let numErrors = 0;

		try {
			if (!values.name) {
				setNameHighlight(true);
				numErrors += 1;
				//name.focus();
			} else setNameHighlight(false);

			if (!values.phone) {
				setPhoneHighlight(true);
				numErrors += 1;
				//phone.focus();
			} else setPhoneHighlight(false);

			if (!values.email) {
				setEmailHighlight(true);
				numErrors += 1;
				//email.focus();
			} else if (!values.email.match(emailFormat)) {
				setEmailHighlight(true);
				numErrors += 1;
				//email.focus();
			} else setEmailHighlight(false);

			if (!values.subject) {
				setSubjectHighlight(true);
				numErrors += 1;
				//subject.focus();
			} else setSubjectHighlight(false);

			if (!values.message) {
				setMessageHighlight(true);
				numErrors += 1;
				//message.focus();
			} else setMessageHighlight(false);
		} catch (err) {
			console.log(`Error With Validating: ${err}`);
		}

		if (numErrors === 0) return true;
		else {
			toast.warning('Please correct the highlighted fields.', {
				position: 'top-center',
				autoClose: 1500,
				hideProgressBar: true,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: 'dark',
			});
		}
	};

	const handleChange = e => {
		const { name, value } = e.target;
		setFormValues({ ...formValues, [name]: value });

		switch (name) {
			case 'name':
				setNameHighlight(false);
				break;
			case 'phone':
				setPhoneHighlight(false);
				break;
			case 'email':
				setEmailHighlight(false);
				break;
			case 'subject':
				setSubjectHighlight(false);
				break;
			case 'message':
				setMessageHighlight(false);
				break;
			default:
				break;
		}
	};

	const handleSubmit = async e => {
		e.preventDefault();
		validate(formValues) === true
			? setIsSubmitting(true)
			: setIsSubmitting(false);
	};

	const sendEmail = async () => {
		const sent = emailjs
			.sendForm(
				'service_3cyb6k1',
				'dward_contact_form',
				form.current,
				'JIw9-titSipFbwgrz'
			)
			.then(
				result => {
					setFormValues(initialValues);
					toast.success('Email sent successfully', {
						position: 'top-center',
						autoClose: 1500,
						hideProgressBar: true,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
						theme: 'dark',
					});
					setIsSubmitting(false)
					console.log('Email sent!');
					console.log(result.text);
				},
				error => {
					toast.error('An error occurred when sending your email.', {
						position: 'top-center',
						autoClose: 1500,
						hideProgressBar: true,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
						theme: 'dark',
					});
					setIsSubmitting(false)
					console.log(`Email not sent!`);
					console.log(error.text);
				},
				
			);

	};

	/**
	 * ! ********** DO NOT DELETE - TESTING NEEDED FOR VERCEL IN PRODUCTION **********
	 */

	// const sendEmail = async () => {
	// 	setIsSubmitting(true);
	// 	try {
	// 		const sent = await axios({
	// 			method: 'post',
	// 			url: '/api/contact',
	// 			params: formValues,
	// 		});

	// 		if (sent.statusText === 'OK') {
	// 			setFormValues(initialValues);
	// 			toast.success('Email sent successfully', {
	// 				position: 'top-center',
	// 				autoClose: 1500,
	// 				hideProgressBar: true,
	// 				closeOnClick: true,
	// 				pauseOnHover: true,
	// 				draggable: true,
	// 				progress: undefined,
	// 				theme: 'dark',
	// 			});
	// 			console.log('Email sent!');
	// 		} else {
	// 			toast.error('An error occurred when sending your email.', {
	// 				position: 'top-center',
	// 				autoClose: 1500,
	// 				hideProgressBar: true,
	// 				closeOnClick: true,
	// 				pauseOnHover: true,
	// 				draggable: true,
	// 				progress: undefined,
	// 				theme: 'dark',
	// 			});
	// 			console.log(`Email not sent!, ${sent.status}`);
	// 		}
	// 	} catch (error) {
	// 		console.log('Email send error: ', error);
	// 	}

	// 	setIsSubmitting(false);
	// };
	/**
	 * ! **************************************************************************
	 */

	const form = useRef();
	useEffect(() => {
		if (isSubmitting === true) {
			sendEmail();
		}
	}, [isSubmitting]);

	/**
	 * **** Animation Variants ****
	 */
	const fadeInLeft = {
		initial: { x: '-100', opacity: 0 },
		animate: {
			x: 0,
			opacity: 1,
			transition: { delay: 0.75, duration: 0.75 },
		},
	};

	const fadeInRight = {
		initial: { x: '100', opacity: 0 },
		animate: {
			x: 0,
			opacity: 1,
			transition: { delay: 0.75, duration: 0.75 },
		},
	};

	const slideUp = {
		initial: { y: 100, opacity: 0 },
		animate: {
			y: 0,
			opacity: 1,
			transition: { delay: 1.25, duration: 0.5 },
		},
	};

	return (
		<ContactContainer id='contact'>
		<ContactHeader
			variants={slideUp}
			initial='initial'
			animate='animate'>
			<p className='section-name'> Contact </p>
			<h2 className='section-title'> Get In Touch </h2>
		</ContactHeader>
			<div>
				<ContactWrapper>

					<ContentWrapper>
						{/* left side */}
						<LeftSide
							variants={fadeInLeft}
							initial='initial'
							animate='animate'>
							<LeftSideWrapper>
								<div>
									<Image
										className='w-full rounded-xl hidden md:block'
										width='300'
										src={contact}
										alt='/'
									/>
								</div>

								<div>
									<h2 className='py-2 text-[tan] text-shadow-lg shadow-gray-900'>
										De Sean Ward
									</h2>
									<p> Front - End Developer </p>
									<p className='py-4'>
										I am available for freelance or
										full-time positions. Contact me and
										let&#039;s talk.
									</p>
								</div>

								<div>
									<p className='uppercase pt-8'>
										Connect With Me
									</p>

									{/* Social Icons */}
									<SocialIcons>
										<Link
											href='https://www.linkedin.com/in/desean-ward'
											target='_blank'>
											<CustomIcon>
												<FaLinkedinIn />
											</CustomIcon>
										</Link>

										<Link
											href='https://www.github.com/desean-ward'
											target='_blank'>
											<CustomIcon>
												<FaGithub />
											</CustomIcon>
										</Link>

										<Link href='/contact'>
											<CustomIcon>
												<AiOutlineMail />
											</CustomIcon>
										</Link>

										<CustomIcon>
											<BsFillPersonLinesFill />
										</CustomIcon>
									</SocialIcons>
								</div>
							</LeftSideWrapper>
						</LeftSide>

						{/* right side */}
						<RightSide
							variants={fadeInRight}
							initial='initial'
							animate='animate'>
							<FormWrapper>
								<form ref={form} onSubmit={handleSubmit}>
									<NamePhoneWrapper>
										<Field>
											<label>Name </label>
											<Input
												className=''
												type='text'
												name='name'
												value={formValues.name}
												onChange={handleChange}
												error={nameHighlight}
											/>
										</Field>

										<Field>
											<label>Phone </label>
											<Input
												type='text'
												name='phone'
												value={formValues.phone}
												onChange={handleChange}
												error={phoneHighlight}
											/>
										</Field>
									</NamePhoneWrapper>

									<Field>
										<label>Email </label>
										<Input
											type='email'
											name='email'
											value={formValues.email}
											onChange={handleChange}
											error={emailHighlight}
										/>
									</Field>

									<Field>
										<label>Subject </label>
										<Input
											type='text'
											name='subject'
											value={formValues.subject}
											onChange={handleChange}
											error={subjectHighlight}
										/>
									</Field>

									<Field>
										<label>Message </label>
										<TextArea
											rows={5}
											name='message'
											value={formValues.message}
											onChange={handleChange}
											error={messageHighlight}
										/>
									</Field>

									<ButtonWrapper>
										<button
											type='submit'
											submit={isSubmitting}
											color='red'
											className='w-full p-4 bg-[tan] mt-4'>
											<span className='px-4'>
												{isSubmitting ? (
													<Spinner
														size={10}
														color='gray'
													/>
												) : (
													'Send Message'
												)}
											</span>
										</button>
									</ButtonWrapper>
								</form>
							</FormWrapper>
						</RightSide>
					</ContentWrapper>

					<BackToTop>
						<Link href='#home'>
							<CustomIcon>
								<HiOutlineChevronDoubleUp size={30} />
							</CustomIcon>
						</Link>
					</BackToTop>
				</ContactWrapper>
			</div>
		</ContactContainer>
	);
};

export default Contact;
