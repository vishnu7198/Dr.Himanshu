import Products from "./product/page";
import Slider from "./Slider";



export const metadata = {
  title: 'Dr.Himanshu Batham (Skin Care and Clinic)',
  name : "keywords", content  :"Dr.Himanshu Batham.com, Dr.Himanshu Batham, Dr.Himanshu Batham Chhatarpur Madhya pradesh.. ",
  description: 'Dr. Himanshu Batham (Skin Care and Clinic), Also known as estheticians, skincare specialists evaluate the condition of clients skin and make recommendations for skincare that is suitable for the individual’s skin type. Skincare specialists clean, exfoliate, and moisturize skin, and provide other treatments such as waxing, laser therapy, make-up application, and massages.',
}

export default function Home() {
  return (
    <>
      <Slider />
      <Products />
    </>
  )
}
