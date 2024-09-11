import { Link } from "react-router-dom"
import { MAIN_IMG } from "../utils/constants"

const MainContainer = () => {
  return (
    <div className="z-10 -mt-44 flex justify-between">
 
      <div className="image-bg z-10 relative">
        <img src={MAIN_IMG} />
      </div>  
    </div>
  )
}

export default MainContainer