export default function Select({
    className = "",
    children,
    ...props
}) {
    return (
        <select
            className={`
                w-full
                border
                rounded-md
                px-3
                py-2
                focus:outline-none
                focus:ring-2
                focus:ring-blue-500
                ${className}
            `}
            {...props}
        >
            {children}
        </select>
    );
}