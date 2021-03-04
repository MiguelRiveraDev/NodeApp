module.exports = {
    database: {
        connectionLimit: 10,
        host: process.env.DATABASE_HOST || 'b8vnwp5fcbgk0g0vrj1y-mysql.services.clever-cloud.com',
        user: process.env.DATABASE_USER || 'u2jkoqjyjvetcnww',
        password: process.env.DATABASE_PASSWORD || 'cQd86h9tkViX6D2sOasL',
        database: process.env.DATABASE_NAME || 'b8vnwp5fcbgk0g0vrj1y'
    },
    port: process.env.PORT || 4000
};