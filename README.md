```bash
source .env
docker exec -it mariadb mariadb -u "$MARIADB_USER" -p"$MARIADB_PASSWORD" "$MARIADB_DATABASE" \
  -e "DROP TABLE IF EXISTS test_table; CREATE TABLE test_table (a TEXT, b TEXT, c TEXT);"



curl -X POST http://192.168.1.123:8080/sql \
  -H "Authorization: Bearer change_me_to_a_long_random_token" \
  -H "Content-Type: application/json" \
  -d '{"sql": "INSERT INTO test_table (a, b, c) VALUES (?, ?, ?)", "params": ["AA", "BB", "CC"]}'



curl -X POST http://192.168.1.123:8080/sql \
  -H "Authorization: Bearer change_me_to_a_long_random_token" \
  -H "Content-Type: application/json" \
  -d '{"sql": "SELECT * FROM test_table"}'


```

## Setup

Put the secrets in a settings file, e.g. `/tmp/settings.yml`:

```yaml
MARIADB_ROOT_PASSWORD: change_me
MARIADB_PASSWORD: change_me
API_TOKEN: change_me
```

Then create `.env` and `private/.env` from `env.j2` / `env-private.j2` and start the containers:

```bash
ansible-playbook setup.yml -e @/tmp/settings.yml
```

This needs the `community.docker` collection. It comes with the full `ansible` package; with only `ansible-core`, install it once:

```bash
ansible-galaxy collection install -r requirements.yml
```

Override any other value with `-e`, e.g. `-e HTTP_PORT=9090`.
