import { Sequelize } from "sequelize";
import config from '../config/config.js';

const env = process.env.NODE_ENV || 'development';
const configEnv = config[env];

const sequelize = new Sequelize(configEnv.url, {
  dialect: configEnv.dialect,
  protocol: configEnv.dialect,
  logging: false,
});

// try {
//   await sequelize.authenticate();
//   console.log('Conexión establecida con éxito');
// } catch (error) {
//   console.error('No se pudo conectar:', error);
// }
