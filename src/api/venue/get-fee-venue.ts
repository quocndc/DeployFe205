import { axiosClient } from 'src/lib/axios'
import { IResponse, IVenue } from 'src/types'

async function feeVenueApi() {
  try {
    const res = await axiosClient.get(`VenuesAPI/GetNonPublicVenueDTOs/1/14`)
    const data: IVenue[] = res.data.Data
    const dataAll: IResponse<IVenue[]> = {
      Data: { Result: data, PageIndex: 1, PageSize: 14, TotalPages: 14 },
      Message: res.data.Data.Message,
      Code: res.data.Data.Code,
    }
    return dataAll
  } catch (error) {
    console.error('Error fetching venues:', error)
    throw error
  }
}

export { feeVenueApi }
