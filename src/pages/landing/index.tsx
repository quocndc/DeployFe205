import LandingLayout from '../layout/LandingLayout'
import CarouselLD from 'src/components/carousel/carousel'
import FeeVenue from 'src/components/landing/feeVenue'
import PublicVenue from 'src/components/landing/publicVenue'
function LandingPage() {
  return (
    <LandingLayout>
      <>
        <div className=" bg-gray-100">
          <CarouselLD />
          <PublicVenue />
          <FeeVenue />
        </div>
      </>
    </LandingLayout>
  )
}
export default LandingPage
