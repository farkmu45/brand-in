import { Card, CardContent } from '@/components/ui/card'

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
    <Card>
      <CardContent className='text-center pb-6'>
        <img
          src={image}
          className='max-w-[600px] w-full object-contain mb-10'
          alt='Hero image'
        />
        <h5 className='font-semibold text-lg text-slate-700 mb-2'>{name}</h5>
        <p className='text-gray-500'>{description}</p>
      </CardContent>
    </Card>
  )
}
