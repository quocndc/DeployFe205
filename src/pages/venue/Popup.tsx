import { CreateSubcategory } from 'src/components/SubcategoryCRUD/Create-Subcategory'
import { ReportVenuePopup } from 'src/components/venue-crud/Report-popup'
import { DisableVenuePopup } from 'src/components/venue-crud/disable-venue'
// import { UpdateVenue } from 'src/components/venue-crud/update-venue'

export function Popup() {
  return (
    <>
      {/* <UpdateVenue categoryId={''} /> */}
      <ReportVenuePopup />
      <CreateSubcategory />
      <DisableVenuePopup />
    </>
  )
}
