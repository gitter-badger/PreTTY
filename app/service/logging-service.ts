// This service is to provide central and configurable modules to support application service requirement
// for application logging, get a logger instead.

class LoggingService {
  public writeLogEntry(entry: string) {
    console.log(entry);
  }
}

export const loggingService = new LoggingService();
