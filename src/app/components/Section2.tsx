import Image from 'next/image'

export default function Section2() {
	return (
		<section>
			<div className='flex flex-col  gap-y-10 items-center w-full min-h-screen p-14'>
				<h3 className='font-bold text-slate-400 text-2xl '>Conheça</h3>
				<h4 className='flex text-5xl font-medium'>
					A tranquilidade que você precisa!
				</h4>
				<div className='flex flex-col gap-4 md:flex-row md:min-h-96'>
					<div className='flex  flex-col-reverse  w-full bg-frota-container bg-cover '>
						<p className='flex w-full p-4 font-light text-sm text-white shadow-white shadow-lg'>
							It was popularised in the 1960s with the release of
							Letraset sheets containing Lorem Ipsum passages, and
							more recently with desktop publishing software like
							Aldus PageMaker.
						</p>
						<div className='flex w-full p-4 font-bold text-2xl text-white '>
							Gestão de Tranportes
						</div>
					</div>
					<div className='flex flex-col gap-y-4 w-full min-h-full   justify-center'>
						<div className='flex flex-col md:flex-row w-full h-full'>
							<Image
								src={'/images/caminhao.png'}
								alt='Logo'
								width={2000}
								height={1143}
								className='flex w-full  md:w-2/5 h-full'
							/>
							<div className='flex flex-col gap-y-2 p-4 bg-cyan-700'>
								<h5 className='flex  text-xl font-medium pt-20'>
									Acompanhamento de Frota
								</h5>
								<p className='text-sm font-extralight'>
									It was popularised in the 1960s with the
									release of Letraset sheets containing Lorem
									Ipsum passages, and more recently with
									desktop publishing software like Aldus
									PageMaker.
								</p>
							</div>
						</div>
						<div className='flex flex-col md:flex-row-reverse w-full h-full'>
							<Image
								src={'/images/trabalhador.png'}
								alt='Logo'
								width={2000}
								height={1143}
								className='flex w-full  md:w-2/5 h-full'
							/>
							<div className='flex flex-col gap-y-2 bg-blue-950 align-bottom text-white p-4 min-h-full'>
								<h5 className='flex  text-xl font-medium pt-20'>
									Segurança Empresarial
								</h5>
								<p className='text-sm font-extralight'>
									It was popularised in the 1960s with the
									release of Letraset sheets containing Lorem
									Ipsum passages, and more recently with
									desktop publishing software like Aldus
									PageMaker.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
