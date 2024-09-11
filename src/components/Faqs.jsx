import { Link } from "react-router-dom"


const Faqs = () => {
  return (
    <div className="px-20 py-20 pr-20 bg-blue-100 flex">
        <h1 className="text-left font-bold text-4xl text-violet-900">
            <span className="text-black">F</span>requently
            <span className="text-black"> A</span>sked 
            <span className="text-black"> Q</span>uestions :
        </h1>
        <div className="px-10 w-7/12 ques-container text-left">
            <div className="px-6 py-1 mb-2 hover:bg-gray-300 rounded-lg border border-purple-500 hover:bg-violet-300">
                <h2 className="w-6/12 font-bold my-6 text-lg">What is CarGo car rental service?</h2>
                <p className="px-2 font-semibold">It is a platform which provides renters with a wide range of fleets to choose from, according to their desired date, at various locations.</p>
            </div>
            <div className="px-6 py-1 mb-2 hover:bg-gray-300 rounded-lg border border-purple-500 hover:bg-violet-300">
                <h2 className="w-6/12 font-bold my-6 text-lg">Is CarGo available in nearby me?</h2>
                <p className="px-2 font-semibold">As of August 2024, Cargo is available at 18 locations within Delhi NCR. Check out the nearest one to you above!</p>
            </div>
            <div className="px-6 py-1 mb-2 hover:bg-gray-300 rounded-lg border border-purple-500 hover:bg-violet-300">
                <h2 className="w-6/12 font-bold my-6 text-lg">What is the advantage of availing cars on CarGo?</h2>
                <ul className="px-2 font-semibold">
                    <li>- Unlimited KMs</li>
                    <li>- Santized cars</li>
                    <li>- Fastag enabled</li>
                    <li>- Exhaustive fleet of cars</li>
                    <li>- Doorstep delivery and pickup</li>
                </ul>
            </div>
            <div className="px-6 py-1 mb-2 hover:bg-gray-300 rounded-lg border border-purple-500 hover:bg-violet-300">
                <h2 className="w-6/12 font-bold my-6 text-lg">How can I get my queries answered?</h2>
                <p className="px-2 font-semibold">Head over to <button className="text-blue-500 underline"><Link to="/contact">Contact Us</Link></button> to get in touch with our team.</p>
            </div>
        </div>
    </div>
  )
}

export default Faqs