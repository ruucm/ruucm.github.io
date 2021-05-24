const title = "yongmin ruucm"
const description = `yongmin ruucm is an experienced front-end developer with a designer's mindset.`

const SEO = {
  title,
  description,
  canonical: "https://ruucm.work",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://ruucm.work",
    title,
    description,
    images: [
      {
        url: "https://ruucm.work/static/images/brand/og.png",
        alt: title,
        width: 1280,
        height: 720,
      },
    ],
  },
  twitter: {
    handle: "@ruucm",
    site: "@ruucm",
    cardType: "summary_large_image",
  },
}

export default SEO
