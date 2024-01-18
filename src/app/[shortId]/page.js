import { PrismaClient } from "@prisma/client";
import { redirect } from "next/navigation";
export default async function shortpage({ params }) {
  const prisma = new PrismaClient();
  const { shortId } = params;
  const data = await prisma.link.findUnique({
    where: { shortUrl: shortId },
  });
  if (!data) {
    return redirect("/");
  }else {
    return redirect(data.url);
  }
}
