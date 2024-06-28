import Section4Card from "./Cards/Section4Card"
import Service1 from './../../../public/images/dr.png'
import Service2 from './../../../public/images/frota.png'
import Service3 from './../../../public/images/ofice.png'

export default function Section4() {

    const services = [
		{
			image: Service1,
			title: 'Planos de saúde',
			text: 'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It has survived not only five centuries.',
		},
		{
			image: Service2,
			title: 'Seguro de Frota',
			text: 'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It has survived not only five centuries.',
		},
		{
			image: Service3,
			title: 'Seguro Empresarial',
			text: 'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It has survived not only five centuries.',
		},
	]
    return (
        <div className="min-h-screen  flex flex-col gap-y-8 p-8">
            <h4 className="flex text-5xl font-semibold border-b-2 py-14 pb-8 mx-8">Nossos serviços</h4>
            {services.map((service, index) => (
                <Section4Card
                    key={index}
                    image={service.image}
                    title={service.title}
                    text={service.text}
                />
            ))}

        </div>
    )
}