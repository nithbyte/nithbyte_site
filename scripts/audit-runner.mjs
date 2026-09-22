import http from 'http';

const VALID_ROUTES = [
  '/',
  '/about',
  '/services',
  '/services/web-development',
  '/services/mobile-apps',
  '/services/e-commerce',
  '/services/digital-marketing',
  '/services/ai-automation',
  '/solutions',
  '/work',
  '/work/alps-cafe-nagercoil',
  '/work/coming-soon-02',
  '/work/coming-soon-03',
  '/labs',
  '/insights',
  '/insights/engineering-for-velocity-and-longevity',
  '/insights/practical-ai-beyond-chat-interfaces',
  '/insights/sub-second-commerce-friction-mitigation',
  '/insights/editorial-interaction-design-systems',
  '/contact',
  '/careers',
  '/privacy',
  '/terms',
  '/robots.txt',
  '/sitemap.xml'
];

const INVALID_ROUTES = [
  '/something-that-does-not-exist',
  '/work/non-existent-project',
  '/insights/non-existent-insight'
];

async function checkRoute(urlPath) {
  return new Promise((resolve) => {
    const options = {
      hostname: 'localhost',
      port: 3000,
      path: urlPath,
      method: 'GET',
    };

    const req = http.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        const titleMatch = data.match(/<title[^>]*>(.*?)<\/title>/i);
        const title = titleMatch ? titleMatch[1] : 'None';
        const hasMetaDesc = data.includes('name="description"');
        const hasViewport = data.includes('name="viewport"');
        const hasOg = data.includes('property="og:title"') || data.includes('property="og:site_name"');
        const hasCanonical = data.includes('rel="canonical"') || data.includes('nithbyte.com');
        const hasLang = data.includes('lang="en"');

        resolve({
          path: urlPath,
          statusCode: res.statusCode,
          contentType: res.headers['content-type'],
          contentLength: data.length,
          title,
          hasMetaDesc,
          hasViewport,
          hasOg,
          hasCanonical,
          hasLang,
          isHtml: res.headers['content-type']?.includes('text/html'),
          bodySnippet: data.slice(0, 300)
        });
      });
    });

    req.on('error', (err) => {
      resolve({
        path: urlPath,
        error: err.message,
      });
    });

    req.end();
  });
}

async function testChatApi() {
  return new Promise((resolve) => {
    const postData = JSON.stringify({
      messages: [{ role: 'user', content: 'What does NithByte do?' }]
    });

    const options = {
      hostname: 'localhost',
      port: 3000,
      path: '/api/chat',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData),
      },
    };

    const req = http.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        resolve({
          statusCode: res.statusCode,
          contentType: res.headers['content-type'],
          responseSnippet: data.slice(0, 200),
          length: data.length,
          success: res.statusCode === 200 && data.length > 0
        });
      });
    });

    req.on('error', (err) => {
      resolve({ error: err.message, success: false });
    });

    req.write(postData);
    req.end();
  });
}

async function testContactApi() {
  return new Promise((resolve) => {
    const postData = JSON.stringify({
      name: 'QA Audit Test',
      email: 'qa@nithbyte.com',
      company: 'NithByte QA',
      country: 'India',
      projectType: 'Web Development',
      projectStage: 'Architecture',
      budget: '$5,000 - $10,000',
      description: 'Automated QA suite test for contact API verification.'
    });

    const options = {
      hostname: 'localhost',
      port: 3000,
      path: '/api/contact',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData),
      },
    };

    const req = http.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        resolve({
          statusCode: res.statusCode,
          contentType: res.headers['content-type'],
          response: data,
          success: res.statusCode === 200
        });
      });
    });

    req.on('error', (err) => {
      resolve({ error: err.message, success: false });
    });

    req.write(postData);
    req.end();
  });
}

async function runComprehensiveAudit() {
  console.log('========================================================');
  console.log('NITHBYTE COMPREHENSIVE PRODUCTION QA AUDIT SUITE');
  console.log('========================================================\n');

  console.log('--- 1. VALID ROUTE & METADATA VERIFICATION ---');
  let validPassed = 0;
  for (const route of VALID_ROUTES) {
    const res = await checkRoute(route);
    const pass = res.statusCode === 200;
    if (pass) validPassed++;
    const icon = pass ? '✅ PASS' : '❌ FAIL';
    console.log(`${icon} [${res.statusCode}] | ${route.padEnd(52)} | Title: "${res.title}"`);
  }

  console.log(`\nValid Routes Result: ${validPassed}/${VALID_ROUTES.length} passed.`);

  console.log('\n--- 2. 404 / ERROR EXPERIENCE VERIFICATION ---');
  let invalidPassed = 0;
  for (const route of INVALID_ROUTES) {
    const res = await checkRoute(route);
    const pass = res.statusCode === 404;
    if (pass) invalidPassed++;
    const icon = pass ? '✅ PASS (404 Handled)' : '❌ FAIL';
    console.log(`${icon} [${res.statusCode}] | ${route.padEnd(52)}`);
  }
  console.log(`404 Route Handling: ${invalidPassed}/${INVALID_ROUTES.length} passed.`);

  console.log('\n--- 3. API ENDPOINT VERIFICATION ---');
  const chatRes = await testChatApi();
  console.log(`Chat API (/api/chat): Status ${chatRes.statusCode} | Length: ${chatRes.length} bytes | Success: ${chatRes.success ? '✅ PASS' : '❌ FAIL'}`);
  if (chatRes.responseSnippet) {
    console.log(`Snippet: "${chatRes.responseSnippet.replace(/\n/g, ' ')}..."`);
  }

  const contactRes = await testContactApi();
  console.log(`Contact API (/api/contact): Status ${contactRes.statusCode} | Success: ${contactRes.success ? '✅ PASS' : '❌ FAIL'}`);
  console.log(`Response: ${contactRes.response}`);

  console.log('\n========================================================');
  console.log('AUDIT RUN COMPLETED');
  console.log('========================================================');
}

runComprehensiveAudit().catch(console.error);
