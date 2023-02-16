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
  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();