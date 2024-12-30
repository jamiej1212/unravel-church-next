import { S3Client, PutObjectCommand, PutObjectCommandInput, DeleteObjectCommand } from '@aws-sdk/client-s3';

// Initialize AWS S3 instance
const s3 = new S3Client({
  region: process.env.AWS_REGION!,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

// Upload file to S3
export async function uploadToS3(fileBuffer: Buffer, fileName: string) {
  const params: PutObjectCommandInput = {
    Bucket: process.env.AWS_BUCKET_NAME!,
    Key: `uploads/${fileName}`,
    Body: fileBuffer,
    ContentType: 'image/jpeg', // Adjust as needed based on file type
  };

  try {
    const command = new PutObjectCommand(params);
    const data = await s3.send(command);

    return {
      status: true,
      fileUrl: `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/uploads/${fileName}`,
    };
  } catch (err) {
    console.error('Error uploading file to S3:', err);
    return { status: false, error: 'Failed to upload to S3' };
  }
}

// Delete file from S3
export async function deleteFromS3(fileName: string) {
  const params = {
    Bucket: process.env.AWS_BUCKET_NAME!,
    Key: `uploads/${fileName}`,
  };

  try {
    const command = new DeleteObjectCommand(params);
    const data = await s3.send(command);

    if (data.$metadata.httpStatusCode === 204) {
      return {
        status: true,
        message: 'File deleted successfully from S3',
      };
    } else {
      return {
        status: false,
        error: 'Failed to delete file from S3',
      };
    }
  } catch (err) {
    console.error('Error deleting file from S3:', err);
    return { status: false, error: 'Failed to delete file from S3' };
  }
}
