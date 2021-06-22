import {device, element, by} from 'detox';

beforeEach(async () => {
  await device.launchApp();
});

for (let index = 0; index < 20; index++) {
  describe('Example Test', () => {
    it('has no coffee', async () => {
      await expect(element(by.text('Pizza'))).toBeVisible();
    });
  });
}
