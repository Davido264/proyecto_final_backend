import ftp from 'basic-ftp';
import { Buffer } from 'node:buffer';
import { Readable } from 'node:stream';

function completeFilePath(object: any, filepathProperty: string): any {
  const parentFolder = process.env.FILE_SERVER_URL;
  const newObject = Object.assign(object, {
    [filepathProperty]: `${parentFolder}/${object[filepathProperty]}`,
  });
  return newObject;
}

async function uploadFTP(fileName: string, buffer: Buffer) {
  const stream = new Readable({
    read() {
      this.push(buffer);
      this.push(null);
    },
  });

  console.log('conecting to FTP and sending data');

  const client = new ftp.Client();
  try {
    await client.access({
      host: process.env.FTP_URL,
      user: process.env.FTP_USER,
      password: process.env.FTP_PASSWORD,
    });

    await client.cd(process.env.FTP_DIR as string);
    await client.uploadFrom(stream, fileName);
  } catch (err) {
    console.log(err);
  } finally {
    client.close();
  }
}

export { completeFilePath, uploadFTP };
