# AWS Secure VPC Bucket

Access from specific VPC Endpoint only Bucket

## Install

### TypeScript

```shell
npm install @gammarer/aws-secure-vpc-bucket
# or
yarn add @gammarer/aws-secure-vpc-bucket
```

## Example

### TypeScript

```shell
npm install @gammarer/aws-secure-vpc-bucket
```

```typescript
import { SecureSpecificVpcOnlyBucket } from '@gammarer/aws-secure-vpc-bucket';

new SecureVpcBucket(stack, 'SecureVpcBucket', {
  bucketName: 'example-origin-bucket',
  vpcEndpointId: 'vpce-0xxxxxxxxxxxxxxxx', // allready created vpc endpoint id
});

```

## License

This project is licensed under the Apache-2.0 License.
