'use client';

import BadRequestError from "./components/errors/BadRequestError";
import ForbiddenError from "./components/errors/ForbiddenError";
import InternalServerError from "./components/errors/InternalServerError";
import ServiceUnavailableError from "./components/errors/ServiceUnavailableError";
import UnauthorizedError from "./components/errors/UnauthorizedError";

export default function Error({ error, reset }) {
  // Log the error to console in development
  console.error('Error:', error);

  const getErrorComponent = () => {
    switch (error?.status) {
      case 400:
        return <BadRequestError reset={reset} />;
      case 401:
        return <UnauthorizedError reset={reset} />;
      case 403:
        return <ForbiddenError reset={reset} />;
      case 503:
        return <ServiceUnavailableError reset={reset} />;
      default:
        return <InternalServerError reset={reset} />;
    }
  };

  return getErrorComponent();
}