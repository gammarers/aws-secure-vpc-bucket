import { awscdk, javascript } from 'projen';
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'yicr',
  authorAddress: 'yicr@users.noreply.github.com',
  cdkVersion: '2.65.0',
  defaultReleaseBranch: 'main',
  name: '@gammarer/aws-secure-vpc-bucket',
  description: 'Access from specific VPC Endpoint only Bucket',
  keywords: ['aws', 'cdk', 'aws-cdk', 's3', 'bucket', 'vpc', 'endpoint', 'vpce'],
  projenrcTs: true,
  repositoryUrl: 'https://github.com/yicr/aws-secure-vpc-bucket.git',
  npmAccess: javascript.NpmAccess.PUBLIC,
  deps: [
    '@gammarer/aws-secure-bucket@^0.11.3',
  ],
  peerDeps: [
    '@gammarer/aws-secure-bucket@^0.11.3',
  ],
  minNodeVersion: '18.0.0',
  workflowNodeVersion: '16.19.1',
  depsUpgradeOptions: {
    workflowOptions: {
      labels: ['auto-approve', 'auto-merge'],
      schedule: javascript.UpgradeDependenciesSchedule.expressions(['0 18 * * *']),
    },
  },
  autoApproveOptions: {
    secret: 'GITHUB_TOKEN',
    allowedUsernames: ['yicr'],
  },
  publishToPypi: {
    distName: 'gammarer.aws-secure-vpc-bucket',
    module: 'gammarer.aws_secure_vpc_bucket',
  },
  publishToMaven: {
    mavenGroupId: 'com.gammarer',
    javaPackage: 'com.gammarer.cdk.aws.secure_vpc_bucket',
    mavenArtifactId: 'aws-secure-vpc-bucket',
    mavenEndpoint: 'https://s01.oss.sonatype.org',
  },
});
project.synth();