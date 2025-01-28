'use client';

import BadRequestError from "./components/errors/BadRequestError";
import ForbiddenError from "./components/errors/ForbiddenError";
import InternalServerError from "./components/errors/InternalServerError";
import ServiceUnavailableError from "./components/errors/ServiceUnavailableError";
import UnauthorizedError from "./components/errors/UnauthorizedError";



export default function Error({ error, reset }) {
  const getErrorComponent = () => {
    switch (error.status) {
      case 400:
        return <BadRequestError />;
      case 401:
        return <UnauthorizedError />;
      case 403:
        return <ForbiddenError />;
      case 500:
        return <InternalServerError />;
      case 503:
        return <ServiceUnavailableError />;
      default:
        return <InternalServerError />;
    }
  };

  return getErrorComponent();
}