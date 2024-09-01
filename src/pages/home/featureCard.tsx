import { cn } from '@/lib/utils'

interface FeatureCardProps {
  name: string
  description: string
  image: string
  className?: string
}

export default function FeatureCard({
  name,
  description,
  image,
  className,
}: FeatureCardProps) {
  return (
    <div
      className={cn(
        'bg-slate-200 px-6 gap-y-3 py-8 text-center rounded-md flex flex-col items-center shadow-lg',
        className
      )}
    >
      <img
        src={image}
        className='max-w-[600px] w-full object-contain'
        alt='Hero image'
      />
      <h5 className='font-semibold text-lg'>{name}</h5>
      <p>{description}</p>
    </div>
  )
}
