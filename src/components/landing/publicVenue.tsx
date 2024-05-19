import { useQuery } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import React, { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { IResponse } from 'src/types/response'
import { Separator } from '../ui/separator'
import { venuePublicApi } from 'src/api/venue/get-venue-public'
import { IVenue } from 'src/types/venue'
import Venue from './card-venue'
import AOS from 'aos'
import 'aos/dist/aos.css'

function PublicVenue() {
  useEffect(() => {
    AOS.init()
  }, [])
  const { data } = useQuery<IResponse<IVenue[]>, AxiosError>(['Publicvenues'], () => venuePublicApi(), {
    keepPreviousData: true,
  })

  // Tạo state cho việc hiển thị id
  const [displayedIds, setDisplayedIds] = useState(4)

  // Hàm xử lý khi người dùng nhấp vào nút "Xem thêm"
  const handleSeeMoreClick = () => {
    setDisplayedIds((prevCount) => prevCount + 4)
  }

  const renderVenues = useMemo(() => {
    // Nếu không có dữ liệu hoặc không có dữ liệu venue
    if (!data?.Data?.Result || data.Data.Result.length === 0) {
      return <p>No venues found.</p>
    }

    // Chia dữ liệu thành các hàng với mỗi hàng chứa 4 id
    const rows = []
    for (let i = 0; i < displayedIds; i += 5) {
      rows.push(
        <div key={i} className="flex space-x-4 pb-4 pr-4" data-aos="fade-up">
          {/* Sử dụng thẻ Link để chuyển hướng sang trang detail */}
          {data.Data.Result.slice(i, i + 5).map((venue) => (
            <Link to={`/venue/${venue.Id}`} className="card-link" key={venue.Id}>
              <Venue venue={venue} />
            </Link>
          ))}
        </div>,
      )
    }

    return rows
  }, [data?.Data?.Result, displayedIds])

  return (
    <div className="bg-gray-100">
      <div className="mx-auto mt-7 max-w-7xl bg-white px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-1 sm:py-2 lg:max-w-none lg:py-4">
          <div className="flex flex-row justify-between">
            <h2 className="text-2xl font-bold text-red-500">Các địa điểm công cộng</h2>
            {/* <Link to="/" className="flex items-center text-sm text-gray-900">
              Browse all venue
              <span className="ml-1">
                <ChevronRight size={14} />
              </span>
            </Link> */}
          </div>
          <Separator />
          <div className="relative mt-5">
            {/* Hiển thị danh sách venue */}
            {renderVenues}
            {/* Hiển thị nút "Xem thêm" nếu cần */}
            {data?.Data?.Result && data.Data.Result.length > displayedIds && (
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

export default PublicVenue
