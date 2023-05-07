abstract class CustomError extends Error {
  constructor(message: string) {
    super(message);
  }

  abstract getOptions(): {
    title: string;
    status: 'error' | 'info' | 'warning' | 'success' | 'loading';
  };
}

export default CustomError;
