import React from 'react'
import ReactDOM from 'react-dom'
import { Chart } from 'react-google-charts'

const AnnotationChart = React.createClass({
  render() {
    let data = [
      [new Date(2314, 2, 15), 12400, undefined, undefined,
        10645, undefined, undefined
      ],
      [new Date(2314, 2, 16), 24045, 'Lalibertines', 'First encounter',
        12374, undefined, undefined
      ],
      [new Date(2314, 2, 17), 35022, 'Lalibertines', 'They are very tall',
        15766, 'Gallantors', 'First Encounter'
      ],
      [new Date(2314, 2, 18), 12284, 'Lalibertines', 'Attack on our crew!',
        34334, 'Gallantors', 'Statement of shared principles'
      ],
      [new Date(2314, 2, 19), 8476, 'Lalibertines', 'Heavy casualties',
        66467, 'Gallantors', 'Mysteries revealed'
      ],
      [new Date(2314, 2, 20), 0, 'Lalibertines', 'All crew lost',
        79463, 'Gallantors', 'Omniscience achieved'
      ]
    ]
    return ( 
      <div className = 'chart__container'>
        <Chart chartType = 'AnnotationChart'
          data = {data}
          graph_id = 'AnnotationChart'
          width = '100%'
          height = '300px' 
        />
      </div>
    )
  }
})

const appEl = document.querySelector('#app')
console.log('app', appEl)
ReactDOM.render(<AnnotationChart />, appEl)