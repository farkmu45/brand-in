interface Partner {
  name: string
  folderName: string
  logo: string
}

interface PartnerAssets {
  images: string[]
}

export function getPartnerList(): Partner[] {
  const imageFiles = import.meta.glob(
    '/src/assets/images/home/partners/**/*.webp',
    { eager: true }
  )

  const partnerFolders = Array.from(
    new Set(Object.keys(imageFiles).map((path) => path.split('/')[6]))
  )

  return partnerFolders.map((path) => {
    const folderName = path
    const name = folderName
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')

    const logo = Object.keys(imageFiles).find(
      (imagePath) =>
        imagePath.includes(folderName) && imagePath.includes('logo.webp')
    )!

    return { name, folderName, logo }
  })
}

export function getPartnerAssets(folderName: string): PartnerAssets {
  const imageFiles = import.meta.glob(
    '/src/assets/images/home/partners/**/*.webp',
    { eager: true }
  )

  const images = Object.keys(imageFiles)
    .filter((path) => path.includes(folderName) && path.includes('image-'))

  return { images }
}
