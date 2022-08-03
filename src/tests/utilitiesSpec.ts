import { resize } from '../utilities';

describe('Resizing function tests', () => {
  it('expects resize function to return resized image path', async () => {
    expect(await resize('fjord', 200, 100)).toEqual(
      `assets/resized/fjord_200_100.jpg`
    );
  });
});
