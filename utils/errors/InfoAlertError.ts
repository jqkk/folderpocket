import CustomError from './CustomError';

class InfoAlertError extends CustomError {
  constructor(message: string) {
    super(message);
    this.name = 'InfoAlertError';
  }

  getOptions(): {
    title: string;
    status: 'error' | 'info' | 'warning' | 'success' | 'loading';
  } {
    return {
      title: 'Info',
      status: 'info',
    };
  }
}

export default InfoAlertError;
