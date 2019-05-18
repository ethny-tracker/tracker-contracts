import testdata from '../data/testdata';
import * as fs from 'fs';
import * as path from 'path';
import { FileMetadata } from '@ethny-tracker/tracker-protos';

const metadataFilePath = path.resolve(__dirname, '..', 'build', 'testmetadata');

fs.mkdirSync(metadataFilePath);

Object.keys(testdata).forEach(key => {
  const metadataBinary = FileMetadata.encode(testdata[ key ]).finish();

  fs.writeFileSync(path.resolve(metadataFilePath, key), metadataBinary);
});
