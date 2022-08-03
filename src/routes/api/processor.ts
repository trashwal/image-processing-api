import express, { Request, Response } from 'express';
import fs from 'fs';
import { resize, inputDir, outputDir } from '../../utilities';

const processor = express.Router();

processor.get('/', async (req: Request, res: Response): Promise<void> => {
  const filename = (await req.query.filename) as string;
  const width =
    (await req.query.width) === undefined ? 200 : Number(req.query.width);
  const height =
    (await req.query.height) === undefined ? 200 : Number(req.query.height);
  const resizedImagePath = `${outputDir}/${filename}_${width}_${height}.jpg`;
  const originalImagePath = `${inputDir}/${filename}.jpg`;

  if (Object.keys(req.query).length === 0) {
    res.status(200).send('Processor');
  } else if (filename === undefined) {
    res.status(400).send('Missing filename parameter!');
  } else if (!fs.existsSync(originalImagePath)) {
    res.status(404).send('Image does not exist!');
  } else if (!width || !height || width < 1 || height < 1) {
    res
      .status(400)
      .send('Width and Height parameters must be positive numbers!');
  } else if (fs.existsSync(resizedImagePath)) {
    res.status(200).sendFile(resizedImagePath, { root: './' });
  } else {
    const newResizedImage = await resize(filename, width, height);
    res.status(200).sendFile(newResizedImage, { root: './' });
  }
});

export default processor;
