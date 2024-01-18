"use server"
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const ShortUrl = async (formData) => {
  const url = formData.get("url");
  const shortUrl = Math.random().toString(36).substring(2, 5);
  try {
    const data = await prisma.link.create({
      data: { url, shortUrl },
    })
    return data
  } catch (error) {
    console.error(error);
  }
  // console.log(shortUrl, url);
};
