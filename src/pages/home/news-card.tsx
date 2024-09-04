import { Card, CardContent, CardHeader } from '@/components/ui/card'

interface NewsCardProps {
  imageUrl: string
  title: string
  description: string
  readMoreUrl: string
}

export default function NewsCard({
  imageUrl,
  title,
  description,
  readMoreUrl,
}: NewsCardProps) {
  return (
    <a href={readMoreUrl} target='_blank' rel='noreferrer'>
      <Card className='overflow-hidden'>
        <img
          src={imageUrl}
          alt=''
          className='w-full h-48 object-cover'
          aria-hidden='true'
        />
        <CardHeader>
          <h2 className='text-2xl font-bold'>{title}</h2>
        </CardHeader>
        <CardContent>
          <p className='text-gray-600'>{description}</p>
        </CardContent>
      </Card>
    </a>
  )
}
