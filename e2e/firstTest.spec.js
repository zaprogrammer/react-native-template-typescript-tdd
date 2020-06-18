describe('Home Screen', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should show RSS flat list ', async () => {
    await expect(element(by.id('flat-list-rss-cat'))).toBeVisible();
  });

  it('should show detail screen after tap', async () => {
    await element(by.text('NyTimes - Technology')).tap();
    // await expect(element(by.text('Hello!'))).toBeVisible();
    await expect(element(by.id('flat-list-rss-list'))).toBeVisible();
  });
});
