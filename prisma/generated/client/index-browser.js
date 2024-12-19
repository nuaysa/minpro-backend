
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.0.1
 * Query Engine version: 5dbef10bdbfb579e07d35cc85fb1518d357cb99e
 */
Prisma.prismaVersion = {
  client: "6.0.1",
  engine: "5dbef10bdbfb579e07d35cc85fb1518d357cb99e"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.PromotorScalarFieldEnum = {
  id: 'id',
  name: 'name',
  email: 'email',
  password: 'password',
  avatar: 'avatar',
  isVerify: 'isVerify'
};

exports.Prisma.EventScalarFieldEnum = {
  id: 'id',
  title: 'title',
  description: 'description',
  category: 'category',
  location: 'location',
  venue: 'venue',
  mapURL: 'mapURL',
  date: 'date',
  time: 'time',
  type: 'type',
  thumbnail: 'thumbnail',
  isActive: 'isActive',
  slug: 'slug',
  promotorId: 'promotorId'
};

exports.Prisma.TicketScalarFieldEnum = {
  id: 'id',
  eventId: 'eventId',
  price: 'price',
  category: 'category',
  startDate: 'startDate',
  endDate: 'endDate',
  isActive: 'isActive',
  discount: 'discount',
  quota: 'quota',
  promotorId: 'promotorId'
};

exports.Prisma.TransactionScalarFieldEnum = {
  id: 'id',
  basePrice: 'basePrice',
  totalPrice: 'totalPrice',
  finalPrice: 'finalPrice',
  status: 'status',
  userId: 'userId',
  userVoucher: 'userVoucher',
  userPoints: 'userPoints',
  discount: 'discount',
  ticketId: 'ticketId',
  paymentProof: 'paymentProof',
  qty: 'qty',
  promoQuota: 'promoQuota'
};

exports.Prisma.DetailTransactionScalarFieldEnum = {
  id: 'id',
  transactionId: 'transactionId',
  eventId: 'eventId',
  ticketId: 'ticketId',
  reviewStatus: 'reviewStatus'
};

exports.Prisma.ReviewScalarFieldEnum = {
  id: 'id',
  desc: 'desc',
  rating: 'rating',
  userId: 'userId',
  eventId: 'eventId',
  transactionId: 'transactionId',
  ticketId: 'ticketId'
};

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  username: 'username',
  email: 'email',
  password: 'password',
  avatar: 'avatar',
  isVerify: 'isVerify',
  refCode: 'refCode',
  reffered_by: 'reffered_by'
};

exports.Prisma.ReferralVoucherScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  createdAt: 'createdAt',
  expiresAt: 'expiresAt'
};

exports.Prisma.UserPointsScalarFieldEnum = {
  id: 'id',
  points: 'points',
  expiresAt: 'expiresAt',
  createdAt: 'createdAt',
  userId: 'userId'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.EventCategory = exports.$Enums.EventCategory = {
  entertainment: 'entertainment',
  seminar: 'seminar',
  sport: 'sport',
  food: 'food',
  all: 'all'
};

exports.Location = exports.$Enums.Location = {
  Bandung: 'Bandung',
  Jakarta: 'Jakarta',
  Bogor: 'Bogor',
  Depok: 'Depok',
  Tanggerang: 'Tanggerang',
  Bekasi: 'Bekasi'
};

exports.EventType = exports.$Enums.EventType = {
  Paid: 'Paid',
  Free: 'Free'
};

exports.TicketCategory = exports.$Enums.TicketCategory = {
  Cat1: 'Cat1',
  Cat2: 'Cat2',
  VIP: 'VIP',
  festivalPass: 'festivalPass',
  free: 'free'
};

exports.TransactionStatus = exports.$Enums.TransactionStatus = {
  pending: 'pending',
  Paid: 'Paid',
  canceled: 'canceled'
};

exports.Prisma.ModelName = {
  Promotor: 'Promotor',
  Event: 'Event',
  Ticket: 'Ticket',
  Transaction: 'Transaction',
  DetailTransaction: 'DetailTransaction',
  Review: 'Review',
  User: 'User',
  referralVoucher: 'referralVoucher',
  userPoints: 'userPoints'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
