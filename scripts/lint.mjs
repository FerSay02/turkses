import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walk(fullPath)));
      continue;
    }

    if (/\.(ts|tsx)$/.test(entry.name)) {
      files.push(fullPath);
    }
  }

  return files;
}

const files = await walk('src');
const problems = [];

for (const file of files) {
  const content = await readFile(file, 'utf8');
  if (content.includes('console.log(')) {
    problems.push(`${file}: console.log found`);
  }
  if (content.includes('TODO')) {
    problems.push(`${file}: TODO found`);
  }
}

if (problems.length > 0) {
  console.error(problems.join('\n'));
  process.exitCode = 1;
}
