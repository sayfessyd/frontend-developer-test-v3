import { PhotoSizePipe } from './photo-size.pipe';

describe('PhotoSizePipe', () => {
  it('create an instance', () => {
    const pipe = new PhotoSizePipe();
    expect(pipe).toBeTruthy();
  });

  it('should parse URL', () => {
    const pipe = new PhotoSizePipe();
    expect(pipe.transform('https://picsum.photos/id/15/2500/1667', '300', '200')).toBe('https://picsum.photos/id/15/300/200');
  });
});
