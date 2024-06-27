
import Image, { StaticImageData } from "next/image";


interface PostProps{  
    image: StaticImageData;
    title: string
    text: string
}

export default function Section3Card( post : PostProps ) {
	return (
		<div className='flex flex-col justify-around mx-auto max-w-[270px] p-5 border border-zinc-500   gap-4 hover:bg-gray-800 '>
			<div className='flex justify-center'>			
					<Image
						className=''
						src={post.image}
						alt={post.text}
					/>
            </div>
            <div>
                <h5 className=' text-white'>{post.title}</h5>
                <p className=' text-white text-sm font-thin'>{post.text}</p>
            </div>
		</div>
	)}