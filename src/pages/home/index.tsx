import CeoURL from '@/assets/images/home/ceo.webp'
import Feature1URL from '@/assets/images/home/feature-1.png'
import Feature2URL from '@/assets/images/home/feature-2.png'
import Feature3URL from '@/assets/images/home/feature-3.png'
import HeroURL from '@/assets/images/home/hero.webp'
import MockupURL from '@/assets/images/home/mockup.png'
import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'
import { getAllPartnerLogos } from '@/lib/partner-utils'
import FeatureCard from './feature-card'
import NewsCard from './news-card'
import Partners from './partners'

export default function Home() {
  return (
    <div className='max-w-7xl mx-auto px-4'>
      {/* Hero */}
      <section className='mt-10 md:mt-0 grid md:grid-cols-2 md:items-center items-start'>
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
      </section>

      {/* Features */}
      <section className='py-40'>
        <h3 className='text-lg font-semibold text-center'>
          <span className='text-primary-500 text-base uppercase'>
            Apa yang kami sediakan
          </span>
          <br />
          Untuk Kamu di Brand-In Indonesia
        </h3>
        <div className='mt-10 grid gap-y-10 md:grid-cols-3 md:gap-x-10'>
          <FeatureCard
            name='Order dengan Mudah'
            description='Anda hanya perlu menginstall aplikasi Brand-in dan mencari barang atau jasa yang anda butuhkan'
            image={Feature1URL}
          />
          <FeatureCard
            name='Cari Produk dan Jasa dengan Mudah'
            description='Kami bekerjasama dengan berbagai mitra bisnis produk dan jasa'
            image={Feature2URL}
          />
          <FeatureCard
            name='Promosikan bisnis anda'
            description='Anda bisa mempromosikan bisnis secara gratis melalui platform kami'
            image={Feature3URL}
          />
        </div>
      </section>

      {/* Partners */}

      <section className='bg-primary-100 my-20 px-8 flex flex-col items-center md:items-start py-10 rounded-lg'>
        <h3 className='text-primary-500 font-semibold uppercase'>
          Beberapa Mitra Kami
        </h3>
        <h3 className='text-lg font-semibold text-center md:text-start'>
          Produk dan Jasa Yang Selalu Membuat Anda Jatuh Cinta
        </h3>
        <Partners />
      </section>

      {/* Message */}

      <section className='grid md:grid-cols-2 items-center py-80 md:py-40 gap-x-20'>
        <img
          src={CeoURL}
          className='hidden md:block w-full object-cover  max-w-[200px] mx-auto md:mx-0 md:max-w-[300px]'
          alt='CEO image'
        />
        <div>
          <h5 className='text-2xl font-bold text-primary-500'>
            "Salah satu misi saya adalah membantu UMKM untuk transisi dari
            tradisional menjadi UMKM yang bisa bersaing secara digital. Dalam
            era globalisasi ini, transformasi digital menjadi kunci utama
            kesuksesan bisnis."
          </h5>
          <p className='text-lg mt-20 font-semibold text-slate-700'>
            Amir Faisal Karimullah
          </p>
          <p className='text-gray-500'>CEO Brand-in</p>
        </div>
      </section>

      {/* Partners logo */}
      <section className='py-28'>
        <h3 className='text-lg font-semibold text-center'>
          Telah <span className='text-primary-500'>dipercaya</span> membantu
          beberapa UMKM di Indonesia
        </h3>
        <div className='mt-10 grid md:grid-cols-3'>
          {getAllPartnerLogos().map((partner) => (
            <img
              key={partner.name}
              src={partner.logo}
              className='h-72 w-full object-cover'
              alt={`${partner.name} logo`}
            />
          ))}
        </div>
      </section>

      <section className='py-40'>
        <h2 className='text-3xl font-semibold'>Berita terbaru</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-8 mt-8'>
          <NewsCard
            imageUrl={HeroURL}
            title='Important News Headline'
            description='This is a brief description of the news article. lorem ipsum'
            readMoreUrl='https://example.com/full-article'
          />
          <NewsCard
            imageUrl={HeroURL}
            title='Important News Headline'
            description='This is a brief description of the news article. lorem ipsum'
            readMoreUrl='https://example.com/full-article'
          />
          <NewsCard
            imageUrl={HeroURL}
            title='Important News Headline'
            description='This is a brief description of the news article. lorem ipsum'
            readMoreUrl='https://example.com/full-article'
          />
        </div>
      </section>

      {/* Mobile App preview */}
      <section className='py-52 grid md:grid-cols-2 items-center'>
        <div>
          <h3 className='uppercase font-semibold text-primary-500'>
            Download App
          </h3>
          <h3 className='text-lg font-semibold'>
            Get Started With Brand-in Indonesia Today
          </h3>
          <p className='text-3xl font-semibold mt-10'>
            Bantu UMKM sekitar dengan aplikasi Brand-in Indonesia!
          </p>

          <Button title='Upload business' className='mt-4' asChild>
            <a href='http://ukm.sixeyestech.com/admin/login' target='_blank'>
              Klik disini untuk upload bisnis
            </a>
          </Button>
        </div>
        <img
          src={MockupURL}
          alt='Mockup image'
          className='w-full max-w-[300px] object-contain mx-auto mt-20'
        />
      </section>

      <Footer />
    </div>
  )
}
