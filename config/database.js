module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cflppp9gp3ju5h5laid0-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'futjunioresdb'),
      user: env('DATABASE_USERNAME', 'admin'),
      password: env('DATABASE_PASSWORD', 'BI2hgrdfyezfkBQZ5BQIlWE8cgDJBw0D'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
