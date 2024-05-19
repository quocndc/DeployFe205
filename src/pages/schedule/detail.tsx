import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab'
import TimelineOppositeContent, { timelineOppositeContentClasses } from '@mui/lab/TimelineOppositeContent'
import { CalendarMonth, FmdGood, CameraAlt } from '@mui/icons-material'
import Header from 'src/components/header'
import Footer from 'src/components/footer'

function ScheduleDetail() {
  return (
    <>
      <Header></Header>
      <div className="flex w-full items-center justify-center py-8">
        <div className="flex w-[1000px]">
          <div className="flex w-full flex-col items-center justify-center gap-4">
            <div className="flex w-full flex-col justify-center gap-4 rounded-md border border-gray-200 p-4">
              <div className="text-xl font-bold text-sky-700">Lịch trình A</div>
              <div className="flex gap-3">
                <img
                  src="https://media.quangnamtourism.com.vn/resources/portal/Images/QNM/admqnm/an_bang_quochuy_27_254045245.jpg"
                  className="h-fit max-w-[33%]"
                ></img>
                <div className="flex grow flex-col gap-2">
                  <div className="flex w-full justify-between text-sm">
                    <span className="font-semibold">Từ ngày</span>
                    <span className="font-bold">19/04/2024</span>
                  </div>
                  <div className="flex w-full justify-between text-sm">
                    <span className="font-semibold">Số ngày</span>
                    <span>
                      <span className="font-bold">1</span> ngày
                    </span>
                  </div>
                  <div className="flex w-full justify-between text-sm">
                    <span className="font-semibold">Khoảng cách</span>
                    <span>
                      <span className="font-bold">132 </span>km
                    </span>
                  </div>
                  <div className="flex w-full justify-between text-sm">
                    <span className="font-semibold">Số địa điểm</span>
                    <span>
                      <span className="font-bold">4</span> địa điểm
                    </span>
                  </div>
                  <div className="flex w-full justify-between text-sm">
                    <span className="font-semibold">Mô tả</span>
                    <span>Lịch trình đi chơi đêm tại thành phố Đà Nẵng</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex w-full flex-col bg-gray-100/80">
              <div className="flex items-center justify-between bg-sky-700 p-2 font-bold text-white">
                <div className="flex items-center justify-start gap-2 text-lg">
                  <CalendarMonth />
                  <span>Ngày 19/04/2024</span>
                </div>
                <div className="rounded-sm bg-amber-500 px-2 py-[2px] text-xs">2 địa điểm</div>
              </div>
              <Timeline
                sx={{
                  [`& .${timelineOppositeContentClasses.root}`]: {
                    flex: 0.2,
                  },
                }}
              >
                <TimelineItem>
                  <TimelineOppositeContent color="textSecondary">Địa điểm 2</TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot sx={{ bgcolor: 'primary.main' }}>
                      <CameraAlt />
                    </TimelineDot>
                    <TimelineConnector sx={{ bgcolor: 'primary.main' }} />
                  </TimelineSeparator>
                  <TimelineContent>
                    <div className="w-full bg-white">
                      <div className="flex items-center justify-between border-b border-gray-300 p-2">
                        <div className="flex items-center justify-start gap-2">
                          <img
                            src="https://media.quangnamtourism.com.vn/resources/portal/Images/QNM/admqnm/an_bang_quochuy_27_254045245.jpg"
                            alt="Venue name"
                            className="aspect-square w-10 rounded-full object-cover"
                          />
                          <span className="font-bold text-sky-700">Bãi tắm An Bàng</span>
                        </div>
                        <span className="text-sm font-semibold text-amber-700">Miễn phí</span>
                      </div>
                      <div className="flex flex-col gap-2 p-2 text-xs">
                        <div className="font-bold">
                          <FmdGood fontSize="small" />
                          Phường Cẩm An, Thành phố Hội An, Tỉnh Quảng Nam
                        </div>
                        <div className=" line-clamp-3">
                          Bãi tắm An Bàng thuộc phường Cẩm An, thành phố Hội An, cách trung tâm phố cổ 04 km. Bãi tắm An
                          Bàng nằm trong danh sách 50 bãi biển đẹp nhất thế giới của trang CNNGo bình chọn. Bãi tắm An
                          Bàng mang nét yên bình và hoang sơ
                        </div>
                        <div className="flex gap-1">
                          <img
                            src="https://media.quangnamtourism.com.vn/resources/portal/Images/QNM/admqnm/an_bang_quochuy_27_254045245.jpg"
                            alt="Venue name"
                            className="h-24 w-36 rounded-sm object-cover"
                          />
                          <img
                            src="https://media.quangnamtourism.com.vn/resources/portal/Images/QNM/admqnm/bien/thumb/an_bang_quochuy_2_902927107.jpg"
                            alt="Venue name"
                            className="h-24 w-36 rounded-sm object-cover"
                          />
                          <img
                            src="https://media.quangnamtourism.com.vn/resources/portal/Images/QNM/admqnm/bien/thumb/an_bang_quochuy_23_742608793.jpg"
                            alt="Venue name"
                            className="h-12 w-20 rounded-sm object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineOppositeContent color="textSecondary">Địa điểm 1</TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot sx={{ bgcolor: 'primary.main' }}>
                      <CameraAlt />
                    </TimelineDot>
                  </TimelineSeparator>
                  <TimelineContent>
                    <div className="w-full bg-white">
                      <div className="flex items-center justify-between border-b border-gray-300 p-2">
                        <div className="flex items-center justify-start gap-2">
                          <img
                            src="https://media.quangnamtourism.com.vn/resources/portal/Images/QNM/quyetthang.qnm/bienrang/foody_mobile_m_ragj_jpg_785_635997904082388683_637031873875695329.jpg"
                            alt="Venue name"
                            className="aspect-square w-10 rounded-full object-cover"
                          />
                          <span className="font-bold text-sky-700">Biển tắm bãi Rạng</span>
                        </div>
                        <span className="text-sm font-semibold text-amber-700">Miễn phí</span>
                      </div>
                      <div className="flex flex-col gap-2 p-2 text-xs">
                        <div className="font-bold">
                          {' '}
                          <FmdGood fontSize="small" /> Xã Tam Quang, Huyện Núi Thành, Tỉnh Quảng Nam
                        </div>
                        <div className=" line-clamp-3">
                          Bãi tắm biển Rạng cách thành phố Tam Kỳ 35 km, cách thành phố Hội An 80 km. Biển Rạng là nơi
                          lý tưởng để mỗi chiều du khách cùng bạn bè tìm về thư giãn, tắm mát. Du khách sẽ được thưởng
                          thức hương vị thơm ngon với những
                        </div>
                        <div className="flex gap-1">
                          <img
                            src="https://media.quangnamtourism.com.vn/resources/portal/Images/QNM/quyetthang.qnm/bienrang/foody_mobile_m_ragj_jpg_785_635997904082388683_637031873875695329.jpg"
                            alt="Venue name"
                            className="h-24 w-36 rounded-sm object-cover"
                          />
                          <img
                            src="https://media.quangnamtourism.com.vn/resources/portal/Images/QNM/quyetthang.qnm/bienrang/thumb/bien_rang_637031873872445835.jpg"
                            alt="Venue name"
                            className="h-24 w-36 rounded-sm object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </TimelineContent>
                </TimelineItem>
              </Timeline>
            </div>
            <div></div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  )
}

export default ScheduleDetail
