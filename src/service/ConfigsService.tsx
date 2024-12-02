export enum EnvKEysEnum {
  GOOGLE_BOOKS_API_KEY = "REACT_APP_GOOGLE_BOOKS_API_KEY",
  GOOGLE_BOOKS_BASE_API_URL = "REACT_APP_GOOGLE_BOOKS_BASE_API_URL",
  FIREBASE_API_KEY = "REACT_APP_FIREBASE_API_KEY",
  FIREBASE_AUTH_DOMAIN = "REACT_APP_FIREBASE_AUTH_DOMAIN",
  FIREBASE_PROJECT_ID = "REACT_APP_FIREBASE_PROJECT_ID",
  FIREBASE_STORAGE_BUCKET = "REACT_APP_FIREBASE_STORAGE_BUCKET",
  FIREBASE_MESSAGING_SENDER_ID = "REACT_APP_FIREBASE_MESSAGING_SENDER_ID",
  FIREBASE_APP_ID = "REACT_APP_FIREBASE_APP_ID",
  FIREBASE_MEASUREMENT_ID = "REACT_APP_FIREBASE_MEASUREMENT_ID",
  FIREBASE_DATABASE_URL = "REACT_APP_FIREBASE_DATABASE_URL",
}

class Service {
  getEnvVar = (key: EnvKEysEnum): string | undefined => {
    const envVar = process.env[key];

    if (!envVar) {
      console.warn(`Environment variable ${key} is not defined!`);
    }

    return envVar;
  };

  getForFirebase() {
    const firebaseConfigKeys = {
      apiKey: EnvKEysEnum.FIREBASE_API_KEY,
      authDomain: EnvKEysEnum.FIREBASE_AUTH_DOMAIN,
      projectId: EnvKEysEnum.FIREBASE_PROJECT_ID,
      storageBucket: EnvKEysEnum.FIREBASE_STORAGE_BUCKET,
      messagingSenderId: EnvKEysEnum.FIREBASE_MESSAGING_SENDER_ID,
      appId: EnvKEysEnum.FIREBASE_APP_ID,
      measurementId: EnvKEysEnum.FIREBASE_MEASUREMENT_ID,
      databaseURL: EnvKEysEnum.FIREBASE_DATABASE_URL,
    };

    const config = Object.entries(firebaseConfigKeys).reduce(
      (acc, [key, envKey]) => {
        const value = process.env[envKey];
        if (value) {
          acc[key] = value;
        }
        return acc;
      },
      {} as Record<string, string>
    );

    return config;
  }
}

const ConfigsService = new Service();
export default ConfigsService;
