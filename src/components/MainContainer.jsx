import { MAIN_IMG } from "../utils/constants"

const MainContainer = () => {
  return (
    <div className="z-10 -mt-44 flex justify-between">
      <div className=" z-20 absolute text-violet-900 text-bold pt-[20%] px-24">
        <h1 className="text-6xl w-1/2 font-bold">Lift up your journey with CarGo's Rentals</h1>
        <p className="py-6 text-lg w-6/12 ">Wide range of Hatchbacks, Sedans, and SUV's with mutiple fuel and transmission options</p>
      </div>
      <div className="image-bg z-10 relative">
        <img src={MAIN_IMG} />
      </div>
    </div>
  )
}

export default MainContainer