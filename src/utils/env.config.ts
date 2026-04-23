import * as dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../../.env') });

export const Config = {
    baseUrl: process.env.BASE_URL || 'http://eaapp.somee.com/',
    admin: {
        username: process.env.ADMIN_USERNAME || 'admin',
        password: process.env.ADMIN_PASSWORD || 'password',
    },
    headless: process.env.HEADLESS === 'true',
    timeout: parseInt(process.env.TIMEOUT || '30000', 10),
};
