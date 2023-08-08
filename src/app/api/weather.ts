import type { NextApiRequest, NextApiResponse } from 'next'

// Fake users data

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<User[]>
) {
  // Get data from your database
  res.status(200).json(users)
}