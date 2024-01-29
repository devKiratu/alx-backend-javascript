process.stdin.setEncoding('utf8');
const message = 'Welcome to Holberton School, what is your name?';
process.stdout.write(`${message}\n`);

if (process.stdin.isTTY) {
  process.stdin.on('readable', () => {
    const chunk = process.stdin.read();
    if (chunk) {
      process.stdin.write(`Your name is: ${chunk}`);
    }
  });
} else {
  process.stdin.on('data', (data) => {
    process.stdout.write(data);
  });
  process.stdin.on('end', () => {
    process.stdout.write('This important software is now closing\n');
  });
}
