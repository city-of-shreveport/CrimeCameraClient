import React from 'react'
//
import useChartConfig from './useCHartsConfig'
import { Chart } from 'react-charts'
let sourceCode
export default function LineChart () {
  const { data, randomizeData } = useChartConfig({
    series: 4
  })
  const series = React.useMemo(
    () => ({
      showPoints: false
    }),
    []
  )
  const axes = React.useMemo(
    () => [
      { primary: true, type: 'time', position: 'bottom' },
      { type: 'linear', position: 'left' }
    ],
    []
  )
  return (
    <>
    <div className='chartBox'>
        <Chart data={data} series={series} axes={axes} tooltip />
    </div>
    </>
  )
}