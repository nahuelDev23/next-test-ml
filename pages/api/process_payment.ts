import type { NextApiRequest, NextApiResponse } from 'next'
import mercadopago from 'mercadopago'


type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const MYTOKEN = 'TEST-8066233554632961-042714-d3e0b776ae011e9fa566fe3ba9bda9ba-1113745072'
    mercadopago.configurations.setAccessToken(MYTOKEN);
    mercadopago.payment.save(req.body)
    .then(function(response) {
      const { status, status_detail, id } = response.body;
      console.log(response.body);
      
      res.status(response.status).json({ status, status_detail, id });
    })
    .catch(function(error) {
      console.error(error);
    });
}
