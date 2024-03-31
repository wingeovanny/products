import 'dotenv/config';
import * as joi from 'joi';
//esquema de validacion de variables de entorno
interface IenvVars {
  PORT: number;
  NODE_ENV: string;
}
const envsSchema = joi
  .object({
    PORT: joi.number().required(),
  })
  .unknown(true);

const { error, value } = envsSchema.validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}
const envVars: IenvVars = value;

export const envs = {
  PORT: envVars.PORT || 3000,
  NODE_ENV: envVars.NODE_ENV || 'development',
};
