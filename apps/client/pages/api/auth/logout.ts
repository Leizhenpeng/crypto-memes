import { NextApiRequest, NextApiResponse } from 'next'
import { ironOptions } from 'features/auth'
import { withIronSessionApiRoute } from 'iron-session/next'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req
  switch (method) {
    case 'POST':
      req.session.destroy()
      res.send({ ok: true })
      break
    default:
      res.setHeader('Allow', ['GET'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}

export default withIronSessionApiRoute(handler, ironOptions)
