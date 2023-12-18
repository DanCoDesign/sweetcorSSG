'use client'

import Link from "next/link";
const BookAMeeting = (props) => {
    return (
        <Link
            href="/register"
            rel="noopener"
            className="px-12 py-4 font-bold text-center text-main-color bg-button-bg w-auto rounded-md">
            <div className="flex justify-between items-center text-base">
                {props.title}

            </div>

        </Link>
    );
}

export default BookAMeeting;