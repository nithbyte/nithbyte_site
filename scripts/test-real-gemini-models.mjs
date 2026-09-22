import { GoogleGenAI } from "@google/genai";
import fs from 'fs';
import path from 'path';

// Read .env.local manually
const envPath = path.join(process.cwd(), '.env.local');
let apiKey = '';
if (fs.existsSync(envPath)) {
  const content = fs.readFileSync(envPath, 'utf8');
  const match = content.match(/GEMINI_API_KEY\s*=\s*(.+)/);
  if (match) {
    apiKey = match[1].trim().replace(/^["']|["']$/g, '');
  }
}

console.log('========================================================');
console.log('REAL GEMINI API MODEL & QUOTA PROBE');
console.log('========================================================');
console.log(`API Key configured: ${apiKey ? 'YES (Length: ' + apiKey.length + ' chars)' : 'NO'}\n`);

const client = new GoogleGenAI({ apiKey });

const CANDIDATE_MODELS = [
  "gemini-2.5-flash",
  "gemini-2.0-flash",
  "gemini-2.0-flash-lite",
  "gemini-1.5-flash",
  "gemini-1.5-flash-8b",
  "gemini-1.5-pro",
  "gemini-flash-lite-latest",
  "gemini-flash-latest",
  "gemini-3.5-flash",
  "gemini-3.6-flash",
  "gemini-3.7-flash"
];

async function probeModels() {
  const results = [];
  for (const model of CANDIDATE_MODELS) {
    const start = Date.now();
    try {
      const response = await client.models.generateContent({
        model: model,
        contents: "Respond with the word 'OK' and your model identifier.",
      });
      const elapsed = Date.now() - start;
      const text = response?.text || 'No text';
      console.log(`✅ [${model.padEnd(26)}] -> HTTP 200 (${elapsed}ms) | Response: "${text.trim().replace(/\n/g, ' ')}"`);
      results.push({ model, status: 'AVAILABLE', elapsed, response: text.trim() });
    } catch (err) {
      const elapsed = Date.now() - start;
      const is404 = err?.message?.includes('not found') || err?.message?.includes('404');
      const is429 = err?.message?.includes('quota') || err?.message?.includes('429');
      console.log(`❌ [${model.padEnd(26)}] -> ERROR (${elapsed}ms) | ${err?.message?.slice(0, 100)}`);
      results.push({ model, status: is404 ? 'NOT_FOUND_404' : (is429 ? 'RATE_LIMITED_429' : 'ERROR'), error: err.message });
    }
  }

  console.log('\n--- SUMMARY OF VALID PRODUCTION MODELS ---');
  const valid = results.filter(r => r.status === 'AVAILABLE');
  console.log(`Available Models (${valid.length}): ${valid.map(v => v.model).join(', ')}`);
  const invalid = results.filter(r => r.status !== 'AVAILABLE');
  console.log(`Invalid Models (${invalid.length}): ${invalid.map(v => `${v.model} (${v.status})`).join(', ')}`);
}

probeModels().catch(console.error);
