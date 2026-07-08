const { execSync } = require('node:child_process');

const port = Number(process.argv[2] || 3000);

if (!Number.isInteger(port) || port <= 0) {
  console.error(`Invalid port: ${process.argv[2]}`);
  process.exit(1);
}

try {
  if (process.platform === 'win32') {
    execSync(`powershell -NoProfile -ExecutionPolicy Bypass -Command "$ids = Get-NetTCPConnection -LocalPort ${port} -ErrorAction SilentlyContinue | Select-Object -ExpandProperty OwningProcess -Unique; foreach ($id in $ids) { if ($id -and $id -ne $PID) { Stop-Process -Id $id -Force -ErrorAction SilentlyContinue } }; exit 0"`, { stdio: 'ignore' });
  } else {
    execSync(`lsof -ti:${port} | xargs -r kill -9`, { stdio: 'ignore' });
  }
} catch {
  process.exit(0);
}