const required = (name: string): string => {
    const value = process.env[name];
    if (!value) {
        throw new Error(`Missing required environment variable ${name} (see .env.example)`);
    }
    return value;
};

export const config = {
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT || 3306),
    user: required('DB_USER'),
    password: required('DB_PASSWORD'),
    database: process.env.DB_NAME || 'EventScheduler',
    jwtTokenSecret: required('JWT_SECRET'),
    jwtTokenLifespan: Number(process.env.JWT_LIFESPAN_MINUTES || 60),
};
