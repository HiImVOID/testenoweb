import Image from 'next/image'

export default function Section1() {
	return (
		<div className=' flex flex-col justify-center items-center w-full h-full'>
			<div className='flex flex-col md:flex-row w-full gap-4'>
				<div className='flex w-full md:w-2/3 text-7xl p-8 gap-4 font-medium '>
					Nossa essência é cuidar de você!
				</div>
				<div className='flex flex-col gap-4 w-full md:w-1/3 md:py-8 px-4'>
					<div className='flex w-full '>
						Somos a Soul Brokers. Temos como propósito prestar
						serviços e criar soluções de seguros específicas para
						cada ramo de atuação.
					</div>
					<div className='flex w-full md:w-1/3 py-4 '>
						<button className='flex  px-10 py-2 items-center gap-2 rounded-full  bg-black hover:bg-zinc-200 hover:text-black text-white whitespace-nowrap max-w-80 '>
							Conheça nossos serviços.
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='20'
								height='24'
								viewBox='0 0 24 24'
								fill='none'
								stroke='currentColor'
								stroke-width='2'
								stroke-linecap='round'
								stroke-linejoin='round'
								className='lucide lucide-arrow-right'>
								<path d='M5 12h14' />
								<path d='m12 5 7 7-7 7' />
							</svg>
						</button>
					</div>
				</div>
			</div>
			<div className='flex flex-col md:flex-row w-full gap-4'>
				<div className='flex w-full md:w-2/3 bg-navio bg-cover min-h-80 flex-col-reverse p-4'>
					<p className='text-white text-sm font-light'>
						It was popularised in the 1960s with the release of
						Letraset sheets containing Lorem Ipsum passages, and
						more recently with desktop publishing software like
						Aldus PageMaker.
					</p>
				</div>
				<div className='flex w-full md:w-1/3 bg-container bg-cover min-h-80  flex-col-reverse p-4'>
					<p className='text-white text-sm font-light px-10'>
						It was popularised in the 1960s with the release of
						Letraset sheets containing Lorem Ipsum passages, and
						more recently with desktop publishing software like
						Aldus PageMaker.
					</p>
				</div>
			</div>
		</div>
	)
}

