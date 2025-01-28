import Link from 'next/link';

export default function ServiceUnavailableError() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50 p-4">
      <div className="max-w-md text-center">
        <h1 className="text-4xl font-bold text-green-800 mb-4">503 - Service Unavailable</h1>
        <p className="text-green-700 mb-6">
          Our service is temporarily unavailable. Please try again later.
        </p>
        <Link href="/" className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600">
          Return Home
        </Link>
      </div>
    </div>
  );
}