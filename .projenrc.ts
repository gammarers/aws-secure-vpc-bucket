import { awscdk, javascript } from 'projen';
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'yicr',
  authorAddress: 'yicr@users.noreply.github.com',
  cdkVersion: '2.80.0',
  constructsVersion: '10.0.5',
  typescriptVersion: '5.2.x',
  jsiiVersion: '5.2.x',
  defaultReleaseBranch: 'main',
  name: '@gammarer/aws-secure-vpc-bucket',
  description: 'Access from specific VPC Endpoint only Bucket',
  keywords: ['aws', 'cdk', 'aws-cdk', 's3', 'bucket', 'vpc', 'endpoint', 'vpce'],
  projenrcTs: true,
  repositoryUrl: 'https://github.com/gammarer/aws-secure-vpc-bucket.git',
  majorVersion: 1,
  npmAccess: javascript.NpmAccess.PUBLIC,
  devDeps: [
    '@gammarer/aws-secure-bucket@~1.1.0',
  ],
  peerDeps: [
    '@gammarer/aws-secure-bucket@~1.1.0',
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
    distName: 'gammarer.aws-secure-vpc-bucket',
    module: 'gammarer.aws_secure_vpc_bucket',
  },
  publishToMaven: {
    mavenGroupId: 'com.gammarer',
    javaPackage: 'com.gammarer.cdk.aws.secure_vpc_bucket',
    mavenArtifactId: 'aws-secure-vpc-bucket',
    mavenEndpoint: 'https://s01.oss.sonatype.org',
  },
  publishToNuget: {
    dotNetNamespace: 'Gammarer.CDK.AWS',
    packageId: 'Gammarer.CDK.AWS.SecureVpcBucket',
  },
});
project.synth();