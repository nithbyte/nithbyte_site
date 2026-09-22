import http from 'http';

async function sendPacket(i) {
  return new Promise((resolve) => {
    // Malformed body triggers step 2 after passing step 1 rate limiter
    const postData = JSON.stringify({ invalid: true });

    const req = http.request({
      hostname: 'localhost',
      port: 3000,
      path: '/api/chat',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData),
      },
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        resolve({ index: i, status: res.statusCode, body: data.slice(0, 100) });
      });
    });

    req.on('error', (err) => {
      resolve({ index: i, error: err.message });
    });

    req.write(postData);
    req.end();
  });
}

async function run() {
  console.log('Sending 130 requests in rapid succession...');
  const promises = [];
  for (let i = 1; i <= 130; i++) {
    promises.push(sendPacket(i));
  }
  const res = await Promise.all(promises);
  const counts = {};
  res.forEach(r => counts[r.status] = (counts[r.status] || 0) + 1);
  console.log('Results breakdown:', counts);
  const sample429 = res.find(r => r.status === 429);
  if (sample429) {
    console.log('Sample 429 payload:', sample429.body);
  }
}

run().catch(console.error);
