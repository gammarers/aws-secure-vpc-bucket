# AWS Secure VPC Bucket

[![GitHub](https://img.shields.io/github/license/gammarers/aws-secure-vpc-bucket?style=flat-square)](https://github.com/gammarers/aws-secure-vpc-bucket/blob/main/LICENSE)
[![npm (scoped)](https://img.shields.io/npm/v/@gammarers/aws-secure-vpc-bucket?style=flat-square)](https://www.npmjs.com/package/@gammarers/aws-secure-vpc-bucket)
[![PyPI](https://img.shields.io/pypi/v/gammarers.aws-secure-vpc-bucket?style=flat-square)](https://pypi.org/project/gammarers.aws-secure-vpc-bucket/)
[![Nuget](https://img.shields.io/nuget/v/Gammarers.CDK.AWS.SecureVpcBucket?style=flat-square)](https://www.nuget.org/packages/Gammarers.CDK.AWS.SecureVpcBucket/)
[![GitHub Workflow Status (branch)](https://img.shields.io/github/actions/workflow/status/gammarers/aws-secure-vpc-bucket/release.yml?branch=main&label=release&style=flat-square)](https://github.com/gammarers/aws-secure-vpc-bucket/actions/workflows/release.yml)
[![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/gammarers/aws-secure-vpc-bucket?sort=semver&style=flat-square)](https://github.com/gammarers/aws-secure-vpc-bucket/releases)

[![View on Construct Hub](https://constructs.dev/badge?package=@gammarers/aws-secure-vpc-bucket)](https://constructs.dev/packages/@gammarers/aws-secure-vpc-bucket)

Access from specific VPC Endpoint only Bucket

## Install

### TypeScript

```shell
npm install @gammarers/aws-secure-vpc-bucket
# or
yarn add @gammarers/aws-secure-vpc-bucket
```

### Python

```shell
pip install gammarers.aws-secure-vpc-bucket
```

### C# / .NET

```shell
dotnet add package gammarers.CDK.AWS.SecureVpcBucket
```

## Example

```typescript
import { SecureSpecificVpcOnlyBucket } from '@gammarers/aws-secure-vpc-bucket';

new SecureVpcBucket(stack, 'SecureVpcBucket', {
  bucketName: 'example-origin-bucket',
  vpcEndpointId: 'vpce-0xxxxxxxxxxxxxxxx', // already created vpc endpoint id
});

```

## License

This project is licensed under the Apache-2.0 License.
