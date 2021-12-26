import type { NextApiRequest, NextApiResponse } from "next";

export default async function Paymongo(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const options = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Basic c2tfdGVzdF8yM0tIWjh6cUZMZHZTdWZwTGpySG5rbzc6",
    },
    body: JSON.stringify({
      data: {
        attributes: {
          events: ["source.chargeable", "payment.paid", "payment.failed"],
          url: "https://zomyfile.ml/api/test",
        },
      },
    }),
  };

  const response = await fetch("https://api.paymongo.com/v1/webhooks", options);
  const data = await response.json();

  res.status(200).json(data);
}
