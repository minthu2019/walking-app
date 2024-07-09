'use client';
import { useSearchParams } from 'next/navigation';

const ErrorPage = () => {
  const searchParams = useSearchParams();
  const error = searchParams.get('error');

  return (
    <div>
      <h1>Error: {error}</h1>
      <p>Something went wrong. Please try again later.</p>
    </div>
  );
};

export default ErrorPage;
