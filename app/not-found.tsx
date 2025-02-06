import { NextPage } from "next"
import Head from "next/head"
import Link from "next/link"

const NotFoundPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Page Not Found</title>
        <meta
          name="description"
          content="The page you're looking for doesn't exist."
        />
      </Head>

      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <div className="max-w-md w-full text-center px-4">
          <h1 className="text-9xl font-bold text-gray-800">404</h1>
          <h2 className="text-2xl font-semibold text-gray-700 mt-4 mb-8">
            Oops! Page not found
          </h2>
          <p className="text-gray-600 mb-8">
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable.
          </p>
          <Link
            href="/"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg
            hover:bg-blue-700 transition-colors duration-200"
          >
            Return to Homepage
          </Link>
        </div>
      </div>
    </>
  )
}

export default NotFoundPage
