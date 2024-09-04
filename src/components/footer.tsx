import Logo from '@/assets/images/logo.webp'
import { SiInstagram, SiWhatsapp } from '@icons-pack/react-simple-icons'

export default function Footer() {
  return (
    <div className='py-10'>
      <div className='flex items-center gap-x-2'>
        <img src={Logo} alt='Brand-in Logo' className='h-10 w-10' />
        <p className='font-bold text-xl'>
          Brand-in <span className='text-primary-500'>Indonesia</span>
        </p>
      </div>
      <p className='mt-4 max-w-[420px] text-sm'>
        Hubungi kami untuk informasi lebih lanjut. Tekan tombol sosial media
        dibawah
      </p>
      <div className='flex gap-x-3 mt-10'>
        <a href='https://www.instagram.com/brandin_indo/' target='_blank'>
          <SiInstagram className='h-6 w-6 fill-primary-500' />
        </a>

        <a href='https://wa.me/6285281252199' target='_blank'>
          <SiWhatsapp className='h-6 w-6 fill-primary-500' />
        </a>
      </div>
    </div>
  )
}
