export default function Liked(props) {
    return (
        <fieldset className="space-y-5">
            <div className="flex items-start rounded-md bg-white py-3 px-3">
                <div className="flex items-center h-5">
                    <input
                        id={props.label}
                        aria-describedby={props.label + "-description"}
                        name={props.label}
                    />
                </div>
                <div className="ml-3 text-sm">
                    <label htmlFor={props.label} className="font-medium text-black">
                        {props.label}
                    </label>
                </div>
            </div>
        </fieldset>
    );
}