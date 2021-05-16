import React from 'react'
//
import useChartConfig from './useCHartsConfig'
import { Chart } from 'react-charts'
let sourceCode


export default function BarChart() {
  const { data, randomizeData } = useChartConfig({
    series: 1,
    datums: 5,
    dataType: 'ordinal'
  })
  console.log(data)
  const series = React.useMemo(
    () => ({
      type: 'bar'
    }),
    []
  )
  const axes = React.useMemo(
    () => [
      { primary: true, type: 'ordinal', position: 'bottom' },
      { position: 'left', type: 'linear', stacked: false }
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