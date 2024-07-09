export const LogMessage: (msg: string, ...optionalData: any) => void = (msg, ...optionalData) => {
  console.log(`[${new Date().toISOString()}]: ${msg}`, ...optionalData);
};

export const LogError: (msg: string, ...optionalData: any) => void = (msg, ...optionalData) => {
  console.error(`[${new Date().toISOString()}]: ${msg}`, ...optionalData);
};
