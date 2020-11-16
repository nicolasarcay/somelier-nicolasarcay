
Package.describe({
  name: 'Somelier - Agencia de turismo en Mendoza', 
  summary: 'Somos una agencia de turismo de Mendoza. Especializada en Tours Premium por Lujan de Cuyo, Maipu y el Valle Uco. Experiencias privadas y grupales.',
  version: '4.5.3',
  git: 'https://github.com/nicolasarcay/somelier-nicolasarcay/'
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@1.0');
  api.use('jquery', 'client');
  api.addFiles([
    'dist/css/bootstrap.css',
    'dist/js/bootstrap.js'
  ], 'client');
});
