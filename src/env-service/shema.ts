import convict from 'convict';
import convictFormatWithValidator from 'convict-format-with-validator';

import { IConfigSchema } from './interfaces/interface.js';

convict.addFormats(convictFormatWithValidator);

const configSchema = convict<IConfigSchema>({
  PORT: {
    doc: 'Port which will be used during developing',
    format: 'port',
    default: null,
    env: 'PORT',
  },
  DB_ADDRESS: {
    doc: 'Database address',
    format: 'ipaddress',
    default: null,
    env: 'DB_ADDRESS',
  },
  SALT: {
    doc: 'Just a random string (will be used for database in future)',
    format: String,
    default: null,
    env: 'SALT',
  }
});

export default configSchema;