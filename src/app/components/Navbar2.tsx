'use client'

import Link from 'next/link'
import Image from 'next/image'
import Logo from './../../../public/images/Layer_1.jpg'
import { useEffect, useState } from 'react'

export default function Navbar2() {
	const [isOpen, setisOpen] = useState(false)

	const toggleisOpen = () => {
		return isOpen == true ? setisOpen(false) : setisOpen(true)
	}

	useEffect(() => {
		{
			isOpen === true
				? document.body.classList.add('overflow-hidden')
				: document.body.classList.remove('overflow-hidden')
		}
	})

	return (
		<>
			{isOpen === true && (
				<div className='sticky top-0 z-20'>
					<div
						className=' fixed h-full inset-0   flex w-screen '
						onClick={toggleisOpen}>
						<div className='w-full' />

						<div className='w-60% bg-slate-900 text-white p-x-5 relative '>
							<ul className='flex flex-col sticky top-10 whitespace-nowrap p-3 mt-5 gap-y-2'>
								<li className=' py-5 pl-3 backdrop-blur-lg bg-gray-700/30 rounded-xl'>
									Home
								</li>
								<li className='py-5 pl-3 backdrop-blur-lg bg-gray-400/30 rounded-xl'>
									Quem somos
								</li>

								<li className='py-5 pl-3 backdrop-blur-lg  whitespace-nowrap bg-gray-400/30 rounded-xl'>
									Serviços
								</li>
								<li className='py-5 pl-3 backdrop-blur-lg bg-gray-400/30 rounded-xl'>
									Novidades
								</li>
								<li className='py-5 pl-3 backdrop-blur-lg bg-gray-400/30 rounded-xl'>
									Localização
								</li>
								<button className=' text-white px-10 py-2 rounded-full border-2 whitespace-nowrap '>
									Entre em contato
								</button>
							</ul>
						</div>
					</div>
				</div>
			)}

			<div className=' z-20 w-full flex  '>
				<div className='container w-full  mx-auto '>
					<nav className=' hidden rounded-r-lg rounded-l-lg  md:flex'>
						<header className='flex w-full items-center justify-around px-16 py-12 gap-x-10 '>
							<Image
								src={Logo}
								alt='Logo'
								width={150}
								height={150}
							/>
							<ul className='flex gap-x-8 whitespace-nowrap font-light text-sm'>
								<li>Home</li>
								<li className='whitespace-nowrap flex w-full'>
									Quem somos
								</li>
								<li>Serviços</li>
								<li>Novidades</li>
								<li>Localização</li>
							</ul>
							<button className=' text-slate-900 px-10 py-2 rounded-full border-2 whitespace-nowrap '>
								Entre em contato
							</button>
						</header>
					</nav>
					<nav className='flex justify-between p-4  md:hidden'>
						<Image
							src={Logo}
							alt='Logo'
							width={150}
							height={150}
						/>
						<button onClick={() => toggleisOpen()}>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='none'
								stroke='currentColor'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
								className='lucide lucide-align-justify mx-10 '>
								<line
									x1='3'
									x2='21'
									y1='6'
									y2='6'
								/>
								<line
									x1='3'
									x2='21'
									y1='12'
									y2='12'
								/>
								<line
									x1='3'
									x2='21'
									y1='18'
									y2='18'
								/>
							</svg>
						</button>
					</nav>
				</div>
			</div>
		</>
	)
}
