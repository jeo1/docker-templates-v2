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