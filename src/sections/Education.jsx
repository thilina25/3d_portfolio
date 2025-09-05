import { Timeline } from '../components/Timeline'
import { education } from '../constants'

const Education = () => {
  return (
    <div id="Education" className='w-full '>
        <Timeline data={education} />
    </div>
  )
}

export default Education