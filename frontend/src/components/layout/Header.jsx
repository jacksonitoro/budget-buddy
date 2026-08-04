"use client";

export default function Header() {

    const today = new Date();

    const currentMonth = today.toLocaleString("default", {
        month: "long",
    });

    const currentYear = today.getFullYear();

    return (

        <header
            className="
                bg-white
                shadow
                rounded-lg
                px-8
                py-6
                mb-8
            "
        >

            <div
                className="
                    flex
                    flex-col
                    md:flex-row
                    justify-between
                    items-start
                    md:items-center
                    gap-4
                "
            >

                <div>

                    <h1 className="text-4xl font-bold">

                        💰 Budget Buddy

                    </h1>

                    <p className="text-gray-500 mt-2">

                        Manage your monthly budget and expenses.

                    </p>

                </div>

                <div
                    className="
                        text-right
                        text-gray-500
                    "
                >

                    <p className="font-semibold">

                        {currentMonth} {currentYear}

                    </p>

                </div>

            </div>

        </header>

    );

}