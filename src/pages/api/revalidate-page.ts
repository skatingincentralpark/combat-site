import { isValidRequest } from "@sanity/webhook";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message: string;
};

const secret = process.env.NEXT_PUBLIC_SANITY_WEBHOOK_SECRET;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "POST") {
    console.error("Must be a POST request");
    return res.status(401).json({ message: "Must be a POST request" });
  }

  if (!secret) {
    console.error("Sanity webhook secret not configured properly");
    return res
      .status(401)
      .json({ message: "Sanity webhook secret not configured properly" });
  }

  if (!isValidRequest(req, secret)) {
    res.status(401).json({ message: "Invalid signature" });
    return;
  }

  try {
    const {
      body: { type, slug },
    } = req;

    const response = () => {
      return res.json({
        message: `Revalidated "${type}" with slug "${slug}"`,
      });
    };

    switch (type) {
      case "newsItem":
        await res.revalidate(`/news/${slug}`);
        response();
      case "lookbook":
        await res.revalidate(`/lookbooks/${slug}`);
        response();
    }

    return res.json({ message: "No managed type" });
  } catch (err) {
    return res.status(500).send({ message: "Error revalidating" });
  }
}
