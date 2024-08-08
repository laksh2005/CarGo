

const Process = () => {
  return (
    <div className="px-8 py-20 text-center bg-blue-100">
        <div className="intro-box">
        <h1 className="font-bold text-4xl text-violet-900 mb-6">How to Book a Rental @CarGo</h1>
            <p className="text-violet-900 mb-2 hover:text-black">Discover the freedom of NCR with CarGo!</p>
            <p className="text-violet-900 mb-2 hover:text-black">Explore on your terms and create unforgettable memories.</p>
            <p className="text-violet-900 mb-12 hover:text-black">Book your rental today with CarGo!</p>
        </div>
        <div className="steps flex justify-around space-x-2">
            <div className="step1 border border-gray-200 py-8 px-8 rounded-lg flex flex-col items-center shadow-lg hover:bg-violet-100">
                <h2 className="text-5xl font-bold text-gray-700">01</h2>
                <h3 className="text-2xl font-semibold text-gray-700">Enter Location</h3>
            </div>
            <div className="step2 border border-gray-200 py-8 px-8 rounded-lg flex flex-col items-center shadow-lg hover:bg-violet-100">
                <h2 className="text-5xl font-bold text-gray-700">02</h2>
                <h3 className="text-2xl font-semibold text-gray-700">Pick your Fleet</h3>
            </div>
            <div className="step3 border border-gray-200 py-8 px-8 rounded-lg flex flex-col items-center shadow-lg hover:bg-violet-100">
                <h2 className="text-5xl font-bold text-gray-700">03</h2>
                <h3 className="text-2xl font-semibold text-gray-700">Choose Rental Day</h3>
            </div>
            <div className="step4 border border-gray-200 py-8 px-8 rounded-lg flex flex-col items-center shadow-lg hover:bg-violet-100">
                <h2 className="text-5xl font-bold text-gray-700">04</h2>
                <h3 className="text-2xl font-semibold text-gray-700">Confirm your Booking</h3>
            </div>
        </div>
    </div>
  )
}

export default Process