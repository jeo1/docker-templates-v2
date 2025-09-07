- `.env` settings
```env
COMPOSE_PROJECT_NAME=influxdb
TIMEZONE=America/Toronto

CONTAINER_NAME=influxdb

# Update
INFLUXDB_DATA=<path to influxdb data>
INFLUXDB_CONFIG=<path to influxdb config>
INFLUXDB_PORT=<influxdb port>
```

- `private/.env.influxdb2-admin-password`
```
admin
```

- `private/.env.influxdb2-admin-token`
```
MyInitialAdminPassword
```

- `private/.env.influxdb2-admin-username`
```
MyInitialAdminToken0==
```

### Notes
- https://docs.influxdata.com/influxdb/v2/install/use-docker-compose/
