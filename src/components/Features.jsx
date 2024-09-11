import { BENE_1, BENE_2, BENE_3, BENE_4 } from "../utils/constants"


const Features = () => {
  return (
<div className="px-8 py-20 text-center bg-gray-100">
    <h1 className="font-bold text-4xl text-violet-900 mb-12">
        Features & Benefits
    </h1>
    <div className="card-container flex justify-around space-x-4">
        <div className="card border border-gray-200 py-8 px-8 rounded-lg flex flex-col items-center shadow-lg hover:bg-gray-200" >
            <div className="mb-4">
                <img src={BENE_1} alt="Unlimited km to drive" />
            </div>
            <h2 className="title text-center text-lg font-medium text-gray-700">Unlimited km to drive</h2>
        </div>
        <div className="card border border-gray-200 py-8 px-8 rounded-lg flex flex-col items-center shadow-lg hover:bg-gray-200" >
            <div className="mb-4">
                <img src={BENE_2} alt="50+ Locations in Delhi NCR" />
            </div>
            <h2 className="title text-center text-lg font-medium text-gray-700">50+ Locations in Delhi NCR</h2>
        </div>
        <div className="card border border-gray-200 py-8 px-8 rounded-lg flex flex-col items-center shadow-lg hover:bg-gray-200" >
            <div className="mb-4">
                <img src={BENE_3} alt="Anywhere delivery" />
            </div>
            <h2 className="title text-center text-lg font-medium text-gray-700">Anywhere delivery</h2>
        </div>
        <div className="card border border-gray-200 py-8 px-8 rounded-lg flex flex-col items-center shadow-lg hover:bg-gray-200" >
            <div className="mb-4">
                <img src={BENE_4} alt="Privacy and freedom" />
            </div>
            <h2 className="title text-center text-lg font-medium text-gray-700">Privacy and freedom</h2>
        </div>
    </div>
</div>
  )
}

export default Features