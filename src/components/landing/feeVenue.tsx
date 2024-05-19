import { useQuery } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import React, { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { IResponse } from 'src/types/response'
import { Separator } from '../ui/separator'
import { feeVenueApi } from 'src/api/venue/get-fee-venue'
import { IVenue } from 'src/types/venue'
import Venue from './card-venue'
import AOS from 'aos'
import 'aos/dist/aos.css'

function FeeVenue() {
  useEffect(() => {
    AOS.init()
  }, [])
  const { data: feeVenueData } = useQuery<IResponse<IVenue[]>, AxiosError>(['Feevenues'], () => feeVenueApi(), {
    keepPreviousData: true,
  })
  console.log('dataa', feeVenueData)

  const [displayedIds, setDisplayedIds] = useState(4)

  const handleSeeMoreClick = () => {
    setDisplayedIds((prevCount) => prevCount + 4)
  }

  const renderVenues = useMemo(() => {
    if (!feeVenueData?.Data?.Result || feeVenueData.Data.Result.length === 0) {
      return <p>No venues found.</p>
    }

    const rows = []
    for (let i = 0; i < displayedIds; i += 5) {
      rows.push(
        <div key={i} className="flex space-x-4 pb-4 pr-4" data-aos="fade-up">
          {feeVenueData.Data.Result.slice(i, i + 5).map((venue) => (
            <Link to={`/venue/${venue.Id}`} className="card-link" key={venue.Id}>
              <Venue venue={venue} />
            </Link>
          ))}
        </div>,
      )
    }

    return rows
  }, [feeVenueData?.Data?.Result, displayedIds])

  return (
    <div className="bg-gray-100">
      <div className="mx-auto mt-7 max-w-7xl bg-white px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-1 sm:py-2 lg:max-w-none lg:py-4">
          <div className="flex flex-row justify-between">
            <h2 className="text-2xl font-bold text-red-500">Các địa điểm có phí</h2>
          </div>
          <Separator />
          <div className="relative mt-5">
            {renderVenues}
            {feeVenueData?.Data?.Result && feeVenueData.Data.Result.length > displayedIds && (
              <div className="mt-4 text-center">
                <button
                  onClick={handleSeeMoreClick}
                  className="rounded-md border border-blue-600 px-2 py-1 text-blue-600 hover:border-blue-800 hover:text-blue-800"
                >
                  Xem thêm
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeeVenue
