'use client';

import { useRouter } from 'next/navigation';
import { useSession, signOut } from 'next-auth/react';

const AuthButton = () => {
    const { data: session } = useSession();
    const { push } = useRouter();

    const handleAuthentication = () => {
        if (session) {
            // User is authenticated, so log them out
            signOut();
        } else {
            // User is not authenticated, so redirect to login page
            push('/login');
        }
    }

    return (
        <div className='flex items-center'>
            <button
                onClick={handleAuthentication}
                rel="noopener"
                className="px-12 py-3 mx-2 text-regular font-bold text-main-color bg-white w-auto hover:text-button-bg hover:bg-gray-500 rounded-md">
                {session ? "Log Out" : "Log In"}
            </button>
            {
                session &&
                <button
                    onClick={() => push('/dashboard')}
                    className="px-12 py-3 font-bold text-center text-main-color bg-button-bg w-auto rounded-md">
                    <div className="flex justify-between items-center text-base">
                        Dashboard
                    </div>
                </button>
            }
        </div>
    );
}



export default AuthButton;