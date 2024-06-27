import Image from 'next/image'

export default function Section1() {
	return (
		<div className='flex flex-col justify-center items-center w-full h-full'>
			<div className='flex flex-col md:flex-row w-full gap-4'>
				<div className='flex w-2/3 text-5xl p-8 gap-4'>
					Nossa essência é cuidar de você!
				</div>
				<div className='flex flex-col gap-4 w-full md:w-1/3 md:py-8 '>
					<div className='flex w-full '>
						Somos a Soul Brokers. Temos como propósito prestar
						serviços e criar soluções de seguros específicas para
						cada ramo de atuação.
					</div>
					<div className='flex w-full md:w-1/3'>
						<button className='flex  px-10 py-2 items-center gap-2 rounded-full border-2 border-black whitespace-nowrap max-w-80 '>
							Conheça nossos serviços.
							<Image
								src={'/images/2.png'}
								alt='Logo'
								width={24}
								height={25}
								className='flex w-full h-full bg-white rounded-full p-1'
							/>
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
					{/* <Image
						src={'/images/navio.png'}
						alt='Logo'
						width={2000}
						height={1143}
						className='w-full h-full'
					/> */}
				</div>
			</div>
		</div>
	)
}

/* <>
			<div className='flex flex-col md:flex-row justify-between min-h-screen gap-4'>
				<div className='flex flex-col gap-6 font-semibold text-7xl  md:w-3/5'>
					<h3 className='flex px-8'>
						Nossa essência é cuidar de você!
					</h3>
					<Image
						src={'/images/navio.png'}
						alt='Logo'
						width={2000}
						height={1143}
						className='w-full h-full'
					/>
				</div>
				<div className='flex flex-col h-full justify-between md:w-2/5 gap-y-10 bg-red-500'>
					<div className='flex flex-col gap-y-2 justify-between max-h-20  w-full'>
						<div className='flex flex-col font-light justify-between'>
							Somos a Soul Brokers. Temos como propósito prestar
							serviços e criar soluções de seguros específicas
							para cada ramo de atuação.
						</div>
						<button className='flex text-white px-10 py-2 rounded-full border-2 whitespace-nowrap bg-slate-900 max-w-80'>
							Conheça nossos serviços.
						</button>
					</div>

					<Image
						src={'/images/container.png'}
						alt='Logo'
						width={2000}
						height={1333}
						className='min-h-full w-full h-full'
					/>
				</div>
			</div>
		</> */
