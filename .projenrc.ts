import { awscdk } from 'projen';
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'yicr',
  authorAddress: 'yicr@users.noreply.github.com',
  cdkVersion: '2.65.0',
  defaultReleaseBranch: 'main',
  name: '@yicr/secure-specific-vpc-only-bucket',
  description: 'Access to specific VPC Endpoint only Bucket',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/yicr/secure-specific-vpc-only-bucket.git',
  deps: [
    '@yicr/secure-bucket',
  ],
  peerDeps: [
    '@yicr/secure-bucket',
  ],
});
project.synth();