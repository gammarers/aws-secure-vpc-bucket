# AWS Secure VPC Bucket

Access from specific VPC Endpoint only Bucket

## Install

### TypeScript

```shell
npm install @yicr/aws-secure-vpc-bucket
```
or
```shell
yarn add @yicr/aws-secure-vpc-bucket
```

## Example

### TypeScript

```shell
npm install @yicr/aws-secure-vpc-bucket
```

```typescript
import { SecureSpecificVpcOnlyBucket } from '@yicr/aws-secure-vpc-bucket';

new SecureVpcBucket(stack, 'SecureVpcBucket', {
  bucketName: 'example-origin-bucket',
  vpcEndpointId: 'vpce-0xxxxxxxxxxxxxxxx', // allready created vpc endpoint id
});

```