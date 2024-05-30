
import styles from "./loginPage.module.css"
import LoginForm from "@/components/login/LoginForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../../api/auth/[...nextauth]/route";

export default async function LoginPage() {

    const session = await getServerSession(authOptions);

    if (session) redirect("/write");

    return (
        <div className={styles.container}>
            <div className="flex items-center min-h-fit bg-white dark:bg-gray-900 ">

                <div className="max-w-xl mx-auto my-10 px-4">
                    <div className="text-center">
                        <h1 className="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">
                            Sign in
                        </h1>

                        <p className="text-gray-500 dark:text-gray-400 pb-8">
                            Sign in to access your account and post articles
                        </p>
                    </div>
                    <LoginForm />
                </div>

            </div>
        </div>

    )
}
