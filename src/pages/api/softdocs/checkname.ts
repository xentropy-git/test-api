// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { namesDb } from "../../../fakedb";

type ResponseData = {
  approved: boolean;
};

// get and post request handler
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  console.log("checkname.ts: handler() called");
  console.log("req", req);
  console.log("checkname called");

  if (req.method === "POST") {
    // validate body
    if (!req.body.name) {
      res.status(400).json({ approved: false });
      console.log("no name in body");
      console.log("req.body", req.body);
      return;
    }

    // check if name is in db
    const approved = namesDb.names.includes(req.body.name.toUpperCase());
    res.status(200).json({ approved });
  }
}
