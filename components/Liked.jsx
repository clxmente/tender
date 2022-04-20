import Link from "next/link";

export default function Liked(props) {
  return (
    <Link href={props.url} passHref>
      <a className="bg-white hover:bg-gray-100 border border-gray-300 rounded-md">
        <div className="flex items-start py-6 px-6">
          <div className="ml-3 text-sm">
            <label htmlFor={props.label} className="font-large text-black">
              <p className="font-bold text-black font-large">{props.label} </p>
              <p className="text-md text-gray-400 py-1">Health Score: {props.score}</p>
              <p className="text-md text-gray-400 py-1">Total time: {props.readyIn} Minutes</p>
              <img src={props.image} alt="" className="flex-wrap h-20 w-20"></img>
              {/* Implementing colors for buttons in the future (need to utilize a JS function to pass the colors) */}
              <button className="bg-green-200 rounded-full font-bold text-sm text-green-700 px-2 py-1 text-center">
                {props.button}
              </button>
            </label>
          </div>
        </div>
      </a>
    </Link>
  );
}
