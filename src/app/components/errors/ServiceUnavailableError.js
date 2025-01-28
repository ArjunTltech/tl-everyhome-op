import Link from 'next/link';

export default function ServiceUnavailableError() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-50 p-4">
      <div className="max-w-md text-center">
        <iframe
          src="https://lottie.host/embed/181a68bc-d855-43c1-b440-9cf81c6662ad/WlyDuSNRGU.lottie"
          style={{ width: '100%', height: '300px', border: 'none' }}
          title="Service Unavailable Animation"
        ></iframe>
        <Link href="/" className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 mt-6 inline-block">
          Return Home
        </Link>
      </div>
    </div>
  );
}
