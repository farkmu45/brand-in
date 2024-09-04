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
    <div className='grid gap-x-8 lg:grid-cols-[250px_1fr] mt-14 w-full'>
      <div className='flex lg:flex-col gap-x-4 lg:gap-x-0 justify-center lg:justify-normal gap-y-4'>
        {partners.map((partner) => (
          <div
            key={partner.folderName}
            onClick={() => setSelectedPartner(partner)}
            className={cn(
              'duration-300 cursor-pointer lg:py-2 flex gap-x-2 items-center lg:px-3 lg:rounded-full',
              partner.folderName === selectedPartner.folderName &&
                'lg:bg-primary-500'
            )}
          >
            <img
              src={new URL(partner.logo, import.meta.url).href}
              className={cn(
                'duration-300 h-14 w-14 object-cover rounded-full ring-2 lg:ring-0 ring-offset-2 lg:ring-offset-0',
                partner.folderName === selectedPartner.folderName &&
                  'ring-primary-500'
              )}
              alt={`${partner.name} logo`}
            />
            <p
              className={cn(
                'hidden lg:block text-primary-500 font-medium',
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
        className='mt-10 lg:mt-0'
        opts={{
          align: 'start',
          loop: true,
        }}
        plugins={[Autoplay({ delay: 4000 })]}
      >
        <CarouselContent>
          {getPartnerAssets(selectedPartner.folderName).images.map(
            (image, index) => (
              <CarouselItem className='md:basis-1/2' key={index}>
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
        <CarouselPrevious className='left-4 hidden md:inline-flex' />
        <CarouselNext className='right-4 hidden md:inline-flex' />
      </Carousel>
    </div>
  )
}
