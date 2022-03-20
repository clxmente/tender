export default function Checkbox(props) {
	return (
		<fieldset className="space-y-5">
			<div className="flex items-start rounded-md bg-indigo-600 py-3 px-3">
				<div className="flex items-center h-5">
					<input
						id={props.label}
						aria-describedby={props.label + "-description"}
						name={props.label}
						type="checkbox"
						className="ring-indigo-500 h-4 w-4 text-gray-500 border-gray-300 rounded"
					/>
				</div>
				<div className="ml-3 text-sm">
					<label htmlFor={props.label} className="font-bold text-white">
						{props.label}
					</label>
				</div>
			</div>
		</fieldset>
	);
}
