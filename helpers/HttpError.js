const errorMessage = {
  400: 'Bad Request',
  401: 'Unauthorized',
  403: 'Forbidden',
  404: 'Not Found',
  409: 'Conflict',
  500: 'Internal Server Error',
  501: 'Not Implemented',
  502: 'Bad Gateway',
  503: 'Service Unavailable',
  504: 'Gateway Timeout',
};

const HttpError = (status, message = errorMessage[status]) => {
  const error = new Error(message);
  error.status = status;
  return error;
};

module.exports = HttpError;

// class HttpErr extends Error {
//   constructor(status, message = errorMessage[status]) {
//     super(message);
//     this.status = status;
//   }
// }

// module.exports = HttpErr;
