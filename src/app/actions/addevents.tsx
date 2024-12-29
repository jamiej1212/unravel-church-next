// src/app/actions/addevents.tsx
'use server';

import { uploadToS3 } from './s3upload';
import database from '../lib/db';

export async function addEvents(formData: FormData) {
  const title = formData.get("title")?.toString();
  const image = formData.get("image") as File | null;
  const slug = formData.get("slug")?.toString();
  const date = formData.get("date")?.toString();
  const details = formData.get("details")?.toString();

  if (!title || !image || !slug || !date || !details) {
    return {
      status: false,
      error: "All fields are required.",
    };
  }

  try {
    // Alter the file into a buffer
    const fileBuffer = Buffer.from(await image!.arrayBuffer());
    console.log('File buffer created successfully');

    // Upload the file to S3
    const uploadResult = await uploadToS3(fileBuffer, image!.name);
    console.log('File uploaded to S3', uploadResult);

    if (uploadResult.status) {
      const fileUrl = uploadResult.fileUrl;

      // Store the file URL in the database
      const [result] = await database.execute(
        "INSERT INTO events (title, image, slug, date, details) VALUES (?, ?, ?, ?, ?)",
        [title, fileUrl, slug, date, details]
      );
      console.log('Data inserted into DB:', result);

      return {
        status: true,
        error: "",
      };
    } else {
      console.error('Upload to S3 failed:', uploadResult.error);
      return {
        status: false,
        error: uploadResult.error,
      };
    }
  } catch (err) {
    console.error('Error in addEvents:', err);
    return {
      status: false,
      error: "Failed to save the event.",
    };
  }
}
