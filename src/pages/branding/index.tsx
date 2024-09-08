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
    </>
  )
}
