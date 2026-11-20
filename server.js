const http = require('http');
const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  connectionLimit: 5,
});

http.createServer(async (req, res) => {
  const send = (code, obj) => {
    res.writeHead(code, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(obj));
  };

  if (req.headers.authorization !== `Bearer ${process.env.API_TOKEN}`)
    return send(401, { error: 'unauthorized' });
  if (req.method !== 'POST' || req.url !== '/sql')
    return send(404, { error: 'use POST /sql' });

  let body = '';
  for await (const chunk of req) body += chunk;

  try {
    const { sql, params = [] } = JSON.parse(body);
    const [result] = await pool.query(sql, params);
    send(200, { result });
  } catch (e) {
    send(400, { error: e.message });
  }
}).listen(3000, () => console.log('gateway listening on :3000'));