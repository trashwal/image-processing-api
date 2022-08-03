import sharp from 'sharp';

const inputDir = 'assets/images';
const outputDir = 'assets/resized';

export default async function resize(
  filename: string,
  width: number,
  height: number
): Promise<string> {
  {
    const resizedImagePath =
      await `${outputDir}/${filename}_${width}_${height}.jpg`;
    await sharp(`${inputDir}/${filename}.jpg`)
      .resize(width, height)
      .toFile(resizedImagePath);
    return resizedImagePath;
  }
}

export { resize, inputDir, outputDir };
