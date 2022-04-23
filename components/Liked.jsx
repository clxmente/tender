import ReactHtmlParser from "react-html-parser";

export default function Liked(props) {
  return (
    <a
      href={props.url}
      className="bg-white hover:bg-gray-100 border border-gray-300 rounded-md hover:cursor-pointer"
    >
      <div className="items-start py-6 px-6 hover:cursor-pointer">
        <div className="ml-3 text-sm hover:cursor-pointer">
          <label
            htmlFor={props.label}
            className="font-large text-black hover:cursor-pointer"
          >
            <p className="font-bold text-black font-large text-2xl hover:cursor-pointer">
              {props.label}{" "}
            </p>
            <p className="text-md text-gray-400 py-1 hover:cursor-pointer">
              <img
                src={props.image}
                alt=""
                className="flew-wrap h-32 w-32 rounded-full float-right border-2 border-solid border-gray-300"
              ></img>
              <p>Health Score: {props.score} </p>
              <p>Total time: {props.readyIn} Minutes</p>
              <p>Servings: {props.servings}</p>
              <p>Liked by {props.aggregateLikes} Others</p>
              <p>Summary: {ReactHtmlParser(props.summary)}</p>
            </p>
            {/* Implementing colors for buttons in the future (need to utilize a JS function to pass the colors) */}
            <button className="bg-green-200 rounded-full font-bold text-sm text-green-700 px-2 py-1 text-center">
              {props.button}
            </button>
          </label>
        </div>
      </div>
    </a>
  );
}
