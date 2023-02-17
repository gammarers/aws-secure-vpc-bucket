import { SecureBucket, SecureBucketEncryption } from '@yicr/secure-bucket';
import * as iam from 'aws-cdk-lib/aws-iam';
import { Construct } from 'constructs';

export interface SecureSpecificVpcOnlyBucketProps {
  readonly bucketName?: string;
  readonly vpcEndpointId: string;
}

export class SecureSpecificVpcOnlyBucket extends SecureBucket {

  constructor(scope: Construct, id: string, props: SecureSpecificVpcOnlyBucketProps) {
    super(scope, id, {
      bucketName: props.bucketName,
      encryption: SecureBucketEncryption.KMS_MANAGED,
      versioned: false,
    });

    // 👇Access to specific VPCE only
    this.addToResourcePolicy(new iam.PolicyStatement({
      effect: iam.Effect.DENY,
      actions: ['s3:*'],
      principals: [
        new iam.AnyPrincipal(),
      ],
      resources: [
        `${this.bucketArn}`,
        `${this.bucketArn}/*`,
      ],
      conditions: {
        StringNotEquals: {
          'aws:SourceVpc': props.vpcEndpointId,
        },
      },
    }));
  }
}
