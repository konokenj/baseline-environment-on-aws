import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { BLEAGovBaseStandaloneStack } from '../lib/stack/blea-gov-base-standalone-stack';
import { devParameter } from '../parameter';

test('Snapshot test for BLEAGovBaseStandalone Stack', () => {
  const app = new cdk.App();
  const stack = new BLEAGovBaseStandaloneStack(app, 'Dev-BLEABaseStandalone', {
    securityNotifyEmail: devParameter.securityNotifyEmail,
    tags: { Environment: devParameter.envName },
  });

  // test with snapshot
  expect(Template.fromStack(stack)).toMatchSnapshot();
});
