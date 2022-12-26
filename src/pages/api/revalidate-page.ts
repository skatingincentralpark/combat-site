import type { NextApiRequest, NextApiResponse } from "next";
import { SIGNATURE_HEADER_NAME, isValidSignature } from "@sanity/webhook";

type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  //authenticating the webhook
  try {
    if (req.method !== "POST")
      return res.status(401).json({ message: "Must be a POST request" });

    if (!process.env.NEXT_PUBLIC_SANITY_WEBHOOK_SECRET)
      return res
        .status(401)
        .json({ message: "Webhook secret not configured properly" });

    const signature = req?.headers[SIGNATURE_HEADER_NAME]?.toString();

    if (!signature)
      return res.status(401).json({ message: "Signature doesn't exist" });

    if (
      !isValidSignature(
        JSON.stringify(req.body),
        signature,
        process.env.NEXT_PUBLIC_SANITY_WEBHOOK_SECRET
      )
    )
      return res.status(401).json({ message: "Invalid request!" });

    //getting payload
    const {
      body: { type, slug = "" },
    } = req;

    const defaultMessage = {
      message: `Revalidated "${type}" with slug "${slug}"`,
    };

    switch (type) {
      case "newsItem":
        await res.revalidate(`/news/${slug}`);
        return res.json(defaultMessage);
      case "lookbook":
        await res.revalidate(`/lookbooks/${slug}`);
        return res.json(defaultMessage);
      case "generalSettings":
        await res.revalidate(`/`);
        return res.json(defaultMessage);
    }

    return res.json({ message: "No managed type" });
  } catch (error) {
    res.status(500).json({ message: "Something went Wrong!" });
  }
}
