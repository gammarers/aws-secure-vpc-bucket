import { awscdk, javascript } from 'projen';
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'yicr',
  authorAddress: 'yicr@users.noreply.github.com',
  cdkVersion: '2.80.0',
  constructsVersion: '10.0.5',
  typescriptVersion: '5.3.x',
  jsiiVersion: '5.3.x',
  defaultReleaseBranch: 'main',
  name: '@gammarers/aws-secure-vpc-bucket',
  description: 'Access from specific VPC Endpoint only Bucket',
  keywords: ['aws', 'cdk', 'aws-cdk', 's3', 'bucket', 'vpc', 'endpoint', 'vpce'],
  projenrcTs: true,
  repositoryUrl: 'https://github.com/gammarers/aws-secure-vpc-bucket.git',
  majorVersion: 1,
  npmAccess: javascript.NpmAccess.PUBLIC,
  deps: [
    '@gammarers/aws-secure-bucket@~1.4.1',
  ],
  peerDeps: [
    '@gammarers/aws-secure-bucket@~1.4.1',
  ],
  minNodeVersion: '18.0.0',
  workflowNodeVersion: '20.11.0',
  depsUpgradeOptions: {
    workflowOptions: {
      labels: ['auto-approve', 'auto-merge'],
      schedule: javascript.UpgradeDependenciesSchedule.expressions(['0 18 * * 0']), // every sunday (JST/MON:03:00)
    },
  },
  autoApproveOptions: {
    secret: 'GITHUB_TOKEN',
    allowedUsernames: ['yicr'],
  },
  publishToPypi: {
    distName: 'gammarers.aws-secure-vpc-bucket',
    module: 'gammarers.aws_secure_vpc_bucket',
  },
  publishToNuget: {
    dotNetNamespace: 'Gammarers.CDK.AWS',
    packageId: 'Gammarers.CDK.AWS.SecureVpcBucket',
  },
});
project.synth();