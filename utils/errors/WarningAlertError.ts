import CustomError from './CustomError';

class WarningAlertError extends CustomError {
  constructor(message: string) {
    super(message);
    this.name = 'WarningAlertError';
  }

  getOptions(): {
    title: string;
    status: 'error' | 'info' | 'warning' | 'success' | 'loading';
  } {
    return {
      title: 'Warning',
      status: 'warning',
    };
  }
}

export default WarningAlertError;
