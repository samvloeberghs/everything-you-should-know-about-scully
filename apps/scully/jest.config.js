module.exports = {
  name: 'scully',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/scully',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
