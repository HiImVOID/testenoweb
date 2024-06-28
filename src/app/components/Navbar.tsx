'use client'

import Link from 'next/link'

import { useEffect, useState } from 'react'

import Image from 'next/image'
import Logo from './../../../public/images/Layer_1.jpg'

export default function Navbar(){
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
						className=' fixed h-full inset-0   bg-slate-600/50 backdrop-blur-sm flex w-screen '
						onClick={toggleisOpen}>
						<div className='w-full' />

						<div className='w-60% bg-indigo-400 text-white p-x-5 relative '>
							{/* <button
								onClick={toggleisOpen}
								className=' w-full text-gray-200 sticky top-2 left-4'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='24'
									height='24'
									viewBox='0 0 24 24'
									fill='none'
									stroke='currentColor'
									stroke-width='2'
									stroke-linecap='round'
									stroke-linejoin='round'
									className='lucide lucide-align-justify right-9  text-white absolute'>
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
							</button> */}
							<ul className='flex flex-col sticky top-10 whitespace-nowrap p-3 mt-5 gap-y-2 divide-y-2 divide-white'>
								<Link
									href='/'
									className=' py-5 pl-3 backdrop-blur-lg bg-gray-400/30 rounded-xl'>
									Inicio
								</Link>
								<Link
									href='/portfolio'
									className='py-5 pl-3 backdrop-blur-lg bg-gray-400/30 rounded-xl'>
									Portfólio
								</Link>
								{/* <Link
									href='/'
									className='py-5 pl-3 backdrop-blur-lg bg-gray-400/30 rounded-xl'>
									Tecnologias
								</Link> */}
								<Link
									href='/formacao-academica'
									className='py-5 pl-3 backdrop-blur-lg  whitespace-nowrap bg-gray-400/30 rounded-xl'>
									Formação Academica
								</Link>
								<Link
									href='/contato'
									className='py-5 pl-3 backdrop-blur-lg bg-gray-400/30 rounded-xl'>
									Contato
								</Link>
							</ul>
						</div>
					</div>
				</div>
			)}

			<div className='sticky top-0 z-20 w-full flex '>
				<div className='container w-full  mx-auto '>
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
						<button className=' text-slate-900 px-10 py-2 rounded-full border-2 whitespace-nowrap hover:bg-zinc-200 hover:text-black '>
							Entre em contato
						</button>
					</header>
				</div>
			</div>
		</>
	)
}