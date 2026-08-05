export default function Card({
    children,
    className = "",
}) {

    return (

        <section
            className={`
                bg-white
                rounded-lg
                shadow
                p-6
                ${className}
            `}
        >

            {children}

        </section>

    );

}