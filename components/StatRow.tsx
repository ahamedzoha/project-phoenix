import React from 'react'
import CountUp from 'react-countup'
import VisibilitySensor from 'react-visibility-sensor'

interface Stat {
  number: number
  text: string
}

interface StatsProps {
  stats: Stat[]
}

const StatRow: React.FC<StatsProps> = ({ stats }) => (
  <div className='5xl:pt-54 flex flex-col flex-wrap items-center justify-center space-y-12 pt-12 pb-24  xs:flex-row xs:space-x-6 xs:space-y-0 5xl:pb-96'>
    {stats.map((stat) => (
      <VisibilitySensor key={stat.number + stat.text}>
        {({ isVisible }: { isVisible: boolean }) => (
          <div className='5 flex flex-col items-center justify-center space-y-2'>
            <h2 className=' text-8xl font-extralight text-white '>
              {isVisible ? <CountUp end={stat.number} /> : stat.number}
            </h2>
            <h5 className='text-base font-normal text-white '>{stat.text}</h5>
          </div>
        )}
      </VisibilitySensor>
    ))}
  </div>
)

export default StatRow
