import HeroURL from '@/assets/images/home/hero.webp'
import FeatureCard from './feature-card'

export default function Home() {
  return (
    <div className='max-w-7xl mx-auto px-4'>
      {/* Hero */}
      <div className='mt-10 md:mt-0 grid md:grid-cols-2 md:items-center items-start'>
        <div className='flex gap-y-6 flex-col items-start'>
          <p className='inline-block px-3 py-1 rounded-full bg-primary-100 font-semibold text-primary-600 text-xs'>
            Mudahkan Pencarian Bisnis di Sekitar Anda
          </p>
          <h1 className='text-4xl md:text-5xl font-bold'>
            Cari Produk dan Jasa dengan{' '}
            <span className='text-primary-500'>Aman dan Tenang</span>
          </h1>
          <p className='mt-5 md:text-base text-sm text-gray-500'>
            Misi kami adalah memberikan jalan kepada pebisnis dan pengguna untuk
            saling berinteraksi dan sebagai bentuk dukungan kami kepada produk
            lokal indonesia
          </p>
        </div>
        <img
          src={HeroURL}
          className='max-w-[600px] w-full object-contain justify-self-center md:justify-self-end'
          alt='Hero image'
        />
      </div>

      {/* Features */}
      <h3 className='text-lg font-semibold text-center'>
        <span className='text-primary-500 text-base uppercase'>
          Apa yang kami sediakan
        </span>
        <br />
        Untuk Kamu di Brand-In Indonesia
      </h3>

      <div className='mt-10 grid gap-y-10 md:grid-cols-3 md:gap-x-10'>
        <FeatureCard
          className='bg-primary-500 text-white'
          name='Order dengan Mudah'
          description='Anda hanya perlu menginstall aplikasi Brand-in dan mencari barang atau jasa yang anda butuhkan'
          image={HeroURL}
        />
        <FeatureCard
          className='bg-white'
          name='Order dengan Mudah'
          description='Anda hanya perlu menginstall aplikasi Brand-in dan mencari barang atau jasa yang anda butuhkan'
          image={HeroURL}
        />
        <FeatureCard
        className='bg-primary-500 text-white'
          name='Order dengan Mudah'
          description='Anda hanya perlu menginstall aplikasi Brand-in dan mencari barang atau jasa yang anda butuhkan'
          image={HeroURL}
        />
      </div>
    </div>
  )
}
