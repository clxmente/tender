export default function Checkbox(props) {
  return (
    <fieldset className="group">
      <div className="flex items-start rounded-md bg-indigo-600 group-hover:bg-indigo-700 py-3 px-3">
        <div className="flex items-center h-5">
          <input
            id={props.label}
            aria-describedby={props.label + "-description"}
            name={props.label}
            type="checkbox"
            onChange={(e) => {
              if (e.target.checked) {
                props.setList([props.label, ...props.list]);
              } else {
                var popped = props.list;
                popped.splice(popped.indexOf(props.label), 1);
                props.setList(popped);
              }
            }}
            className="h-4 w-4 text-black rounded hover:cursor-pointer focus:ring-0"
          />
        </div>
        <div className="ml-3 text-sm">
          <label
            htmlFor={props.label}
            className="font-bold text-white hover:cursor-pointer"
          >
            {props.label}
          </label>
        </div>
      </div>
    </fieldset>
  );
}
