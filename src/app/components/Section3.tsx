import Section3Card from './Cards/Section3Card'
import Post1 from './../../../public/images/caneta.png'
import Post2 from './../../../public/images/gora.png'
import Post3 from './../../../public/images/mao.png'
import Post4 from './../../../public/images/reuniao.png'
import Image from 'next/image'
import { title } from 'process'

export default function Section3() {
	const posts = [
		{
			image: Post1,
			text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
			title: 'Susep fornece novas dire...',
		},

		{
			image: Post2,
			text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
			title: 'Abril Verde: Segurança e ...',
		},

		{
			image: Post3,
			text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
			title: 'A importância da medicin...',
		},

		{
			image: Post4,
			text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
			title: 'Como o mercado',
		},
	]
	return (
		<>
			<div className='min-h-screen flex flex-col py-20 justify-around gap-8 bg-black px-14 text-white'>
				<div className='flex flex-col md:flex-row gap-y-4 justify-between'>
					<div className='flex flex-col gap-y-4 w-1/2 '>
						<h4 className='text-4xl font-semibold'>Novidades</h4>
						<p className='flex'>
							Mantenha-se atualizado sobre todas as novidades de
							tendências do mercado, nossas matérias são
							cuidadosamente selecionadas para deixar você sempre
							atualizado.
						</p>
					</div>
					<div className='flex  gap-4'>
						<div className=''>
							<Image
								src={'/images/arrow-left.png'}
								alt='arrow'
								width={36}
								height={36}
								className='bg-slate-900 rounded-full'
							/>
						</div>

						<div>
							<Image
								src={'/images/arrow-right.png'}
								alt='arrow'
								width={36}
								height={36}
								className='bg-slate-100 rounded-full'
							/>
						</div>
					</div>
				</div>
				<div className='flex gap-2 flex-wrap'>
					{posts.map((post, index) => (
						<Section3Card
							key={index}
							image={post.image}
							text={post.text}
							title={post.title}
						/>
					))}
				</div>
			</div>
		</>
	)
}
