import QAImageUrl1 from '@/assets/images/branding/qa-image-1.png'
import QAImageUrl2 from '@/assets/images/branding/qa-image-2.png'
import { Button } from '@/components/ui/button'

export default function Branding() {
  return (
    <>
      {/* Hero */}
      <section className='h-[80vh] flex flex-col gap-y-4 md:items-center justify-center px-4'>
        <h1 className='text-4xl md:text-5xl font-bold'>Ingin Branding?</h1>
        <p className='md:text-base text-sm text-gray-500'>
          Serahkan masalah{' '}
          <span className='underline underline-offset-4 text-primary-500 font-bold'>
            branding
          </span>{' '}
          anda kepada kami
        </p>
        <Button
          title='Kirim Masalah'
          className='mt-4 self-start md:self-center'
          asChild
        >
          <a
            href='https://api.whatsapp.com/send/?phone=6285281252199&text=Halo+kak%2C+saya+ingin+konsultasi&type=phone_number&app_absent=0'
            target='_blank'
          >
            Konsultasi
          </a>
        </Button>
      </section>

      {/* QA Section */}
      <section className='max-w-7xl mx-auto px-4 py-52'>
        <div className='grid md:grid-cols-2 items-center gap-x-10 gap-y-10 md:gap-y-0'>
          <img
            src={QAImageUrl1}
            alt='QA Image 1'
            className='w-full object-contain'
          />
          <div>
            <h2 className='text-3xl font-semibold'>
              Apa itu Branding dengan Sosial Media?
            </h2>
            <p className='mt-5 leading-7'>
              Branding dengan sosial media adalah strategi untuk memperkenalkan
              dan membangun citra bisnis Anda melalui platform sosial media
              seperti Instagram, Facebook, dan TikTok. Ini membantu dalam
              menjangkau audiens yang lebih luas, membangun hubungan yang lebih
              dekat dengan pelanggan, dan meningkatkan kepercayaan serta
              kesadaran terhadap merek Anda.
            </p>
          </div>
        </div>
        <div className='grid md:grid-cols-2 items-center gap-x-10 gap-y-10 md:gap-y-0 mt-20'>
          <img
            src={QAImageUrl2}
            alt='QA Image 2'
            className='w-full object-contain md:order-1'
          />
          <div>
            <h2 className='text-3xl font-semibold'>
              Kenapa Penting untuk UMKM?
            </h2>
            <p className='mt-5 leading-7'>
              Untuk UMKM, branding dengan sosial media adalah alat yang sangat
              efektif dan efisien untuk memasarkan produk dan layanan tanpa
              memerlukan biaya besar. Ini membantu UMKM bersaing dengan
              perusahaan besar, menarik pelanggan baru, dan mempertahankan
              pelanggan lama melalui konten yang menarik dan interaktif.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
