import ftp from 'basic-ftp';
import { Readable } from 'node:stream';

function completeFilePath(object, filepathProperty) {
  const parentFolder = process.env.FILE_SERVER_URL;
  const newObject = Object.assign(object, {
    [filepathProperty]: `${parentFolder}/${object[filepathProperty]}`,
  });
  return newObject;
}

async function uploadFTP(fileName, buffer) {
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

    await client.cd(process.env.FTP_DIR);
    await client.uploadFrom(stream, fileName);
  } catch (err) {
    console.log(err);
  } finally {
    client.close();
  }
}

export { completeFilePath, uploadFTP };
