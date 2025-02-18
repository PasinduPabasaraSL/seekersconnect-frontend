export default function MyButton(props) {
    return (
        <div>

            <button
                className="px-4 py-1 font-semibold shadow-md cursor-pointer"
                style={{
                    background: props.backgroundColor,
                    color: props.txtColor,
                    fontSize: props.fontSize,
                    width: props.width,
                    height: props.height,
                    borderRadius: props.radius
                }}
            >
                {props.name}
            </button>


        </div>
    );
}