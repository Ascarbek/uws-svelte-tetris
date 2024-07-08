import nodemon from 'nodemon';

nodemon({
  script: 'src/rebuild.js',
  ext: 'ts js html json svelte',
  ignore: ['build/*', 'node_modules/*'],
});

nodemon
  .on('start', () => {
    console.log('Nodemon has started');
  })
  .on('quit', () => {
    console.log('Quitting');
    process.exit();
  })
  .on('exit', () => {})
  .on('restart', (files) => {
    console.log('Rebuilding due to: ', files);
  });
