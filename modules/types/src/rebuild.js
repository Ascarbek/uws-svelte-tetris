import child_process from 'child_process';

child_process.spawn('pnpm', ['run', 'run'], {
  stdio: ['ignore', 'inherit', 'inherit'],
  shell: true,
});
