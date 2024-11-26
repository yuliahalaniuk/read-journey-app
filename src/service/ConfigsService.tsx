import { convertEnvToCamelCase } from "../utils/convertEnvToCamelCase";

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

  getFirebaseConfigs() {
    const firebaseConfigKeys: EnvKEysEnum[] = [
      EnvKEysEnum.FIREBASE_API_KEY,
      EnvKEysEnum.FIREBASE_AUTH_DOMAIN,
      EnvKEysEnum.FIREBASE_PROJECT_ID,
      EnvKEysEnum.FIREBASE_STORAGE_BUCKET,
      EnvKEysEnum.FIREBASE_MESSAGING_SENDER_ID,
      EnvKEysEnum.FIREBASE_APP_ID,
      EnvKEysEnum.FIREBASE_MEASUREMENT_ID,
      EnvKEysEnum.FIREBASE_DATABASE_URL,
    ];

    const newArr = firebaseConfigKeys.reduce((config, key) => {
      const camelCaseKey = convertEnvToCamelCase(
        key.replace(/REACT_APP_FIREBASE_/, "")
      );
      const value = this.getEnvVar(key);

      if (value) {
        config[camelCaseKey] = value;
      } 

      return config;
    }, {} as Record<string, string | undefined>);

    return newArr;
  }
}

const ConfigsService = new Service();
export default ConfigsService;
