
import TypeWriterEffect from './TypewriterEffect';
import { Oxanium } from 'next/font/google';
const OxaniumFont = Oxanium({ weights: 100, subsets: ["latin"] });
const CardComponentRow = ({
  title,
  content,
  visibleBox,

}) => {
  
  return (
    <div className={`box-border flex justify-center ${OxaniumFont.className}`}>
      <div class="mt-4">
        <div class={`
          flex items-start justify-center 
          border-white p-2 
          ${visibleBox ? "lg:-mb-3 lg:-ml-6" : ""} 
          lg:justify-start`
        }>


          <div className='flex justify-center items-center text-center w-full'>
            <h1 className="text-white font-bold text-2xl lg:mt-3 md:text-4xl mt-1.5">{title.toUpperCase()}</h1>
          </div>

        </div>
        <div className="bg-[#1B1A1A] w-full h-[75%] flex flex-col justify-start border-white rounded-xl border-2 relative xl:p-2">
          <div className="flex flex-col lg:flex-row p-4 -mt-4 lg:mt-4">
            <div className="w-24 p-2 h-80 hidden lg:block md:flex-shrink-0">
              <img
                src="/AboutAssets/frame.png"
                alt="Card"
                className="h-full"
              />
            </div>
            <div className="w-full flex-grow flex-col mt-4 lg:mt-0 justify-items-start my-auto md:mx-2 md:h-96">
              <div className="flex-grow">
                <p className="text-xs text-white md:text-lg lg:text-base xl:text-xl 2xl:text-2xl">
                  <TypeWriterEffect content={content} />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardComponentRow;