
// import { Request, Response, NextFunction } from 'express';
// import prisma from '../prisma';

// const validateTicket = async (req: Request, res: Response, next: NextFunction) => {
//   const { ticket } = req.query;
//   if (!ticket) {
//     return res.status(400).send('Ticket ID is required');
//   }

//   const foundTicket = await prisma.ticket.findUnique({ where: { id: +(ticket) } });
//   if (!foundTicket) {
//     return res.status(404).send('Ticket not found');
//   }

//   (req as any).ticket = foundTicket;
//   next();
// };

// export default validateTicket;
