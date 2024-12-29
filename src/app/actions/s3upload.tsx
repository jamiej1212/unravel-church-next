import { S3Client, PutObjectCommand, PutObjectCommandInput } from '@aws-sdk/client-s3';

// Initialize AWS S3 instance
const s3 = new S3Client({
  region: process.env.AWS_REGION!,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

export async function uploadToS3(fileBuffer: Buffer, fileName: string) {
  // Creating an object to match the parameter type of the PutObjectCommand
  const params: PutObjectCommandInput = {
    Bucket: process.env.AWS_BUCKET_NAME!,  // bucket name
    Key: `uploads/${fileName}`,  // file url and name
    Body: fileBuffer,  // file contents
    ContentType: 'image/jpeg',  // assign file type
  };

  try {
    // Instantiate a PutObjectCommand and send the request using send().
    const command = new PutObjectCommand(params);
    const data = await s3.send(command);

    return {
      status: true,
      fileUrl: `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/uploads/${fileName}`,  // 파일 URL 생성
    };
  } catch (err) {
    console.error('Error uploading file to S3:', err);
    return { status: false, error: 'Failed to upload to S3' };
  }
}
