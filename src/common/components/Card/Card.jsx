export default function Card(props) {
    const { title, company, location, time } = props;
    console.log("Rendering Card with", props);

    return (
        <div className="bg-amber-600 rounded-lg shadow-lg p-6 mb-4 w-72 hover:scale-105 transform transition duration-300">
            <div className="text-xl font-semibold text-gray-800 mb-2">{title}</div>
            <div className="text-lg text-gray-600 mb-1">{company}</div>
            <div className="text-sm text-gray-500 mb-2">{location}</div>
            <div className="text-xs text-gray-400">{time}</div>
        </div>
    );
}