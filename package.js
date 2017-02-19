Package.describe({
  name: '3stack:aws-sdk-server',
  version: '2.7.21',
  summary: 'NPM binding for AWS SDK',
  git: 'https://github.com/3stack-software/meteor-aws-sdk-server',
  documentation: 'README.md'
});

Npm.depends({
  'aws-sdk': '2.7.21'
});


Package.onUse(function (api) {
  api.versionsFrom('METEOR@1.2.1');

  api.export(['AWS'], ['server']);

  api.addFiles([
    "aws.js"
  ], ["server"]);
});
