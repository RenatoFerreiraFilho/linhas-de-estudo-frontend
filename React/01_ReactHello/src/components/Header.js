export default function Header({ children, size }) {
    let fontSize = "text-xl";
    if (size === "large") {
        fontSize = "text-2xl";
    }
    return (
        <header>
            <div className="bg-gray-300 mx-auto p-7">
                <h1 className={`text-center font-semibold ${fontSize}`}>
                    {children}
                </h1>
            </div>
        </header>
    );
}
