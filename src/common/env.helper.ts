// https://blog.devgenius.io/environment-variables-in-nest-js-b989bb0370bf
export function getEnvFilePath(): string[] {
  const env: string | undefined = process.env.NODE_ENV
  if (env) {
    return [".env", `.env.${env}`]
  } else {
    return [".env"]
  }
}
