import { LocationMarkerIcon, PhoneIcon } from "@heroicons/react/solid";
import ReactHtmlParser from "react-html-parser";

function LikedRestaurant(props) {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={props.url}
      className="bg-white rounded-lg p-5 border-gray-200 border hover:bg-gray-100"
    >
      <div className="sm:flex items-center sm:space-x-4 mb-2">
        <h1 className="text-3xl text-gray-900 font-bold">{props.name}</h1>
        <div className="flex items-center">
          <LocationMarkerIcon className="h-3 w-3 sm:h-5 sm:w-5 text-gray-600" />
          <p className="text-xs sm:text-md text-gray-600">
            {props.address1} {props.address2}, {props.city}, {props.state}{" "}
            {props.zip}
          </p>
        </div>
      </div>
      <div className="text-sm text-gray-600">
        {ReactHtmlParser(props.description)}
      </div>
      <div className="flex items-center space-x-5 mt-3">
        <div className="">
          <div className="flex items-center space-x-2">
            <PhoneIcon className="h-5 w-5 text-gray-600" />
            <p className="text-xs text-gray-600">
              {props.phone.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3")}
            </p>
          </div>
        </div>
      </div>
      <div className="space-x-3 items-center">
        <button className="bg-orange-200 rounded-full font-bold text-sm text-orange-700 px-2 py-1 text-center mt-2">
          Restaurant
        </button>
        <button className="bg-indigo-200 rounded-full font-bold text-sm text-indigo-700 px-2 py-1 text-center mt-2">
          {props.categories}
        </button>
      </div>
    </a>
  );
}

export default LikedRestaurant;
