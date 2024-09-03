import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { getPartnerAssets, getPartnerList } from '@/lib/partner-utils'
import { cn } from '@/lib/utils'
import Autoplay from 'embla-carousel-autoplay'
import { useState } from 'react'

export default function Partners() {
  const partners = getPartnerList()

  const [selectedPartner, setSelectedPartner] = useState(partners[0])

  return (
    <div className='grid gap-x-8 md:grid-cols-[250px_1fr] mt-14 w-full'>
      <div className='flex md:flex-col gap-x-4 md:gap-x-0 justify-center md:justify-normal gap-y-4'>
        {partners.map((partner) => (
          <div
            key={partner.folderName}
            onClick={() => setSelectedPartner(partner)}
            className={cn(
              'duration-300 cursor-pointer md:py-2 flex gap-x-2 items-center md:px-3 md:rounded-full',
              partner.folderName === selectedPartner.folderName &&
                'md:bg-primary-500'
            )}
          >
            <img
              src={new URL(partner.logo, import.meta.url).href}
              className={cn(
                'duration-300 h-14 w-14 object-cover rounded-full ring-2 md:ring-0 ring-offset-2 md:ring-offset-0',
                partner.folderName === selectedPartner.folderName &&
                  'ring-primary-500'
              )}
              alt={`${partner.name} logo`}
            />
            <p
              className={cn(
                'hidden md:block text-primary-500 font-medium',
                partner.folderName === selectedPartner.folderName &&
                  'text-white'
              )}
            >
              {partner.name}
            </p>
          </div>
        ))}
      </div>
      <Carousel
        className='mt-10 md:mt-0'
        opts={{
          loop: true,
        }}
        plugins={[Autoplay({ delay: 4000 })]}
      >
        <CarouselContent>
          {getPartnerAssets(selectedPartner.folderName).images.map(
            (image, index) => (
              <CarouselItem key={index}>
                <div
                  className='h-[500px] px-6 flex items-end rounded-lg py-3 bg-cover bg-center bg-no-repeat'
                  style={{
                    backgroundImage: `url(${
                      new URL(image, import.meta.url).href
                    })`,
                  }}
                ></div>
              </CarouselItem>
            )
          )}
        </CarouselContent>
        <CarouselPrevious className='left-4' />
        <CarouselNext className='right-4' />
      </Carousel>
    </div>
  )
}
