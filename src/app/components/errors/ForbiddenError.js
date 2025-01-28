import Link from 'next/link';

export default function ForbiddenError() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-purple-50 p-4">
      <div className="max-w-md text-center">
        <h1 className="text-4xl font-bold text-purple-800 mb-4">403 - Forbidden</h1>
        <p className="text-purple-700 mb-6">
          You don't have permission to access this resource.
        </p>
        <Link href="/" className="bg-purple-500 text-white px-6 py-3 rounded-lg hover:bg-purple-600">
          Return Home
        </Link>
      </div>
    </div>
  );
}