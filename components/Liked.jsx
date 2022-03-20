export default function Liked(props) {
	return (
		<fieldset className="space-y-5 border-solid border-black border">
			<div className="flex items-start bg-white py-6 px-6">
				<div className="ml-3 text-sm">
					<label htmlFor={props.label} className="font-large text-black">
						<p className="font-bold text-black font-large">{props.label} </p>
						<p className="text-md text-gray-400 py-1">{props.description}</p>
						{/* Implementing colors for buttons in the future (need to utilize a JS function to pass the colors) */}
						<button className="bg-green-200 rounded-full font-bold text-sm text-green-700 px-2 py-1 text-center hover:bg-green-400">
							{props.button}
						</button>
					</label>
				</div>
			</div>
		</fieldset>
	);
}
