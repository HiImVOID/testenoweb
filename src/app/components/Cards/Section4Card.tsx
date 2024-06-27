import Image, { StaticImageData } from 'next/image'

interface ServicesProps {
	image: StaticImageData
	title: string
	text: string
}

export default function Section4Card(service: ServicesProps) {
    return (
		<div className='flex flex-col md:flex-row w-full p-8 gap-4'>
			<div className='flex w-full '>
				<Image
					src={service.image}
					width={500}
					height={300}
					alt='alt'
					className='flex '
				/>
			</div>
			<div className='flex flex-col gap-y-4 ml-8 items-start justify-around'>
				<div className='flex flex-col font-semibold text-3xl'>
					{service.title}
				</div>
				<div>{service.text}</div>
				<button className='flex w-2/3 md:w-2/5  py-2 rounded-full border-2 items-center justify-center gap-2'>
					Conheça
					<Image
						src={'/images/2.png'}
						alt='Logo'
						width={24}
						height={25}
						className=' bg-white rounded-full '
					/>
				</button>
			</div>
		</div>
	)
}
