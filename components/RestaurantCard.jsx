import { LocationMarkerIcon, PhoneIcon } from "@heroicons/react/solid";

function RestaurantCard(props) {
  return (
    <div className="bg-white rounded-lg p-5 border-gray-200 border">
      <div className="sm:flex items-center sm:space-x-4 mb-2">
        <h1 className="text-3xl text-gray-900 font-bold">{props.name}</h1>
        <div className="flex items-center">
          <LocationMarkerIcon className="h-3 w-3 sm:h-6 sm:w-6 text-gray-600" />
          <p className="text-xs sm:text-md text-gray-600">
            {props.address1} {props.address2}, {props.city}, {props.state}{" "}
            {props.zip}
          </p>
        </div>
      </div>
      <div className="text-sm text-gray-600">{props.description}</div>
      <div className="flex items-center space-x-5 mt-3">
        <div className="">
          <div className="flex items-center space-x-2">
            <PhoneIcon className="h-5 w-5 text-gray-600" />
            <p className="text-xs text-gray-600">{props.phone}</p>
          </div>
        </div>
        <button className="bg-indigo-600 rounded-full text-white px-3 py-1 text-sm pointer-events-none">
          {props.categories}
        </button>
      </div>
    </div>
  );
}

export default RestaurantCard;
