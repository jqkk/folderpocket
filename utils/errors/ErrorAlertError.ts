import CustomError from './CustomError';

class ErrorAlertError extends CustomError {
  constructor(message: string) {
    super(message);
    this.name = 'ErrorAlertError';
  }

  getOptions(): {
    title: string;
    status: 'error' | 'info' | 'warning' | 'success' | 'loading';
  } {
    return {
      title: 'Error',
      status: 'error',
    };
  }
}

export default ErrorAlertError;
