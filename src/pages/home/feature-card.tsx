
interface FeatureCardProps {
  name: string
  description: string
  image: string
}

export default function FeatureCard({
  name,
  description,
  image,
}: FeatureCardProps) {
  return (
    <div
      className='border border-gray-200 px-6 gap-y-3 py-8 text-center rounded-lg flex flex-col items-center shadow-lg'
        
    >
      <img
        src={image}
        className='max-w-[600px] w-full object-contain'
        alt='Hero image'
      />
      <h5 className='font-semibold text-lg text-slate-700'>{name}</h5>
      <p className="text-gray-500">{description}</p>
    </div>
  )
}
