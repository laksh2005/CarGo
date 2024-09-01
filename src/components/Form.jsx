import Header from "./Header"


const Form = () => {
  return (
<div>
    <Header />
    <div className="relative z-10 flex justify-center items-center h-screen -mt-44">
        <div className="image-bg absolute inset-0 z-0">
            <img src="https://dnm.nflximg.net/api/v6/BvVbc2Wxr2w6QuoANoSpJKEIWjQ/AAAAQdHbjrX0uL1mH7uUW7VZ-p5GJOSNNRko_9A_12Mlv5wVYQIDy4nuupxLHxkDj9V0e1OLBs_s8ZlxFkyhPlK5XkrlTK0c7yP42LLinQdYhz8lqfgUcOH68JAbEcY45jG02gCI1NyKVf1lqxsQFmcNN5szbv8.jpg?r=aee" />
        </div>

        <form
            className="bg-red-600 text-white rounded-lg bg-opacity-10 p-8 w-full mt-32 max-w-2xl z-20"
            onSubmit={(e) => e.preventDefault()}
        >
            <h1 className="font-bold text-3xl py-4 text-center">Get, Set, CarGo!</h1>
            
            {/* NAME BUTTON */}
            <div className="flex m-1 p-1 items-center">
                <label className="w-3/12 font-bold text-xl">Renter's Full Name:</label>
                <input
                    type="text"
                    className="rounded-lg p-4 my-2 font-bold w-8/12 bg-gray-700 hover:border-white bg-opacity-80 text-white"
                />
            </div>

            {/* LOCATION BUTTON */}
            <div className="flex m-1 p-1 items-center">
                <label className="w-3/12 font-bold text-xl">Location:</label>
                <select
                    className="rounded-lg p-4 my-2 font-bold w-8/12 bg-gray-700 hover:border-white bg-opacity-80 text-white"
                >
                  <option>Saket</option>
                  <option>Dwarka</option>
                  <option>Karol Bagh</option>
                  <option>Noida (Sector 18)</option>
                  <option>Rohini (Sector 11)</option>
                  <option>Punjabi Bagh</option>
                  <option>Connaught Place</option>
                  <option>Janakpuri</option>
                  <option>Civil Lines</option>
                  <option>South Extension</option>
                  <option>Nehru Place</option>
                  <option>Mayur Vihar (Phase 3)</option>
                  <option>Vasant Kunj</option>
                  <option>Lajpat Nagar</option>
                  <option>Paharganj</option>
                  <option>DLF Cyber City</option>
                  <option>Rajouri Garden</option>
                  <option>Faridabad (Sector 104)</option>
                </select>
            </div>

            {/* CAR BRAND BUTTON */}
            <div className="flex m-1 p-1 items-center">
                <label className="w-3/12 font-bold text-xl">Car Brand:</label>
                <select
                    className="rounded-lg p-4 my-2 font-bold w-8/12 bg-gray-700 hover:border-white bg-opacity-80 text-white"
                >
                    {/* Add options here */}
                </select>
            </div>

            {/* CAR MODEL BUTTON */}
            <div className="flex m-1 p-1 items-center">
                <label className="w-3/12 font-bold text-xl">Car Model:</label>
                <select
                    className="rounded-lg p-4 my-2 font-bold w-8/12 bg-gray-700 hover:border-white bg-opacity-80 text-white"
                >
                    {/* Add options here */}
                </select>
            </div>

            {/* DATE BUTTON */}
            <div className="flex m-1 p-1 items-center">
                <label className="w-3/12 font-bold text-xl">Date:</label>
                <select
                    className="rounded-lg p-4 my-2 font-bold w-4/12 bg-gray-700 hover:border-white bg-opacity-80 text-white"
                >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                    <option>13</option>
                    <option>14</option>
                    <option>15</option>
                    <option>16</option>
                    <option>17</option>
                    <option>18</option>
                    <option>19</option>
                    <option>20</option>
                    <option>21</option>
                    <option>22</option>
                    <option>23</option>
                    <option>24</option>
                    <option>25</option>
                    <option>26</option>
                    <option>27</option>
                    <option>28</option>
                    <option>29</option>
                    <option>20</option>
                    <option>31</option>
                </select>
                <label className="w-3/12 ml-4 font-bold text-xl">Month:</label>
                <select
                    className="rounded-lg p-4 my-2 font-bold w-4/12 bg-gray-700 hover:border-white bg-opacity-80 text-white"
                >
                    <option>September</option>
                    <option>October</option>
                    <option>Novermber</option>
                    <option>December</option>
                </select>
            </div>

            <button
                className="p-4 my-6 w-full text-white font-center font-bold bg-black hover:bg-green-900 rounded-lg hover:cursor-pointer"
            >
                Confirm Booking
            </button>
        </form>
    </div>
</div>

  )
}

export default Form