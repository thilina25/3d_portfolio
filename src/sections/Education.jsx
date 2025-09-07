import { Timeline } from '../components/Timeline'
import { education } from '../constants'

const Education = () => {
  return (
    <div id="Education" className='w-full C-space section-spacing rounded-4xl p-10 animated-gradient-2'>
        <Timeline data={education} />
    </div>
  )
}

export default Education