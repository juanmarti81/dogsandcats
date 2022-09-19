import carrousel1 from '../images/carrousel_1.jpg'
import carrousel2 from '../images/carrousel_2.jpg'
import carrousel3 from '../images/carrousel_3.jpg'
import carrousel4 from '../images/carrousel_4.jpg'
import carrousel5 from '../images/carrousel_5.jpeg'
import carrousel6 from '../images/carrousel_6.jpg'
import {Carousel} from 'flowbite-react'

const Carrousel = () => {
  return (
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
          <Carousel leftControl="" rightControl="">
              <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                  Slide 1
              </div>
              <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                  Slide 2
              </div>
              <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                  Slide 3
              </div>
          </Carousel>
      </div>
  )
}

export default Carrousel