export default function CategoryCard(props) {

    const { title, jobsCount } = props;

    return (
        <div className="bg-blue-50 shadow-md rounded-2xl p-6 flex items-center gap-4 hover:shadow-xl transition-shadow duration-300 w-100 border border-blue-200">
            <div>
                <h3 className="text-xl font-semibold text-blue-900">{title}</h3>
                <p className="text-blue-700 text-sm">{jobsCount} jobs available</p>
            </div>
        </div>
    );
}