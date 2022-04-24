import {
  ClockIcon,
  HeartIcon,
  InformationCircleIcon,
  ThumbUpIcon,
} from "@heroicons/react/solid";
import ReactHtmlParser from "react-html-parser";

export default function LikedRecipe(props) {
  return (
    <a
      href={props.url}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white hover:bg-gray-100 border border-gray-300 rounded-md hover:cursor-pointer p-5"
    >
      <div className="items-start hover:cursor-pointer">
        <div className="text-sm hover:cursor-pointer">
          <label
            htmlFor={props.label}
            className="text-black hover:cursor-pointer"
          >
            <p className="font-bold text-black text-2xl sm:text-3xl hover:cursor-pointer">
              {props.label}{" "}
            </p>
            <p className="text-md text-gray-400 py-1 hover:cursor-pointer">
              <img
                src={props.image}
                alt=""
                className="flew-wrap h-32 w-32 rounded-full float-right border-2 border-solid border-gray-300"
              ></img>
              <div className="space-y-2">
                <div className="flex space-x-1 items-center">
                  <HeartIcon className="h-5 w-5 text-gray-400" />
                  <p>Health Score: {props.score} </p>
                </div>
                <div className="flex space-x-1 items-center">
                  <ClockIcon className="h-5 w-5 text-gray-400" />
                  <p>Total time: {props.readyIn} Minutes</p>
                </div>
                <div className="flex items-center space-x-1">
                  <ThumbUpIcon className="h-5 w-5 text-gray-400" />
                  <p>Liked by {props.aggregateLikes} Others</p>
                </div>
                <div className="flex items-center space-x-1">
                  <InformationCircleIcon className="h-5 w-5 text-gray-400" />
                  <p>Servings: {props.servings}</p>
                </div>
                <p>{ReactHtmlParser(props.summary)}</p>
              </div>
            </p>
            {/* Implementing colors for buttons in the future (need to utilize a JS function to pass the colors) */}
            <button className="bg-green-200 rounded-full font-bold text-sm text-green-700 px-2 py-1 text-center mt-2">
              {props.button}
            </button>
          </label>
        </div>
      </div>
    </a>
  );
}
