const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ status: 'ok' }));
});

server.listen(0, '127.0.0.1', () => {
  const port = server.address().port;
  const total = 1000;
  let completed = 0;
  const times = [];
  const start = Date.now();

  for (let i = 0; i < total; i++) {
    const requestStart = Date.now();

    http.get(`http://127.0.0.1:${port}`, (res) => {
      res.resume();
      res.on('end', () => {
        times.push(Date.now() - requestStart);
        completed++;

        if (completed === total) {
          const elapsed = (Date.now() - start) / 1000;
          times.sort((a, b) => a - b);
          const p99 = times[Math.floor(times.length * 0.99) - 1] || 0;
          const rps = Math.round(total / elapsed);

          console.log(`Requisições: ${total}`);
          console.log(`Vazão: ${rps} req/s`);
          console.log(`Latência p99: ${p99} ms`);

          server.close(() => {
            if (rps < 100) process.exitCode = 1;
          });
        }
      });
    }).on('error', (err) => {
      console.error(err);
      process.exitCode = 1;
      server.close();
    });
  }
});
