declare namespace NodeJS {
  interface ProcessEnv {
    DATABASE_URL: string;
    DATABASE_NAME: string
    NEXT_AUTH_SECRET: string;
    ACCESS_KEY: string;
    SECRET_KET: string;
    MINIO_ENDPOINT: string;
    MINIO_PORT: number;
    MINIO_BUCKET: string;
    MINIO_ACCESSKEY: string;
    MINIO_SECRETKEY: string;
  }
}
