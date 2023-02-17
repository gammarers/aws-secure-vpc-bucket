# Secure Specific VPC only Bucket

Access to specific VPC Endpoint only Bucket

## Install

### TypeScript

```shell
npm install @yicr/secure-specific-vpc-only-bucket
```
or
```shell
yarn add @yicr/secure-specific-vpc-only-bucket
```

## Example

### TypeScript

```shell
npm install @yicr/secure-specific-vpc-only-bucket
```

```typescript
import { SecureSpecificVpcOnlyBucket } from '@yicr/secure-specific-vpc-only-bucket';

new SecureSpecificVpcOnlyBucket(stack, 'SecureSpecificVpcOnlyBucket', {
  bucketName: 'example-origin-bucket',
  vpcEndpointId: 'vpce-0xxxxxxxxxxxxxxxx', // created vpc endpoint id
});

```