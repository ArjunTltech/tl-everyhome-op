import Link from 'next/link';

export default function UnauthorizedError() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-red-50 p-4">
      <div className="max-w-md text-center">
        <h1 className="text-4xl font-bold text-red-800 mb-4">401 - Unauthorized</h1>
        <p className="text-red-700 mb-6">
          You need to log in to access this page.
        </p>
        <Link href="/login" className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600">
          Go to Login
        </Link>
      </div>
    </div>
  );
}