export default function Button({
    children,
    type = "button",
    variant = "primary",
    disabled = false,
    className = "",
    ...props
}) {

    const variants = {
        primary: "bg-blue-600 hover:bg-blue-700",
        success: "bg-green-500 hover:bg-green-600",
        danger: "bg-red-500 hover:bg-red-600",
    };

    return (

        <button
            type={type}
            disabled={disabled}
            className={`
                w-full
                text-white
                py-3
                rounded-md
                transition
                disabled:bg-gray-400
                ${variants[variant]}
                ${className}
            `}
            {...props}
        >

            {children}

        </button>

    );

}