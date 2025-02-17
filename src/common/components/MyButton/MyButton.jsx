export default function MyButton(props) {
    return (
        <div>
            {/* <button
                class="px-4 py-1 font-semibold rounded-2xl shadow-md cursor-pointer"
                style={{ background: props.backgroundColor, color: props.txtColor }}>
                {props.name}
            </button> */}

            <button
                className="px-4 py-1 font-semibold rounded-2xl shadow-md cursor-pointer"
                style={{
                    background: props.backgroundColor,
                    color: props.txtColor,
                    fontSize: props.fontSize,
                    width: props.width,
                    height: props.height
                }}
            >
                {props.name}
            </button>


        </div>
    );
}