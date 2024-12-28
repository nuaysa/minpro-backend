
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Promotor
 * 
 */
export type Promotor = $Result.DefaultSelection<Prisma.$PromotorPayload>
/**
 * Model Event
 * 
 */
export type Event = $Result.DefaultSelection<Prisma.$EventPayload>
/**
 * Model Ticket
 * 
 */
export type Ticket = $Result.DefaultSelection<Prisma.$TicketPayload>
/**
 * Model Transaction
 * 
 */
export type Transaction = $Result.DefaultSelection<Prisma.$TransactionPayload>
/**
 * Model DetailTransaction
 * 
 */
export type DetailTransaction = $Result.DefaultSelection<Prisma.$DetailTransactionPayload>
/**
 * Model Review
 * 
 */
export type Review = $Result.DefaultSelection<Prisma.$ReviewPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model referralVoucher
 * 
 */
export type referralVoucher = $Result.DefaultSelection<Prisma.$referralVoucherPayload>
/**
 * Model userPoints
 * 
 */
export type userPoints = $Result.DefaultSelection<Prisma.$userPointsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const EventCategory: {
  entertainment: 'entertainment',
  seminar: 'seminar',
  sport: 'sport',
  food: 'food',
  all: 'all'
};

export type EventCategory = (typeof EventCategory)[keyof typeof EventCategory]


export const Location: {
  Bandung: 'Bandung',
  Jakarta: 'Jakarta',
  Bogor: 'Bogor',
  Depok: 'Depok',
  Tanggerang: 'Tanggerang',
  Bekasi: 'Bekasi'
};

export type Location = (typeof Location)[keyof typeof Location]


export const TransactionStatus: {
  pending: 'pending',
  Paid: 'Paid',
  canceled: 'canceled'
};

export type TransactionStatus = (typeof TransactionStatus)[keyof typeof TransactionStatus]


export const EventType: {
  Paid: 'Paid',
  Free: 'Free'
};

export type EventType = (typeof EventType)[keyof typeof EventType]


export const TicketCategory: {
  Cat1: 'Cat1',
  Cat2: 'Cat2',
  VIP: 'VIP',
  festivalPass: 'festivalPass',
  free: 'free'
};

export type TicketCategory = (typeof TicketCategory)[keyof typeof TicketCategory]

}

export type EventCategory = $Enums.EventCategory

export const EventCategory: typeof $Enums.EventCategory

export type Location = $Enums.Location

export const Location: typeof $Enums.Location

export type TransactionStatus = $Enums.TransactionStatus

export const TransactionStatus: typeof $Enums.TransactionStatus

export type EventType = $Enums.EventType

export const EventType: typeof $Enums.EventType

export type TicketCategory = $Enums.TicketCategory

export const TicketCategory: typeof $Enums.TicketCategory

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Promotors
 * const promotors = await prisma.promotor.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Promotors
   * const promotors = await prisma.promotor.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.promotor`: Exposes CRUD operations for the **Promotor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Promotors
    * const promotors = await prisma.promotor.findMany()
    * ```
    */
  get promotor(): Prisma.PromotorDelegate<ExtArgs>;

  /**
   * `prisma.event`: Exposes CRUD operations for the **Event** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Events
    * const events = await prisma.event.findMany()
    * ```
    */
  get event(): Prisma.EventDelegate<ExtArgs>;

  /**
   * `prisma.ticket`: Exposes CRUD operations for the **Ticket** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tickets
    * const tickets = await prisma.ticket.findMany()
    * ```
    */
  get ticket(): Prisma.TicketDelegate<ExtArgs>;

  /**
   * `prisma.transaction`: Exposes CRUD operations for the **Transaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transaction.findMany()
    * ```
    */
  get transaction(): Prisma.TransactionDelegate<ExtArgs>;

  /**
   * `prisma.detailTransaction`: Exposes CRUD operations for the **DetailTransaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DetailTransactions
    * const detailTransactions = await prisma.detailTransaction.findMany()
    * ```
    */
  get detailTransaction(): Prisma.DetailTransactionDelegate<ExtArgs>;

  /**
   * `prisma.review`: Exposes CRUD operations for the **Review** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.review.findMany()
    * ```
    */
  get review(): Prisma.ReviewDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.referralVoucher`: Exposes CRUD operations for the **referralVoucher** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReferralVouchers
    * const referralVouchers = await prisma.referralVoucher.findMany()
    * ```
    */
  get referralVoucher(): Prisma.referralVoucherDelegate<ExtArgs>;

  /**
   * `prisma.userPoints`: Exposes CRUD operations for the **userPoints** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserPoints
    * const userPoints = await prisma.userPoints.findMany()
    * ```
    */
  get userPoints(): Prisma.userPointsDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.0.1
   * Query Engine version: 5dbef10bdbfb579e07d35cc85fb1518d357cb99e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
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

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "promotor" | "event" | "ticket" | "transaction" | "detailTransaction" | "review" | "user" | "referralVoucher" | "userPoints"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Promotor: {
        payload: Prisma.$PromotorPayload<ExtArgs>
        fields: Prisma.PromotorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PromotorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PromotorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotorPayload>
          }
          findFirst: {
            args: Prisma.PromotorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PromotorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotorPayload>
          }
          findMany: {
            args: Prisma.PromotorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotorPayload>[]
          }
          create: {
            args: Prisma.PromotorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotorPayload>
          }
          createMany: {
            args: Prisma.PromotorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PromotorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotorPayload>[]
          }
          delete: {
            args: Prisma.PromotorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotorPayload>
          }
          update: {
            args: Prisma.PromotorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotorPayload>
          }
          deleteMany: {
            args: Prisma.PromotorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PromotorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PromotorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotorPayload>
          }
          aggregate: {
            args: Prisma.PromotorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePromotor>
          }
          groupBy: {
            args: Prisma.PromotorGroupByArgs<ExtArgs>
            result: $Utils.Optional<PromotorGroupByOutputType>[]
          }
          count: {
            args: Prisma.PromotorCountArgs<ExtArgs>
            result: $Utils.Optional<PromotorCountAggregateOutputType> | number
          }
        }
      }
      Event: {
        payload: Prisma.$EventPayload<ExtArgs>
        fields: Prisma.EventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findFirst: {
            args: Prisma.EventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findMany: {
            args: Prisma.EventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          create: {
            args: Prisma.EventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          createMany: {
            args: Prisma.EventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          delete: {
            args: Prisma.EventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          update: {
            args: Prisma.EventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          deleteMany: {
            args: Prisma.EventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          aggregate: {
            args: Prisma.EventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvent>
          }
          groupBy: {
            args: Prisma.EventGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventCountArgs<ExtArgs>
            result: $Utils.Optional<EventCountAggregateOutputType> | number
          }
        }
      }
      Ticket: {
        payload: Prisma.$TicketPayload<ExtArgs>
        fields: Prisma.TicketFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TicketFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TicketFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          findFirst: {
            args: Prisma.TicketFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TicketFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          findMany: {
            args: Prisma.TicketFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>[]
          }
          create: {
            args: Prisma.TicketCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          createMany: {
            args: Prisma.TicketCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TicketCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>[]
          }
          delete: {
            args: Prisma.TicketDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          update: {
            args: Prisma.TicketUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          deleteMany: {
            args: Prisma.TicketDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TicketUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TicketUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          aggregate: {
            args: Prisma.TicketAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTicket>
          }
          groupBy: {
            args: Prisma.TicketGroupByArgs<ExtArgs>
            result: $Utils.Optional<TicketGroupByOutputType>[]
          }
          count: {
            args: Prisma.TicketCountArgs<ExtArgs>
            result: $Utils.Optional<TicketCountAggregateOutputType> | number
          }
        }
      }
      Transaction: {
        payload: Prisma.$TransactionPayload<ExtArgs>
        fields: Prisma.TransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findFirst: {
            args: Prisma.TransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findMany: {
            args: Prisma.TransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          create: {
            args: Prisma.TransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          createMany: {
            args: Prisma.TransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          delete: {
            args: Prisma.TransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          update: {
            args: Prisma.TransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          deleteMany: {
            args: Prisma.TransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          aggregate: {
            args: Prisma.TransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransaction>
          }
          groupBy: {
            args: Prisma.TransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransactionCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionCountAggregateOutputType> | number
          }
        }
      }
      DetailTransaction: {
        payload: Prisma.$DetailTransactionPayload<ExtArgs>
        fields: Prisma.DetailTransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DetailTransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailTransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DetailTransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailTransactionPayload>
          }
          findFirst: {
            args: Prisma.DetailTransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailTransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DetailTransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailTransactionPayload>
          }
          findMany: {
            args: Prisma.DetailTransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailTransactionPayload>[]
          }
          create: {
            args: Prisma.DetailTransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailTransactionPayload>
          }
          createMany: {
            args: Prisma.DetailTransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DetailTransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailTransactionPayload>[]
          }
          delete: {
            args: Prisma.DetailTransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailTransactionPayload>
          }
          update: {
            args: Prisma.DetailTransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailTransactionPayload>
          }
          deleteMany: {
            args: Prisma.DetailTransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DetailTransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DetailTransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailTransactionPayload>
          }
          aggregate: {
            args: Prisma.DetailTransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDetailTransaction>
          }
          groupBy: {
            args: Prisma.DetailTransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<DetailTransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.DetailTransactionCountArgs<ExtArgs>
            result: $Utils.Optional<DetailTransactionCountAggregateOutputType> | number
          }
        }
      }
      Review: {
        payload: Prisma.$ReviewPayload<ExtArgs>
        fields: Prisma.ReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findFirst: {
            args: Prisma.ReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findMany: {
            args: Prisma.ReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          create: {
            args: Prisma.ReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          createMany: {
            args: Prisma.ReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReviewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          delete: {
            args: Prisma.ReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          update: {
            args: Prisma.ReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          deleteMany: {
            args: Prisma.ReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          aggregate: {
            args: Prisma.ReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReview>
          }
          groupBy: {
            args: Prisma.ReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      referralVoucher: {
        payload: Prisma.$referralVoucherPayload<ExtArgs>
        fields: Prisma.referralVoucherFieldRefs
        operations: {
          findUnique: {
            args: Prisma.referralVoucherFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$referralVoucherPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.referralVoucherFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$referralVoucherPayload>
          }
          findFirst: {
            args: Prisma.referralVoucherFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$referralVoucherPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.referralVoucherFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$referralVoucherPayload>
          }
          findMany: {
            args: Prisma.referralVoucherFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$referralVoucherPayload>[]
          }
          create: {
            args: Prisma.referralVoucherCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$referralVoucherPayload>
          }
          createMany: {
            args: Prisma.referralVoucherCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.referralVoucherCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$referralVoucherPayload>[]
          }
          delete: {
            args: Prisma.referralVoucherDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$referralVoucherPayload>
          }
          update: {
            args: Prisma.referralVoucherUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$referralVoucherPayload>
          }
          deleteMany: {
            args: Prisma.referralVoucherDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.referralVoucherUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.referralVoucherUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$referralVoucherPayload>
          }
          aggregate: {
            args: Prisma.ReferralVoucherAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReferralVoucher>
          }
          groupBy: {
            args: Prisma.referralVoucherGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReferralVoucherGroupByOutputType>[]
          }
          count: {
            args: Prisma.referralVoucherCountArgs<ExtArgs>
            result: $Utils.Optional<ReferralVoucherCountAggregateOutputType> | number
          }
        }
      }
      userPoints: {
        payload: Prisma.$userPointsPayload<ExtArgs>
        fields: Prisma.userPointsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userPointsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPointsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userPointsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPointsPayload>
          }
          findFirst: {
            args: Prisma.userPointsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPointsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userPointsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPointsPayload>
          }
          findMany: {
            args: Prisma.userPointsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPointsPayload>[]
          }
          create: {
            args: Prisma.userPointsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPointsPayload>
          }
          createMany: {
            args: Prisma.userPointsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.userPointsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPointsPayload>[]
          }
          delete: {
            args: Prisma.userPointsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPointsPayload>
          }
          update: {
            args: Prisma.userPointsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPointsPayload>
          }
          deleteMany: {
            args: Prisma.userPointsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userPointsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.userPointsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPointsPayload>
          }
          aggregate: {
            args: Prisma.UserPointsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserPoints>
          }
          groupBy: {
            args: Prisma.userPointsGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserPointsGroupByOutputType>[]
          }
          count: {
            args: Prisma.userPointsCountArgs<ExtArgs>
            result: $Utils.Optional<UserPointsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type PromotorCountOutputType
   */

  export type PromotorCountOutputType = {
    event: number
    ticket: number
  }

  export type PromotorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | PromotorCountOutputTypeCountEventArgs
    ticket?: boolean | PromotorCountOutputTypeCountTicketArgs
  }

  // Custom InputTypes
  /**
   * PromotorCountOutputType without action
   */
  export type PromotorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromotorCountOutputType
     */
    select?: PromotorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PromotorCountOutputType without action
   */
  export type PromotorCountOutputTypeCountEventArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
  }

  /**
   * PromotorCountOutputType without action
   */
  export type PromotorCountOutputTypeCountTicketArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
  }


  /**
   * Count Type EventCountOutputType
   */

  export type EventCountOutputType = {
    ticket: number
    DetailTransaction: number
    review: number
  }

  export type EventCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticket?: boolean | EventCountOutputTypeCountTicketArgs
    DetailTransaction?: boolean | EventCountOutputTypeCountDetailTransactionArgs
    review?: boolean | EventCountOutputTypeCountReviewArgs
  }

  // Custom InputTypes
  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventCountOutputType
     */
    select?: EventCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountTicketArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountDetailTransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DetailTransactionWhereInput
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }


  /**
   * Count Type TicketCountOutputType
   */

  export type TicketCountOutputType = {
    transaction: number
    DetailTransaction: number
    review: number
  }

  export type TicketCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transaction?: boolean | TicketCountOutputTypeCountTransactionArgs
    DetailTransaction?: boolean | TicketCountOutputTypeCountDetailTransactionArgs
    review?: boolean | TicketCountOutputTypeCountReviewArgs
  }

  // Custom InputTypes
  /**
   * TicketCountOutputType without action
   */
  export type TicketCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketCountOutputType
     */
    select?: TicketCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TicketCountOutputType without action
   */
  export type TicketCountOutputTypeCountTransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }

  /**
   * TicketCountOutputType without action
   */
  export type TicketCountOutputTypeCountDetailTransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DetailTransactionWhereInput
  }

  /**
   * TicketCountOutputType without action
   */
  export type TicketCountOutputTypeCountReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }


  /**
   * Count Type TransactionCountOutputType
   */

  export type TransactionCountOutputType = {
    DetailTransaction: number
  }

  export type TransactionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    DetailTransaction?: boolean | TransactionCountOutputTypeCountDetailTransactionArgs
  }

  // Custom InputTypes
  /**
   * TransactionCountOutputType without action
   */
  export type TransactionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionCountOutputType
     */
    select?: TransactionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TransactionCountOutputType without action
   */
  export type TransactionCountOutputTypeCountDetailTransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DetailTransactionWhereInput
  }


  /**
   * Count Type DetailTransactionCountOutputType
   */

  export type DetailTransactionCountOutputType = {
    review: number
  }

  export type DetailTransactionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    review?: boolean | DetailTransactionCountOutputTypeCountReviewArgs
  }

  // Custom InputTypes
  /**
   * DetailTransactionCountOutputType without action
   */
  export type DetailTransactionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailTransactionCountOutputType
     */
    select?: DetailTransactionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DetailTransactionCountOutputType without action
   */
  export type DetailTransactionCountOutputTypeCountReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    Transaction: number
    UserId: number
    userPoints: number
    Review: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Transaction?: boolean | UserCountOutputTypeCountTransactionArgs
    UserId?: boolean | UserCountOutputTypeCountUserIdArgs
    userPoints?: boolean | UserCountOutputTypeCountUserPointsArgs
    Review?: boolean | UserCountOutputTypeCountReviewArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserIdArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: referralVoucherWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserPointsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userPointsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }


  /**
   * Count Type ReferralVoucherCountOutputType
   */

  export type ReferralVoucherCountOutputType = {
    discount: number
  }

  export type ReferralVoucherCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    discount?: boolean | ReferralVoucherCountOutputTypeCountDiscountArgs
  }

  // Custom InputTypes
  /**
   * ReferralVoucherCountOutputType without action
   */
  export type ReferralVoucherCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferralVoucherCountOutputType
     */
    select?: ReferralVoucherCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ReferralVoucherCountOutputType without action
   */
  export type ReferralVoucherCountOutputTypeCountDiscountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }


  /**
   * Count Type UserPointsCountOutputType
   */

  export type UserPointsCountOutputType = {
    discount: number
  }

  export type UserPointsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    discount?: boolean | UserPointsCountOutputTypeCountDiscountArgs
  }

  // Custom InputTypes
  /**
   * UserPointsCountOutputType without action
   */
  export type UserPointsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPointsCountOutputType
     */
    select?: UserPointsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserPointsCountOutputType without action
   */
  export type UserPointsCountOutputTypeCountDiscountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Promotor
   */

  export type AggregatePromotor = {
    _count: PromotorCountAggregateOutputType | null
    _avg: PromotorAvgAggregateOutputType | null
    _sum: PromotorSumAggregateOutputType | null
    _min: PromotorMinAggregateOutputType | null
    _max: PromotorMaxAggregateOutputType | null
  }

  export type PromotorAvgAggregateOutputType = {
    id: number | null
  }

  export type PromotorSumAggregateOutputType = {
    id: number | null
  }

  export type PromotorMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    avatar: string | null
    isVerify: boolean | null
  }

  export type PromotorMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    avatar: string | null
    isVerify: boolean | null
  }

  export type PromotorCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    avatar: number
    isVerify: number
    _all: number
  }


  export type PromotorAvgAggregateInputType = {
    id?: true
  }

  export type PromotorSumAggregateInputType = {
    id?: true
  }

  export type PromotorMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    avatar?: true
    isVerify?: true
  }

  export type PromotorMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    avatar?: true
    isVerify?: true
  }

  export type PromotorCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    avatar?: true
    isVerify?: true
    _all?: true
  }

  export type PromotorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Promotor to aggregate.
     */
    where?: PromotorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Promotors to fetch.
     */
    orderBy?: PromotorOrderByWithRelationInput | PromotorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PromotorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Promotors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Promotors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Promotors
    **/
    _count?: true | PromotorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PromotorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PromotorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PromotorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PromotorMaxAggregateInputType
  }

  export type GetPromotorAggregateType<T extends PromotorAggregateArgs> = {
        [P in keyof T & keyof AggregatePromotor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePromotor[P]>
      : GetScalarType<T[P], AggregatePromotor[P]>
  }




  export type PromotorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PromotorWhereInput
    orderBy?: PromotorOrderByWithAggregationInput | PromotorOrderByWithAggregationInput[]
    by: PromotorScalarFieldEnum[] | PromotorScalarFieldEnum
    having?: PromotorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PromotorCountAggregateInputType | true
    _avg?: PromotorAvgAggregateInputType
    _sum?: PromotorSumAggregateInputType
    _min?: PromotorMinAggregateInputType
    _max?: PromotorMaxAggregateInputType
  }

  export type PromotorGroupByOutputType = {
    id: number
    name: string
    email: string
    password: string
    avatar: string
    isVerify: boolean
    _count: PromotorCountAggregateOutputType | null
    _avg: PromotorAvgAggregateOutputType | null
    _sum: PromotorSumAggregateOutputType | null
    _min: PromotorMinAggregateOutputType | null
    _max: PromotorMaxAggregateOutputType | null
  }

  type GetPromotorGroupByPayload<T extends PromotorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PromotorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PromotorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PromotorGroupByOutputType[P]>
            : GetScalarType<T[P], PromotorGroupByOutputType[P]>
        }
      >
    >


  export type PromotorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    avatar?: boolean
    isVerify?: boolean
    event?: boolean | Promotor$eventArgs<ExtArgs>
    ticket?: boolean | Promotor$ticketArgs<ExtArgs>
    _count?: boolean | PromotorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["promotor"]>

  export type PromotorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    avatar?: boolean
    isVerify?: boolean
  }, ExtArgs["result"]["promotor"]>

  export type PromotorSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    avatar?: boolean
    isVerify?: boolean
  }

  export type PromotorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | Promotor$eventArgs<ExtArgs>
    ticket?: boolean | Promotor$ticketArgs<ExtArgs>
    _count?: boolean | PromotorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PromotorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PromotorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Promotor"
    objects: {
      event: Prisma.$EventPayload<ExtArgs>[]
      ticket: Prisma.$TicketPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      password: string
      avatar: string
      isVerify: boolean
    }, ExtArgs["result"]["promotor"]>
    composites: {}
  }

  type PromotorGetPayload<S extends boolean | null | undefined | PromotorDefaultArgs> = $Result.GetResult<Prisma.$PromotorPayload, S>

  type PromotorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PromotorFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PromotorCountAggregateInputType | true
    }

  export interface PromotorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Promotor'], meta: { name: 'Promotor' } }
    /**
     * Find zero or one Promotor that matches the filter.
     * @param {PromotorFindUniqueArgs} args - Arguments to find a Promotor
     * @example
     * // Get one Promotor
     * const promotor = await prisma.promotor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PromotorFindUniqueArgs>(args: SelectSubset<T, PromotorFindUniqueArgs<ExtArgs>>): Prisma__PromotorClient<$Result.GetResult<Prisma.$PromotorPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Promotor that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PromotorFindUniqueOrThrowArgs} args - Arguments to find a Promotor
     * @example
     * // Get one Promotor
     * const promotor = await prisma.promotor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PromotorFindUniqueOrThrowArgs>(args: SelectSubset<T, PromotorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PromotorClient<$Result.GetResult<Prisma.$PromotorPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Promotor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotorFindFirstArgs} args - Arguments to find a Promotor
     * @example
     * // Get one Promotor
     * const promotor = await prisma.promotor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PromotorFindFirstArgs>(args?: SelectSubset<T, PromotorFindFirstArgs<ExtArgs>>): Prisma__PromotorClient<$Result.GetResult<Prisma.$PromotorPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Promotor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotorFindFirstOrThrowArgs} args - Arguments to find a Promotor
     * @example
     * // Get one Promotor
     * const promotor = await prisma.promotor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PromotorFindFirstOrThrowArgs>(args?: SelectSubset<T, PromotorFindFirstOrThrowArgs<ExtArgs>>): Prisma__PromotorClient<$Result.GetResult<Prisma.$PromotorPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Promotors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Promotors
     * const promotors = await prisma.promotor.findMany()
     * 
     * // Get first 10 Promotors
     * const promotors = await prisma.promotor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const promotorWithIdOnly = await prisma.promotor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PromotorFindManyArgs>(args?: SelectSubset<T, PromotorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromotorPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Promotor.
     * @param {PromotorCreateArgs} args - Arguments to create a Promotor.
     * @example
     * // Create one Promotor
     * const Promotor = await prisma.promotor.create({
     *   data: {
     *     // ... data to create a Promotor
     *   }
     * })
     * 
     */
    create<T extends PromotorCreateArgs>(args: SelectSubset<T, PromotorCreateArgs<ExtArgs>>): Prisma__PromotorClient<$Result.GetResult<Prisma.$PromotorPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Promotors.
     * @param {PromotorCreateManyArgs} args - Arguments to create many Promotors.
     * @example
     * // Create many Promotors
     * const promotor = await prisma.promotor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PromotorCreateManyArgs>(args?: SelectSubset<T, PromotorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Promotors and returns the data saved in the database.
     * @param {PromotorCreateManyAndReturnArgs} args - Arguments to create many Promotors.
     * @example
     * // Create many Promotors
     * const promotor = await prisma.promotor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Promotors and only return the `id`
     * const promotorWithIdOnly = await prisma.promotor.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PromotorCreateManyAndReturnArgs>(args?: SelectSubset<T, PromotorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromotorPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Promotor.
     * @param {PromotorDeleteArgs} args - Arguments to delete one Promotor.
     * @example
     * // Delete one Promotor
     * const Promotor = await prisma.promotor.delete({
     *   where: {
     *     // ... filter to delete one Promotor
     *   }
     * })
     * 
     */
    delete<T extends PromotorDeleteArgs>(args: SelectSubset<T, PromotorDeleteArgs<ExtArgs>>): Prisma__PromotorClient<$Result.GetResult<Prisma.$PromotorPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Promotor.
     * @param {PromotorUpdateArgs} args - Arguments to update one Promotor.
     * @example
     * // Update one Promotor
     * const promotor = await prisma.promotor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PromotorUpdateArgs>(args: SelectSubset<T, PromotorUpdateArgs<ExtArgs>>): Prisma__PromotorClient<$Result.GetResult<Prisma.$PromotorPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Promotors.
     * @param {PromotorDeleteManyArgs} args - Arguments to filter Promotors to delete.
     * @example
     * // Delete a few Promotors
     * const { count } = await prisma.promotor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PromotorDeleteManyArgs>(args?: SelectSubset<T, PromotorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Promotors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Promotors
     * const promotor = await prisma.promotor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PromotorUpdateManyArgs>(args: SelectSubset<T, PromotorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Promotor.
     * @param {PromotorUpsertArgs} args - Arguments to update or create a Promotor.
     * @example
     * // Update or create a Promotor
     * const promotor = await prisma.promotor.upsert({
     *   create: {
     *     // ... data to create a Promotor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Promotor we want to update
     *   }
     * })
     */
    upsert<T extends PromotorUpsertArgs>(args: SelectSubset<T, PromotorUpsertArgs<ExtArgs>>): Prisma__PromotorClient<$Result.GetResult<Prisma.$PromotorPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Promotors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotorCountArgs} args - Arguments to filter Promotors to count.
     * @example
     * // Count the number of Promotors
     * const count = await prisma.promotor.count({
     *   where: {
     *     // ... the filter for the Promotors we want to count
     *   }
     * })
    **/
    count<T extends PromotorCountArgs>(
      args?: Subset<T, PromotorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PromotorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Promotor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PromotorAggregateArgs>(args: Subset<T, PromotorAggregateArgs>): Prisma.PrismaPromise<GetPromotorAggregateType<T>>

    /**
     * Group by Promotor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PromotorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PromotorGroupByArgs['orderBy'] }
        : { orderBy?: PromotorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PromotorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPromotorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Promotor model
   */
  readonly fields: PromotorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Promotor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PromotorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    event<T extends Promotor$eventArgs<ExtArgs> = {}>(args?: Subset<T, Promotor$eventArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany"> | Null>
    ticket<T extends Promotor$ticketArgs<ExtArgs> = {}>(args?: Subset<T, Promotor$ticketArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Promotor model
   */ 
  interface PromotorFieldRefs {
    readonly id: FieldRef<"Promotor", 'Int'>
    readonly name: FieldRef<"Promotor", 'String'>
    readonly email: FieldRef<"Promotor", 'String'>
    readonly password: FieldRef<"Promotor", 'String'>
    readonly avatar: FieldRef<"Promotor", 'String'>
    readonly isVerify: FieldRef<"Promotor", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Promotor findUnique
   */
  export type PromotorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotor
     */
    select?: PromotorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotorInclude<ExtArgs> | null
    /**
     * Filter, which Promotor to fetch.
     */
    where: PromotorWhereUniqueInput
  }

  /**
   * Promotor findUniqueOrThrow
   */
  export type PromotorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotor
     */
    select?: PromotorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotorInclude<ExtArgs> | null
    /**
     * Filter, which Promotor to fetch.
     */
    where: PromotorWhereUniqueInput
  }

  /**
   * Promotor findFirst
   */
  export type PromotorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotor
     */
    select?: PromotorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotorInclude<ExtArgs> | null
    /**
     * Filter, which Promotor to fetch.
     */
    where?: PromotorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Promotors to fetch.
     */
    orderBy?: PromotorOrderByWithRelationInput | PromotorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Promotors.
     */
    cursor?: PromotorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Promotors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Promotors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Promotors.
     */
    distinct?: PromotorScalarFieldEnum | PromotorScalarFieldEnum[]
  }

  /**
   * Promotor findFirstOrThrow
   */
  export type PromotorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotor
     */
    select?: PromotorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotorInclude<ExtArgs> | null
    /**
     * Filter, which Promotor to fetch.
     */
    where?: PromotorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Promotors to fetch.
     */
    orderBy?: PromotorOrderByWithRelationInput | PromotorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Promotors.
     */
    cursor?: PromotorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Promotors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Promotors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Promotors.
     */
    distinct?: PromotorScalarFieldEnum | PromotorScalarFieldEnum[]
  }

  /**
   * Promotor findMany
   */
  export type PromotorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotor
     */
    select?: PromotorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotorInclude<ExtArgs> | null
    /**
     * Filter, which Promotors to fetch.
     */
    where?: PromotorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Promotors to fetch.
     */
    orderBy?: PromotorOrderByWithRelationInput | PromotorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Promotors.
     */
    cursor?: PromotorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Promotors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Promotors.
     */
    skip?: number
    distinct?: PromotorScalarFieldEnum | PromotorScalarFieldEnum[]
  }

  /**
   * Promotor create
   */
  export type PromotorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotor
     */
    select?: PromotorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotorInclude<ExtArgs> | null
    /**
     * The data needed to create a Promotor.
     */
    data: XOR<PromotorCreateInput, PromotorUncheckedCreateInput>
  }

  /**
   * Promotor createMany
   */
  export type PromotorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Promotors.
     */
    data: PromotorCreateManyInput | PromotorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Promotor createManyAndReturn
   */
  export type PromotorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotor
     */
    select?: PromotorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Promotors.
     */
    data: PromotorCreateManyInput | PromotorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Promotor update
   */
  export type PromotorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotor
     */
    select?: PromotorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotorInclude<ExtArgs> | null
    /**
     * The data needed to update a Promotor.
     */
    data: XOR<PromotorUpdateInput, PromotorUncheckedUpdateInput>
    /**
     * Choose, which Promotor to update.
     */
    where: PromotorWhereUniqueInput
  }

  /**
   * Promotor updateMany
   */
  export type PromotorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Promotors.
     */
    data: XOR<PromotorUpdateManyMutationInput, PromotorUncheckedUpdateManyInput>
    /**
     * Filter which Promotors to update
     */
    where?: PromotorWhereInput
  }

  /**
   * Promotor upsert
   */
  export type PromotorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotor
     */
    select?: PromotorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotorInclude<ExtArgs> | null
    /**
     * The filter to search for the Promotor to update in case it exists.
     */
    where: PromotorWhereUniqueInput
    /**
     * In case the Promotor found by the `where` argument doesn't exist, create a new Promotor with this data.
     */
    create: XOR<PromotorCreateInput, PromotorUncheckedCreateInput>
    /**
     * In case the Promotor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PromotorUpdateInput, PromotorUncheckedUpdateInput>
  }

  /**
   * Promotor delete
   */
  export type PromotorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotor
     */
    select?: PromotorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotorInclude<ExtArgs> | null
    /**
     * Filter which Promotor to delete.
     */
    where: PromotorWhereUniqueInput
  }

  /**
   * Promotor deleteMany
   */
  export type PromotorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Promotors to delete
     */
    where?: PromotorWhereInput
  }

  /**
   * Promotor.event
   */
  export type Promotor$eventArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    where?: EventWhereInput
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    cursor?: EventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Promotor.ticket
   */
  export type Promotor$ticketArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    cursor?: TicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Promotor without action
   */
  export type PromotorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotor
     */
    select?: PromotorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotorInclude<ExtArgs> | null
  }


  /**
   * Model Event
   */

  export type AggregateEvent = {
    _count: EventCountAggregateOutputType | null
    _avg: EventAvgAggregateOutputType | null
    _sum: EventSumAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  export type EventAvgAggregateOutputType = {
    id: number | null
    promotorId: number | null
  }

  export type EventSumAggregateOutputType = {
    id: number | null
    promotorId: number | null
  }

  export type EventMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    category: $Enums.EventCategory | null
    location: $Enums.Location | null
    venue: string | null
    mapURL: string | null
    date: Date | null
    time: Date | null
    type: $Enums.EventType | null
    thumbnail: string | null
    isActive: boolean | null
    slug: string | null
    promotorId: number | null
  }

  export type EventMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    category: $Enums.EventCategory | null
    location: $Enums.Location | null
    venue: string | null
    mapURL: string | null
    date: Date | null
    time: Date | null
    type: $Enums.EventType | null
    thumbnail: string | null
    isActive: boolean | null
    slug: string | null
    promotorId: number | null
  }

  export type EventCountAggregateOutputType = {
    id: number
    title: number
    description: number
    category: number
    location: number
    venue: number
    mapURL: number
    date: number
    time: number
    type: number
    thumbnail: number
    isActive: number
    slug: number
    promotorId: number
    _all: number
  }


  export type EventAvgAggregateInputType = {
    id?: true
    promotorId?: true
  }

  export type EventSumAggregateInputType = {
    id?: true
    promotorId?: true
  }

  export type EventMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    category?: true
    location?: true
    venue?: true
    mapURL?: true
    date?: true
    time?: true
    type?: true
    thumbnail?: true
    isActive?: true
    slug?: true
    promotorId?: true
  }

  export type EventMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    category?: true
    location?: true
    venue?: true
    mapURL?: true
    date?: true
    time?: true
    type?: true
    thumbnail?: true
    isActive?: true
    slug?: true
    promotorId?: true
  }

  export type EventCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    category?: true
    location?: true
    venue?: true
    mapURL?: true
    date?: true
    time?: true
    type?: true
    thumbnail?: true
    isActive?: true
    slug?: true
    promotorId?: true
    _all?: true
  }

  export type EventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Event to aggregate.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Events
    **/
    _count?: true | EventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventMaxAggregateInputType
  }

  export type GetEventAggregateType<T extends EventAggregateArgs> = {
        [P in keyof T & keyof AggregateEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvent[P]>
      : GetScalarType<T[P], AggregateEvent[P]>
  }




  export type EventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
    orderBy?: EventOrderByWithAggregationInput | EventOrderByWithAggregationInput[]
    by: EventScalarFieldEnum[] | EventScalarFieldEnum
    having?: EventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventCountAggregateInputType | true
    _avg?: EventAvgAggregateInputType
    _sum?: EventSumAggregateInputType
    _min?: EventMinAggregateInputType
    _max?: EventMaxAggregateInputType
  }

  export type EventGroupByOutputType = {
    id: number
    title: string
    description: string
    category: $Enums.EventCategory
    location: $Enums.Location
    venue: string
    mapURL: string
    date: Date
    time: Date
    type: $Enums.EventType
    thumbnail: string
    isActive: boolean
    slug: string
    promotorId: number
    _count: EventCountAggregateOutputType | null
    _avg: EventAvgAggregateOutputType | null
    _sum: EventSumAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  type GetEventGroupByPayload<T extends EventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventGroupByOutputType[P]>
            : GetScalarType<T[P], EventGroupByOutputType[P]>
        }
      >
    >


  export type EventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    category?: boolean
    location?: boolean
    venue?: boolean
    mapURL?: boolean
    date?: boolean
    time?: boolean
    type?: boolean
    thumbnail?: boolean
    isActive?: boolean
    slug?: boolean
    promotorId?: boolean
    Promotor?: boolean | PromotorDefaultArgs<ExtArgs>
    ticket?: boolean | Event$ticketArgs<ExtArgs>
    DetailTransaction?: boolean | Event$DetailTransactionArgs<ExtArgs>
    review?: boolean | Event$reviewArgs<ExtArgs>
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    category?: boolean
    location?: boolean
    venue?: boolean
    mapURL?: boolean
    date?: boolean
    time?: boolean
    type?: boolean
    thumbnail?: boolean
    isActive?: boolean
    slug?: boolean
    promotorId?: boolean
    Promotor?: boolean | PromotorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    category?: boolean
    location?: boolean
    venue?: boolean
    mapURL?: boolean
    date?: boolean
    time?: boolean
    type?: boolean
    thumbnail?: boolean
    isActive?: boolean
    slug?: boolean
    promotorId?: boolean
  }

  export type EventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Promotor?: boolean | PromotorDefaultArgs<ExtArgs>
    ticket?: boolean | Event$ticketArgs<ExtArgs>
    DetailTransaction?: boolean | Event$DetailTransactionArgs<ExtArgs>
    review?: boolean | Event$reviewArgs<ExtArgs>
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Promotor?: boolean | PromotorDefaultArgs<ExtArgs>
  }

  export type $EventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Event"
    objects: {
      Promotor: Prisma.$PromotorPayload<ExtArgs>
      ticket: Prisma.$TicketPayload<ExtArgs>[]
      DetailTransaction: Prisma.$DetailTransactionPayload<ExtArgs>[]
      review: Prisma.$ReviewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string
      category: $Enums.EventCategory
      location: $Enums.Location
      venue: string
      mapURL: string
      date: Date
      time: Date
      type: $Enums.EventType
      thumbnail: string
      isActive: boolean
      slug: string
      promotorId: number
    }, ExtArgs["result"]["event"]>
    composites: {}
  }

  type EventGetPayload<S extends boolean | null | undefined | EventDefaultArgs> = $Result.GetResult<Prisma.$EventPayload, S>

  type EventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<EventFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: EventCountAggregateInputType | true
    }

  export interface EventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Event'], meta: { name: 'Event' } }
    /**
     * Find zero or one Event that matches the filter.
     * @param {EventFindUniqueArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventFindUniqueArgs>(args: SelectSubset<T, EventFindUniqueArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Event that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {EventFindUniqueOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventFindUniqueOrThrowArgs>(args: SelectSubset<T, EventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Event that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventFindFirstArgs>(args?: SelectSubset<T, EventFindFirstArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Event that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventFindFirstOrThrowArgs>(args?: SelectSubset<T, EventFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Events
     * const events = await prisma.event.findMany()
     * 
     * // Get first 10 Events
     * const events = await prisma.event.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventWithIdOnly = await prisma.event.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventFindManyArgs>(args?: SelectSubset<T, EventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Event.
     * @param {EventCreateArgs} args - Arguments to create a Event.
     * @example
     * // Create one Event
     * const Event = await prisma.event.create({
     *   data: {
     *     // ... data to create a Event
     *   }
     * })
     * 
     */
    create<T extends EventCreateArgs>(args: SelectSubset<T, EventCreateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Events.
     * @param {EventCreateManyArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventCreateManyArgs>(args?: SelectSubset<T, EventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Events and returns the data saved in the database.
     * @param {EventCreateManyAndReturnArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Events and only return the `id`
     * const eventWithIdOnly = await prisma.event.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventCreateManyAndReturnArgs>(args?: SelectSubset<T, EventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Event.
     * @param {EventDeleteArgs} args - Arguments to delete one Event.
     * @example
     * // Delete one Event
     * const Event = await prisma.event.delete({
     *   where: {
     *     // ... filter to delete one Event
     *   }
     * })
     * 
     */
    delete<T extends EventDeleteArgs>(args: SelectSubset<T, EventDeleteArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Event.
     * @param {EventUpdateArgs} args - Arguments to update one Event.
     * @example
     * // Update one Event
     * const event = await prisma.event.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventUpdateArgs>(args: SelectSubset<T, EventUpdateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Events.
     * @param {EventDeleteManyArgs} args - Arguments to filter Events to delete.
     * @example
     * // Delete a few Events
     * const { count } = await prisma.event.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventDeleteManyArgs>(args?: SelectSubset<T, EventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventUpdateManyArgs>(args: SelectSubset<T, EventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Event.
     * @param {EventUpsertArgs} args - Arguments to update or create a Event.
     * @example
     * // Update or create a Event
     * const event = await prisma.event.upsert({
     *   create: {
     *     // ... data to create a Event
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Event we want to update
     *   }
     * })
     */
    upsert<T extends EventUpsertArgs>(args: SelectSubset<T, EventUpsertArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventCountArgs} args - Arguments to filter Events to count.
     * @example
     * // Count the number of Events
     * const count = await prisma.event.count({
     *   where: {
     *     // ... the filter for the Events we want to count
     *   }
     * })
    **/
    count<T extends EventCountArgs>(
      args?: Subset<T, EventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EventAggregateArgs>(args: Subset<T, EventAggregateArgs>): Prisma.PrismaPromise<GetEventAggregateType<T>>

    /**
     * Group by Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventGroupByArgs['orderBy'] }
        : { orderBy?: EventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Event model
   */
  readonly fields: EventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Event.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Promotor<T extends PromotorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PromotorDefaultArgs<ExtArgs>>): Prisma__PromotorClient<$Result.GetResult<Prisma.$PromotorPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    ticket<T extends Event$ticketArgs<ExtArgs> = {}>(args?: Subset<T, Event$ticketArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany"> | Null>
    DetailTransaction<T extends Event$DetailTransactionArgs<ExtArgs> = {}>(args?: Subset<T, Event$DetailTransactionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetailTransactionPayload<ExtArgs>, T, "findMany"> | Null>
    review<T extends Event$reviewArgs<ExtArgs> = {}>(args?: Subset<T, Event$reviewArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Event model
   */ 
  interface EventFieldRefs {
    readonly id: FieldRef<"Event", 'Int'>
    readonly title: FieldRef<"Event", 'String'>
    readonly description: FieldRef<"Event", 'String'>
    readonly category: FieldRef<"Event", 'EventCategory'>
    readonly location: FieldRef<"Event", 'Location'>
    readonly venue: FieldRef<"Event", 'String'>
    readonly mapURL: FieldRef<"Event", 'String'>
    readonly date: FieldRef<"Event", 'DateTime'>
    readonly time: FieldRef<"Event", 'DateTime'>
    readonly type: FieldRef<"Event", 'EventType'>
    readonly thumbnail: FieldRef<"Event", 'String'>
    readonly isActive: FieldRef<"Event", 'Boolean'>
    readonly slug: FieldRef<"Event", 'String'>
    readonly promotorId: FieldRef<"Event", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Event findUnique
   */
  export type EventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findUniqueOrThrow
   */
  export type EventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findFirst
   */
  export type EventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findFirstOrThrow
   */
  export type EventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findMany
   */
  export type EventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event create
   */
  export type EventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to create a Event.
     */
    data: XOR<EventCreateInput, EventUncheckedCreateInput>
  }

  /**
   * Event createMany
   */
  export type EventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Event createManyAndReturn
   */
  export type EventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Event update
   */
  export type EventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to update a Event.
     */
    data: XOR<EventUpdateInput, EventUncheckedUpdateInput>
    /**
     * Choose, which Event to update.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event updateMany
   */
  export type EventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
  }

  /**
   * Event upsert
   */
  export type EventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The filter to search for the Event to update in case it exists.
     */
    where: EventWhereUniqueInput
    /**
     * In case the Event found by the `where` argument doesn't exist, create a new Event with this data.
     */
    create: XOR<EventCreateInput, EventUncheckedCreateInput>
    /**
     * In case the Event was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventUpdateInput, EventUncheckedUpdateInput>
  }

  /**
   * Event delete
   */
  export type EventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter which Event to delete.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event deleteMany
   */
  export type EventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Events to delete
     */
    where?: EventWhereInput
  }

  /**
   * Event.ticket
   */
  export type Event$ticketArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    cursor?: TicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Event.DetailTransaction
   */
  export type Event$DetailTransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailTransaction
     */
    select?: DetailTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailTransactionInclude<ExtArgs> | null
    where?: DetailTransactionWhereInput
    orderBy?: DetailTransactionOrderByWithRelationInput | DetailTransactionOrderByWithRelationInput[]
    cursor?: DetailTransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DetailTransactionScalarFieldEnum | DetailTransactionScalarFieldEnum[]
  }

  /**
   * Event.review
   */
  export type Event$reviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Event without action
   */
  export type EventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
  }


  /**
   * Model Ticket
   */

  export type AggregateTicket = {
    _count: TicketCountAggregateOutputType | null
    _avg: TicketAvgAggregateOutputType | null
    _sum: TicketSumAggregateOutputType | null
    _min: TicketMinAggregateOutputType | null
    _max: TicketMaxAggregateOutputType | null
  }

  export type TicketAvgAggregateOutputType = {
    id: number | null
    eventId: number | null
    price: number | null
    quota: number | null
    promotorId: number | null
  }

  export type TicketSumAggregateOutputType = {
    id: number | null
    eventId: number | null
    price: number | null
    quota: number | null
    promotorId: number | null
  }

  export type TicketMinAggregateOutputType = {
    id: number | null
    eventId: number | null
    price: number | null
    category: $Enums.TicketCategory | null
    startDate: Date | null
    endDate: Date | null
    isActive: boolean | null
    discount: boolean | null
    quota: number | null
    promotorId: number | null
  }

  export type TicketMaxAggregateOutputType = {
    id: number | null
    eventId: number | null
    price: number | null
    category: $Enums.TicketCategory | null
    startDate: Date | null
    endDate: Date | null
    isActive: boolean | null
    discount: boolean | null
    quota: number | null
    promotorId: number | null
  }

  export type TicketCountAggregateOutputType = {
    id: number
    eventId: number
    price: number
    category: number
    startDate: number
    endDate: number
    isActive: number
    discount: number
    quota: number
    promotorId: number
    _all: number
  }


  export type TicketAvgAggregateInputType = {
    id?: true
    eventId?: true
    price?: true
    quota?: true
    promotorId?: true
  }

  export type TicketSumAggregateInputType = {
    id?: true
    eventId?: true
    price?: true
    quota?: true
    promotorId?: true
  }

  export type TicketMinAggregateInputType = {
    id?: true
    eventId?: true
    price?: true
    category?: true
    startDate?: true
    endDate?: true
    isActive?: true
    discount?: true
    quota?: true
    promotorId?: true
  }

  export type TicketMaxAggregateInputType = {
    id?: true
    eventId?: true
    price?: true
    category?: true
    startDate?: true
    endDate?: true
    isActive?: true
    discount?: true
    quota?: true
    promotorId?: true
  }

  export type TicketCountAggregateInputType = {
    id?: true
    eventId?: true
    price?: true
    category?: true
    startDate?: true
    endDate?: true
    isActive?: true
    discount?: true
    quota?: true
    promotorId?: true
    _all?: true
  }

  export type TicketAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ticket to aggregate.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tickets
    **/
    _count?: true | TicketCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TicketAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TicketSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TicketMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TicketMaxAggregateInputType
  }

  export type GetTicketAggregateType<T extends TicketAggregateArgs> = {
        [P in keyof T & keyof AggregateTicket]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTicket[P]>
      : GetScalarType<T[P], AggregateTicket[P]>
  }




  export type TicketGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithAggregationInput | TicketOrderByWithAggregationInput[]
    by: TicketScalarFieldEnum[] | TicketScalarFieldEnum
    having?: TicketScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TicketCountAggregateInputType | true
    _avg?: TicketAvgAggregateInputType
    _sum?: TicketSumAggregateInputType
    _min?: TicketMinAggregateInputType
    _max?: TicketMaxAggregateInputType
  }

  export type TicketGroupByOutputType = {
    id: number
    eventId: number
    price: number
    category: $Enums.TicketCategory
    startDate: Date
    endDate: Date
    isActive: boolean
    discount: boolean
    quota: number
    promotorId: number
    _count: TicketCountAggregateOutputType | null
    _avg: TicketAvgAggregateOutputType | null
    _sum: TicketSumAggregateOutputType | null
    _min: TicketMinAggregateOutputType | null
    _max: TicketMaxAggregateOutputType | null
  }

  type GetTicketGroupByPayload<T extends TicketGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TicketGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TicketGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TicketGroupByOutputType[P]>
            : GetScalarType<T[P], TicketGroupByOutputType[P]>
        }
      >
    >


  export type TicketSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    price?: boolean
    category?: boolean
    startDate?: boolean
    endDate?: boolean
    isActive?: boolean
    discount?: boolean
    quota?: boolean
    promotorId?: boolean
    Promotor?: boolean | PromotorDefaultArgs<ExtArgs>
    event?: boolean | EventDefaultArgs<ExtArgs>
    transaction?: boolean | Ticket$transactionArgs<ExtArgs>
    DetailTransaction?: boolean | Ticket$DetailTransactionArgs<ExtArgs>
    review?: boolean | Ticket$reviewArgs<ExtArgs>
    _count?: boolean | TicketCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticket"]>

  export type TicketSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    price?: boolean
    category?: boolean
    startDate?: boolean
    endDate?: boolean
    isActive?: boolean
    discount?: boolean
    quota?: boolean
    promotorId?: boolean
    Promotor?: boolean | PromotorDefaultArgs<ExtArgs>
    event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticket"]>

  export type TicketSelectScalar = {
    id?: boolean
    eventId?: boolean
    price?: boolean
    category?: boolean
    startDate?: boolean
    endDate?: boolean
    isActive?: boolean
    discount?: boolean
    quota?: boolean
    promotorId?: boolean
  }

  export type TicketInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Promotor?: boolean | PromotorDefaultArgs<ExtArgs>
    event?: boolean | EventDefaultArgs<ExtArgs>
    transaction?: boolean | Ticket$transactionArgs<ExtArgs>
    DetailTransaction?: boolean | Ticket$DetailTransactionArgs<ExtArgs>
    review?: boolean | Ticket$reviewArgs<ExtArgs>
    _count?: boolean | TicketCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TicketIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Promotor?: boolean | PromotorDefaultArgs<ExtArgs>
    event?: boolean | EventDefaultArgs<ExtArgs>
  }

  export type $TicketPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ticket"
    objects: {
      Promotor: Prisma.$PromotorPayload<ExtArgs>
      event: Prisma.$EventPayload<ExtArgs>
      transaction: Prisma.$TransactionPayload<ExtArgs>[]
      DetailTransaction: Prisma.$DetailTransactionPayload<ExtArgs>[]
      review: Prisma.$ReviewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      eventId: number
      price: number
      category: $Enums.TicketCategory
      startDate: Date
      endDate: Date
      isActive: boolean
      discount: boolean
      quota: number
      promotorId: number
    }, ExtArgs["result"]["ticket"]>
    composites: {}
  }

  type TicketGetPayload<S extends boolean | null | undefined | TicketDefaultArgs> = $Result.GetResult<Prisma.$TicketPayload, S>

  type TicketCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TicketFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TicketCountAggregateInputType | true
    }

  export interface TicketDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ticket'], meta: { name: 'Ticket' } }
    /**
     * Find zero or one Ticket that matches the filter.
     * @param {TicketFindUniqueArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TicketFindUniqueArgs>(args: SelectSubset<T, TicketFindUniqueArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Ticket that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TicketFindUniqueOrThrowArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TicketFindUniqueOrThrowArgs>(args: SelectSubset<T, TicketFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Ticket that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindFirstArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TicketFindFirstArgs>(args?: SelectSubset<T, TicketFindFirstArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Ticket that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindFirstOrThrowArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TicketFindFirstOrThrowArgs>(args?: SelectSubset<T, TicketFindFirstOrThrowArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Tickets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tickets
     * const tickets = await prisma.ticket.findMany()
     * 
     * // Get first 10 Tickets
     * const tickets = await prisma.ticket.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ticketWithIdOnly = await prisma.ticket.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TicketFindManyArgs>(args?: SelectSubset<T, TicketFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Ticket.
     * @param {TicketCreateArgs} args - Arguments to create a Ticket.
     * @example
     * // Create one Ticket
     * const Ticket = await prisma.ticket.create({
     *   data: {
     *     // ... data to create a Ticket
     *   }
     * })
     * 
     */
    create<T extends TicketCreateArgs>(args: SelectSubset<T, TicketCreateArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Tickets.
     * @param {TicketCreateManyArgs} args - Arguments to create many Tickets.
     * @example
     * // Create many Tickets
     * const ticket = await prisma.ticket.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TicketCreateManyArgs>(args?: SelectSubset<T, TicketCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tickets and returns the data saved in the database.
     * @param {TicketCreateManyAndReturnArgs} args - Arguments to create many Tickets.
     * @example
     * // Create many Tickets
     * const ticket = await prisma.ticket.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tickets and only return the `id`
     * const ticketWithIdOnly = await prisma.ticket.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TicketCreateManyAndReturnArgs>(args?: SelectSubset<T, TicketCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Ticket.
     * @param {TicketDeleteArgs} args - Arguments to delete one Ticket.
     * @example
     * // Delete one Ticket
     * const Ticket = await prisma.ticket.delete({
     *   where: {
     *     // ... filter to delete one Ticket
     *   }
     * })
     * 
     */
    delete<T extends TicketDeleteArgs>(args: SelectSubset<T, TicketDeleteArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Ticket.
     * @param {TicketUpdateArgs} args - Arguments to update one Ticket.
     * @example
     * // Update one Ticket
     * const ticket = await prisma.ticket.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TicketUpdateArgs>(args: SelectSubset<T, TicketUpdateArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Tickets.
     * @param {TicketDeleteManyArgs} args - Arguments to filter Tickets to delete.
     * @example
     * // Delete a few Tickets
     * const { count } = await prisma.ticket.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TicketDeleteManyArgs>(args?: SelectSubset<T, TicketDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tickets
     * const ticket = await prisma.ticket.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TicketUpdateManyArgs>(args: SelectSubset<T, TicketUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Ticket.
     * @param {TicketUpsertArgs} args - Arguments to update or create a Ticket.
     * @example
     * // Update or create a Ticket
     * const ticket = await prisma.ticket.upsert({
     *   create: {
     *     // ... data to create a Ticket
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ticket we want to update
     *   }
     * })
     */
    upsert<T extends TicketUpsertArgs>(args: SelectSubset<T, TicketUpsertArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketCountArgs} args - Arguments to filter Tickets to count.
     * @example
     * // Count the number of Tickets
     * const count = await prisma.ticket.count({
     *   where: {
     *     // ... the filter for the Tickets we want to count
     *   }
     * })
    **/
    count<T extends TicketCountArgs>(
      args?: Subset<T, TicketCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TicketCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ticket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TicketAggregateArgs>(args: Subset<T, TicketAggregateArgs>): Prisma.PrismaPromise<GetTicketAggregateType<T>>

    /**
     * Group by Ticket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TicketGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TicketGroupByArgs['orderBy'] }
        : { orderBy?: TicketGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TicketGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicketGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ticket model
   */
  readonly fields: TicketFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ticket.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TicketClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Promotor<T extends PromotorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PromotorDefaultArgs<ExtArgs>>): Prisma__PromotorClient<$Result.GetResult<Prisma.$PromotorPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    event<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    transaction<T extends Ticket$transactionArgs<ExtArgs> = {}>(args?: Subset<T, Ticket$transactionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany"> | Null>
    DetailTransaction<T extends Ticket$DetailTransactionArgs<ExtArgs> = {}>(args?: Subset<T, Ticket$DetailTransactionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetailTransactionPayload<ExtArgs>, T, "findMany"> | Null>
    review<T extends Ticket$reviewArgs<ExtArgs> = {}>(args?: Subset<T, Ticket$reviewArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Ticket model
   */ 
  interface TicketFieldRefs {
    readonly id: FieldRef<"Ticket", 'Int'>
    readonly eventId: FieldRef<"Ticket", 'Int'>
    readonly price: FieldRef<"Ticket", 'Int'>
    readonly category: FieldRef<"Ticket", 'TicketCategory'>
    readonly startDate: FieldRef<"Ticket", 'DateTime'>
    readonly endDate: FieldRef<"Ticket", 'DateTime'>
    readonly isActive: FieldRef<"Ticket", 'Boolean'>
    readonly discount: FieldRef<"Ticket", 'Boolean'>
    readonly quota: FieldRef<"Ticket", 'Int'>
    readonly promotorId: FieldRef<"Ticket", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Ticket findUnique
   */
  export type TicketFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket findUniqueOrThrow
   */
  export type TicketFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket findFirst
   */
  export type TicketFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tickets.
     */
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket findFirstOrThrow
   */
  export type TicketFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tickets.
     */
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket findMany
   */
  export type TicketFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Tickets to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket create
   */
  export type TicketCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The data needed to create a Ticket.
     */
    data: XOR<TicketCreateInput, TicketUncheckedCreateInput>
  }

  /**
   * Ticket createMany
   */
  export type TicketCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tickets.
     */
    data: TicketCreateManyInput | TicketCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ticket createManyAndReturn
   */
  export type TicketCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Tickets.
     */
    data: TicketCreateManyInput | TicketCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ticket update
   */
  export type TicketUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The data needed to update a Ticket.
     */
    data: XOR<TicketUpdateInput, TicketUncheckedUpdateInput>
    /**
     * Choose, which Ticket to update.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket updateMany
   */
  export type TicketUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tickets.
     */
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyInput>
    /**
     * Filter which Tickets to update
     */
    where?: TicketWhereInput
  }

  /**
   * Ticket upsert
   */
  export type TicketUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The filter to search for the Ticket to update in case it exists.
     */
    where: TicketWhereUniqueInput
    /**
     * In case the Ticket found by the `where` argument doesn't exist, create a new Ticket with this data.
     */
    create: XOR<TicketCreateInput, TicketUncheckedCreateInput>
    /**
     * In case the Ticket was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TicketUpdateInput, TicketUncheckedUpdateInput>
  }

  /**
   * Ticket delete
   */
  export type TicketDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter which Ticket to delete.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket deleteMany
   */
  export type TicketDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tickets to delete
     */
    where?: TicketWhereInput
  }

  /**
   * Ticket.transaction
   */
  export type Ticket$transactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Ticket.DetailTransaction
   */
  export type Ticket$DetailTransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailTransaction
     */
    select?: DetailTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailTransactionInclude<ExtArgs> | null
    where?: DetailTransactionWhereInput
    orderBy?: DetailTransactionOrderByWithRelationInput | DetailTransactionOrderByWithRelationInput[]
    cursor?: DetailTransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DetailTransactionScalarFieldEnum | DetailTransactionScalarFieldEnum[]
  }

  /**
   * Ticket.review
   */
  export type Ticket$reviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Ticket without action
   */
  export type TicketDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
  }


  /**
   * Model Transaction
   */

  export type AggregateTransaction = {
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  export type TransactionAvgAggregateOutputType = {
    id: number | null
    basePrice: number | null
    totalPrice: number | null
    finalPrice: number | null
    userVoucher: number | null
    userPoints: number | null
    discount: number | null
    ticketId: number | null
    qty: number | null
    promoQuota: number | null
  }

  export type TransactionSumAggregateOutputType = {
    id: number | null
    basePrice: number | null
    totalPrice: number | null
    finalPrice: number | null
    userVoucher: number | null
    userPoints: number | null
    discount: number | null
    ticketId: number | null
    qty: number | null
    promoQuota: number | null
  }

  export type TransactionMinAggregateOutputType = {
    id: number | null
    basePrice: number | null
    totalPrice: number | null
    finalPrice: number | null
    status: $Enums.TransactionStatus | null
    userId: string | null
    userVoucher: number | null
    userPoints: number | null
    discount: number | null
    ticketId: number | null
<<<<<<< HEAD
=======

>>>>>>> 86a465382dd362a0e65e14019e447344695382d4
    createdAt: Date | null
    expiresAt: Date | null
    qty: number | null
    promoQuota: number | null
    redirect_url: string | null
<<<<<<< HEAD
=======

>>>>>>> 86a465382dd362a0e65e14019e447344695382d4
  }

  export type TransactionMaxAggregateOutputType = {
    id: number | null
    basePrice: number | null
    totalPrice: number | null
    finalPrice: number | null
    status: $Enums.TransactionStatus | null
    userId: string | null
    userVoucher: number | null
    userPoints: number | null
    discount: number | null
    ticketId: number | null
    createdAt: Date | null
    expiresAt: Date | null
    qty: number | null
    promoQuota: number | null
    redirect_url: string | null
  }

  export type TransactionCountAggregateOutputType = {
    id: number
    basePrice: number
    totalPrice: number
    finalPrice: number
    status: number
    userId: number
    userVoucher: number
    userPoints: number
    discount: number
    ticketId: number
    createdAt: number
    expiresAt: number
    qty: number
    promoQuota: number
    redirect_url: number
    _all: number
  }


  export type TransactionAvgAggregateInputType = {
    id?: true
    basePrice?: true
    totalPrice?: true
    finalPrice?: true
    userVoucher?: true
    userPoints?: true
    discount?: true
    ticketId?: true
    qty?: true
    promoQuota?: true
  }

  export type TransactionSumAggregateInputType = {
    id?: true
    basePrice?: true
    totalPrice?: true
    finalPrice?: true
    userVoucher?: true
    userPoints?: true
    discount?: true
    ticketId?: true
    qty?: true
    promoQuota?: true
  }

  export type TransactionMinAggregateInputType = {
    id?: true
    basePrice?: true
    totalPrice?: true
    finalPrice?: true
    status?: true
    userId?: true
    userVoucher?: true
    userPoints?: true
    discount?: true
    ticketId?: true
    createdAt?: true
    expiresAt?: true
    qty?: true
    promoQuota?: true
    redirect_url?: true
  }

  export type TransactionMaxAggregateInputType = {
    id?: true
    basePrice?: true
    totalPrice?: true
    finalPrice?: true
    status?: true
    userId?: true
    userVoucher?: true
    userPoints?: true
    discount?: true
    ticketId?: true
    createdAt?: true
    expiresAt?: true
    qty?: true
    promoQuota?: true
    redirect_url?: true
  }

  export type TransactionCountAggregateInputType = {
    id?: true
    basePrice?: true
    totalPrice?: true
    finalPrice?: true
    status?: true
    userId?: true
    userVoucher?: true
    userPoints?: true
    discount?: true
    ticketId?: true
    createdAt?: true
    expiresAt?: true
    qty?: true
    promoQuota?: true
    redirect_url?: true
    _all?: true
  }

  export type TransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transaction to aggregate.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transactions
    **/
    _count?: true | TransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionMaxAggregateInputType
  }

  export type GetTransactionAggregateType<T extends TransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaction[P]>
      : GetScalarType<T[P], AggregateTransaction[P]>
  }




  export type TransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithAggregationInput | TransactionOrderByWithAggregationInput[]
    by: TransactionScalarFieldEnum[] | TransactionScalarFieldEnum
    having?: TransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionCountAggregateInputType | true
    _avg?: TransactionAvgAggregateInputType
    _sum?: TransactionSumAggregateInputType
    _min?: TransactionMinAggregateInputType
    _max?: TransactionMaxAggregateInputType
  }

  export type TransactionGroupByOutputType = {
    id: number
    basePrice: number
    totalPrice: number
    finalPrice: number
    status: $Enums.TransactionStatus
    userId: string
    userVoucher: number | null
    userPoints: number | null
    discount: number | null
    ticketId: number
<<<<<<< HEAD
=======

>>>>>>> 86a465382dd362a0e65e14019e447344695382d4
    createdAt: Date
    expiresAt: Date
    qty: number
    promoQuota: number
    redirect_url: string | null
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  type GetTransactionGroupByPayload<T extends TransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionGroupByOutputType[P]>
        }
      >
    >


  export type TransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    basePrice?: boolean
    totalPrice?: boolean
    finalPrice?: boolean
    status?: boolean
    userId?: boolean
    userVoucher?: boolean
    userPoints?: boolean
    discount?: boolean
    ticketId?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    qty?: boolean
    promoQuota?: boolean
    redirect_url?: boolean
    DetailTransaction?: boolean | Transaction$DetailTransactionArgs<ExtArgs>
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    points?: boolean | Transaction$pointsArgs<ExtArgs>
    voucher?: boolean | Transaction$voucherArgs<ExtArgs>
    _count?: boolean | TransactionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    basePrice?: boolean
    totalPrice?: boolean
    finalPrice?: boolean
    status?: boolean
    userId?: boolean
    userVoucher?: boolean
    userPoints?: boolean
    discount?: boolean
    ticketId?: boolean
<<<<<<< HEAD
=======

>>>>>>> 86a465382dd362a0e65e14019e447344695382d4
    createdAt?: boolean
    expiresAt?: boolean
    qty?: boolean
    promoQuota?: boolean
    redirect_url?: boolean
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    points?: boolean | Transaction$pointsArgs<ExtArgs>
    voucher?: boolean | Transaction$voucherArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectScalar = {
    id?: boolean
    basePrice?: boolean
    totalPrice?: boolean
    finalPrice?: boolean
    status?: boolean
    userId?: boolean
    userVoucher?: boolean
    userPoints?: boolean
    discount?: boolean
    ticketId?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    qty?: boolean
    promoQuota?: boolean
    redirect_url?: boolean
  }

  export type TransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    DetailTransaction?: boolean | Transaction$DetailTransactionArgs<ExtArgs>
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    points?: boolean | Transaction$pointsArgs<ExtArgs>
    voucher?: boolean | Transaction$voucherArgs<ExtArgs>
    _count?: boolean | TransactionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TransactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    points?: boolean | Transaction$pointsArgs<ExtArgs>
    voucher?: boolean | Transaction$voucherArgs<ExtArgs>
  }

  export type $TransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transaction"
    objects: {
      DetailTransaction: Prisma.$DetailTransactionPayload<ExtArgs>[]
      ticket: Prisma.$TicketPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      points: Prisma.$userPointsPayload<ExtArgs> | null
      voucher: Prisma.$referralVoucherPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      basePrice: number
      totalPrice: number
      finalPrice: number
      status: $Enums.TransactionStatus
      userId: string
      userVoucher: number | null
      userPoints: number | null
      discount: number | null
      ticketId: number
      createdAt: Date
      expiresAt: Date
      qty: number
      promoQuota: number
      redirect_url: string | null
    }, ExtArgs["result"]["transaction"]>
    composites: {}
  }

  type TransactionGetPayload<S extends boolean | null | undefined | TransactionDefaultArgs> = $Result.GetResult<Prisma.$TransactionPayload, S>

  type TransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TransactionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TransactionCountAggregateInputType | true
    }

  export interface TransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transaction'], meta: { name: 'Transaction' } }
    /**
     * Find zero or one Transaction that matches the filter.
     * @param {TransactionFindUniqueArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransactionFindUniqueArgs>(args: SelectSubset<T, TransactionFindUniqueArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Transaction that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TransactionFindUniqueOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, TransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Transaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransactionFindFirstArgs>(args?: SelectSubset<T, TransactionFindFirstArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Transaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, TransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transaction.findMany()
     * 
     * // Get first 10 Transactions
     * const transactions = await prisma.transaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionWithIdOnly = await prisma.transaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransactionFindManyArgs>(args?: SelectSubset<T, TransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Transaction.
     * @param {TransactionCreateArgs} args - Arguments to create a Transaction.
     * @example
     * // Create one Transaction
     * const Transaction = await prisma.transaction.create({
     *   data: {
     *     // ... data to create a Transaction
     *   }
     * })
     * 
     */
    create<T extends TransactionCreateArgs>(args: SelectSubset<T, TransactionCreateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Transactions.
     * @param {TransactionCreateManyArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransactionCreateManyArgs>(args?: SelectSubset<T, TransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transactions and returns the data saved in the database.
     * @param {TransactionCreateManyAndReturnArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, TransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Transaction.
     * @param {TransactionDeleteArgs} args - Arguments to delete one Transaction.
     * @example
     * // Delete one Transaction
     * const Transaction = await prisma.transaction.delete({
     *   where: {
     *     // ... filter to delete one Transaction
     *   }
     * })
     * 
     */
    delete<T extends TransactionDeleteArgs>(args: SelectSubset<T, TransactionDeleteArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Transaction.
     * @param {TransactionUpdateArgs} args - Arguments to update one Transaction.
     * @example
     * // Update one Transaction
     * const transaction = await prisma.transaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransactionUpdateArgs>(args: SelectSubset<T, TransactionUpdateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Transactions.
     * @param {TransactionDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransactionDeleteManyArgs>(args?: SelectSubset<T, TransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransactionUpdateManyArgs>(args: SelectSubset<T, TransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Transaction.
     * @param {TransactionUpsertArgs} args - Arguments to update or create a Transaction.
     * @example
     * // Update or create a Transaction
     * const transaction = await prisma.transaction.upsert({
     *   create: {
     *     // ... data to create a Transaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaction we want to update
     *   }
     * })
     */
    upsert<T extends TransactionUpsertArgs>(args: SelectSubset<T, TransactionUpsertArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transaction.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends TransactionCountArgs>(
      args?: Subset<T, TransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TransactionAggregateArgs>(args: Subset<T, TransactionAggregateArgs>): Prisma.PrismaPromise<GetTransactionAggregateType<T>>

    /**
     * Group by Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionGroupByArgs['orderBy'] }
        : { orderBy?: TransactionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transaction model
   */
  readonly fields: TransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    DetailTransaction<T extends Transaction$DetailTransactionArgs<ExtArgs> = {}>(args?: Subset<T, Transaction$DetailTransactionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetailTransactionPayload<ExtArgs>, T, "findMany"> | Null>
    ticket<T extends TicketDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TicketDefaultArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    points<T extends Transaction$pointsArgs<ExtArgs> = {}>(args?: Subset<T, Transaction$pointsArgs<ExtArgs>>): Prisma__userPointsClient<$Result.GetResult<Prisma.$userPointsPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    voucher<T extends Transaction$voucherArgs<ExtArgs> = {}>(args?: Subset<T, Transaction$voucherArgs<ExtArgs>>): Prisma__referralVoucherClient<$Result.GetResult<Prisma.$referralVoucherPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Transaction model
   */ 
  interface TransactionFieldRefs {
    readonly id: FieldRef<"Transaction", 'Int'>
    readonly basePrice: FieldRef<"Transaction", 'Int'>
    readonly totalPrice: FieldRef<"Transaction", 'Int'>
    readonly finalPrice: FieldRef<"Transaction", 'Int'>
    readonly status: FieldRef<"Transaction", 'TransactionStatus'>
    readonly userId: FieldRef<"Transaction", 'String'>
    readonly userVoucher: FieldRef<"Transaction", 'Int'>
    readonly userPoints: FieldRef<"Transaction", 'Int'>
    readonly discount: FieldRef<"Transaction", 'Int'>
    readonly ticketId: FieldRef<"Transaction", 'Int'>
    readonly createdAt: FieldRef<"Transaction", 'DateTime'>
    readonly expiresAt: FieldRef<"Transaction", 'DateTime'>
    readonly qty: FieldRef<"Transaction", 'Int'>
    readonly promoQuota: FieldRef<"Transaction", 'Int'>
    readonly redirect_url: FieldRef<"Transaction", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Transaction findUnique
   */
  export type TransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findUniqueOrThrow
   */
  export type TransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findFirst
   */
  export type TransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findFirstOrThrow
   */
  export type TransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findMany
   */
  export type TransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction create
   */
  export type TransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a Transaction.
     */
    data: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
  }

  /**
   * Transaction createMany
   */
  export type TransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Transaction createManyAndReturn
   */
  export type TransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaction update
   */
  export type TransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a Transaction.
     */
    data: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
    /**
     * Choose, which Transaction to update.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction updateMany
   */
  export type TransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
  }

  /**
   * Transaction upsert
   */
  export type TransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the Transaction to update in case it exists.
     */
    where: TransactionWhereUniqueInput
    /**
     * In case the Transaction found by the `where` argument doesn't exist, create a new Transaction with this data.
     */
    create: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
    /**
     * In case the Transaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
  }

  /**
   * Transaction delete
   */
  export type TransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter which Transaction to delete.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction deleteMany
   */
  export type TransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transactions to delete
     */
    where?: TransactionWhereInput
  }

  /**
   * Transaction.DetailTransaction
   */
  export type Transaction$DetailTransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailTransaction
     */
    select?: DetailTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailTransactionInclude<ExtArgs> | null
    where?: DetailTransactionWhereInput
    orderBy?: DetailTransactionOrderByWithRelationInput | DetailTransactionOrderByWithRelationInput[]
    cursor?: DetailTransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DetailTransactionScalarFieldEnum | DetailTransactionScalarFieldEnum[]
  }

  /**
   * Transaction.points
   */
  export type Transaction$pointsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userPoints
     */
    select?: userPointsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userPointsInclude<ExtArgs> | null
    where?: userPointsWhereInput
  }

  /**
   * Transaction.voucher
   */
  export type Transaction$voucherArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the referralVoucher
     */
    select?: referralVoucherSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: referralVoucherInclude<ExtArgs> | null
    where?: referralVoucherWhereInput
  }

  /**
   * Transaction without action
   */
  export type TransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
  }


  /**
   * Model DetailTransaction
   */

  export type AggregateDetailTransaction = {
    _count: DetailTransactionCountAggregateOutputType | null
    _avg: DetailTransactionAvgAggregateOutputType | null
    _sum: DetailTransactionSumAggregateOutputType | null
    _min: DetailTransactionMinAggregateOutputType | null
    _max: DetailTransactionMaxAggregateOutputType | null
  }

  export type DetailTransactionAvgAggregateOutputType = {
    id: number | null
    transactionId: number | null
    eventId: number | null
    ticketId: number | null
  }

  export type DetailTransactionSumAggregateOutputType = {
    id: number | null
    transactionId: number | null
    eventId: number | null
    ticketId: number | null
  }

  export type DetailTransactionMinAggregateOutputType = {
    id: number | null
    transactionId: number | null
    eventId: number | null
    ticketId: number | null
    reviewStatus: boolean | null
  }

  export type DetailTransactionMaxAggregateOutputType = {
    id: number | null
    transactionId: number | null
    eventId: number | null
    ticketId: number | null
    reviewStatus: boolean | null
  }

  export type DetailTransactionCountAggregateOutputType = {
    id: number
    transactionId: number
    eventId: number
    ticketId: number
    reviewStatus: number
    _all: number
  }


  export type DetailTransactionAvgAggregateInputType = {
    id?: true
    transactionId?: true
    eventId?: true
    ticketId?: true
  }

  export type DetailTransactionSumAggregateInputType = {
    id?: true
    transactionId?: true
    eventId?: true
    ticketId?: true
  }

  export type DetailTransactionMinAggregateInputType = {
    id?: true
    transactionId?: true
    eventId?: true
    ticketId?: true
    reviewStatus?: true
  }

  export type DetailTransactionMaxAggregateInputType = {
    id?: true
    transactionId?: true
    eventId?: true
    ticketId?: true
    reviewStatus?: true
  }

  export type DetailTransactionCountAggregateInputType = {
    id?: true
    transactionId?: true
    eventId?: true
    ticketId?: true
    reviewStatus?: true
    _all?: true
  }

  export type DetailTransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DetailTransaction to aggregate.
     */
    where?: DetailTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetailTransactions to fetch.
     */
    orderBy?: DetailTransactionOrderByWithRelationInput | DetailTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DetailTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetailTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetailTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DetailTransactions
    **/
    _count?: true | DetailTransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DetailTransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DetailTransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DetailTransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DetailTransactionMaxAggregateInputType
  }

  export type GetDetailTransactionAggregateType<T extends DetailTransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateDetailTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDetailTransaction[P]>
      : GetScalarType<T[P], AggregateDetailTransaction[P]>
  }




  export type DetailTransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DetailTransactionWhereInput
    orderBy?: DetailTransactionOrderByWithAggregationInput | DetailTransactionOrderByWithAggregationInput[]
    by: DetailTransactionScalarFieldEnum[] | DetailTransactionScalarFieldEnum
    having?: DetailTransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DetailTransactionCountAggregateInputType | true
    _avg?: DetailTransactionAvgAggregateInputType
    _sum?: DetailTransactionSumAggregateInputType
    _min?: DetailTransactionMinAggregateInputType
    _max?: DetailTransactionMaxAggregateInputType
  }

  export type DetailTransactionGroupByOutputType = {
    id: number
    transactionId: number
    eventId: number
    ticketId: number
    reviewStatus: boolean
    _count: DetailTransactionCountAggregateOutputType | null
    _avg: DetailTransactionAvgAggregateOutputType | null
    _sum: DetailTransactionSumAggregateOutputType | null
    _min: DetailTransactionMinAggregateOutputType | null
    _max: DetailTransactionMaxAggregateOutputType | null
  }

  type GetDetailTransactionGroupByPayload<T extends DetailTransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DetailTransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DetailTransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DetailTransactionGroupByOutputType[P]>
            : GetScalarType<T[P], DetailTransactionGroupByOutputType[P]>
        }
      >
    >


  export type DetailTransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    transactionId?: boolean
    eventId?: boolean
    ticketId?: boolean
    reviewStatus?: boolean
    review?: boolean | DetailTransaction$reviewArgs<ExtArgs>
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
    event?: boolean | EventDefaultArgs<ExtArgs>
    transaction?: boolean | TransactionDefaultArgs<ExtArgs>
    _count?: boolean | DetailTransactionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["detailTransaction"]>

  export type DetailTransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    transactionId?: boolean
    eventId?: boolean
    ticketId?: boolean
    reviewStatus?: boolean
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
    event?: boolean | EventDefaultArgs<ExtArgs>
    transaction?: boolean | TransactionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["detailTransaction"]>

  export type DetailTransactionSelectScalar = {
    id?: boolean
    transactionId?: boolean
    eventId?: boolean
    ticketId?: boolean
    reviewStatus?: boolean
  }

  export type DetailTransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    review?: boolean | DetailTransaction$reviewArgs<ExtArgs>
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
    event?: boolean | EventDefaultArgs<ExtArgs>
    transaction?: boolean | TransactionDefaultArgs<ExtArgs>
    _count?: boolean | DetailTransactionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DetailTransactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
    event?: boolean | EventDefaultArgs<ExtArgs>
    transaction?: boolean | TransactionDefaultArgs<ExtArgs>
  }

  export type $DetailTransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DetailTransaction"
    objects: {
      review: Prisma.$ReviewPayload<ExtArgs>[]
      ticket: Prisma.$TicketPayload<ExtArgs>
      event: Prisma.$EventPayload<ExtArgs>
      transaction: Prisma.$TransactionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      transactionId: number
      eventId: number
      ticketId: number
      reviewStatus: boolean
    }, ExtArgs["result"]["detailTransaction"]>
    composites: {}
  }

  type DetailTransactionGetPayload<S extends boolean | null | undefined | DetailTransactionDefaultArgs> = $Result.GetResult<Prisma.$DetailTransactionPayload, S>

  type DetailTransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DetailTransactionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DetailTransactionCountAggregateInputType | true
    }

  export interface DetailTransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DetailTransaction'], meta: { name: 'DetailTransaction' } }
    /**
     * Find zero or one DetailTransaction that matches the filter.
     * @param {DetailTransactionFindUniqueArgs} args - Arguments to find a DetailTransaction
     * @example
     * // Get one DetailTransaction
     * const detailTransaction = await prisma.detailTransaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DetailTransactionFindUniqueArgs>(args: SelectSubset<T, DetailTransactionFindUniqueArgs<ExtArgs>>): Prisma__DetailTransactionClient<$Result.GetResult<Prisma.$DetailTransactionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one DetailTransaction that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {DetailTransactionFindUniqueOrThrowArgs} args - Arguments to find a DetailTransaction
     * @example
     * // Get one DetailTransaction
     * const detailTransaction = await prisma.detailTransaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DetailTransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, DetailTransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DetailTransactionClient<$Result.GetResult<Prisma.$DetailTransactionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first DetailTransaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetailTransactionFindFirstArgs} args - Arguments to find a DetailTransaction
     * @example
     * // Get one DetailTransaction
     * const detailTransaction = await prisma.detailTransaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DetailTransactionFindFirstArgs>(args?: SelectSubset<T, DetailTransactionFindFirstArgs<ExtArgs>>): Prisma__DetailTransactionClient<$Result.GetResult<Prisma.$DetailTransactionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first DetailTransaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetailTransactionFindFirstOrThrowArgs} args - Arguments to find a DetailTransaction
     * @example
     * // Get one DetailTransaction
     * const detailTransaction = await prisma.detailTransaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DetailTransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, DetailTransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__DetailTransactionClient<$Result.GetResult<Prisma.$DetailTransactionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more DetailTransactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetailTransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DetailTransactions
     * const detailTransactions = await prisma.detailTransaction.findMany()
     * 
     * // Get first 10 DetailTransactions
     * const detailTransactions = await prisma.detailTransaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const detailTransactionWithIdOnly = await prisma.detailTransaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DetailTransactionFindManyArgs>(args?: SelectSubset<T, DetailTransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetailTransactionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a DetailTransaction.
     * @param {DetailTransactionCreateArgs} args - Arguments to create a DetailTransaction.
     * @example
     * // Create one DetailTransaction
     * const DetailTransaction = await prisma.detailTransaction.create({
     *   data: {
     *     // ... data to create a DetailTransaction
     *   }
     * })
     * 
     */
    create<T extends DetailTransactionCreateArgs>(args: SelectSubset<T, DetailTransactionCreateArgs<ExtArgs>>): Prisma__DetailTransactionClient<$Result.GetResult<Prisma.$DetailTransactionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many DetailTransactions.
     * @param {DetailTransactionCreateManyArgs} args - Arguments to create many DetailTransactions.
     * @example
     * // Create many DetailTransactions
     * const detailTransaction = await prisma.detailTransaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DetailTransactionCreateManyArgs>(args?: SelectSubset<T, DetailTransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DetailTransactions and returns the data saved in the database.
     * @param {DetailTransactionCreateManyAndReturnArgs} args - Arguments to create many DetailTransactions.
     * @example
     * // Create many DetailTransactions
     * const detailTransaction = await prisma.detailTransaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DetailTransactions and only return the `id`
     * const detailTransactionWithIdOnly = await prisma.detailTransaction.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DetailTransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, DetailTransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetailTransactionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a DetailTransaction.
     * @param {DetailTransactionDeleteArgs} args - Arguments to delete one DetailTransaction.
     * @example
     * // Delete one DetailTransaction
     * const DetailTransaction = await prisma.detailTransaction.delete({
     *   where: {
     *     // ... filter to delete one DetailTransaction
     *   }
     * })
     * 
     */
    delete<T extends DetailTransactionDeleteArgs>(args: SelectSubset<T, DetailTransactionDeleteArgs<ExtArgs>>): Prisma__DetailTransactionClient<$Result.GetResult<Prisma.$DetailTransactionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one DetailTransaction.
     * @param {DetailTransactionUpdateArgs} args - Arguments to update one DetailTransaction.
     * @example
     * // Update one DetailTransaction
     * const detailTransaction = await prisma.detailTransaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DetailTransactionUpdateArgs>(args: SelectSubset<T, DetailTransactionUpdateArgs<ExtArgs>>): Prisma__DetailTransactionClient<$Result.GetResult<Prisma.$DetailTransactionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more DetailTransactions.
     * @param {DetailTransactionDeleteManyArgs} args - Arguments to filter DetailTransactions to delete.
     * @example
     * // Delete a few DetailTransactions
     * const { count } = await prisma.detailTransaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DetailTransactionDeleteManyArgs>(args?: SelectSubset<T, DetailTransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DetailTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetailTransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DetailTransactions
     * const detailTransaction = await prisma.detailTransaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DetailTransactionUpdateManyArgs>(args: SelectSubset<T, DetailTransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DetailTransaction.
     * @param {DetailTransactionUpsertArgs} args - Arguments to update or create a DetailTransaction.
     * @example
     * // Update or create a DetailTransaction
     * const detailTransaction = await prisma.detailTransaction.upsert({
     *   create: {
     *     // ... data to create a DetailTransaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DetailTransaction we want to update
     *   }
     * })
     */
    upsert<T extends DetailTransactionUpsertArgs>(args: SelectSubset<T, DetailTransactionUpsertArgs<ExtArgs>>): Prisma__DetailTransactionClient<$Result.GetResult<Prisma.$DetailTransactionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of DetailTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetailTransactionCountArgs} args - Arguments to filter DetailTransactions to count.
     * @example
     * // Count the number of DetailTransactions
     * const count = await prisma.detailTransaction.count({
     *   where: {
     *     // ... the filter for the DetailTransactions we want to count
     *   }
     * })
    **/
    count<T extends DetailTransactionCountArgs>(
      args?: Subset<T, DetailTransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DetailTransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DetailTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetailTransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DetailTransactionAggregateArgs>(args: Subset<T, DetailTransactionAggregateArgs>): Prisma.PrismaPromise<GetDetailTransactionAggregateType<T>>

    /**
     * Group by DetailTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetailTransactionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DetailTransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DetailTransactionGroupByArgs['orderBy'] }
        : { orderBy?: DetailTransactionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DetailTransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDetailTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DetailTransaction model
   */
  readonly fields: DetailTransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DetailTransaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DetailTransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    review<T extends DetailTransaction$reviewArgs<ExtArgs> = {}>(args?: Subset<T, DetailTransaction$reviewArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany"> | Null>
    ticket<T extends TicketDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TicketDefaultArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    event<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    transaction<T extends TransactionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TransactionDefaultArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DetailTransaction model
   */ 
  interface DetailTransactionFieldRefs {
    readonly id: FieldRef<"DetailTransaction", 'Int'>
    readonly transactionId: FieldRef<"DetailTransaction", 'Int'>
    readonly eventId: FieldRef<"DetailTransaction", 'Int'>
    readonly ticketId: FieldRef<"DetailTransaction", 'Int'>
    readonly reviewStatus: FieldRef<"DetailTransaction", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * DetailTransaction findUnique
   */
  export type DetailTransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailTransaction
     */
    select?: DetailTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailTransactionInclude<ExtArgs> | null
    /**
     * Filter, which DetailTransaction to fetch.
     */
    where: DetailTransactionWhereUniqueInput
  }

  /**
   * DetailTransaction findUniqueOrThrow
   */
  export type DetailTransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailTransaction
     */
    select?: DetailTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailTransactionInclude<ExtArgs> | null
    /**
     * Filter, which DetailTransaction to fetch.
     */
    where: DetailTransactionWhereUniqueInput
  }

  /**
   * DetailTransaction findFirst
   */
  export type DetailTransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailTransaction
     */
    select?: DetailTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailTransactionInclude<ExtArgs> | null
    /**
     * Filter, which DetailTransaction to fetch.
     */
    where?: DetailTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetailTransactions to fetch.
     */
    orderBy?: DetailTransactionOrderByWithRelationInput | DetailTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DetailTransactions.
     */
    cursor?: DetailTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetailTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetailTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DetailTransactions.
     */
    distinct?: DetailTransactionScalarFieldEnum | DetailTransactionScalarFieldEnum[]
  }

  /**
   * DetailTransaction findFirstOrThrow
   */
  export type DetailTransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailTransaction
     */
    select?: DetailTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailTransactionInclude<ExtArgs> | null
    /**
     * Filter, which DetailTransaction to fetch.
     */
    where?: DetailTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetailTransactions to fetch.
     */
    orderBy?: DetailTransactionOrderByWithRelationInput | DetailTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DetailTransactions.
     */
    cursor?: DetailTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetailTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetailTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DetailTransactions.
     */
    distinct?: DetailTransactionScalarFieldEnum | DetailTransactionScalarFieldEnum[]
  }

  /**
   * DetailTransaction findMany
   */
  export type DetailTransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailTransaction
     */
    select?: DetailTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailTransactionInclude<ExtArgs> | null
    /**
     * Filter, which DetailTransactions to fetch.
     */
    where?: DetailTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetailTransactions to fetch.
     */
    orderBy?: DetailTransactionOrderByWithRelationInput | DetailTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DetailTransactions.
     */
    cursor?: DetailTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetailTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetailTransactions.
     */
    skip?: number
    distinct?: DetailTransactionScalarFieldEnum | DetailTransactionScalarFieldEnum[]
  }

  /**
   * DetailTransaction create
   */
  export type DetailTransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailTransaction
     */
    select?: DetailTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailTransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a DetailTransaction.
     */
    data: XOR<DetailTransactionCreateInput, DetailTransactionUncheckedCreateInput>
  }

  /**
   * DetailTransaction createMany
   */
  export type DetailTransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DetailTransactions.
     */
    data: DetailTransactionCreateManyInput | DetailTransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DetailTransaction createManyAndReturn
   */
  export type DetailTransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailTransaction
     */
    select?: DetailTransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many DetailTransactions.
     */
    data: DetailTransactionCreateManyInput | DetailTransactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailTransactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DetailTransaction update
   */
  export type DetailTransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailTransaction
     */
    select?: DetailTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailTransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a DetailTransaction.
     */
    data: XOR<DetailTransactionUpdateInput, DetailTransactionUncheckedUpdateInput>
    /**
     * Choose, which DetailTransaction to update.
     */
    where: DetailTransactionWhereUniqueInput
  }

  /**
   * DetailTransaction updateMany
   */
  export type DetailTransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DetailTransactions.
     */
    data: XOR<DetailTransactionUpdateManyMutationInput, DetailTransactionUncheckedUpdateManyInput>
    /**
     * Filter which DetailTransactions to update
     */
    where?: DetailTransactionWhereInput
  }

  /**
   * DetailTransaction upsert
   */
  export type DetailTransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailTransaction
     */
    select?: DetailTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailTransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the DetailTransaction to update in case it exists.
     */
    where: DetailTransactionWhereUniqueInput
    /**
     * In case the DetailTransaction found by the `where` argument doesn't exist, create a new DetailTransaction with this data.
     */
    create: XOR<DetailTransactionCreateInput, DetailTransactionUncheckedCreateInput>
    /**
     * In case the DetailTransaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DetailTransactionUpdateInput, DetailTransactionUncheckedUpdateInput>
  }

  /**
   * DetailTransaction delete
   */
  export type DetailTransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailTransaction
     */
    select?: DetailTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailTransactionInclude<ExtArgs> | null
    /**
     * Filter which DetailTransaction to delete.
     */
    where: DetailTransactionWhereUniqueInput
  }

  /**
   * DetailTransaction deleteMany
   */
  export type DetailTransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DetailTransactions to delete
     */
    where?: DetailTransactionWhereInput
  }

  /**
   * DetailTransaction.review
   */
  export type DetailTransaction$reviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * DetailTransaction without action
   */
  export type DetailTransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailTransaction
     */
    select?: DetailTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailTransactionInclude<ExtArgs> | null
  }


  /**
   * Model Review
   */

  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  export type ReviewAvgAggregateOutputType = {
    id: number | null
    rating: number | null
    eventId: number | null
    transactionId: number | null
    ticketId: number | null
  }

  export type ReviewSumAggregateOutputType = {
    id: number | null
    rating: number | null
    eventId: number | null
    transactionId: number | null
    ticketId: number | null
  }

  export type ReviewMinAggregateOutputType = {
    id: number | null
    desc: string | null
    rating: number | null
    userId: string | null
    eventId: number | null
    transactionId: number | null
    ticketId: number | null
  }

  export type ReviewMaxAggregateOutputType = {
    id: number | null
    desc: string | null
    rating: number | null
    userId: string | null
    eventId: number | null
    transactionId: number | null
    ticketId: number | null
  }

  export type ReviewCountAggregateOutputType = {
    id: number
    desc: number
    rating: number
    userId: number
    eventId: number
    transactionId: number
    ticketId: number
    _all: number
  }


  export type ReviewAvgAggregateInputType = {
    id?: true
    rating?: true
    eventId?: true
    transactionId?: true
    ticketId?: true
  }

  export type ReviewSumAggregateInputType = {
    id?: true
    rating?: true
    eventId?: true
    transactionId?: true
    ticketId?: true
  }

  export type ReviewMinAggregateInputType = {
    id?: true
    desc?: true
    rating?: true
    userId?: true
    eventId?: true
    transactionId?: true
    ticketId?: true
  }

  export type ReviewMaxAggregateInputType = {
    id?: true
    desc?: true
    rating?: true
    userId?: true
    eventId?: true
    transactionId?: true
    ticketId?: true
  }

  export type ReviewCountAggregateInputType = {
    id?: true
    desc?: true
    rating?: true
    userId?: true
    eventId?: true
    transactionId?: true
    ticketId?: true
    _all?: true
  }

  export type ReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Review to aggregate.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reviews
    **/
    _count?: true | ReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewMaxAggregateInputType
  }

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>
  }




  export type ReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithAggregationInput | ReviewOrderByWithAggregationInput[]
    by: ReviewScalarFieldEnum[] | ReviewScalarFieldEnum
    having?: ReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewCountAggregateInputType | true
    _avg?: ReviewAvgAggregateInputType
    _sum?: ReviewSumAggregateInputType
    _min?: ReviewMinAggregateInputType
    _max?: ReviewMaxAggregateInputType
  }

  export type ReviewGroupByOutputType = {
    id: number
    desc: string | null
    rating: number
    userId: string
    eventId: number
    transactionId: number
    ticketId: number | null
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  type GetReviewGroupByPayload<T extends ReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>
        }
      >
    >


  export type ReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    desc?: boolean
    rating?: boolean
    userId?: boolean
    eventId?: boolean
    transactionId?: boolean
    ticketId?: boolean
    isValid?: boolean | DetailTransactionDefaultArgs<ExtArgs>
    event?: boolean | EventDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    Ticket?: boolean | Review$TicketArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    desc?: boolean
    rating?: boolean
    userId?: boolean
    eventId?: boolean
    transactionId?: boolean
    ticketId?: boolean
    isValid?: boolean | DetailTransactionDefaultArgs<ExtArgs>
    event?: boolean | EventDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    Ticket?: boolean | Review$TicketArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectScalar = {
    id?: boolean
    desc?: boolean
    rating?: boolean
    userId?: boolean
    eventId?: boolean
    transactionId?: boolean
    ticketId?: boolean
  }

  export type ReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    isValid?: boolean | DetailTransactionDefaultArgs<ExtArgs>
    event?: boolean | EventDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    Ticket?: boolean | Review$TicketArgs<ExtArgs>
  }
  export type ReviewIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    isValid?: boolean | DetailTransactionDefaultArgs<ExtArgs>
    event?: boolean | EventDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    Ticket?: boolean | Review$TicketArgs<ExtArgs>
  }

  export type $ReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Review"
    objects: {
      isValid: Prisma.$DetailTransactionPayload<ExtArgs>
      event: Prisma.$EventPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      Ticket: Prisma.$TicketPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      desc: string | null
      rating: number
      userId: string
      eventId: number
      transactionId: number
      ticketId: number | null
    }, ExtArgs["result"]["review"]>
    composites: {}
  }

  type ReviewGetPayload<S extends boolean | null | undefined | ReviewDefaultArgs> = $Result.GetResult<Prisma.$ReviewPayload, S>

  type ReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ReviewFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ReviewCountAggregateInputType | true
    }

  export interface ReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Review'], meta: { name: 'Review' } }
    /**
     * Find zero or one Review that matches the filter.
     * @param {ReviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewFindUniqueArgs>(args: SelectSubset<T, ReviewFindUniqueArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Review that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ReviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewFindFirstArgs>(args?: SelectSubset<T, ReviewFindFirstArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewWithIdOnly = await prisma.review.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewFindManyArgs>(args?: SelectSubset<T, ReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Review.
     * @param {ReviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     * 
     */
    create<T extends ReviewCreateArgs>(args: SelectSubset<T, ReviewCreateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Reviews.
     * @param {ReviewCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewCreateManyArgs>(args?: SelectSubset<T, ReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reviews and returns the data saved in the database.
     * @param {ReviewCreateManyAndReturnArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReviewCreateManyAndReturnArgs>(args?: SelectSubset<T, ReviewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Review.
     * @param {ReviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     * 
     */
    delete<T extends ReviewDeleteArgs>(args: SelectSubset<T, ReviewDeleteArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Review.
     * @param {ReviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewUpdateArgs>(args: SelectSubset<T, ReviewUpdateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Reviews.
     * @param {ReviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewDeleteManyArgs>(args?: SelectSubset<T, ReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewUpdateManyArgs>(args: SelectSubset<T, ReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Review.
     * @param {ReviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
     */
    upsert<T extends ReviewUpsertArgs>(args: SelectSubset<T, ReviewUpsertArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends ReviewCountArgs>(
      args?: Subset<T, ReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReviewAggregateArgs>(args: Subset<T, ReviewAggregateArgs>): Prisma.PrismaPromise<GetReviewAggregateType<T>>

    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewGroupByArgs['orderBy'] }
        : { orderBy?: ReviewGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Review model
   */
  readonly fields: ReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    isValid<T extends DetailTransactionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DetailTransactionDefaultArgs<ExtArgs>>): Prisma__DetailTransactionClient<$Result.GetResult<Prisma.$DetailTransactionPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    event<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    Ticket<T extends Review$TicketArgs<ExtArgs> = {}>(args?: Subset<T, Review$TicketArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Review model
   */ 
  interface ReviewFieldRefs {
    readonly id: FieldRef<"Review", 'Int'>
    readonly desc: FieldRef<"Review", 'String'>
    readonly rating: FieldRef<"Review", 'Int'>
    readonly userId: FieldRef<"Review", 'String'>
    readonly eventId: FieldRef<"Review", 'Int'>
    readonly transactionId: FieldRef<"Review", 'Int'>
    readonly ticketId: FieldRef<"Review", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Review findUnique
   */
  export type ReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findUniqueOrThrow
   */
  export type ReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findFirst
   */
  export type ReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findFirstOrThrow
   */
  export type ReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findMany
   */
  export type ReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review create
   */
  export type ReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a Review.
     */
    data: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
  }

  /**
   * Review createMany
   */
  export type ReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Review createManyAndReturn
   */
  export type ReviewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review update
   */
  export type ReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a Review.
     */
    data: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
    /**
     * Choose, which Review to update.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review updateMany
   */
  export type ReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
  }

  /**
   * Review upsert
   */
  export type ReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the Review to update in case it exists.
     */
    where: ReviewWhereUniqueInput
    /**
     * In case the Review found by the `where` argument doesn't exist, create a new Review with this data.
     */
    create: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
    /**
     * In case the Review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
  }

  /**
   * Review delete
   */
  export type ReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter which Review to delete.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review deleteMany
   */
  export type ReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to delete
     */
    where?: ReviewWhereInput
  }

  /**
   * Review.Ticket
   */
  export type Review$TicketArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    where?: TicketWhereInput
  }

  /**
   * Review without action
   */
  export type ReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    password: string | null
    avatar: string | null
    isVerify: boolean | null
    refCode: string | null
    reffered_by: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    password: string | null
    avatar: string | null
    isVerify: boolean | null
    refCode: string | null
    reffered_by: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    email: number
    password: number
    avatar: number
    isVerify: number
    refCode: number
    reffered_by: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    avatar?: true
    isVerify?: true
    refCode?: true
    reffered_by?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    avatar?: true
    isVerify?: true
    refCode?: true
    reffered_by?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    avatar?: true
    isVerify?: true
    refCode?: true
    reffered_by?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    username: string
    email: string
    password: string
    avatar: string
    isVerify: boolean
    refCode: string | null
    reffered_by: string | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    avatar?: boolean
    isVerify?: boolean
    refCode?: boolean
    reffered_by?: boolean
    Transaction?: boolean | User$TransactionArgs<ExtArgs>
    UserId?: boolean | User$UserIdArgs<ExtArgs>
    userPoints?: boolean | User$userPointsArgs<ExtArgs>
    Review?: boolean | User$ReviewArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    avatar?: boolean
    isVerify?: boolean
    refCode?: boolean
    reffered_by?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    avatar?: boolean
    isVerify?: boolean
    refCode?: boolean
    reffered_by?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Transaction?: boolean | User$TransactionArgs<ExtArgs>
    UserId?: boolean | User$UserIdArgs<ExtArgs>
    userPoints?: boolean | User$userPointsArgs<ExtArgs>
    Review?: boolean | User$ReviewArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      Transaction: Prisma.$TransactionPayload<ExtArgs>[]
      UserId: Prisma.$referralVoucherPayload<ExtArgs>[]
      userPoints: Prisma.$userPointsPayload<ExtArgs>[]
      Review: Prisma.$ReviewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      email: string
      password: string
      avatar: string
      isVerify: boolean
      refCode: string | null
      reffered_by: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Transaction<T extends User$TransactionArgs<ExtArgs> = {}>(args?: Subset<T, User$TransactionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany"> | Null>
    UserId<T extends User$UserIdArgs<ExtArgs> = {}>(args?: Subset<T, User$UserIdArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$referralVoucherPayload<ExtArgs>, T, "findMany"> | Null>
    userPoints<T extends User$userPointsArgs<ExtArgs> = {}>(args?: Subset<T, User$userPointsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPointsPayload<ExtArgs>, T, "findMany"> | Null>
    Review<T extends User$ReviewArgs<ExtArgs> = {}>(args?: Subset<T, User$ReviewArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly avatar: FieldRef<"User", 'String'>
    readonly isVerify: FieldRef<"User", 'Boolean'>
    readonly refCode: FieldRef<"User", 'String'>
    readonly reffered_by: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.Transaction
   */
  export type User$TransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * User.UserId
   */
  export type User$UserIdArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the referralVoucher
     */
    select?: referralVoucherSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: referralVoucherInclude<ExtArgs> | null
    where?: referralVoucherWhereInput
    orderBy?: referralVoucherOrderByWithRelationInput | referralVoucherOrderByWithRelationInput[]
    cursor?: referralVoucherWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReferralVoucherScalarFieldEnum | ReferralVoucherScalarFieldEnum[]
  }

  /**
   * User.userPoints
   */
  export type User$userPointsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userPoints
     */
    select?: userPointsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userPointsInclude<ExtArgs> | null
    where?: userPointsWhereInput
    orderBy?: userPointsOrderByWithRelationInput | userPointsOrderByWithRelationInput[]
    cursor?: userPointsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserPointsScalarFieldEnum | UserPointsScalarFieldEnum[]
  }

  /**
   * User.Review
   */
  export type User$ReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model referralVoucher
   */

  export type AggregateReferralVoucher = {
    _count: ReferralVoucherCountAggregateOutputType | null
    _avg: ReferralVoucherAvgAggregateOutputType | null
    _sum: ReferralVoucherSumAggregateOutputType | null
    _min: ReferralVoucherMinAggregateOutputType | null
    _max: ReferralVoucherMaxAggregateOutputType | null
  }

  export type ReferralVoucherAvgAggregateOutputType = {
    id: number | null
  }

  export type ReferralVoucherSumAggregateOutputType = {
    id: number | null
  }

  export type ReferralVoucherMinAggregateOutputType = {
    id: number | null
    userId: string | null
    createdAt: Date | null
    expiresAt: Date | null
  }

  export type ReferralVoucherMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    createdAt: Date | null
    expiresAt: Date | null
  }

  export type ReferralVoucherCountAggregateOutputType = {
    id: number
    userId: number
    createdAt: number
    expiresAt: number
    _all: number
  }


  export type ReferralVoucherAvgAggregateInputType = {
    id?: true
  }

  export type ReferralVoucherSumAggregateInputType = {
    id?: true
  }

  export type ReferralVoucherMinAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    expiresAt?: true
  }

  export type ReferralVoucherMaxAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    expiresAt?: true
  }

  export type ReferralVoucherCountAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    expiresAt?: true
    _all?: true
  }

  export type ReferralVoucherAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which referralVoucher to aggregate.
     */
    where?: referralVoucherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of referralVouchers to fetch.
     */
    orderBy?: referralVoucherOrderByWithRelationInput | referralVoucherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: referralVoucherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` referralVouchers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` referralVouchers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned referralVouchers
    **/
    _count?: true | ReferralVoucherCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReferralVoucherAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReferralVoucherSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReferralVoucherMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReferralVoucherMaxAggregateInputType
  }

  export type GetReferralVoucherAggregateType<T extends ReferralVoucherAggregateArgs> = {
        [P in keyof T & keyof AggregateReferralVoucher]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReferralVoucher[P]>
      : GetScalarType<T[P], AggregateReferralVoucher[P]>
  }




  export type referralVoucherGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: referralVoucherWhereInput
    orderBy?: referralVoucherOrderByWithAggregationInput | referralVoucherOrderByWithAggregationInput[]
    by: ReferralVoucherScalarFieldEnum[] | ReferralVoucherScalarFieldEnum
    having?: referralVoucherScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReferralVoucherCountAggregateInputType | true
    _avg?: ReferralVoucherAvgAggregateInputType
    _sum?: ReferralVoucherSumAggregateInputType
    _min?: ReferralVoucherMinAggregateInputType
    _max?: ReferralVoucherMaxAggregateInputType
  }

  export type ReferralVoucherGroupByOutputType = {
    id: number
    userId: string
    createdAt: Date
    expiresAt: Date
    _count: ReferralVoucherCountAggregateOutputType | null
    _avg: ReferralVoucherAvgAggregateOutputType | null
    _sum: ReferralVoucherSumAggregateOutputType | null
    _min: ReferralVoucherMinAggregateOutputType | null
    _max: ReferralVoucherMaxAggregateOutputType | null
  }

  type GetReferralVoucherGroupByPayload<T extends referralVoucherGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReferralVoucherGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReferralVoucherGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReferralVoucherGroupByOutputType[P]>
            : GetScalarType<T[P], ReferralVoucherGroupByOutputType[P]>
        }
      >
    >


  export type referralVoucherSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    discount?: boolean | referralVoucher$discountArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | ReferralVoucherCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["referralVoucher"]>

  export type referralVoucherSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["referralVoucher"]>

  export type referralVoucherSelectScalar = {
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    expiresAt?: boolean
  }

  export type referralVoucherInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    discount?: boolean | referralVoucher$discountArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | ReferralVoucherCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type referralVoucherIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $referralVoucherPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "referralVoucher"
    objects: {
      discount: Prisma.$TransactionPayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      createdAt: Date
      expiresAt: Date
    }, ExtArgs["result"]["referralVoucher"]>
    composites: {}
  }

  type referralVoucherGetPayload<S extends boolean | null | undefined | referralVoucherDefaultArgs> = $Result.GetResult<Prisma.$referralVoucherPayload, S>

  type referralVoucherCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<referralVoucherFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ReferralVoucherCountAggregateInputType | true
    }

  export interface referralVoucherDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['referralVoucher'], meta: { name: 'referralVoucher' } }
    /**
     * Find zero or one ReferralVoucher that matches the filter.
     * @param {referralVoucherFindUniqueArgs} args - Arguments to find a ReferralVoucher
     * @example
     * // Get one ReferralVoucher
     * const referralVoucher = await prisma.referralVoucher.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends referralVoucherFindUniqueArgs>(args: SelectSubset<T, referralVoucherFindUniqueArgs<ExtArgs>>): Prisma__referralVoucherClient<$Result.GetResult<Prisma.$referralVoucherPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ReferralVoucher that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {referralVoucherFindUniqueOrThrowArgs} args - Arguments to find a ReferralVoucher
     * @example
     * // Get one ReferralVoucher
     * const referralVoucher = await prisma.referralVoucher.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends referralVoucherFindUniqueOrThrowArgs>(args: SelectSubset<T, referralVoucherFindUniqueOrThrowArgs<ExtArgs>>): Prisma__referralVoucherClient<$Result.GetResult<Prisma.$referralVoucherPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ReferralVoucher that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {referralVoucherFindFirstArgs} args - Arguments to find a ReferralVoucher
     * @example
     * // Get one ReferralVoucher
     * const referralVoucher = await prisma.referralVoucher.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends referralVoucherFindFirstArgs>(args?: SelectSubset<T, referralVoucherFindFirstArgs<ExtArgs>>): Prisma__referralVoucherClient<$Result.GetResult<Prisma.$referralVoucherPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ReferralVoucher that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {referralVoucherFindFirstOrThrowArgs} args - Arguments to find a ReferralVoucher
     * @example
     * // Get one ReferralVoucher
     * const referralVoucher = await prisma.referralVoucher.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends referralVoucherFindFirstOrThrowArgs>(args?: SelectSubset<T, referralVoucherFindFirstOrThrowArgs<ExtArgs>>): Prisma__referralVoucherClient<$Result.GetResult<Prisma.$referralVoucherPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ReferralVouchers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {referralVoucherFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReferralVouchers
     * const referralVouchers = await prisma.referralVoucher.findMany()
     * 
     * // Get first 10 ReferralVouchers
     * const referralVouchers = await prisma.referralVoucher.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const referralVoucherWithIdOnly = await prisma.referralVoucher.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends referralVoucherFindManyArgs>(args?: SelectSubset<T, referralVoucherFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$referralVoucherPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ReferralVoucher.
     * @param {referralVoucherCreateArgs} args - Arguments to create a ReferralVoucher.
     * @example
     * // Create one ReferralVoucher
     * const ReferralVoucher = await prisma.referralVoucher.create({
     *   data: {
     *     // ... data to create a ReferralVoucher
     *   }
     * })
     * 
     */
    create<T extends referralVoucherCreateArgs>(args: SelectSubset<T, referralVoucherCreateArgs<ExtArgs>>): Prisma__referralVoucherClient<$Result.GetResult<Prisma.$referralVoucherPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ReferralVouchers.
     * @param {referralVoucherCreateManyArgs} args - Arguments to create many ReferralVouchers.
     * @example
     * // Create many ReferralVouchers
     * const referralVoucher = await prisma.referralVoucher.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends referralVoucherCreateManyArgs>(args?: SelectSubset<T, referralVoucherCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ReferralVouchers and returns the data saved in the database.
     * @param {referralVoucherCreateManyAndReturnArgs} args - Arguments to create many ReferralVouchers.
     * @example
     * // Create many ReferralVouchers
     * const referralVoucher = await prisma.referralVoucher.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ReferralVouchers and only return the `id`
     * const referralVoucherWithIdOnly = await prisma.referralVoucher.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends referralVoucherCreateManyAndReturnArgs>(args?: SelectSubset<T, referralVoucherCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$referralVoucherPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ReferralVoucher.
     * @param {referralVoucherDeleteArgs} args - Arguments to delete one ReferralVoucher.
     * @example
     * // Delete one ReferralVoucher
     * const ReferralVoucher = await prisma.referralVoucher.delete({
     *   where: {
     *     // ... filter to delete one ReferralVoucher
     *   }
     * })
     * 
     */
    delete<T extends referralVoucherDeleteArgs>(args: SelectSubset<T, referralVoucherDeleteArgs<ExtArgs>>): Prisma__referralVoucherClient<$Result.GetResult<Prisma.$referralVoucherPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ReferralVoucher.
     * @param {referralVoucherUpdateArgs} args - Arguments to update one ReferralVoucher.
     * @example
     * // Update one ReferralVoucher
     * const referralVoucher = await prisma.referralVoucher.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends referralVoucherUpdateArgs>(args: SelectSubset<T, referralVoucherUpdateArgs<ExtArgs>>): Prisma__referralVoucherClient<$Result.GetResult<Prisma.$referralVoucherPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ReferralVouchers.
     * @param {referralVoucherDeleteManyArgs} args - Arguments to filter ReferralVouchers to delete.
     * @example
     * // Delete a few ReferralVouchers
     * const { count } = await prisma.referralVoucher.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends referralVoucherDeleteManyArgs>(args?: SelectSubset<T, referralVoucherDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReferralVouchers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {referralVoucherUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReferralVouchers
     * const referralVoucher = await prisma.referralVoucher.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends referralVoucherUpdateManyArgs>(args: SelectSubset<T, referralVoucherUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ReferralVoucher.
     * @param {referralVoucherUpsertArgs} args - Arguments to update or create a ReferralVoucher.
     * @example
     * // Update or create a ReferralVoucher
     * const referralVoucher = await prisma.referralVoucher.upsert({
     *   create: {
     *     // ... data to create a ReferralVoucher
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReferralVoucher we want to update
     *   }
     * })
     */
    upsert<T extends referralVoucherUpsertArgs>(args: SelectSubset<T, referralVoucherUpsertArgs<ExtArgs>>): Prisma__referralVoucherClient<$Result.GetResult<Prisma.$referralVoucherPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ReferralVouchers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {referralVoucherCountArgs} args - Arguments to filter ReferralVouchers to count.
     * @example
     * // Count the number of ReferralVouchers
     * const count = await prisma.referralVoucher.count({
     *   where: {
     *     // ... the filter for the ReferralVouchers we want to count
     *   }
     * })
    **/
    count<T extends referralVoucherCountArgs>(
      args?: Subset<T, referralVoucherCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReferralVoucherCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReferralVoucher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralVoucherAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReferralVoucherAggregateArgs>(args: Subset<T, ReferralVoucherAggregateArgs>): Prisma.PrismaPromise<GetReferralVoucherAggregateType<T>>

    /**
     * Group by ReferralVoucher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {referralVoucherGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends referralVoucherGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: referralVoucherGroupByArgs['orderBy'] }
        : { orderBy?: referralVoucherGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, referralVoucherGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReferralVoucherGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the referralVoucher model
   */
  readonly fields: referralVoucherFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for referralVoucher.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__referralVoucherClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    discount<T extends referralVoucher$discountArgs<ExtArgs> = {}>(args?: Subset<T, referralVoucher$discountArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany"> | Null>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the referralVoucher model
   */ 
  interface referralVoucherFieldRefs {
    readonly id: FieldRef<"referralVoucher", 'Int'>
    readonly userId: FieldRef<"referralVoucher", 'String'>
    readonly createdAt: FieldRef<"referralVoucher", 'DateTime'>
    readonly expiresAt: FieldRef<"referralVoucher", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * referralVoucher findUnique
   */
  export type referralVoucherFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the referralVoucher
     */
    select?: referralVoucherSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: referralVoucherInclude<ExtArgs> | null
    /**
     * Filter, which referralVoucher to fetch.
     */
    where: referralVoucherWhereUniqueInput
  }

  /**
   * referralVoucher findUniqueOrThrow
   */
  export type referralVoucherFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the referralVoucher
     */
    select?: referralVoucherSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: referralVoucherInclude<ExtArgs> | null
    /**
     * Filter, which referralVoucher to fetch.
     */
    where: referralVoucherWhereUniqueInput
  }

  /**
   * referralVoucher findFirst
   */
  export type referralVoucherFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the referralVoucher
     */
    select?: referralVoucherSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: referralVoucherInclude<ExtArgs> | null
    /**
     * Filter, which referralVoucher to fetch.
     */
    where?: referralVoucherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of referralVouchers to fetch.
     */
    orderBy?: referralVoucherOrderByWithRelationInput | referralVoucherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for referralVouchers.
     */
    cursor?: referralVoucherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` referralVouchers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` referralVouchers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of referralVouchers.
     */
    distinct?: ReferralVoucherScalarFieldEnum | ReferralVoucherScalarFieldEnum[]
  }

  /**
   * referralVoucher findFirstOrThrow
   */
  export type referralVoucherFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the referralVoucher
     */
    select?: referralVoucherSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: referralVoucherInclude<ExtArgs> | null
    /**
     * Filter, which referralVoucher to fetch.
     */
    where?: referralVoucherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of referralVouchers to fetch.
     */
    orderBy?: referralVoucherOrderByWithRelationInput | referralVoucherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for referralVouchers.
     */
    cursor?: referralVoucherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` referralVouchers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` referralVouchers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of referralVouchers.
     */
    distinct?: ReferralVoucherScalarFieldEnum | ReferralVoucherScalarFieldEnum[]
  }

  /**
   * referralVoucher findMany
   */
  export type referralVoucherFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the referralVoucher
     */
    select?: referralVoucherSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: referralVoucherInclude<ExtArgs> | null
    /**
     * Filter, which referralVouchers to fetch.
     */
    where?: referralVoucherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of referralVouchers to fetch.
     */
    orderBy?: referralVoucherOrderByWithRelationInput | referralVoucherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing referralVouchers.
     */
    cursor?: referralVoucherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` referralVouchers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` referralVouchers.
     */
    skip?: number
    distinct?: ReferralVoucherScalarFieldEnum | ReferralVoucherScalarFieldEnum[]
  }

  /**
   * referralVoucher create
   */
  export type referralVoucherCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the referralVoucher
     */
    select?: referralVoucherSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: referralVoucherInclude<ExtArgs> | null
    /**
     * The data needed to create a referralVoucher.
     */
    data: XOR<referralVoucherCreateInput, referralVoucherUncheckedCreateInput>
  }

  /**
   * referralVoucher createMany
   */
  export type referralVoucherCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many referralVouchers.
     */
    data: referralVoucherCreateManyInput | referralVoucherCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * referralVoucher createManyAndReturn
   */
  export type referralVoucherCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the referralVoucher
     */
    select?: referralVoucherSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many referralVouchers.
     */
    data: referralVoucherCreateManyInput | referralVoucherCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: referralVoucherIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * referralVoucher update
   */
  export type referralVoucherUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the referralVoucher
     */
    select?: referralVoucherSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: referralVoucherInclude<ExtArgs> | null
    /**
     * The data needed to update a referralVoucher.
     */
    data: XOR<referralVoucherUpdateInput, referralVoucherUncheckedUpdateInput>
    /**
     * Choose, which referralVoucher to update.
     */
    where: referralVoucherWhereUniqueInput
  }

  /**
   * referralVoucher updateMany
   */
  export type referralVoucherUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update referralVouchers.
     */
    data: XOR<referralVoucherUpdateManyMutationInput, referralVoucherUncheckedUpdateManyInput>
    /**
     * Filter which referralVouchers to update
     */
    where?: referralVoucherWhereInput
  }

  /**
   * referralVoucher upsert
   */
  export type referralVoucherUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the referralVoucher
     */
    select?: referralVoucherSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: referralVoucherInclude<ExtArgs> | null
    /**
     * The filter to search for the referralVoucher to update in case it exists.
     */
    where: referralVoucherWhereUniqueInput
    /**
     * In case the referralVoucher found by the `where` argument doesn't exist, create a new referralVoucher with this data.
     */
    create: XOR<referralVoucherCreateInput, referralVoucherUncheckedCreateInput>
    /**
     * In case the referralVoucher was found with the provided `where` argument, update it with this data.
     */
    update: XOR<referralVoucherUpdateInput, referralVoucherUncheckedUpdateInput>
  }

  /**
   * referralVoucher delete
   */
  export type referralVoucherDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the referralVoucher
     */
    select?: referralVoucherSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: referralVoucherInclude<ExtArgs> | null
    /**
     * Filter which referralVoucher to delete.
     */
    where: referralVoucherWhereUniqueInput
  }

  /**
   * referralVoucher deleteMany
   */
  export type referralVoucherDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which referralVouchers to delete
     */
    where?: referralVoucherWhereInput
  }

  /**
   * referralVoucher.discount
   */
  export type referralVoucher$discountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * referralVoucher without action
   */
  export type referralVoucherDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the referralVoucher
     */
    select?: referralVoucherSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: referralVoucherInclude<ExtArgs> | null
  }


  /**
   * Model userPoints
   */

  export type AggregateUserPoints = {
    _count: UserPointsCountAggregateOutputType | null
    _avg: UserPointsAvgAggregateOutputType | null
    _sum: UserPointsSumAggregateOutputType | null
    _min: UserPointsMinAggregateOutputType | null
    _max: UserPointsMaxAggregateOutputType | null
  }

  export type UserPointsAvgAggregateOutputType = {
    id: number | null
    points: number | null
  }

  export type UserPointsSumAggregateOutputType = {
    id: number | null
    points: number | null
  }

  export type UserPointsMinAggregateOutputType = {
    id: number | null
    points: number | null
    expiresAt: Date | null
    createdAt: Date | null
    userId: string | null
  }

  export type UserPointsMaxAggregateOutputType = {
    id: number | null
    points: number | null
    expiresAt: Date | null
    createdAt: Date | null
    userId: string | null
  }

  export type UserPointsCountAggregateOutputType = {
    id: number
    points: number
    expiresAt: number
    createdAt: number
    userId: number
    _all: number
  }


  export type UserPointsAvgAggregateInputType = {
    id?: true
    points?: true
  }

  export type UserPointsSumAggregateInputType = {
    id?: true
    points?: true
  }

  export type UserPointsMinAggregateInputType = {
    id?: true
    points?: true
    expiresAt?: true
    createdAt?: true
    userId?: true
  }

  export type UserPointsMaxAggregateInputType = {
    id?: true
    points?: true
    expiresAt?: true
    createdAt?: true
    userId?: true
  }

  export type UserPointsCountAggregateInputType = {
    id?: true
    points?: true
    expiresAt?: true
    createdAt?: true
    userId?: true
    _all?: true
  }

  export type UserPointsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which userPoints to aggregate.
     */
    where?: userPointsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of userPoints to fetch.
     */
    orderBy?: userPointsOrderByWithRelationInput | userPointsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userPointsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` userPoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` userPoints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned userPoints
    **/
    _count?: true | UserPointsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserPointsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserPointsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserPointsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserPointsMaxAggregateInputType
  }

  export type GetUserPointsAggregateType<T extends UserPointsAggregateArgs> = {
        [P in keyof T & keyof AggregateUserPoints]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserPoints[P]>
      : GetScalarType<T[P], AggregateUserPoints[P]>
  }




  export type userPointsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userPointsWhereInput
    orderBy?: userPointsOrderByWithAggregationInput | userPointsOrderByWithAggregationInput[]
    by: UserPointsScalarFieldEnum[] | UserPointsScalarFieldEnum
    having?: userPointsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserPointsCountAggregateInputType | true
    _avg?: UserPointsAvgAggregateInputType
    _sum?: UserPointsSumAggregateInputType
    _min?: UserPointsMinAggregateInputType
    _max?: UserPointsMaxAggregateInputType
  }

  export type UserPointsGroupByOutputType = {
    id: number
    points: number | null
    expiresAt: Date
    createdAt: Date
    userId: string
    _count: UserPointsCountAggregateOutputType | null
    _avg: UserPointsAvgAggregateOutputType | null
    _sum: UserPointsSumAggregateOutputType | null
    _min: UserPointsMinAggregateOutputType | null
    _max: UserPointsMaxAggregateOutputType | null
  }

  type GetUserPointsGroupByPayload<T extends userPointsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserPointsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserPointsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserPointsGroupByOutputType[P]>
            : GetScalarType<T[P], UserPointsGroupByOutputType[P]>
        }
      >
    >


  export type userPointsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    points?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    userId?: boolean
    discount?: boolean | userPoints$discountArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | UserPointsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userPoints"]>

  export type userPointsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    points?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userPoints"]>

  export type userPointsSelectScalar = {
    id?: boolean
    points?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    userId?: boolean
  }

  export type userPointsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    discount?: boolean | userPoints$discountArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | UserPointsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type userPointsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $userPointsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "userPoints"
    objects: {
      discount: Prisma.$TransactionPayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      points: number | null
      expiresAt: Date
      createdAt: Date
      userId: string
    }, ExtArgs["result"]["userPoints"]>
    composites: {}
  }

  type userPointsGetPayload<S extends boolean | null | undefined | userPointsDefaultArgs> = $Result.GetResult<Prisma.$userPointsPayload, S>

  type userPointsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<userPointsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserPointsCountAggregateInputType | true
    }

  export interface userPointsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['userPoints'], meta: { name: 'userPoints' } }
    /**
     * Find zero or one UserPoints that matches the filter.
     * @param {userPointsFindUniqueArgs} args - Arguments to find a UserPoints
     * @example
     * // Get one UserPoints
     * const userPoints = await prisma.userPoints.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userPointsFindUniqueArgs>(args: SelectSubset<T, userPointsFindUniqueArgs<ExtArgs>>): Prisma__userPointsClient<$Result.GetResult<Prisma.$userPointsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one UserPoints that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {userPointsFindUniqueOrThrowArgs} args - Arguments to find a UserPoints
     * @example
     * // Get one UserPoints
     * const userPoints = await prisma.userPoints.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userPointsFindUniqueOrThrowArgs>(args: SelectSubset<T, userPointsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userPointsClient<$Result.GetResult<Prisma.$userPointsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first UserPoints that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userPointsFindFirstArgs} args - Arguments to find a UserPoints
     * @example
     * // Get one UserPoints
     * const userPoints = await prisma.userPoints.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userPointsFindFirstArgs>(args?: SelectSubset<T, userPointsFindFirstArgs<ExtArgs>>): Prisma__userPointsClient<$Result.GetResult<Prisma.$userPointsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first UserPoints that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userPointsFindFirstOrThrowArgs} args - Arguments to find a UserPoints
     * @example
     * // Get one UserPoints
     * const userPoints = await prisma.userPoints.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userPointsFindFirstOrThrowArgs>(args?: SelectSubset<T, userPointsFindFirstOrThrowArgs<ExtArgs>>): Prisma__userPointsClient<$Result.GetResult<Prisma.$userPointsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more UserPoints that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userPointsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserPoints
     * const userPoints = await prisma.userPoints.findMany()
     * 
     * // Get first 10 UserPoints
     * const userPoints = await prisma.userPoints.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userPointsWithIdOnly = await prisma.userPoints.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends userPointsFindManyArgs>(args?: SelectSubset<T, userPointsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPointsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a UserPoints.
     * @param {userPointsCreateArgs} args - Arguments to create a UserPoints.
     * @example
     * // Create one UserPoints
     * const UserPoints = await prisma.userPoints.create({
     *   data: {
     *     // ... data to create a UserPoints
     *   }
     * })
     * 
     */
    create<T extends userPointsCreateArgs>(args: SelectSubset<T, userPointsCreateArgs<ExtArgs>>): Prisma__userPointsClient<$Result.GetResult<Prisma.$userPointsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many UserPoints.
     * @param {userPointsCreateManyArgs} args - Arguments to create many UserPoints.
     * @example
     * // Create many UserPoints
     * const userPoints = await prisma.userPoints.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userPointsCreateManyArgs>(args?: SelectSubset<T, userPointsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserPoints and returns the data saved in the database.
     * @param {userPointsCreateManyAndReturnArgs} args - Arguments to create many UserPoints.
     * @example
     * // Create many UserPoints
     * const userPoints = await prisma.userPoints.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserPoints and only return the `id`
     * const userPointsWithIdOnly = await prisma.userPoints.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends userPointsCreateManyAndReturnArgs>(args?: SelectSubset<T, userPointsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPointsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a UserPoints.
     * @param {userPointsDeleteArgs} args - Arguments to delete one UserPoints.
     * @example
     * // Delete one UserPoints
     * const UserPoints = await prisma.userPoints.delete({
     *   where: {
     *     // ... filter to delete one UserPoints
     *   }
     * })
     * 
     */
    delete<T extends userPointsDeleteArgs>(args: SelectSubset<T, userPointsDeleteArgs<ExtArgs>>): Prisma__userPointsClient<$Result.GetResult<Prisma.$userPointsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one UserPoints.
     * @param {userPointsUpdateArgs} args - Arguments to update one UserPoints.
     * @example
     * // Update one UserPoints
     * const userPoints = await prisma.userPoints.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends userPointsUpdateArgs>(args: SelectSubset<T, userPointsUpdateArgs<ExtArgs>>): Prisma__userPointsClient<$Result.GetResult<Prisma.$userPointsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more UserPoints.
     * @param {userPointsDeleteManyArgs} args - Arguments to filter UserPoints to delete.
     * @example
     * // Delete a few UserPoints
     * const { count } = await prisma.userPoints.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userPointsDeleteManyArgs>(args?: SelectSubset<T, userPointsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserPoints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userPointsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserPoints
     * const userPoints = await prisma.userPoints.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends userPointsUpdateManyArgs>(args: SelectSubset<T, userPointsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserPoints.
     * @param {userPointsUpsertArgs} args - Arguments to update or create a UserPoints.
     * @example
     * // Update or create a UserPoints
     * const userPoints = await prisma.userPoints.upsert({
     *   create: {
     *     // ... data to create a UserPoints
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserPoints we want to update
     *   }
     * })
     */
    upsert<T extends userPointsUpsertArgs>(args: SelectSubset<T, userPointsUpsertArgs<ExtArgs>>): Prisma__userPointsClient<$Result.GetResult<Prisma.$userPointsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of UserPoints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userPointsCountArgs} args - Arguments to filter UserPoints to count.
     * @example
     * // Count the number of UserPoints
     * const count = await prisma.userPoints.count({
     *   where: {
     *     // ... the filter for the UserPoints we want to count
     *   }
     * })
    **/
    count<T extends userPointsCountArgs>(
      args?: Subset<T, userPointsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserPointsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserPoints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPointsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserPointsAggregateArgs>(args: Subset<T, UserPointsAggregateArgs>): Prisma.PrismaPromise<GetUserPointsAggregateType<T>>

    /**
     * Group by UserPoints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userPointsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends userPointsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userPointsGroupByArgs['orderBy'] }
        : { orderBy?: userPointsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, userPointsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserPointsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the userPoints model
   */
  readonly fields: userPointsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for userPoints.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userPointsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    discount<T extends userPoints$discountArgs<ExtArgs> = {}>(args?: Subset<T, userPoints$discountArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany"> | Null>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the userPoints model
   */ 
  interface userPointsFieldRefs {
    readonly id: FieldRef<"userPoints", 'Int'>
    readonly points: FieldRef<"userPoints", 'Int'>
    readonly expiresAt: FieldRef<"userPoints", 'DateTime'>
    readonly createdAt: FieldRef<"userPoints", 'DateTime'>
    readonly userId: FieldRef<"userPoints", 'String'>
  }
    

  // Custom InputTypes
  /**
   * userPoints findUnique
   */
  export type userPointsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userPoints
     */
    select?: userPointsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userPointsInclude<ExtArgs> | null
    /**
     * Filter, which userPoints to fetch.
     */
    where: userPointsWhereUniqueInput
  }

  /**
   * userPoints findUniqueOrThrow
   */
  export type userPointsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userPoints
     */
    select?: userPointsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userPointsInclude<ExtArgs> | null
    /**
     * Filter, which userPoints to fetch.
     */
    where: userPointsWhereUniqueInput
  }

  /**
   * userPoints findFirst
   */
  export type userPointsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userPoints
     */
    select?: userPointsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userPointsInclude<ExtArgs> | null
    /**
     * Filter, which userPoints to fetch.
     */
    where?: userPointsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of userPoints to fetch.
     */
    orderBy?: userPointsOrderByWithRelationInput | userPointsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for userPoints.
     */
    cursor?: userPointsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` userPoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` userPoints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of userPoints.
     */
    distinct?: UserPointsScalarFieldEnum | UserPointsScalarFieldEnum[]
  }

  /**
   * userPoints findFirstOrThrow
   */
  export type userPointsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userPoints
     */
    select?: userPointsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userPointsInclude<ExtArgs> | null
    /**
     * Filter, which userPoints to fetch.
     */
    where?: userPointsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of userPoints to fetch.
     */
    orderBy?: userPointsOrderByWithRelationInput | userPointsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for userPoints.
     */
    cursor?: userPointsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` userPoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` userPoints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of userPoints.
     */
    distinct?: UserPointsScalarFieldEnum | UserPointsScalarFieldEnum[]
  }

  /**
   * userPoints findMany
   */
  export type userPointsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userPoints
     */
    select?: userPointsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userPointsInclude<ExtArgs> | null
    /**
     * Filter, which userPoints to fetch.
     */
    where?: userPointsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of userPoints to fetch.
     */
    orderBy?: userPointsOrderByWithRelationInput | userPointsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing userPoints.
     */
    cursor?: userPointsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` userPoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` userPoints.
     */
    skip?: number
    distinct?: UserPointsScalarFieldEnum | UserPointsScalarFieldEnum[]
  }

  /**
   * userPoints create
   */
  export type userPointsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userPoints
     */
    select?: userPointsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userPointsInclude<ExtArgs> | null
    /**
     * The data needed to create a userPoints.
     */
    data: XOR<userPointsCreateInput, userPointsUncheckedCreateInput>
  }

  /**
   * userPoints createMany
   */
  export type userPointsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many userPoints.
     */
    data: userPointsCreateManyInput | userPointsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * userPoints createManyAndReturn
   */
  export type userPointsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userPoints
     */
    select?: userPointsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many userPoints.
     */
    data: userPointsCreateManyInput | userPointsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userPointsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * userPoints update
   */
  export type userPointsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userPoints
     */
    select?: userPointsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userPointsInclude<ExtArgs> | null
    /**
     * The data needed to update a userPoints.
     */
    data: XOR<userPointsUpdateInput, userPointsUncheckedUpdateInput>
    /**
     * Choose, which userPoints to update.
     */
    where: userPointsWhereUniqueInput
  }

  /**
   * userPoints updateMany
   */
  export type userPointsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update userPoints.
     */
    data: XOR<userPointsUpdateManyMutationInput, userPointsUncheckedUpdateManyInput>
    /**
     * Filter which userPoints to update
     */
    where?: userPointsWhereInput
  }

  /**
   * userPoints upsert
   */
  export type userPointsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userPoints
     */
    select?: userPointsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userPointsInclude<ExtArgs> | null
    /**
     * The filter to search for the userPoints to update in case it exists.
     */
    where: userPointsWhereUniqueInput
    /**
     * In case the userPoints found by the `where` argument doesn't exist, create a new userPoints with this data.
     */
    create: XOR<userPointsCreateInput, userPointsUncheckedCreateInput>
    /**
     * In case the userPoints was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userPointsUpdateInput, userPointsUncheckedUpdateInput>
  }

  /**
   * userPoints delete
   */
  export type userPointsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userPoints
     */
    select?: userPointsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userPointsInclude<ExtArgs> | null
    /**
     * Filter which userPoints to delete.
     */
    where: userPointsWhereUniqueInput
  }

  /**
   * userPoints deleteMany
   */
  export type userPointsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which userPoints to delete
     */
    where?: userPointsWhereInput
  }

  /**
   * userPoints.discount
   */
  export type userPoints$discountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * userPoints without action
   */
  export type userPointsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userPoints
     */
    select?: userPointsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userPointsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const PromotorScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    avatar: 'avatar',
    isVerify: 'isVerify'
  };

  export type PromotorScalarFieldEnum = (typeof PromotorScalarFieldEnum)[keyof typeof PromotorScalarFieldEnum]


  export const EventScalarFieldEnum: {
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

  export type EventScalarFieldEnum = (typeof EventScalarFieldEnum)[keyof typeof EventScalarFieldEnum]


  export const TicketScalarFieldEnum: {
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

  export type TicketScalarFieldEnum = (typeof TicketScalarFieldEnum)[keyof typeof TicketScalarFieldEnum]


  export const TransactionScalarFieldEnum: {
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
    createdAt: 'createdAt',
    expiresAt: 'expiresAt',
    qty: 'qty',
    promoQuota: 'promoQuota',
    redirect_url: 'redirect_url'
  };

  export type TransactionScalarFieldEnum = (typeof TransactionScalarFieldEnum)[keyof typeof TransactionScalarFieldEnum]


  export const DetailTransactionScalarFieldEnum: {
    id: 'id',
    transactionId: 'transactionId',
    eventId: 'eventId',
    ticketId: 'ticketId',
    reviewStatus: 'reviewStatus'
  };

  export type DetailTransactionScalarFieldEnum = (typeof DetailTransactionScalarFieldEnum)[keyof typeof DetailTransactionScalarFieldEnum]


  export const ReviewScalarFieldEnum: {
    id: 'id',
    desc: 'desc',
    rating: 'rating',
    userId: 'userId',
    eventId: 'eventId',
    transactionId: 'transactionId',
    ticketId: 'ticketId'
  };

  export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    password: 'password',
    avatar: 'avatar',
    isVerify: 'isVerify',
    refCode: 'refCode',
    reffered_by: 'reffered_by'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ReferralVoucherScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    createdAt: 'createdAt',
    expiresAt: 'expiresAt'
  };

  export type ReferralVoucherScalarFieldEnum = (typeof ReferralVoucherScalarFieldEnum)[keyof typeof ReferralVoucherScalarFieldEnum]


  export const UserPointsScalarFieldEnum: {
    id: 'id',
    points: 'points',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    userId: 'userId'
  };

  export type UserPointsScalarFieldEnum = (typeof UserPointsScalarFieldEnum)[keyof typeof UserPointsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'EventCategory'
   */
  export type EnumEventCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EventCategory'>
    


  /**
   * Reference to a field of type 'EventCategory[]'
   */
  export type ListEnumEventCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EventCategory[]'>
    


  /**
   * Reference to a field of type 'Location'
   */
  export type EnumLocationFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Location'>
    


  /**
   * Reference to a field of type 'Location[]'
   */
  export type ListEnumLocationFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Location[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'EventType'
   */
  export type EnumEventTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EventType'>
    


  /**
   * Reference to a field of type 'EventType[]'
   */
  export type ListEnumEventTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EventType[]'>
    


  /**
   * Reference to a field of type 'TicketCategory'
   */
  export type EnumTicketCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TicketCategory'>
    


  /**
   * Reference to a field of type 'TicketCategory[]'
   */
  export type ListEnumTicketCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TicketCategory[]'>
    


  /**
   * Reference to a field of type 'TransactionStatus'
   */
  export type EnumTransactionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionStatus'>
    


  /**
   * Reference to a field of type 'TransactionStatus[]'
   */
  export type ListEnumTransactionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type PromotorWhereInput = {
    AND?: PromotorWhereInput | PromotorWhereInput[]
    OR?: PromotorWhereInput[]
    NOT?: PromotorWhereInput | PromotorWhereInput[]
    id?: IntFilter<"Promotor"> | number
    name?: StringFilter<"Promotor"> | string
    email?: StringFilter<"Promotor"> | string
    password?: StringFilter<"Promotor"> | string
    avatar?: StringFilter<"Promotor"> | string
    isVerify?: BoolFilter<"Promotor"> | boolean
    event?: EventListRelationFilter
    ticket?: TicketListRelationFilter
  }

  export type PromotorOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatar?: SortOrder
    isVerify?: SortOrder
    event?: EventOrderByRelationAggregateInput
    ticket?: TicketOrderByRelationAggregateInput
  }

  export type PromotorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    email?: string
    AND?: PromotorWhereInput | PromotorWhereInput[]
    OR?: PromotorWhereInput[]
    NOT?: PromotorWhereInput | PromotorWhereInput[]
    password?: StringFilter<"Promotor"> | string
    avatar?: StringFilter<"Promotor"> | string
    isVerify?: BoolFilter<"Promotor"> | boolean
    event?: EventListRelationFilter
    ticket?: TicketListRelationFilter
  }, "id" | "name" | "email">

  export type PromotorOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatar?: SortOrder
    isVerify?: SortOrder
    _count?: PromotorCountOrderByAggregateInput
    _avg?: PromotorAvgOrderByAggregateInput
    _max?: PromotorMaxOrderByAggregateInput
    _min?: PromotorMinOrderByAggregateInput
    _sum?: PromotorSumOrderByAggregateInput
  }

  export type PromotorScalarWhereWithAggregatesInput = {
    AND?: PromotorScalarWhereWithAggregatesInput | PromotorScalarWhereWithAggregatesInput[]
    OR?: PromotorScalarWhereWithAggregatesInput[]
    NOT?: PromotorScalarWhereWithAggregatesInput | PromotorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Promotor"> | number
    name?: StringWithAggregatesFilter<"Promotor"> | string
    email?: StringWithAggregatesFilter<"Promotor"> | string
    password?: StringWithAggregatesFilter<"Promotor"> | string
    avatar?: StringWithAggregatesFilter<"Promotor"> | string
    isVerify?: BoolWithAggregatesFilter<"Promotor"> | boolean
  }

  export type EventWhereInput = {
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    id?: IntFilter<"Event"> | number
    title?: StringFilter<"Event"> | string
    description?: StringFilter<"Event"> | string
    category?: EnumEventCategoryFilter<"Event"> | $Enums.EventCategory
    location?: EnumLocationFilter<"Event"> | $Enums.Location
    venue?: StringFilter<"Event"> | string
    mapURL?: StringFilter<"Event"> | string
    date?: DateTimeFilter<"Event"> | Date | string
    time?: DateTimeFilter<"Event"> | Date | string
    type?: EnumEventTypeFilter<"Event"> | $Enums.EventType
    thumbnail?: StringFilter<"Event"> | string
    isActive?: BoolFilter<"Event"> | boolean
    slug?: StringFilter<"Event"> | string
    promotorId?: IntFilter<"Event"> | number
    Promotor?: XOR<PromotorScalarRelationFilter, PromotorWhereInput>
    ticket?: TicketListRelationFilter
    DetailTransaction?: DetailTransactionListRelationFilter
    review?: ReviewListRelationFilter
  }

  export type EventOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    location?: SortOrder
    venue?: SortOrder
    mapURL?: SortOrder
    date?: SortOrder
    time?: SortOrder
    type?: SortOrder
    thumbnail?: SortOrder
    isActive?: SortOrder
    slug?: SortOrder
    promotorId?: SortOrder
    Promotor?: PromotorOrderByWithRelationInput
    ticket?: TicketOrderByRelationAggregateInput
    DetailTransaction?: DetailTransactionOrderByRelationAggregateInput
    review?: ReviewOrderByRelationAggregateInput
  }

  export type EventWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    slug?: string
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    title?: StringFilter<"Event"> | string
    description?: StringFilter<"Event"> | string
    category?: EnumEventCategoryFilter<"Event"> | $Enums.EventCategory
    location?: EnumLocationFilter<"Event"> | $Enums.Location
    venue?: StringFilter<"Event"> | string
    mapURL?: StringFilter<"Event"> | string
    date?: DateTimeFilter<"Event"> | Date | string
    time?: DateTimeFilter<"Event"> | Date | string
    type?: EnumEventTypeFilter<"Event"> | $Enums.EventType
    thumbnail?: StringFilter<"Event"> | string
    isActive?: BoolFilter<"Event"> | boolean
    promotorId?: IntFilter<"Event"> | number
    Promotor?: XOR<PromotorScalarRelationFilter, PromotorWhereInput>
    ticket?: TicketListRelationFilter
    DetailTransaction?: DetailTransactionListRelationFilter
    review?: ReviewListRelationFilter
  }, "id" | "slug">

  export type EventOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    location?: SortOrder
    venue?: SortOrder
    mapURL?: SortOrder
    date?: SortOrder
    time?: SortOrder
    type?: SortOrder
    thumbnail?: SortOrder
    isActive?: SortOrder
    slug?: SortOrder
    promotorId?: SortOrder
    _count?: EventCountOrderByAggregateInput
    _avg?: EventAvgOrderByAggregateInput
    _max?: EventMaxOrderByAggregateInput
    _min?: EventMinOrderByAggregateInput
    _sum?: EventSumOrderByAggregateInput
  }

  export type EventScalarWhereWithAggregatesInput = {
    AND?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    OR?: EventScalarWhereWithAggregatesInput[]
    NOT?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Event"> | number
    title?: StringWithAggregatesFilter<"Event"> | string
    description?: StringWithAggregatesFilter<"Event"> | string
    category?: EnumEventCategoryWithAggregatesFilter<"Event"> | $Enums.EventCategory
    location?: EnumLocationWithAggregatesFilter<"Event"> | $Enums.Location
    venue?: StringWithAggregatesFilter<"Event"> | string
    mapURL?: StringWithAggregatesFilter<"Event"> | string
    date?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    time?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    type?: EnumEventTypeWithAggregatesFilter<"Event"> | $Enums.EventType
    thumbnail?: StringWithAggregatesFilter<"Event"> | string
    isActive?: BoolWithAggregatesFilter<"Event"> | boolean
    slug?: StringWithAggregatesFilter<"Event"> | string
    promotorId?: IntWithAggregatesFilter<"Event"> | number
  }

  export type TicketWhereInput = {
    AND?: TicketWhereInput | TicketWhereInput[]
    OR?: TicketWhereInput[]
    NOT?: TicketWhereInput | TicketWhereInput[]
    id?: IntFilter<"Ticket"> | number
    eventId?: IntFilter<"Ticket"> | number
    price?: IntFilter<"Ticket"> | number
    category?: EnumTicketCategoryFilter<"Ticket"> | $Enums.TicketCategory
    startDate?: DateTimeFilter<"Ticket"> | Date | string
    endDate?: DateTimeFilter<"Ticket"> | Date | string
    isActive?: BoolFilter<"Ticket"> | boolean
    discount?: BoolFilter<"Ticket"> | boolean
    quota?: IntFilter<"Ticket"> | number
    promotorId?: IntFilter<"Ticket"> | number
    Promotor?: XOR<PromotorScalarRelationFilter, PromotorWhereInput>
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    transaction?: TransactionListRelationFilter
    DetailTransaction?: DetailTransactionListRelationFilter
    review?: ReviewListRelationFilter
  }

  export type TicketOrderByWithRelationInput = {
    id?: SortOrder
    eventId?: SortOrder
    price?: SortOrder
    category?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    isActive?: SortOrder
    discount?: SortOrder
    quota?: SortOrder
    promotorId?: SortOrder
    Promotor?: PromotorOrderByWithRelationInput
    event?: EventOrderByWithRelationInput
    transaction?: TransactionOrderByRelationAggregateInput
    DetailTransaction?: DetailTransactionOrderByRelationAggregateInput
    review?: ReviewOrderByRelationAggregateInput
  }

  export type TicketWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TicketWhereInput | TicketWhereInput[]
    OR?: TicketWhereInput[]
    NOT?: TicketWhereInput | TicketWhereInput[]
    eventId?: IntFilter<"Ticket"> | number
    price?: IntFilter<"Ticket"> | number
    category?: EnumTicketCategoryFilter<"Ticket"> | $Enums.TicketCategory
    startDate?: DateTimeFilter<"Ticket"> | Date | string
    endDate?: DateTimeFilter<"Ticket"> | Date | string
    isActive?: BoolFilter<"Ticket"> | boolean
    discount?: BoolFilter<"Ticket"> | boolean
    quota?: IntFilter<"Ticket"> | number
    promotorId?: IntFilter<"Ticket"> | number
    Promotor?: XOR<PromotorScalarRelationFilter, PromotorWhereInput>
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    transaction?: TransactionListRelationFilter
    DetailTransaction?: DetailTransactionListRelationFilter
    review?: ReviewListRelationFilter
  }, "id">

  export type TicketOrderByWithAggregationInput = {
    id?: SortOrder
    eventId?: SortOrder
    price?: SortOrder
    category?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    isActive?: SortOrder
    discount?: SortOrder
    quota?: SortOrder
    promotorId?: SortOrder
    _count?: TicketCountOrderByAggregateInput
    _avg?: TicketAvgOrderByAggregateInput
    _max?: TicketMaxOrderByAggregateInput
    _min?: TicketMinOrderByAggregateInput
    _sum?: TicketSumOrderByAggregateInput
  }

  export type TicketScalarWhereWithAggregatesInput = {
    AND?: TicketScalarWhereWithAggregatesInput | TicketScalarWhereWithAggregatesInput[]
    OR?: TicketScalarWhereWithAggregatesInput[]
    NOT?: TicketScalarWhereWithAggregatesInput | TicketScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Ticket"> | number
    eventId?: IntWithAggregatesFilter<"Ticket"> | number
    price?: IntWithAggregatesFilter<"Ticket"> | number
    category?: EnumTicketCategoryWithAggregatesFilter<"Ticket"> | $Enums.TicketCategory
    startDate?: DateTimeWithAggregatesFilter<"Ticket"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"Ticket"> | Date | string
    isActive?: BoolWithAggregatesFilter<"Ticket"> | boolean
    discount?: BoolWithAggregatesFilter<"Ticket"> | boolean
    quota?: IntWithAggregatesFilter<"Ticket"> | number
    promotorId?: IntWithAggregatesFilter<"Ticket"> | number
  }

  export type TransactionWhereInput = {
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    id?: IntFilter<"Transaction"> | number
    basePrice?: IntFilter<"Transaction"> | number
    totalPrice?: IntFilter<"Transaction"> | number
    finalPrice?: IntFilter<"Transaction"> | number
    status?: EnumTransactionStatusFilter<"Transaction"> | $Enums.TransactionStatus
    userId?: StringFilter<"Transaction"> | string
    userVoucher?: IntNullableFilter<"Transaction"> | number | null
    userPoints?: IntNullableFilter<"Transaction"> | number | null
    discount?: IntNullableFilter<"Transaction"> | number | null
    ticketId?: IntFilter<"Transaction"> | number
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    expiresAt?: DateTimeFilter<"Transaction"> | Date | string
    qty?: IntFilter<"Transaction"> | number
    promoQuota?: IntFilter<"Transaction"> | number
    redirect_url?: StringNullableFilter<"Transaction"> | string | null
    DetailTransaction?: DetailTransactionListRelationFilter
    ticket?: XOR<TicketScalarRelationFilter, TicketWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    points?: XOR<UserPointsNullableScalarRelationFilter, userPointsWhereInput> | null
    voucher?: XOR<ReferralVoucherNullableScalarRelationFilter, referralVoucherWhereInput> | null
  }

  export type TransactionOrderByWithRelationInput = {
    id?: SortOrder
    basePrice?: SortOrder
    totalPrice?: SortOrder
    finalPrice?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    userVoucher?: SortOrderInput | SortOrder
    userPoints?: SortOrderInput | SortOrder
    discount?: SortOrderInput | SortOrder
    ticketId?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    qty?: SortOrder
    promoQuota?: SortOrder
    redirect_url?: SortOrderInput | SortOrder
    DetailTransaction?: DetailTransactionOrderByRelationAggregateInput
    ticket?: TicketOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    points?: userPointsOrderByWithRelationInput
    voucher?: referralVoucherOrderByWithRelationInput
  }

  export type TransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    basePrice?: IntFilter<"Transaction"> | number
    totalPrice?: IntFilter<"Transaction"> | number
    finalPrice?: IntFilter<"Transaction"> | number
    status?: EnumTransactionStatusFilter<"Transaction"> | $Enums.TransactionStatus
    userId?: StringFilter<"Transaction"> | string
    userVoucher?: IntNullableFilter<"Transaction"> | number | null
    userPoints?: IntNullableFilter<"Transaction"> | number | null
    discount?: IntNullableFilter<"Transaction"> | number | null
    ticketId?: IntFilter<"Transaction"> | number
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    expiresAt?: DateTimeFilter<"Transaction"> | Date | string
    qty?: IntFilter<"Transaction"> | number
    promoQuota?: IntFilter<"Transaction"> | number
    redirect_url?: StringNullableFilter<"Transaction"> | string | null
    DetailTransaction?: DetailTransactionListRelationFilter
    ticket?: XOR<TicketScalarRelationFilter, TicketWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    points?: XOR<UserPointsNullableScalarRelationFilter, userPointsWhereInput> | null
    voucher?: XOR<ReferralVoucherNullableScalarRelationFilter, referralVoucherWhereInput> | null
  }, "id">

  export type TransactionOrderByWithAggregationInput = {
    id?: SortOrder
    basePrice?: SortOrder
    totalPrice?: SortOrder
    finalPrice?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    userVoucher?: SortOrderInput | SortOrder
    userPoints?: SortOrderInput | SortOrder
    discount?: SortOrderInput | SortOrder
    ticketId?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    qty?: SortOrder
    promoQuota?: SortOrder
    redirect_url?: SortOrderInput | SortOrder
    _count?: TransactionCountOrderByAggregateInput
    _avg?: TransactionAvgOrderByAggregateInput
    _max?: TransactionMaxOrderByAggregateInput
    _min?: TransactionMinOrderByAggregateInput
    _sum?: TransactionSumOrderByAggregateInput
  }

  export type TransactionScalarWhereWithAggregatesInput = {
    AND?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    OR?: TransactionScalarWhereWithAggregatesInput[]
    NOT?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Transaction"> | number
    basePrice?: IntWithAggregatesFilter<"Transaction"> | number
    totalPrice?: IntWithAggregatesFilter<"Transaction"> | number
    finalPrice?: IntWithAggregatesFilter<"Transaction"> | number
    status?: EnumTransactionStatusWithAggregatesFilter<"Transaction"> | $Enums.TransactionStatus
    userId?: StringWithAggregatesFilter<"Transaction"> | string
    userVoucher?: IntNullableWithAggregatesFilter<"Transaction"> | number | null
    userPoints?: IntNullableWithAggregatesFilter<"Transaction"> | number | null
    discount?: IntNullableWithAggregatesFilter<"Transaction"> | number | null
    ticketId?: IntWithAggregatesFilter<"Transaction"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
    expiresAt?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
    qty?: IntWithAggregatesFilter<"Transaction"> | number
    promoQuota?: IntWithAggregatesFilter<"Transaction"> | number
    redirect_url?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
  }

  export type DetailTransactionWhereInput = {
    AND?: DetailTransactionWhereInput | DetailTransactionWhereInput[]
    OR?: DetailTransactionWhereInput[]
    NOT?: DetailTransactionWhereInput | DetailTransactionWhereInput[]
    id?: IntFilter<"DetailTransaction"> | number
    transactionId?: IntFilter<"DetailTransaction"> | number
    eventId?: IntFilter<"DetailTransaction"> | number
    ticketId?: IntFilter<"DetailTransaction"> | number
    reviewStatus?: BoolFilter<"DetailTransaction"> | boolean
    review?: ReviewListRelationFilter
    ticket?: XOR<TicketScalarRelationFilter, TicketWhereInput>
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    transaction?: XOR<TransactionScalarRelationFilter, TransactionWhereInput>
  }

  export type DetailTransactionOrderByWithRelationInput = {
    id?: SortOrder
    transactionId?: SortOrder
    eventId?: SortOrder
    ticketId?: SortOrder
    reviewStatus?: SortOrder
    review?: ReviewOrderByRelationAggregateInput
    ticket?: TicketOrderByWithRelationInput
    event?: EventOrderByWithRelationInput
    transaction?: TransactionOrderByWithRelationInput
  }

  export type DetailTransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DetailTransactionWhereInput | DetailTransactionWhereInput[]
    OR?: DetailTransactionWhereInput[]
    NOT?: DetailTransactionWhereInput | DetailTransactionWhereInput[]
    transactionId?: IntFilter<"DetailTransaction"> | number
    eventId?: IntFilter<"DetailTransaction"> | number
    ticketId?: IntFilter<"DetailTransaction"> | number
    reviewStatus?: BoolFilter<"DetailTransaction"> | boolean
    review?: ReviewListRelationFilter
    ticket?: XOR<TicketScalarRelationFilter, TicketWhereInput>
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    transaction?: XOR<TransactionScalarRelationFilter, TransactionWhereInput>
  }, "id">

  export type DetailTransactionOrderByWithAggregationInput = {
    id?: SortOrder
    transactionId?: SortOrder
    eventId?: SortOrder
    ticketId?: SortOrder
    reviewStatus?: SortOrder
    _count?: DetailTransactionCountOrderByAggregateInput
    _avg?: DetailTransactionAvgOrderByAggregateInput
    _max?: DetailTransactionMaxOrderByAggregateInput
    _min?: DetailTransactionMinOrderByAggregateInput
    _sum?: DetailTransactionSumOrderByAggregateInput
  }

  export type DetailTransactionScalarWhereWithAggregatesInput = {
    AND?: DetailTransactionScalarWhereWithAggregatesInput | DetailTransactionScalarWhereWithAggregatesInput[]
    OR?: DetailTransactionScalarWhereWithAggregatesInput[]
    NOT?: DetailTransactionScalarWhereWithAggregatesInput | DetailTransactionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DetailTransaction"> | number
    transactionId?: IntWithAggregatesFilter<"DetailTransaction"> | number
    eventId?: IntWithAggregatesFilter<"DetailTransaction"> | number
    ticketId?: IntWithAggregatesFilter<"DetailTransaction"> | number
    reviewStatus?: BoolWithAggregatesFilter<"DetailTransaction"> | boolean
  }

  export type ReviewWhereInput = {
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    id?: IntFilter<"Review"> | number
    desc?: StringNullableFilter<"Review"> | string | null
    rating?: IntFilter<"Review"> | number
    userId?: StringFilter<"Review"> | string
    eventId?: IntFilter<"Review"> | number
    transactionId?: IntFilter<"Review"> | number
    ticketId?: IntNullableFilter<"Review"> | number | null
    isValid?: XOR<DetailTransactionScalarRelationFilter, DetailTransactionWhereInput>
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    Ticket?: XOR<TicketNullableScalarRelationFilter, TicketWhereInput> | null
  }

  export type ReviewOrderByWithRelationInput = {
    id?: SortOrder
    desc?: SortOrderInput | SortOrder
    rating?: SortOrder
    userId?: SortOrder
    eventId?: SortOrder
    transactionId?: SortOrder
    ticketId?: SortOrderInput | SortOrder
    isValid?: DetailTransactionOrderByWithRelationInput
    event?: EventOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    Ticket?: TicketOrderByWithRelationInput
  }

  export type ReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    desc?: StringNullableFilter<"Review"> | string | null
    rating?: IntFilter<"Review"> | number
    userId?: StringFilter<"Review"> | string
    eventId?: IntFilter<"Review"> | number
    transactionId?: IntFilter<"Review"> | number
    ticketId?: IntNullableFilter<"Review"> | number | null
    isValid?: XOR<DetailTransactionScalarRelationFilter, DetailTransactionWhereInput>
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    Ticket?: XOR<TicketNullableScalarRelationFilter, TicketWhereInput> | null
  }, "id">

  export type ReviewOrderByWithAggregationInput = {
    id?: SortOrder
    desc?: SortOrderInput | SortOrder
    rating?: SortOrder
    userId?: SortOrder
    eventId?: SortOrder
    transactionId?: SortOrder
    ticketId?: SortOrderInput | SortOrder
    _count?: ReviewCountOrderByAggregateInput
    _avg?: ReviewAvgOrderByAggregateInput
    _max?: ReviewMaxOrderByAggregateInput
    _min?: ReviewMinOrderByAggregateInput
    _sum?: ReviewSumOrderByAggregateInput
  }

  export type ReviewScalarWhereWithAggregatesInput = {
    AND?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    OR?: ReviewScalarWhereWithAggregatesInput[]
    NOT?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Review"> | number
    desc?: StringNullableWithAggregatesFilter<"Review"> | string | null
    rating?: IntWithAggregatesFilter<"Review"> | number
    userId?: StringWithAggregatesFilter<"Review"> | string
    eventId?: IntWithAggregatesFilter<"Review"> | number
    transactionId?: IntWithAggregatesFilter<"Review"> | number
    ticketId?: IntNullableWithAggregatesFilter<"Review"> | number | null
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    avatar?: StringFilter<"User"> | string
    isVerify?: BoolFilter<"User"> | boolean
    refCode?: StringNullableFilter<"User"> | string | null
    reffered_by?: StringNullableFilter<"User"> | string | null
    Transaction?: TransactionListRelationFilter
    UserId?: ReferralVoucherListRelationFilter
    userPoints?: UserPointsListRelationFilter
    Review?: ReviewListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatar?: SortOrder
    isVerify?: SortOrder
    refCode?: SortOrderInput | SortOrder
    reffered_by?: SortOrderInput | SortOrder
    Transaction?: TransactionOrderByRelationAggregateInput
    UserId?: referralVoucherOrderByRelationAggregateInput
    userPoints?: userPointsOrderByRelationAggregateInput
    Review?: ReviewOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    avatar?: StringFilter<"User"> | string
    isVerify?: BoolFilter<"User"> | boolean
    refCode?: StringNullableFilter<"User"> | string | null
    reffered_by?: StringNullableFilter<"User"> | string | null
    Transaction?: TransactionListRelationFilter
    UserId?: ReferralVoucherListRelationFilter
    userPoints?: UserPointsListRelationFilter
    Review?: ReviewListRelationFilter
  }, "id">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatar?: SortOrder
    isVerify?: SortOrder
    refCode?: SortOrderInput | SortOrder
    reffered_by?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    avatar?: StringWithAggregatesFilter<"User"> | string
    isVerify?: BoolWithAggregatesFilter<"User"> | boolean
    refCode?: StringNullableWithAggregatesFilter<"User"> | string | null
    reffered_by?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type referralVoucherWhereInput = {
    AND?: referralVoucherWhereInput | referralVoucherWhereInput[]
    OR?: referralVoucherWhereInput[]
    NOT?: referralVoucherWhereInput | referralVoucherWhereInput[]
    id?: IntFilter<"referralVoucher"> | number
    userId?: StringFilter<"referralVoucher"> | string
    createdAt?: DateTimeFilter<"referralVoucher"> | Date | string
    expiresAt?: DateTimeFilter<"referralVoucher"> | Date | string
    discount?: TransactionListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type referralVoucherOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    discount?: TransactionOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
  }

  export type referralVoucherWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: string
    AND?: referralVoucherWhereInput | referralVoucherWhereInput[]
    OR?: referralVoucherWhereInput[]
    NOT?: referralVoucherWhereInput | referralVoucherWhereInput[]
    createdAt?: DateTimeFilter<"referralVoucher"> | Date | string
    expiresAt?: DateTimeFilter<"referralVoucher"> | Date | string
    discount?: TransactionListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type referralVoucherOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    _count?: referralVoucherCountOrderByAggregateInput
    _avg?: referralVoucherAvgOrderByAggregateInput
    _max?: referralVoucherMaxOrderByAggregateInput
    _min?: referralVoucherMinOrderByAggregateInput
    _sum?: referralVoucherSumOrderByAggregateInput
  }

  export type referralVoucherScalarWhereWithAggregatesInput = {
    AND?: referralVoucherScalarWhereWithAggregatesInput | referralVoucherScalarWhereWithAggregatesInput[]
    OR?: referralVoucherScalarWhereWithAggregatesInput[]
    NOT?: referralVoucherScalarWhereWithAggregatesInput | referralVoucherScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"referralVoucher"> | number
    userId?: StringWithAggregatesFilter<"referralVoucher"> | string
    createdAt?: DateTimeWithAggregatesFilter<"referralVoucher"> | Date | string
    expiresAt?: DateTimeWithAggregatesFilter<"referralVoucher"> | Date | string
  }

  export type userPointsWhereInput = {
    AND?: userPointsWhereInput | userPointsWhereInput[]
    OR?: userPointsWhereInput[]
    NOT?: userPointsWhereInput | userPointsWhereInput[]
    id?: IntFilter<"userPoints"> | number
    points?: IntNullableFilter<"userPoints"> | number | null
    expiresAt?: DateTimeFilter<"userPoints"> | Date | string
    createdAt?: DateTimeFilter<"userPoints"> | Date | string
    userId?: StringFilter<"userPoints"> | string
    discount?: TransactionListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type userPointsOrderByWithRelationInput = {
    id?: SortOrder
    points?: SortOrderInput | SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    discount?: TransactionOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
  }

  export type userPointsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: userPointsWhereInput | userPointsWhereInput[]
    OR?: userPointsWhereInput[]
    NOT?: userPointsWhereInput | userPointsWhereInput[]
    points?: IntNullableFilter<"userPoints"> | number | null
    expiresAt?: DateTimeFilter<"userPoints"> | Date | string
    createdAt?: DateTimeFilter<"userPoints"> | Date | string
    userId?: StringFilter<"userPoints"> | string
    discount?: TransactionListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type userPointsOrderByWithAggregationInput = {
    id?: SortOrder
    points?: SortOrderInput | SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    _count?: userPointsCountOrderByAggregateInput
    _avg?: userPointsAvgOrderByAggregateInput
    _max?: userPointsMaxOrderByAggregateInput
    _min?: userPointsMinOrderByAggregateInput
    _sum?: userPointsSumOrderByAggregateInput
  }

  export type userPointsScalarWhereWithAggregatesInput = {
    AND?: userPointsScalarWhereWithAggregatesInput | userPointsScalarWhereWithAggregatesInput[]
    OR?: userPointsScalarWhereWithAggregatesInput[]
    NOT?: userPointsScalarWhereWithAggregatesInput | userPointsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"userPoints"> | number
    points?: IntNullableWithAggregatesFilter<"userPoints"> | number | null
    expiresAt?: DateTimeWithAggregatesFilter<"userPoints"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"userPoints"> | Date | string
    userId?: StringWithAggregatesFilter<"userPoints"> | string
  }

  export type PromotorCreateInput = {
    name: string
    email: string
    password: string
    avatar: string
    isVerify: boolean
    event?: EventCreateNestedManyWithoutPromotorInput
    ticket?: TicketCreateNestedManyWithoutPromotorInput
  }

  export type PromotorUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    password: string
    avatar: string
    isVerify: boolean
    event?: EventUncheckedCreateNestedManyWithoutPromotorInput
    ticket?: TicketUncheckedCreateNestedManyWithoutPromotorInput
  }

  export type PromotorUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    isVerify?: BoolFieldUpdateOperationsInput | boolean
    event?: EventUpdateManyWithoutPromotorNestedInput
    ticket?: TicketUpdateManyWithoutPromotorNestedInput
  }

  export type PromotorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    isVerify?: BoolFieldUpdateOperationsInput | boolean
    event?: EventUncheckedUpdateManyWithoutPromotorNestedInput
    ticket?: TicketUncheckedUpdateManyWithoutPromotorNestedInput
  }

  export type PromotorCreateManyInput = {
    id?: number
    name: string
    email: string
    password: string
    avatar: string
    isVerify: boolean
  }

  export type PromotorUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    isVerify?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PromotorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    isVerify?: BoolFieldUpdateOperationsInput | boolean
  }

  export type EventCreateInput = {
    title: string
    description: string
    category: $Enums.EventCategory
    location: $Enums.Location
    venue: string
    mapURL: string
    date: Date | string
    time: Date | string
    type: $Enums.EventType
    thumbnail: string
    isActive?: boolean
    slug: string
    Promotor: PromotorCreateNestedOneWithoutEventInput
    ticket?: TicketCreateNestedManyWithoutEventInput
    DetailTransaction?: DetailTransactionCreateNestedManyWithoutEventInput
    review?: ReviewCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateInput = {
    id?: number
    title: string
    description: string
    category: $Enums.EventCategory
    location: $Enums.Location
    venue: string
    mapURL: string
    date: Date | string
    time: Date | string
    type: $Enums.EventType
    thumbnail: string
    isActive?: boolean
    slug: string
    promotorId: number
    ticket?: TicketUncheckedCreateNestedManyWithoutEventInput
    DetailTransaction?: DetailTransactionUncheckedCreateNestedManyWithoutEventInput
    review?: ReviewUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: EnumEventCategoryFieldUpdateOperationsInput | $Enums.EventCategory
    location?: EnumLocationFieldUpdateOperationsInput | $Enums.Location
    venue?: StringFieldUpdateOperationsInput | string
    mapURL?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    thumbnail?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    slug?: StringFieldUpdateOperationsInput | string
    Promotor?: PromotorUpdateOneRequiredWithoutEventNestedInput
    ticket?: TicketUpdateManyWithoutEventNestedInput
    DetailTransaction?: DetailTransactionUpdateManyWithoutEventNestedInput
    review?: ReviewUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: EnumEventCategoryFieldUpdateOperationsInput | $Enums.EventCategory
    location?: EnumLocationFieldUpdateOperationsInput | $Enums.Location
    venue?: StringFieldUpdateOperationsInput | string
    mapURL?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    thumbnail?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    slug?: StringFieldUpdateOperationsInput | string
    promotorId?: IntFieldUpdateOperationsInput | number
    ticket?: TicketUncheckedUpdateManyWithoutEventNestedInput
    DetailTransaction?: DetailTransactionUncheckedUpdateManyWithoutEventNestedInput
    review?: ReviewUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventCreateManyInput = {
    id?: number
    title: string
    description: string
    category: $Enums.EventCategory
    location: $Enums.Location
    venue: string
    mapURL: string
    date: Date | string
    time: Date | string
    type: $Enums.EventType
    thumbnail: string
    isActive?: boolean
    slug: string
    promotorId: number
  }

  export type EventUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: EnumEventCategoryFieldUpdateOperationsInput | $Enums.EventCategory
    location?: EnumLocationFieldUpdateOperationsInput | $Enums.Location
    venue?: StringFieldUpdateOperationsInput | string
    mapURL?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    thumbnail?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    slug?: StringFieldUpdateOperationsInput | string
  }

  export type EventUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: EnumEventCategoryFieldUpdateOperationsInput | $Enums.EventCategory
    location?: EnumLocationFieldUpdateOperationsInput | $Enums.Location
    venue?: StringFieldUpdateOperationsInput | string
    mapURL?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    thumbnail?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    slug?: StringFieldUpdateOperationsInput | string
    promotorId?: IntFieldUpdateOperationsInput | number
  }

  export type TicketCreateInput = {
    price: number
    category: $Enums.TicketCategory
    startDate?: Date | string
    endDate: Date | string
    isActive?: boolean
    discount?: boolean
    quota?: number
    Promotor: PromotorCreateNestedOneWithoutTicketInput
    event: EventCreateNestedOneWithoutTicketInput
    transaction?: TransactionCreateNestedManyWithoutTicketInput
    DetailTransaction?: DetailTransactionCreateNestedManyWithoutTicketInput
    review?: ReviewCreateNestedManyWithoutTicketInput
  }

  export type TicketUncheckedCreateInput = {
    id?: number
    eventId: number
    price: number
    category: $Enums.TicketCategory
    startDate?: Date | string
    endDate: Date | string
    isActive?: boolean
    discount?: boolean
    quota?: number
    promotorId: number
    transaction?: TransactionUncheckedCreateNestedManyWithoutTicketInput
    DetailTransaction?: DetailTransactionUncheckedCreateNestedManyWithoutTicketInput
    review?: ReviewUncheckedCreateNestedManyWithoutTicketInput
  }

  export type TicketUpdateInput = {
    price?: IntFieldUpdateOperationsInput | number
    category?: EnumTicketCategoryFieldUpdateOperationsInput | $Enums.TicketCategory
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    discount?: BoolFieldUpdateOperationsInput | boolean
    quota?: IntFieldUpdateOperationsInput | number
    Promotor?: PromotorUpdateOneRequiredWithoutTicketNestedInput
    event?: EventUpdateOneRequiredWithoutTicketNestedInput
    transaction?: TransactionUpdateManyWithoutTicketNestedInput
    DetailTransaction?: DetailTransactionUpdateManyWithoutTicketNestedInput
    review?: ReviewUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    eventId?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    category?: EnumTicketCategoryFieldUpdateOperationsInput | $Enums.TicketCategory
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    discount?: BoolFieldUpdateOperationsInput | boolean
    quota?: IntFieldUpdateOperationsInput | number
    promotorId?: IntFieldUpdateOperationsInput | number
    transaction?: TransactionUncheckedUpdateManyWithoutTicketNestedInput
    DetailTransaction?: DetailTransactionUncheckedUpdateManyWithoutTicketNestedInput
    review?: ReviewUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type TicketCreateManyInput = {
    id?: number
    eventId: number
    price: number
    category: $Enums.TicketCategory
    startDate?: Date | string
    endDate: Date | string
    isActive?: boolean
    discount?: boolean
    quota?: number
    promotorId: number
  }

  export type TicketUpdateManyMutationInput = {
    price?: IntFieldUpdateOperationsInput | number
    category?: EnumTicketCategoryFieldUpdateOperationsInput | $Enums.TicketCategory
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    discount?: BoolFieldUpdateOperationsInput | boolean
    quota?: IntFieldUpdateOperationsInput | number
  }

  export type TicketUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    eventId?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    category?: EnumTicketCategoryFieldUpdateOperationsInput | $Enums.TicketCategory
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    discount?: BoolFieldUpdateOperationsInput | boolean
    quota?: IntFieldUpdateOperationsInput | number
    promotorId?: IntFieldUpdateOperationsInput | number
  }

  export type TransactionCreateInput = {
    basePrice: number
    totalPrice: number
    finalPrice: number
    status?: $Enums.TransactionStatus
    discount?: number | null
    createdAt?: Date | string
    expiresAt: Date | string
    qty: number
    promoQuota?: number
    redirect_url?: string | null
    DetailTransaction?: DetailTransactionCreateNestedManyWithoutTransactionInput
    ticket: TicketCreateNestedOneWithoutTransactionInput
    user: UserCreateNestedOneWithoutTransactionInput
    points?: userPointsCreateNestedOneWithoutDiscountInput
    voucher?: referralVoucherCreateNestedOneWithoutDiscountInput
  }

  export type TransactionUncheckedCreateInput = {
    id?: number
    basePrice: number
    totalPrice: number
    finalPrice: number
    status?: $Enums.TransactionStatus
    userId: string
    userVoucher?: number | null
    userPoints?: number | null
    discount?: number | null
    ticketId: number
    createdAt?: Date | string
    expiresAt: Date | string
    qty: number
    promoQuota?: number
    redirect_url?: string | null
    DetailTransaction?: DetailTransactionUncheckedCreateNestedManyWithoutTransactionInput
  }

  export type TransactionUpdateInput = {
    basePrice?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    finalPrice?: IntFieldUpdateOperationsInput | number
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    discount?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    qty?: IntFieldUpdateOperationsInput | number
    promoQuota?: IntFieldUpdateOperationsInput | number
    redirect_url?: NullableStringFieldUpdateOperationsInput | string | null
    DetailTransaction?: DetailTransactionUpdateManyWithoutTransactionNestedInput
    ticket?: TicketUpdateOneRequiredWithoutTransactionNestedInput
    user?: UserUpdateOneRequiredWithoutTransactionNestedInput
    points?: userPointsUpdateOneWithoutDiscountNestedInput
    voucher?: referralVoucherUpdateOneWithoutDiscountNestedInput
  }

  export type TransactionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    basePrice?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    finalPrice?: IntFieldUpdateOperationsInput | number
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    userId?: StringFieldUpdateOperationsInput | string
    userVoucher?: NullableIntFieldUpdateOperationsInput | number | null
    userPoints?: NullableIntFieldUpdateOperationsInput | number | null
    discount?: NullableIntFieldUpdateOperationsInput | number | null
    ticketId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    qty?: IntFieldUpdateOperationsInput | number
    promoQuota?: IntFieldUpdateOperationsInput | number
    redirect_url?: NullableStringFieldUpdateOperationsInput | string | null
    DetailTransaction?: DetailTransactionUncheckedUpdateManyWithoutTransactionNestedInput
  }

  export type TransactionCreateManyInput = {
    id?: number
    basePrice: number
    totalPrice: number
    finalPrice: number
    status?: $Enums.TransactionStatus
    userId: string
    userVoucher?: number | null
    userPoints?: number | null
    discount?: number | null
    ticketId: number
    createdAt?: Date | string
    expiresAt: Date | string
    qty: number
    promoQuota?: number
    redirect_url?: string | null
  }

  export type TransactionUpdateManyMutationInput = {
    basePrice?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    finalPrice?: IntFieldUpdateOperationsInput | number
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    discount?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    qty?: IntFieldUpdateOperationsInput | number
    promoQuota?: IntFieldUpdateOperationsInput | number
    redirect_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TransactionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    basePrice?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    finalPrice?: IntFieldUpdateOperationsInput | number
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    userId?: StringFieldUpdateOperationsInput | string
    userVoucher?: NullableIntFieldUpdateOperationsInput | number | null
    userPoints?: NullableIntFieldUpdateOperationsInput | number | null
    discount?: NullableIntFieldUpdateOperationsInput | number | null
    ticketId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    qty?: IntFieldUpdateOperationsInput | number
    promoQuota?: IntFieldUpdateOperationsInput | number
    redirect_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DetailTransactionCreateInput = {
    reviewStatus: boolean
    review?: ReviewCreateNestedManyWithoutIsValidInput
    ticket: TicketCreateNestedOneWithoutDetailTransactionInput
    event: EventCreateNestedOneWithoutDetailTransactionInput
    transaction: TransactionCreateNestedOneWithoutDetailTransactionInput
  }

  export type DetailTransactionUncheckedCreateInput = {
    id?: number
    transactionId: number
    eventId: number
    ticketId: number
    reviewStatus: boolean
    review?: ReviewUncheckedCreateNestedManyWithoutIsValidInput
  }

  export type DetailTransactionUpdateInput = {
    reviewStatus?: BoolFieldUpdateOperationsInput | boolean
    review?: ReviewUpdateManyWithoutIsValidNestedInput
    ticket?: TicketUpdateOneRequiredWithoutDetailTransactionNestedInput
    event?: EventUpdateOneRequiredWithoutDetailTransactionNestedInput
    transaction?: TransactionUpdateOneRequiredWithoutDetailTransactionNestedInput
  }

  export type DetailTransactionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    transactionId?: IntFieldUpdateOperationsInput | number
    eventId?: IntFieldUpdateOperationsInput | number
    ticketId?: IntFieldUpdateOperationsInput | number
    reviewStatus?: BoolFieldUpdateOperationsInput | boolean
    review?: ReviewUncheckedUpdateManyWithoutIsValidNestedInput
  }

  export type DetailTransactionCreateManyInput = {
    id?: number
    transactionId: number
    eventId: number
    ticketId: number
    reviewStatus: boolean
  }

  export type DetailTransactionUpdateManyMutationInput = {
    reviewStatus?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DetailTransactionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    transactionId?: IntFieldUpdateOperationsInput | number
    eventId?: IntFieldUpdateOperationsInput | number
    ticketId?: IntFieldUpdateOperationsInput | number
    reviewStatus?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ReviewCreateInput = {
    desc?: string | null
    rating?: number
    isValid: DetailTransactionCreateNestedOneWithoutReviewInput
    event: EventCreateNestedOneWithoutReviewInput
    user: UserCreateNestedOneWithoutReviewInput
    Ticket?: TicketCreateNestedOneWithoutReviewInput
  }

  export type ReviewUncheckedCreateInput = {
    id?: number
    desc?: string | null
    rating?: number
    userId: string
    eventId: number
    transactionId: number
    ticketId?: number | null
  }

  export type ReviewUpdateInput = {
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: IntFieldUpdateOperationsInput | number
    isValid?: DetailTransactionUpdateOneRequiredWithoutReviewNestedInput
    event?: EventUpdateOneRequiredWithoutReviewNestedInput
    user?: UserUpdateOneRequiredWithoutReviewNestedInput
    Ticket?: TicketUpdateOneWithoutReviewNestedInput
  }

  export type ReviewUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    eventId?: IntFieldUpdateOperationsInput | number
    transactionId?: IntFieldUpdateOperationsInput | number
    ticketId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ReviewCreateManyInput = {
    id?: number
    desc?: string | null
    rating?: number
    userId: string
    eventId: number
    transactionId: number
    ticketId?: number | null
  }

  export type ReviewUpdateManyMutationInput = {
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: IntFieldUpdateOperationsInput | number
  }

  export type ReviewUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    eventId?: IntFieldUpdateOperationsInput | number
    transactionId?: IntFieldUpdateOperationsInput | number
    ticketId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UserCreateInput = {
    id?: string
    username: string
    email: string
    password: string
    avatar?: string
    isVerify?: boolean
    refCode?: string | null
    reffered_by?: string | null
    Transaction?: TransactionCreateNestedManyWithoutUserInput
    UserId?: referralVoucherCreateNestedManyWithoutUserInput
    userPoints?: userPointsCreateNestedManyWithoutUserInput
    Review?: ReviewCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    username: string
    email: string
    password: string
    avatar?: string
    isVerify?: boolean
    refCode?: string | null
    reffered_by?: string | null
    Transaction?: TransactionUncheckedCreateNestedManyWithoutUserInput
    UserId?: referralVoucherUncheckedCreateNestedManyWithoutUserInput
    userPoints?: userPointsUncheckedCreateNestedManyWithoutUserInput
    Review?: ReviewUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    isVerify?: BoolFieldUpdateOperationsInput | boolean
    refCode?: NullableStringFieldUpdateOperationsInput | string | null
    reffered_by?: NullableStringFieldUpdateOperationsInput | string | null
    Transaction?: TransactionUpdateManyWithoutUserNestedInput
    UserId?: referralVoucherUpdateManyWithoutUserNestedInput
    userPoints?: userPointsUpdateManyWithoutUserNestedInput
    Review?: ReviewUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    isVerify?: BoolFieldUpdateOperationsInput | boolean
    refCode?: NullableStringFieldUpdateOperationsInput | string | null
    reffered_by?: NullableStringFieldUpdateOperationsInput | string | null
    Transaction?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    UserId?: referralVoucherUncheckedUpdateManyWithoutUserNestedInput
    userPoints?: userPointsUncheckedUpdateManyWithoutUserNestedInput
    Review?: ReviewUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    username: string
    email: string
    password: string
    avatar?: string
    isVerify?: boolean
    refCode?: string | null
    reffered_by?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    isVerify?: BoolFieldUpdateOperationsInput | boolean
    refCode?: NullableStringFieldUpdateOperationsInput | string | null
    reffered_by?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    isVerify?: BoolFieldUpdateOperationsInput | boolean
    refCode?: NullableStringFieldUpdateOperationsInput | string | null
    reffered_by?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type referralVoucherCreateInput = {
    createdAt?: Date | string
    expiresAt: Date | string
    discount?: TransactionCreateNestedManyWithoutVoucherInput
    user: UserCreateNestedOneWithoutUserIdInput
  }

  export type referralVoucherUncheckedCreateInput = {
    id?: number
    userId: string
    createdAt?: Date | string
    expiresAt: Date | string
    discount?: TransactionUncheckedCreateNestedManyWithoutVoucherInput
  }

  export type referralVoucherUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    discount?: TransactionUpdateManyWithoutVoucherNestedInput
    user?: UserUpdateOneRequiredWithoutUserIdNestedInput
  }

  export type referralVoucherUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    discount?: TransactionUncheckedUpdateManyWithoutVoucherNestedInput
  }

  export type referralVoucherCreateManyInput = {
    id?: number
    userId: string
    createdAt?: Date | string
    expiresAt: Date | string
  }

  export type referralVoucherUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type referralVoucherUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userPointsCreateInput = {
    points?: number | null
    expiresAt: Date | string
    createdAt?: Date | string
    discount?: TransactionCreateNestedManyWithoutPointsInput
    user: UserCreateNestedOneWithoutUserPointsInput
  }

  export type userPointsUncheckedCreateInput = {
    id?: number
    points?: number | null
    expiresAt: Date | string
    createdAt?: Date | string
    userId: string
    discount?: TransactionUncheckedCreateNestedManyWithoutPointsInput
  }

  export type userPointsUpdateInput = {
    points?: NullableIntFieldUpdateOperationsInput | number | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    discount?: TransactionUpdateManyWithoutPointsNestedInput
    user?: UserUpdateOneRequiredWithoutUserPointsNestedInput
  }

  export type userPointsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    points?: NullableIntFieldUpdateOperationsInput | number | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    discount?: TransactionUncheckedUpdateManyWithoutPointsNestedInput
  }

  export type userPointsCreateManyInput = {
    id?: number
    points?: number | null
    expiresAt: Date | string
    createdAt?: Date | string
    userId: string
  }

  export type userPointsUpdateManyMutationInput = {
    points?: NullableIntFieldUpdateOperationsInput | number | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userPointsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    points?: NullableIntFieldUpdateOperationsInput | number | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EventListRelationFilter = {
    every?: EventWhereInput
    some?: EventWhereInput
    none?: EventWhereInput
  }

  export type TicketListRelationFilter = {
    every?: TicketWhereInput
    some?: TicketWhereInput
    none?: TicketWhereInput
  }

  export type EventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TicketOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PromotorCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatar?: SortOrder
    isVerify?: SortOrder
  }

  export type PromotorAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PromotorMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatar?: SortOrder
    isVerify?: SortOrder
  }

  export type PromotorMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatar?: SortOrder
    isVerify?: SortOrder
  }

  export type PromotorSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumEventCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.EventCategory | EnumEventCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.EventCategory[] | ListEnumEventCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventCategory[] | ListEnumEventCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumEventCategoryFilter<$PrismaModel> | $Enums.EventCategory
  }

  export type EnumLocationFilter<$PrismaModel = never> = {
    equals?: $Enums.Location | EnumLocationFieldRefInput<$PrismaModel>
    in?: $Enums.Location[] | ListEnumLocationFieldRefInput<$PrismaModel>
    notIn?: $Enums.Location[] | ListEnumLocationFieldRefInput<$PrismaModel>
    not?: NestedEnumLocationFilter<$PrismaModel> | $Enums.Location
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EnumEventTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.EventType | EnumEventTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEventTypeFilter<$PrismaModel> | $Enums.EventType
  }

  export type PromotorScalarRelationFilter = {
    is?: PromotorWhereInput
    isNot?: PromotorWhereInput
  }

  export type DetailTransactionListRelationFilter = {
    every?: DetailTransactionWhereInput
    some?: DetailTransactionWhereInput
    none?: DetailTransactionWhereInput
  }

  export type ReviewListRelationFilter = {
    every?: ReviewWhereInput
    some?: ReviewWhereInput
    none?: ReviewWhereInput
  }

  export type DetailTransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    location?: SortOrder
    venue?: SortOrder
    mapURL?: SortOrder
    date?: SortOrder
    time?: SortOrder
    type?: SortOrder
    thumbnail?: SortOrder
    isActive?: SortOrder
    slug?: SortOrder
    promotorId?: SortOrder
  }

  export type EventAvgOrderByAggregateInput = {
    id?: SortOrder
    promotorId?: SortOrder
  }

  export type EventMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    location?: SortOrder
    venue?: SortOrder
    mapURL?: SortOrder
    date?: SortOrder
    time?: SortOrder
    type?: SortOrder
    thumbnail?: SortOrder
    isActive?: SortOrder
    slug?: SortOrder
    promotorId?: SortOrder
  }

  export type EventMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    location?: SortOrder
    venue?: SortOrder
    mapURL?: SortOrder
    date?: SortOrder
    time?: SortOrder
    type?: SortOrder
    thumbnail?: SortOrder
    isActive?: SortOrder
    slug?: SortOrder
    promotorId?: SortOrder
  }

  export type EventSumOrderByAggregateInput = {
    id?: SortOrder
    promotorId?: SortOrder
  }

  export type EnumEventCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EventCategory | EnumEventCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.EventCategory[] | ListEnumEventCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventCategory[] | ListEnumEventCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumEventCategoryWithAggregatesFilter<$PrismaModel> | $Enums.EventCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEventCategoryFilter<$PrismaModel>
    _max?: NestedEnumEventCategoryFilter<$PrismaModel>
  }

  export type EnumLocationWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Location | EnumLocationFieldRefInput<$PrismaModel>
    in?: $Enums.Location[] | ListEnumLocationFieldRefInput<$PrismaModel>
    notIn?: $Enums.Location[] | ListEnumLocationFieldRefInput<$PrismaModel>
    not?: NestedEnumLocationWithAggregatesFilter<$PrismaModel> | $Enums.Location
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLocationFilter<$PrismaModel>
    _max?: NestedEnumLocationFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumEventTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EventType | EnumEventTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEventTypeWithAggregatesFilter<$PrismaModel> | $Enums.EventType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEventTypeFilter<$PrismaModel>
    _max?: NestedEnumEventTypeFilter<$PrismaModel>
  }

  export type EnumTicketCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketCategory | EnumTicketCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.TicketCategory[] | ListEnumTicketCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketCategory[] | ListEnumTicketCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketCategoryFilter<$PrismaModel> | $Enums.TicketCategory
  }

  export type EventScalarRelationFilter = {
    is?: EventWhereInput
    isNot?: EventWhereInput
  }

  export type TransactionListRelationFilter = {
    every?: TransactionWhereInput
    some?: TransactionWhereInput
    none?: TransactionWhereInput
  }

  export type TransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TicketCountOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    price?: SortOrder
    category?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    isActive?: SortOrder
    discount?: SortOrder
    quota?: SortOrder
    promotorId?: SortOrder
  }

  export type TicketAvgOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    price?: SortOrder
    quota?: SortOrder
    promotorId?: SortOrder
  }

  export type TicketMaxOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    price?: SortOrder
    category?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    isActive?: SortOrder
    discount?: SortOrder
    quota?: SortOrder
    promotorId?: SortOrder
  }

  export type TicketMinOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    price?: SortOrder
    category?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    isActive?: SortOrder
    discount?: SortOrder
    quota?: SortOrder
    promotorId?: SortOrder
  }

  export type TicketSumOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    price?: SortOrder
    quota?: SortOrder
    promotorId?: SortOrder
  }

  export type EnumTicketCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketCategory | EnumTicketCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.TicketCategory[] | ListEnumTicketCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketCategory[] | ListEnumTicketCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketCategoryWithAggregatesFilter<$PrismaModel> | $Enums.TicketCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTicketCategoryFilter<$PrismaModel>
    _max?: NestedEnumTicketCategoryFilter<$PrismaModel>
  }

  export type EnumTransactionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionStatusFilter<$PrismaModel> | $Enums.TransactionStatus
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type TicketScalarRelationFilter = {
    is?: TicketWhereInput
    isNot?: TicketWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserPointsNullableScalarRelationFilter = {
    is?: userPointsWhereInput | null
    isNot?: userPointsWhereInput | null
  }

  export type ReferralVoucherNullableScalarRelationFilter = {
    is?: referralVoucherWhereInput | null
    isNot?: referralVoucherWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TransactionCountOrderByAggregateInput = {
    id?: SortOrder
    basePrice?: SortOrder
    totalPrice?: SortOrder
    finalPrice?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    userVoucher?: SortOrder
    userPoints?: SortOrder
    discount?: SortOrder
    ticketId?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    qty?: SortOrder
    promoQuota?: SortOrder
    redirect_url?: SortOrder
  }

  export type TransactionAvgOrderByAggregateInput = {
    id?: SortOrder
    basePrice?: SortOrder
    totalPrice?: SortOrder
    finalPrice?: SortOrder
    userVoucher?: SortOrder
    userPoints?: SortOrder
    discount?: SortOrder
    ticketId?: SortOrder
    qty?: SortOrder
    promoQuota?: SortOrder
  }

  export type TransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    basePrice?: SortOrder
    totalPrice?: SortOrder
    finalPrice?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    userVoucher?: SortOrder
    userPoints?: SortOrder
    discount?: SortOrder
    ticketId?: SortOrder
<<<<<<< HEAD
=======

>>>>>>> 86a465382dd362a0e65e14019e447344695382d4
    createdAt?: SortOrder
    expiresAt?: SortOrder
    qty?: SortOrder
    promoQuota?: SortOrder
    redirect_url?: SortOrder
  }

  export type TransactionMinOrderByAggregateInput = {
    id?: SortOrder
    basePrice?: SortOrder
    totalPrice?: SortOrder
    finalPrice?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    userVoucher?: SortOrder
    userPoints?: SortOrder
    discount?: SortOrder
    ticketId?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    qty?: SortOrder
    promoQuota?: SortOrder
    redirect_url?: SortOrder
  }

  export type TransactionSumOrderByAggregateInput = {
    id?: SortOrder
    basePrice?: SortOrder
    totalPrice?: SortOrder
    finalPrice?: SortOrder
    userVoucher?: SortOrder
    userPoints?: SortOrder
    discount?: SortOrder
    ticketId?: SortOrder
    qty?: SortOrder
    promoQuota?: SortOrder
  }

  export type EnumTransactionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionStatusWithAggregatesFilter<$PrismaModel> | $Enums.TransactionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionStatusFilter<$PrismaModel>
    _max?: NestedEnumTransactionStatusFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }
<<<<<<< HEAD

=======
>>>>>>> 86a465382dd362a0e65e14019e447344695382d4
  export type TransactionScalarRelationFilter = {
    is?: TransactionWhereInput
    isNot?: TransactionWhereInput
  }

  export type DetailTransactionCountOrderByAggregateInput = {
    id?: SortOrder
    transactionId?: SortOrder
    eventId?: SortOrder
    ticketId?: SortOrder
    reviewStatus?: SortOrder
  }

  export type DetailTransactionAvgOrderByAggregateInput = {
    id?: SortOrder
    transactionId?: SortOrder
    eventId?: SortOrder
    ticketId?: SortOrder
  }

  export type DetailTransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    transactionId?: SortOrder
    eventId?: SortOrder
    ticketId?: SortOrder
    reviewStatus?: SortOrder
  }

  export type DetailTransactionMinOrderByAggregateInput = {
    id?: SortOrder
    transactionId?: SortOrder
    eventId?: SortOrder
    ticketId?: SortOrder
    reviewStatus?: SortOrder
  }

  export type DetailTransactionSumOrderByAggregateInput = {
    id?: SortOrder
    transactionId?: SortOrder
    eventId?: SortOrder
    ticketId?: SortOrder
  }

  export type DetailTransactionScalarRelationFilter = {
    is?: DetailTransactionWhereInput
    isNot?: DetailTransactionWhereInput
  }

  export type TicketNullableScalarRelationFilter = {
    is?: TicketWhereInput | null
    isNot?: TicketWhereInput | null
  }

  export type ReviewCountOrderByAggregateInput = {
    id?: SortOrder
    desc?: SortOrder
    rating?: SortOrder
    userId?: SortOrder
    eventId?: SortOrder
    transactionId?: SortOrder
    ticketId?: SortOrder
  }

  export type ReviewAvgOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    eventId?: SortOrder
    transactionId?: SortOrder
    ticketId?: SortOrder
  }

  export type ReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    desc?: SortOrder
    rating?: SortOrder
    userId?: SortOrder
    eventId?: SortOrder
    transactionId?: SortOrder
    ticketId?: SortOrder
  }

  export type ReviewMinOrderByAggregateInput = {
    id?: SortOrder
    desc?: SortOrder
    rating?: SortOrder
    userId?: SortOrder
    eventId?: SortOrder
    transactionId?: SortOrder
    ticketId?: SortOrder
  }

  export type ReviewSumOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    eventId?: SortOrder
    transactionId?: SortOrder
    ticketId?: SortOrder
  }

  export type ReferralVoucherListRelationFilter = {
    every?: referralVoucherWhereInput
    some?: referralVoucherWhereInput
    none?: referralVoucherWhereInput
  }

  export type UserPointsListRelationFilter = {
    every?: userPointsWhereInput
    some?: userPointsWhereInput
    none?: userPointsWhereInput
  }

  export type referralVoucherOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type userPointsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatar?: SortOrder
    isVerify?: SortOrder
    refCode?: SortOrder
    reffered_by?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatar?: SortOrder
    isVerify?: SortOrder
    refCode?: SortOrder
    reffered_by?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatar?: SortOrder
    isVerify?: SortOrder
    refCode?: SortOrder
    reffered_by?: SortOrder
  }

  export type referralVoucherCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type referralVoucherAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type referralVoucherMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type referralVoucherMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type referralVoucherSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type userPointsCountOrderByAggregateInput = {
    id?: SortOrder
    points?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type userPointsAvgOrderByAggregateInput = {
    id?: SortOrder
    points?: SortOrder
  }

  export type userPointsMaxOrderByAggregateInput = {
    id?: SortOrder
    points?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type userPointsMinOrderByAggregateInput = {
    id?: SortOrder
    points?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type userPointsSumOrderByAggregateInput = {
    id?: SortOrder
    points?: SortOrder
  }

  export type EventCreateNestedManyWithoutPromotorInput = {
    create?: XOR<EventCreateWithoutPromotorInput, EventUncheckedCreateWithoutPromotorInput> | EventCreateWithoutPromotorInput[] | EventUncheckedCreateWithoutPromotorInput[]
    connectOrCreate?: EventCreateOrConnectWithoutPromotorInput | EventCreateOrConnectWithoutPromotorInput[]
    createMany?: EventCreateManyPromotorInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type TicketCreateNestedManyWithoutPromotorInput = {
    create?: XOR<TicketCreateWithoutPromotorInput, TicketUncheckedCreateWithoutPromotorInput> | TicketCreateWithoutPromotorInput[] | TicketUncheckedCreateWithoutPromotorInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutPromotorInput | TicketCreateOrConnectWithoutPromotorInput[]
    createMany?: TicketCreateManyPromotorInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type EventUncheckedCreateNestedManyWithoutPromotorInput = {
    create?: XOR<EventCreateWithoutPromotorInput, EventUncheckedCreateWithoutPromotorInput> | EventCreateWithoutPromotorInput[] | EventUncheckedCreateWithoutPromotorInput[]
    connectOrCreate?: EventCreateOrConnectWithoutPromotorInput | EventCreateOrConnectWithoutPromotorInput[]
    createMany?: EventCreateManyPromotorInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type TicketUncheckedCreateNestedManyWithoutPromotorInput = {
    create?: XOR<TicketCreateWithoutPromotorInput, TicketUncheckedCreateWithoutPromotorInput> | TicketCreateWithoutPromotorInput[] | TicketUncheckedCreateWithoutPromotorInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutPromotorInput | TicketCreateOrConnectWithoutPromotorInput[]
    createMany?: TicketCreateManyPromotorInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EventUpdateManyWithoutPromotorNestedInput = {
    create?: XOR<EventCreateWithoutPromotorInput, EventUncheckedCreateWithoutPromotorInput> | EventCreateWithoutPromotorInput[] | EventUncheckedCreateWithoutPromotorInput[]
    connectOrCreate?: EventCreateOrConnectWithoutPromotorInput | EventCreateOrConnectWithoutPromotorInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutPromotorInput | EventUpsertWithWhereUniqueWithoutPromotorInput[]
    createMany?: EventCreateManyPromotorInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutPromotorInput | EventUpdateWithWhereUniqueWithoutPromotorInput[]
    updateMany?: EventUpdateManyWithWhereWithoutPromotorInput | EventUpdateManyWithWhereWithoutPromotorInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type TicketUpdateManyWithoutPromotorNestedInput = {
    create?: XOR<TicketCreateWithoutPromotorInput, TicketUncheckedCreateWithoutPromotorInput> | TicketCreateWithoutPromotorInput[] | TicketUncheckedCreateWithoutPromotorInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutPromotorInput | TicketCreateOrConnectWithoutPromotorInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutPromotorInput | TicketUpsertWithWhereUniqueWithoutPromotorInput[]
    createMany?: TicketCreateManyPromotorInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutPromotorInput | TicketUpdateWithWhereUniqueWithoutPromotorInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutPromotorInput | TicketUpdateManyWithWhereWithoutPromotorInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EventUncheckedUpdateManyWithoutPromotorNestedInput = {
    create?: XOR<EventCreateWithoutPromotorInput, EventUncheckedCreateWithoutPromotorInput> | EventCreateWithoutPromotorInput[] | EventUncheckedCreateWithoutPromotorInput[]
    connectOrCreate?: EventCreateOrConnectWithoutPromotorInput | EventCreateOrConnectWithoutPromotorInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutPromotorInput | EventUpsertWithWhereUniqueWithoutPromotorInput[]
    createMany?: EventCreateManyPromotorInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutPromotorInput | EventUpdateWithWhereUniqueWithoutPromotorInput[]
    updateMany?: EventUpdateManyWithWhereWithoutPromotorInput | EventUpdateManyWithWhereWithoutPromotorInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type TicketUncheckedUpdateManyWithoutPromotorNestedInput = {
    create?: XOR<TicketCreateWithoutPromotorInput, TicketUncheckedCreateWithoutPromotorInput> | TicketCreateWithoutPromotorInput[] | TicketUncheckedCreateWithoutPromotorInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutPromotorInput | TicketCreateOrConnectWithoutPromotorInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutPromotorInput | TicketUpsertWithWhereUniqueWithoutPromotorInput[]
    createMany?: TicketCreateManyPromotorInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutPromotorInput | TicketUpdateWithWhereUniqueWithoutPromotorInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutPromotorInput | TicketUpdateManyWithWhereWithoutPromotorInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type PromotorCreateNestedOneWithoutEventInput = {
    create?: XOR<PromotorCreateWithoutEventInput, PromotorUncheckedCreateWithoutEventInput>
    connectOrCreate?: PromotorCreateOrConnectWithoutEventInput
    connect?: PromotorWhereUniqueInput
  }

  export type TicketCreateNestedManyWithoutEventInput = {
    create?: XOR<TicketCreateWithoutEventInput, TicketUncheckedCreateWithoutEventInput> | TicketCreateWithoutEventInput[] | TicketUncheckedCreateWithoutEventInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutEventInput | TicketCreateOrConnectWithoutEventInput[]
    createMany?: TicketCreateManyEventInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type DetailTransactionCreateNestedManyWithoutEventInput = {
    create?: XOR<DetailTransactionCreateWithoutEventInput, DetailTransactionUncheckedCreateWithoutEventInput> | DetailTransactionCreateWithoutEventInput[] | DetailTransactionUncheckedCreateWithoutEventInput[]
    connectOrCreate?: DetailTransactionCreateOrConnectWithoutEventInput | DetailTransactionCreateOrConnectWithoutEventInput[]
    createMany?: DetailTransactionCreateManyEventInputEnvelope
    connect?: DetailTransactionWhereUniqueInput | DetailTransactionWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutEventInput = {
    create?: XOR<ReviewCreateWithoutEventInput, ReviewUncheckedCreateWithoutEventInput> | ReviewCreateWithoutEventInput[] | ReviewUncheckedCreateWithoutEventInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutEventInput | ReviewCreateOrConnectWithoutEventInput[]
    createMany?: ReviewCreateManyEventInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type TicketUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<TicketCreateWithoutEventInput, TicketUncheckedCreateWithoutEventInput> | TicketCreateWithoutEventInput[] | TicketUncheckedCreateWithoutEventInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutEventInput | TicketCreateOrConnectWithoutEventInput[]
    createMany?: TicketCreateManyEventInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type DetailTransactionUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<DetailTransactionCreateWithoutEventInput, DetailTransactionUncheckedCreateWithoutEventInput> | DetailTransactionCreateWithoutEventInput[] | DetailTransactionUncheckedCreateWithoutEventInput[]
    connectOrCreate?: DetailTransactionCreateOrConnectWithoutEventInput | DetailTransactionCreateOrConnectWithoutEventInput[]
    createMany?: DetailTransactionCreateManyEventInputEnvelope
    connect?: DetailTransactionWhereUniqueInput | DetailTransactionWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<ReviewCreateWithoutEventInput, ReviewUncheckedCreateWithoutEventInput> | ReviewCreateWithoutEventInput[] | ReviewUncheckedCreateWithoutEventInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutEventInput | ReviewCreateOrConnectWithoutEventInput[]
    createMany?: ReviewCreateManyEventInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type EnumEventCategoryFieldUpdateOperationsInput = {
    set?: $Enums.EventCategory
  }

  export type EnumLocationFieldUpdateOperationsInput = {
    set?: $Enums.Location
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumEventTypeFieldUpdateOperationsInput = {
    set?: $Enums.EventType
  }

  export type PromotorUpdateOneRequiredWithoutEventNestedInput = {
    create?: XOR<PromotorCreateWithoutEventInput, PromotorUncheckedCreateWithoutEventInput>
    connectOrCreate?: PromotorCreateOrConnectWithoutEventInput
    upsert?: PromotorUpsertWithoutEventInput
    connect?: PromotorWhereUniqueInput
    update?: XOR<XOR<PromotorUpdateToOneWithWhereWithoutEventInput, PromotorUpdateWithoutEventInput>, PromotorUncheckedUpdateWithoutEventInput>
  }

  export type TicketUpdateManyWithoutEventNestedInput = {
    create?: XOR<TicketCreateWithoutEventInput, TicketUncheckedCreateWithoutEventInput> | TicketCreateWithoutEventInput[] | TicketUncheckedCreateWithoutEventInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutEventInput | TicketCreateOrConnectWithoutEventInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutEventInput | TicketUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: TicketCreateManyEventInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutEventInput | TicketUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutEventInput | TicketUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type DetailTransactionUpdateManyWithoutEventNestedInput = {
    create?: XOR<DetailTransactionCreateWithoutEventInput, DetailTransactionUncheckedCreateWithoutEventInput> | DetailTransactionCreateWithoutEventInput[] | DetailTransactionUncheckedCreateWithoutEventInput[]
    connectOrCreate?: DetailTransactionCreateOrConnectWithoutEventInput | DetailTransactionCreateOrConnectWithoutEventInput[]
    upsert?: DetailTransactionUpsertWithWhereUniqueWithoutEventInput | DetailTransactionUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: DetailTransactionCreateManyEventInputEnvelope
    set?: DetailTransactionWhereUniqueInput | DetailTransactionWhereUniqueInput[]
    disconnect?: DetailTransactionWhereUniqueInput | DetailTransactionWhereUniqueInput[]
    delete?: DetailTransactionWhereUniqueInput | DetailTransactionWhereUniqueInput[]
    connect?: DetailTransactionWhereUniqueInput | DetailTransactionWhereUniqueInput[]
    update?: DetailTransactionUpdateWithWhereUniqueWithoutEventInput | DetailTransactionUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: DetailTransactionUpdateManyWithWhereWithoutEventInput | DetailTransactionUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: DetailTransactionScalarWhereInput | DetailTransactionScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutEventNestedInput = {
    create?: XOR<ReviewCreateWithoutEventInput, ReviewUncheckedCreateWithoutEventInput> | ReviewCreateWithoutEventInput[] | ReviewUncheckedCreateWithoutEventInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutEventInput | ReviewCreateOrConnectWithoutEventInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutEventInput | ReviewUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: ReviewCreateManyEventInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutEventInput | ReviewUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutEventInput | ReviewUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type TicketUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<TicketCreateWithoutEventInput, TicketUncheckedCreateWithoutEventInput> | TicketCreateWithoutEventInput[] | TicketUncheckedCreateWithoutEventInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutEventInput | TicketCreateOrConnectWithoutEventInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutEventInput | TicketUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: TicketCreateManyEventInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutEventInput | TicketUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutEventInput | TicketUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type DetailTransactionUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<DetailTransactionCreateWithoutEventInput, DetailTransactionUncheckedCreateWithoutEventInput> | DetailTransactionCreateWithoutEventInput[] | DetailTransactionUncheckedCreateWithoutEventInput[]
    connectOrCreate?: DetailTransactionCreateOrConnectWithoutEventInput | DetailTransactionCreateOrConnectWithoutEventInput[]
    upsert?: DetailTransactionUpsertWithWhereUniqueWithoutEventInput | DetailTransactionUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: DetailTransactionCreateManyEventInputEnvelope
    set?: DetailTransactionWhereUniqueInput | DetailTransactionWhereUniqueInput[]
    disconnect?: DetailTransactionWhereUniqueInput | DetailTransactionWhereUniqueInput[]
    delete?: DetailTransactionWhereUniqueInput | DetailTransactionWhereUniqueInput[]
    connect?: DetailTransactionWhereUniqueInput | DetailTransactionWhereUniqueInput[]
    update?: DetailTransactionUpdateWithWhereUniqueWithoutEventInput | DetailTransactionUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: DetailTransactionUpdateManyWithWhereWithoutEventInput | DetailTransactionUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: DetailTransactionScalarWhereInput | DetailTransactionScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<ReviewCreateWithoutEventInput, ReviewUncheckedCreateWithoutEventInput> | ReviewCreateWithoutEventInput[] | ReviewUncheckedCreateWithoutEventInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutEventInput | ReviewCreateOrConnectWithoutEventInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutEventInput | ReviewUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: ReviewCreateManyEventInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutEventInput | ReviewUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutEventInput | ReviewUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type PromotorCreateNestedOneWithoutTicketInput = {
    create?: XOR<PromotorCreateWithoutTicketInput, PromotorUncheckedCreateWithoutTicketInput>
    connectOrCreate?: PromotorCreateOrConnectWithoutTicketInput
    connect?: PromotorWhereUniqueInput
  }

  export type EventCreateNestedOneWithoutTicketInput = {
    create?: XOR<EventCreateWithoutTicketInput, EventUncheckedCreateWithoutTicketInput>
    connectOrCreate?: EventCreateOrConnectWithoutTicketInput
    connect?: EventWhereUniqueInput
  }

  export type TransactionCreateNestedManyWithoutTicketInput = {
    create?: XOR<TransactionCreateWithoutTicketInput, TransactionUncheckedCreateWithoutTicketInput> | TransactionCreateWithoutTicketInput[] | TransactionUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutTicketInput | TransactionCreateOrConnectWithoutTicketInput[]
    createMany?: TransactionCreateManyTicketInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type DetailTransactionCreateNestedManyWithoutTicketInput = {
    create?: XOR<DetailTransactionCreateWithoutTicketInput, DetailTransactionUncheckedCreateWithoutTicketInput> | DetailTransactionCreateWithoutTicketInput[] | DetailTransactionUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: DetailTransactionCreateOrConnectWithoutTicketInput | DetailTransactionCreateOrConnectWithoutTicketInput[]
    createMany?: DetailTransactionCreateManyTicketInputEnvelope
    connect?: DetailTransactionWhereUniqueInput | DetailTransactionWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutTicketInput = {
    create?: XOR<ReviewCreateWithoutTicketInput, ReviewUncheckedCreateWithoutTicketInput> | ReviewCreateWithoutTicketInput[] | ReviewUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutTicketInput | ReviewCreateOrConnectWithoutTicketInput[]
    createMany?: ReviewCreateManyTicketInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutTicketInput = {
    create?: XOR<TransactionCreateWithoutTicketInput, TransactionUncheckedCreateWithoutTicketInput> | TransactionCreateWithoutTicketInput[] | TransactionUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutTicketInput | TransactionCreateOrConnectWithoutTicketInput[]
    createMany?: TransactionCreateManyTicketInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type DetailTransactionUncheckedCreateNestedManyWithoutTicketInput = {
    create?: XOR<DetailTransactionCreateWithoutTicketInput, DetailTransactionUncheckedCreateWithoutTicketInput> | DetailTransactionCreateWithoutTicketInput[] | DetailTransactionUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: DetailTransactionCreateOrConnectWithoutTicketInput | DetailTransactionCreateOrConnectWithoutTicketInput[]
    createMany?: DetailTransactionCreateManyTicketInputEnvelope
    connect?: DetailTransactionWhereUniqueInput | DetailTransactionWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutTicketInput = {
    create?: XOR<ReviewCreateWithoutTicketInput, ReviewUncheckedCreateWithoutTicketInput> | ReviewCreateWithoutTicketInput[] | ReviewUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutTicketInput | ReviewCreateOrConnectWithoutTicketInput[]
    createMany?: ReviewCreateManyTicketInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type EnumTicketCategoryFieldUpdateOperationsInput = {
    set?: $Enums.TicketCategory
  }

  export type PromotorUpdateOneRequiredWithoutTicketNestedInput = {
    create?: XOR<PromotorCreateWithoutTicketInput, PromotorUncheckedCreateWithoutTicketInput>
    connectOrCreate?: PromotorCreateOrConnectWithoutTicketInput
    upsert?: PromotorUpsertWithoutTicketInput
    connect?: PromotorWhereUniqueInput
    update?: XOR<XOR<PromotorUpdateToOneWithWhereWithoutTicketInput, PromotorUpdateWithoutTicketInput>, PromotorUncheckedUpdateWithoutTicketInput>
  }

  export type EventUpdateOneRequiredWithoutTicketNestedInput = {
    create?: XOR<EventCreateWithoutTicketInput, EventUncheckedCreateWithoutTicketInput>
    connectOrCreate?: EventCreateOrConnectWithoutTicketInput
    upsert?: EventUpsertWithoutTicketInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutTicketInput, EventUpdateWithoutTicketInput>, EventUncheckedUpdateWithoutTicketInput>
  }

  export type TransactionUpdateManyWithoutTicketNestedInput = {
    create?: XOR<TransactionCreateWithoutTicketInput, TransactionUncheckedCreateWithoutTicketInput> | TransactionCreateWithoutTicketInput[] | TransactionUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutTicketInput | TransactionCreateOrConnectWithoutTicketInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutTicketInput | TransactionUpsertWithWhereUniqueWithoutTicketInput[]
    createMany?: TransactionCreateManyTicketInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutTicketInput | TransactionUpdateWithWhereUniqueWithoutTicketInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutTicketInput | TransactionUpdateManyWithWhereWithoutTicketInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type DetailTransactionUpdateManyWithoutTicketNestedInput = {
    create?: XOR<DetailTransactionCreateWithoutTicketInput, DetailTransactionUncheckedCreateWithoutTicketInput> | DetailTransactionCreateWithoutTicketInput[] | DetailTransactionUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: DetailTransactionCreateOrConnectWithoutTicketInput | DetailTransactionCreateOrConnectWithoutTicketInput[]
    upsert?: DetailTransactionUpsertWithWhereUniqueWithoutTicketInput | DetailTransactionUpsertWithWhereUniqueWithoutTicketInput[]
    createMany?: DetailTransactionCreateManyTicketInputEnvelope
    set?: DetailTransactionWhereUniqueInput | DetailTransactionWhereUniqueInput[]
    disconnect?: DetailTransactionWhereUniqueInput | DetailTransactionWhereUniqueInput[]
    delete?: DetailTransactionWhereUniqueInput | DetailTransactionWhereUniqueInput[]
    connect?: DetailTransactionWhereUniqueInput | DetailTransactionWhereUniqueInput[]
    update?: DetailTransactionUpdateWithWhereUniqueWithoutTicketInput | DetailTransactionUpdateWithWhereUniqueWithoutTicketInput[]
    updateMany?: DetailTransactionUpdateManyWithWhereWithoutTicketInput | DetailTransactionUpdateManyWithWhereWithoutTicketInput[]
    deleteMany?: DetailTransactionScalarWhereInput | DetailTransactionScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutTicketNestedInput = {
    create?: XOR<ReviewCreateWithoutTicketInput, ReviewUncheckedCreateWithoutTicketInput> | ReviewCreateWithoutTicketInput[] | ReviewUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutTicketInput | ReviewCreateOrConnectWithoutTicketInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutTicketInput | ReviewUpsertWithWhereUniqueWithoutTicketInput[]
    createMany?: ReviewCreateManyTicketInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutTicketInput | ReviewUpdateWithWhereUniqueWithoutTicketInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutTicketInput | ReviewUpdateManyWithWhereWithoutTicketInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutTicketNestedInput = {
    create?: XOR<TransactionCreateWithoutTicketInput, TransactionUncheckedCreateWithoutTicketInput> | TransactionCreateWithoutTicketInput[] | TransactionUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutTicketInput | TransactionCreateOrConnectWithoutTicketInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutTicketInput | TransactionUpsertWithWhereUniqueWithoutTicketInput[]
    createMany?: TransactionCreateManyTicketInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutTicketInput | TransactionUpdateWithWhereUniqueWithoutTicketInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutTicketInput | TransactionUpdateManyWithWhereWithoutTicketInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type DetailTransactionUncheckedUpdateManyWithoutTicketNestedInput = {
    create?: XOR<DetailTransactionCreateWithoutTicketInput, DetailTransactionUncheckedCreateWithoutTicketInput> | DetailTransactionCreateWithoutTicketInput[] | DetailTransactionUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: DetailTransactionCreateOrConnectWithoutTicketInput | DetailTransactionCreateOrConnectWithoutTicketInput[]
    upsert?: DetailTransactionUpsertWithWhereUniqueWithoutTicketInput | DetailTransactionUpsertWithWhereUniqueWithoutTicketInput[]
    createMany?: DetailTransactionCreateManyTicketInputEnvelope
    set?: DetailTransactionWhereUniqueInput | DetailTransactionWhereUniqueInput[]
    disconnect?: DetailTransactionWhereUniqueInput | DetailTransactionWhereUniqueInput[]
    delete?: DetailTransactionWhereUniqueInput | DetailTransactionWhereUniqueInput[]
    connect?: DetailTransactionWhereUniqueInput | DetailTransactionWhereUniqueInput[]
    update?: DetailTransactionUpdateWithWhereUniqueWithoutTicketInput | DetailTransactionUpdateWithWhereUniqueWithoutTicketInput[]
    updateMany?: DetailTransactionUpdateManyWithWhereWithoutTicketInput | DetailTransactionUpdateManyWithWhereWithoutTicketInput[]
    deleteMany?: DetailTransactionScalarWhereInput | DetailTransactionScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutTicketNestedInput = {
    create?: XOR<ReviewCreateWithoutTicketInput, ReviewUncheckedCreateWithoutTicketInput> | ReviewCreateWithoutTicketInput[] | ReviewUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutTicketInput | ReviewCreateOrConnectWithoutTicketInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutTicketInput | ReviewUpsertWithWhereUniqueWithoutTicketInput[]
    createMany?: ReviewCreateManyTicketInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutTicketInput | ReviewUpdateWithWhereUniqueWithoutTicketInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutTicketInput | ReviewUpdateManyWithWhereWithoutTicketInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type DetailTransactionCreateNestedManyWithoutTransactionInput = {
    create?: XOR<DetailTransactionCreateWithoutTransactionInput, DetailTransactionUncheckedCreateWithoutTransactionInput> | DetailTransactionCreateWithoutTransactionInput[] | DetailTransactionUncheckedCreateWithoutTransactionInput[]
    connectOrCreate?: DetailTransactionCreateOrConnectWithoutTransactionInput | DetailTransactionCreateOrConnectWithoutTransactionInput[]
    createMany?: DetailTransactionCreateManyTransactionInputEnvelope
    connect?: DetailTransactionWhereUniqueInput | DetailTransactionWhereUniqueInput[]
  }

  export type TicketCreateNestedOneWithoutTransactionInput = {
    create?: XOR<TicketCreateWithoutTransactionInput, TicketUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: TicketCreateOrConnectWithoutTransactionInput
    connect?: TicketWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutTransactionInput = {
    create?: XOR<UserCreateWithoutTransactionInput, UserUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: UserCreateOrConnectWithoutTransactionInput
    connect?: UserWhereUniqueInput
  }

  export type userPointsCreateNestedOneWithoutDiscountInput = {
    create?: XOR<userPointsCreateWithoutDiscountInput, userPointsUncheckedCreateWithoutDiscountInput>
    connectOrCreate?: userPointsCreateOrConnectWithoutDiscountInput
    connect?: userPointsWhereUniqueInput
  }

  export type referralVoucherCreateNestedOneWithoutDiscountInput = {
    create?: XOR<referralVoucherCreateWithoutDiscountInput, referralVoucherUncheckedCreateWithoutDiscountInput>
    connectOrCreate?: referralVoucherCreateOrConnectWithoutDiscountInput
    connect?: referralVoucherWhereUniqueInput
  }

  export type DetailTransactionUncheckedCreateNestedManyWithoutTransactionInput = {
    create?: XOR<DetailTransactionCreateWithoutTransactionInput, DetailTransactionUncheckedCreateWithoutTransactionInput> | DetailTransactionCreateWithoutTransactionInput[] | DetailTransactionUncheckedCreateWithoutTransactionInput[]
    connectOrCreate?: DetailTransactionCreateOrConnectWithoutTransactionInput | DetailTransactionCreateOrConnectWithoutTransactionInput[]
    createMany?: DetailTransactionCreateManyTransactionInputEnvelope
    connect?: DetailTransactionWhereUniqueInput | DetailTransactionWhereUniqueInput[]
  }

  export type EnumTransactionStatusFieldUpdateOperationsInput = {
    set?: $Enums.TransactionStatus
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }
<<<<<<< HEAD

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

=======
  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }
>>>>>>> 86a465382dd362a0e65e14019e447344695382d4
  export type DetailTransactionUpdateManyWithoutTransactionNestedInput = {
    create?: XOR<DetailTransactionCreateWithoutTransactionInput, DetailTransactionUncheckedCreateWithoutTransactionInput> | DetailTransactionCreateWithoutTransactionInput[] | DetailTransactionUncheckedCreateWithoutTransactionInput[]
    connectOrCreate?: DetailTransactionCreateOrConnectWithoutTransactionInput | DetailTransactionCreateOrConnectWithoutTransactionInput[]
    upsert?: DetailTransactionUpsertWithWhereUniqueWithoutTransactionInput | DetailTransactionUpsertWithWhereUniqueWithoutTransactionInput[]
    createMany?: DetailTransactionCreateManyTransactionInputEnvelope
    set?: DetailTransactionWhereUniqueInput | DetailTransactionWhereUniqueInput[]
    disconnect?: DetailTransactionWhereUniqueInput | DetailTransactionWhereUniqueInput[]
    delete?: DetailTransactionWhereUniqueInput | DetailTransactionWhereUniqueInput[]
    connect?: DetailTransactionWhereUniqueInput | DetailTransactionWhereUniqueInput[]
    update?: DetailTransactionUpdateWithWhereUniqueWithoutTransactionInput | DetailTransactionUpdateWithWhereUniqueWithoutTransactionInput[]
    updateMany?: DetailTransactionUpdateManyWithWhereWithoutTransactionInput | DetailTransactionUpdateManyWithWhereWithoutTransactionInput[]
    deleteMany?: DetailTransactionScalarWhereInput | DetailTransactionScalarWhereInput[]
  }

  export type TicketUpdateOneRequiredWithoutTransactionNestedInput = {
    create?: XOR<TicketCreateWithoutTransactionInput, TicketUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: TicketCreateOrConnectWithoutTransactionInput
    upsert?: TicketUpsertWithoutTransactionInput
    connect?: TicketWhereUniqueInput
    update?: XOR<XOR<TicketUpdateToOneWithWhereWithoutTransactionInput, TicketUpdateWithoutTransactionInput>, TicketUncheckedUpdateWithoutTransactionInput>
  }

  export type UserUpdateOneRequiredWithoutTransactionNestedInput = {
    create?: XOR<UserCreateWithoutTransactionInput, UserUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: UserCreateOrConnectWithoutTransactionInput
    upsert?: UserUpsertWithoutTransactionInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTransactionInput, UserUpdateWithoutTransactionInput>, UserUncheckedUpdateWithoutTransactionInput>
  }

  export type userPointsUpdateOneWithoutDiscountNestedInput = {
    create?: XOR<userPointsCreateWithoutDiscountInput, userPointsUncheckedCreateWithoutDiscountInput>
    connectOrCreate?: userPointsCreateOrConnectWithoutDiscountInput
    upsert?: userPointsUpsertWithoutDiscountInput
    disconnect?: userPointsWhereInput | boolean
    delete?: userPointsWhereInput | boolean
    connect?: userPointsWhereUniqueInput
    update?: XOR<XOR<userPointsUpdateToOneWithWhereWithoutDiscountInput, userPointsUpdateWithoutDiscountInput>, userPointsUncheckedUpdateWithoutDiscountInput>
  }

  export type referralVoucherUpdateOneWithoutDiscountNestedInput = {
    create?: XOR<referralVoucherCreateWithoutDiscountInput, referralVoucherUncheckedCreateWithoutDiscountInput>
    connectOrCreate?: referralVoucherCreateOrConnectWithoutDiscountInput
    upsert?: referralVoucherUpsertWithoutDiscountInput
    disconnect?: referralVoucherWhereInput | boolean
    delete?: referralVoucherWhereInput | boolean
    connect?: referralVoucherWhereUniqueInput
    update?: XOR<XOR<referralVoucherUpdateToOneWithWhereWithoutDiscountInput, referralVoucherUpdateWithoutDiscountInput>, referralVoucherUncheckedUpdateWithoutDiscountInput>
  }

  export type DetailTransactionUncheckedUpdateManyWithoutTransactionNestedInput = {
    create?: XOR<DetailTransactionCreateWithoutTransactionInput, DetailTransactionUncheckedCreateWithoutTransactionInput> | DetailTransactionCreateWithoutTransactionInput[] | DetailTransactionUncheckedCreateWithoutTransactionInput[]
    connectOrCreate?: DetailTransactionCreateOrConnectWithoutTransactionInput | DetailTransactionCreateOrConnectWithoutTransactionInput[]
    upsert?: DetailTransactionUpsertWithWhereUniqueWithoutTransactionInput | DetailTransactionUpsertWithWhereUniqueWithoutTransactionInput[]
    createMany?: DetailTransactionCreateManyTransactionInputEnvelope
    set?: DetailTransactionWhereUniqueInput | DetailTransactionWhereUniqueInput[]
    disconnect?: DetailTransactionWhereUniqueInput | DetailTransactionWhereUniqueInput[]
    delete?: DetailTransactionWhereUniqueInput | DetailTransactionWhereUniqueInput[]
    connect?: DetailTransactionWhereUniqueInput | DetailTransactionWhereUniqueInput[]
    update?: DetailTransactionUpdateWithWhereUniqueWithoutTransactionInput | DetailTransactionUpdateWithWhereUniqueWithoutTransactionInput[]
    updateMany?: DetailTransactionUpdateManyWithWhereWithoutTransactionInput | DetailTransactionUpdateManyWithWhereWithoutTransactionInput[]
    deleteMany?: DetailTransactionScalarWhereInput | DetailTransactionScalarWhereInput[]
  }

  export type ReviewCreateNestedManyWithoutIsValidInput = {
    create?: XOR<ReviewCreateWithoutIsValidInput, ReviewUncheckedCreateWithoutIsValidInput> | ReviewCreateWithoutIsValidInput[] | ReviewUncheckedCreateWithoutIsValidInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutIsValidInput | ReviewCreateOrConnectWithoutIsValidInput[]
    createMany?: ReviewCreateManyIsValidInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type TicketCreateNestedOneWithoutDetailTransactionInput = {
    create?: XOR<TicketCreateWithoutDetailTransactionInput, TicketUncheckedCreateWithoutDetailTransactionInput>
    connectOrCreate?: TicketCreateOrConnectWithoutDetailTransactionInput
    connect?: TicketWhereUniqueInput
  }

  export type EventCreateNestedOneWithoutDetailTransactionInput = {
    create?: XOR<EventCreateWithoutDetailTransactionInput, EventUncheckedCreateWithoutDetailTransactionInput>
    connectOrCreate?: EventCreateOrConnectWithoutDetailTransactionInput
    connect?: EventWhereUniqueInput
  }

  export type TransactionCreateNestedOneWithoutDetailTransactionInput = {
    create?: XOR<TransactionCreateWithoutDetailTransactionInput, TransactionUncheckedCreateWithoutDetailTransactionInput>
    connectOrCreate?: TransactionCreateOrConnectWithoutDetailTransactionInput
    connect?: TransactionWhereUniqueInput
  }

  export type ReviewUncheckedCreateNestedManyWithoutIsValidInput = {
    create?: XOR<ReviewCreateWithoutIsValidInput, ReviewUncheckedCreateWithoutIsValidInput> | ReviewCreateWithoutIsValidInput[] | ReviewUncheckedCreateWithoutIsValidInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutIsValidInput | ReviewCreateOrConnectWithoutIsValidInput[]
    createMany?: ReviewCreateManyIsValidInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type ReviewUpdateManyWithoutIsValidNestedInput = {
    create?: XOR<ReviewCreateWithoutIsValidInput, ReviewUncheckedCreateWithoutIsValidInput> | ReviewCreateWithoutIsValidInput[] | ReviewUncheckedCreateWithoutIsValidInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutIsValidInput | ReviewCreateOrConnectWithoutIsValidInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutIsValidInput | ReviewUpsertWithWhereUniqueWithoutIsValidInput[]
    createMany?: ReviewCreateManyIsValidInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutIsValidInput | ReviewUpdateWithWhereUniqueWithoutIsValidInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutIsValidInput | ReviewUpdateManyWithWhereWithoutIsValidInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type TicketUpdateOneRequiredWithoutDetailTransactionNestedInput = {
    create?: XOR<TicketCreateWithoutDetailTransactionInput, TicketUncheckedCreateWithoutDetailTransactionInput>
    connectOrCreate?: TicketCreateOrConnectWithoutDetailTransactionInput
    upsert?: TicketUpsertWithoutDetailTransactionInput
    connect?: TicketWhereUniqueInput
    update?: XOR<XOR<TicketUpdateToOneWithWhereWithoutDetailTransactionInput, TicketUpdateWithoutDetailTransactionInput>, TicketUncheckedUpdateWithoutDetailTransactionInput>
  }

  export type EventUpdateOneRequiredWithoutDetailTransactionNestedInput = {
    create?: XOR<EventCreateWithoutDetailTransactionInput, EventUncheckedCreateWithoutDetailTransactionInput>
    connectOrCreate?: EventCreateOrConnectWithoutDetailTransactionInput
    upsert?: EventUpsertWithoutDetailTransactionInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutDetailTransactionInput, EventUpdateWithoutDetailTransactionInput>, EventUncheckedUpdateWithoutDetailTransactionInput>
  }

  export type TransactionUpdateOneRequiredWithoutDetailTransactionNestedInput = {
    create?: XOR<TransactionCreateWithoutDetailTransactionInput, TransactionUncheckedCreateWithoutDetailTransactionInput>
    connectOrCreate?: TransactionCreateOrConnectWithoutDetailTransactionInput
    upsert?: TransactionUpsertWithoutDetailTransactionInput
    connect?: TransactionWhereUniqueInput
    update?: XOR<XOR<TransactionUpdateToOneWithWhereWithoutDetailTransactionInput, TransactionUpdateWithoutDetailTransactionInput>, TransactionUncheckedUpdateWithoutDetailTransactionInput>
  }

  export type ReviewUncheckedUpdateManyWithoutIsValidNestedInput = {
    create?: XOR<ReviewCreateWithoutIsValidInput, ReviewUncheckedCreateWithoutIsValidInput> | ReviewCreateWithoutIsValidInput[] | ReviewUncheckedCreateWithoutIsValidInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutIsValidInput | ReviewCreateOrConnectWithoutIsValidInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutIsValidInput | ReviewUpsertWithWhereUniqueWithoutIsValidInput[]
    createMany?: ReviewCreateManyIsValidInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutIsValidInput | ReviewUpdateWithWhereUniqueWithoutIsValidInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutIsValidInput | ReviewUpdateManyWithWhereWithoutIsValidInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type DetailTransactionCreateNestedOneWithoutReviewInput = {
    create?: XOR<DetailTransactionCreateWithoutReviewInput, DetailTransactionUncheckedCreateWithoutReviewInput>
    connectOrCreate?: DetailTransactionCreateOrConnectWithoutReviewInput
    connect?: DetailTransactionWhereUniqueInput
  }

  export type EventCreateNestedOneWithoutReviewInput = {
    create?: XOR<EventCreateWithoutReviewInput, EventUncheckedCreateWithoutReviewInput>
    connectOrCreate?: EventCreateOrConnectWithoutReviewInput
    connect?: EventWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReviewInput = {
    create?: XOR<UserCreateWithoutReviewInput, UserUncheckedCreateWithoutReviewInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewInput
    connect?: UserWhereUniqueInput
  }

  export type TicketCreateNestedOneWithoutReviewInput = {
    create?: XOR<TicketCreateWithoutReviewInput, TicketUncheckedCreateWithoutReviewInput>
    connectOrCreate?: TicketCreateOrConnectWithoutReviewInput
    connect?: TicketWhereUniqueInput
  }

  export type DetailTransactionUpdateOneRequiredWithoutReviewNestedInput = {
    create?: XOR<DetailTransactionCreateWithoutReviewInput, DetailTransactionUncheckedCreateWithoutReviewInput>
    connectOrCreate?: DetailTransactionCreateOrConnectWithoutReviewInput
    upsert?: DetailTransactionUpsertWithoutReviewInput
    connect?: DetailTransactionWhereUniqueInput
    update?: XOR<XOR<DetailTransactionUpdateToOneWithWhereWithoutReviewInput, DetailTransactionUpdateWithoutReviewInput>, DetailTransactionUncheckedUpdateWithoutReviewInput>
  }

  export type EventUpdateOneRequiredWithoutReviewNestedInput = {
    create?: XOR<EventCreateWithoutReviewInput, EventUncheckedCreateWithoutReviewInput>
    connectOrCreate?: EventCreateOrConnectWithoutReviewInput
    upsert?: EventUpsertWithoutReviewInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutReviewInput, EventUpdateWithoutReviewInput>, EventUncheckedUpdateWithoutReviewInput>
  }

  export type UserUpdateOneRequiredWithoutReviewNestedInput = {
    create?: XOR<UserCreateWithoutReviewInput, UserUncheckedCreateWithoutReviewInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewInput
    upsert?: UserUpsertWithoutReviewInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReviewInput, UserUpdateWithoutReviewInput>, UserUncheckedUpdateWithoutReviewInput>
  }

  export type TicketUpdateOneWithoutReviewNestedInput = {
    create?: XOR<TicketCreateWithoutReviewInput, TicketUncheckedCreateWithoutReviewInput>
    connectOrCreate?: TicketCreateOrConnectWithoutReviewInput
    upsert?: TicketUpsertWithoutReviewInput
    disconnect?: TicketWhereInput | boolean
    delete?: TicketWhereInput | boolean
    connect?: TicketWhereUniqueInput
    update?: XOR<XOR<TicketUpdateToOneWithWhereWithoutReviewInput, TicketUpdateWithoutReviewInput>, TicketUncheckedUpdateWithoutReviewInput>
  }

  export type TransactionCreateNestedManyWithoutUserInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type referralVoucherCreateNestedManyWithoutUserInput = {
    create?: XOR<referralVoucherCreateWithoutUserInput, referralVoucherUncheckedCreateWithoutUserInput> | referralVoucherCreateWithoutUserInput[] | referralVoucherUncheckedCreateWithoutUserInput[]
    connectOrCreate?: referralVoucherCreateOrConnectWithoutUserInput | referralVoucherCreateOrConnectWithoutUserInput[]
    createMany?: referralVoucherCreateManyUserInputEnvelope
    connect?: referralVoucherWhereUniqueInput | referralVoucherWhereUniqueInput[]
  }

  export type userPointsCreateNestedManyWithoutUserInput = {
    create?: XOR<userPointsCreateWithoutUserInput, userPointsUncheckedCreateWithoutUserInput> | userPointsCreateWithoutUserInput[] | userPointsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: userPointsCreateOrConnectWithoutUserInput | userPointsCreateOrConnectWithoutUserInput[]
    createMany?: userPointsCreateManyUserInputEnvelope
    connect?: userPointsWhereUniqueInput | userPointsWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type referralVoucherUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<referralVoucherCreateWithoutUserInput, referralVoucherUncheckedCreateWithoutUserInput> | referralVoucherCreateWithoutUserInput[] | referralVoucherUncheckedCreateWithoutUserInput[]
    connectOrCreate?: referralVoucherCreateOrConnectWithoutUserInput | referralVoucherCreateOrConnectWithoutUserInput[]
    createMany?: referralVoucherCreateManyUserInputEnvelope
    connect?: referralVoucherWhereUniqueInput | referralVoucherWhereUniqueInput[]
  }

  export type userPointsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<userPointsCreateWithoutUserInput, userPointsUncheckedCreateWithoutUserInput> | userPointsCreateWithoutUserInput[] | userPointsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: userPointsCreateOrConnectWithoutUserInput | userPointsCreateOrConnectWithoutUserInput[]
    createMany?: userPointsCreateManyUserInputEnvelope
    connect?: userPointsWhereUniqueInput | userPointsWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type TransactionUpdateManyWithoutUserNestedInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutUserInput | TransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutUserInput | TransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutUserInput | TransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type referralVoucherUpdateManyWithoutUserNestedInput = {
    create?: XOR<referralVoucherCreateWithoutUserInput, referralVoucherUncheckedCreateWithoutUserInput> | referralVoucherCreateWithoutUserInput[] | referralVoucherUncheckedCreateWithoutUserInput[]
    connectOrCreate?: referralVoucherCreateOrConnectWithoutUserInput | referralVoucherCreateOrConnectWithoutUserInput[]
    upsert?: referralVoucherUpsertWithWhereUniqueWithoutUserInput | referralVoucherUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: referralVoucherCreateManyUserInputEnvelope
    set?: referralVoucherWhereUniqueInput | referralVoucherWhereUniqueInput[]
    disconnect?: referralVoucherWhereUniqueInput | referralVoucherWhereUniqueInput[]
    delete?: referralVoucherWhereUniqueInput | referralVoucherWhereUniqueInput[]
    connect?: referralVoucherWhereUniqueInput | referralVoucherWhereUniqueInput[]
    update?: referralVoucherUpdateWithWhereUniqueWithoutUserInput | referralVoucherUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: referralVoucherUpdateManyWithWhereWithoutUserInput | referralVoucherUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: referralVoucherScalarWhereInput | referralVoucherScalarWhereInput[]
  }

  export type userPointsUpdateManyWithoutUserNestedInput = {
    create?: XOR<userPointsCreateWithoutUserInput, userPointsUncheckedCreateWithoutUserInput> | userPointsCreateWithoutUserInput[] | userPointsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: userPointsCreateOrConnectWithoutUserInput | userPointsCreateOrConnectWithoutUserInput[]
    upsert?: userPointsUpsertWithWhereUniqueWithoutUserInput | userPointsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: userPointsCreateManyUserInputEnvelope
    set?: userPointsWhereUniqueInput | userPointsWhereUniqueInput[]
    disconnect?: userPointsWhereUniqueInput | userPointsWhereUniqueInput[]
    delete?: userPointsWhereUniqueInput | userPointsWhereUniqueInput[]
    connect?: userPointsWhereUniqueInput | userPointsWhereUniqueInput[]
    update?: userPointsUpdateWithWhereUniqueWithoutUserInput | userPointsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: userPointsUpdateManyWithWhereWithoutUserInput | userPointsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: userPointsScalarWhereInput | userPointsScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutUserInput | ReviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutUserInput | ReviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutUserInput | ReviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutUserInput | TransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutUserInput | TransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutUserInput | TransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type referralVoucherUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<referralVoucherCreateWithoutUserInput, referralVoucherUncheckedCreateWithoutUserInput> | referralVoucherCreateWithoutUserInput[] | referralVoucherUncheckedCreateWithoutUserInput[]
    connectOrCreate?: referralVoucherCreateOrConnectWithoutUserInput | referralVoucherCreateOrConnectWithoutUserInput[]
    upsert?: referralVoucherUpsertWithWhereUniqueWithoutUserInput | referralVoucherUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: referralVoucherCreateManyUserInputEnvelope
    set?: referralVoucherWhereUniqueInput | referralVoucherWhereUniqueInput[]
    disconnect?: referralVoucherWhereUniqueInput | referralVoucherWhereUniqueInput[]
    delete?: referralVoucherWhereUniqueInput | referralVoucherWhereUniqueInput[]
    connect?: referralVoucherWhereUniqueInput | referralVoucherWhereUniqueInput[]
    update?: referralVoucherUpdateWithWhereUniqueWithoutUserInput | referralVoucherUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: referralVoucherUpdateManyWithWhereWithoutUserInput | referralVoucherUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: referralVoucherScalarWhereInput | referralVoucherScalarWhereInput[]
  }

  export type userPointsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<userPointsCreateWithoutUserInput, userPointsUncheckedCreateWithoutUserInput> | userPointsCreateWithoutUserInput[] | userPointsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: userPointsCreateOrConnectWithoutUserInput | userPointsCreateOrConnectWithoutUserInput[]
    upsert?: userPointsUpsertWithWhereUniqueWithoutUserInput | userPointsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: userPointsCreateManyUserInputEnvelope
    set?: userPointsWhereUniqueInput | userPointsWhereUniqueInput[]
    disconnect?: userPointsWhereUniqueInput | userPointsWhereUniqueInput[]
    delete?: userPointsWhereUniqueInput | userPointsWhereUniqueInput[]
    connect?: userPointsWhereUniqueInput | userPointsWhereUniqueInput[]
    update?: userPointsUpdateWithWhereUniqueWithoutUserInput | userPointsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: userPointsUpdateManyWithWhereWithoutUserInput | userPointsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: userPointsScalarWhereInput | userPointsScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutUserInput | ReviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutUserInput | ReviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutUserInput | ReviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type TransactionCreateNestedManyWithoutVoucherInput = {
    create?: XOR<TransactionCreateWithoutVoucherInput, TransactionUncheckedCreateWithoutVoucherInput> | TransactionCreateWithoutVoucherInput[] | TransactionUncheckedCreateWithoutVoucherInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutVoucherInput | TransactionCreateOrConnectWithoutVoucherInput[]
    createMany?: TransactionCreateManyVoucherInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutUserIdInput = {
    create?: XOR<UserCreateWithoutUserIdInput, UserUncheckedCreateWithoutUserIdInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserIdInput
    connect?: UserWhereUniqueInput
  }

  export type TransactionUncheckedCreateNestedManyWithoutVoucherInput = {
    create?: XOR<TransactionCreateWithoutVoucherInput, TransactionUncheckedCreateWithoutVoucherInput> | TransactionCreateWithoutVoucherInput[] | TransactionUncheckedCreateWithoutVoucherInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutVoucherInput | TransactionCreateOrConnectWithoutVoucherInput[]
    createMany?: TransactionCreateManyVoucherInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type TransactionUpdateManyWithoutVoucherNestedInput = {
    create?: XOR<TransactionCreateWithoutVoucherInput, TransactionUncheckedCreateWithoutVoucherInput> | TransactionCreateWithoutVoucherInput[] | TransactionUncheckedCreateWithoutVoucherInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutVoucherInput | TransactionCreateOrConnectWithoutVoucherInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutVoucherInput | TransactionUpsertWithWhereUniqueWithoutVoucherInput[]
    createMany?: TransactionCreateManyVoucherInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutVoucherInput | TransactionUpdateWithWhereUniqueWithoutVoucherInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutVoucherInput | TransactionUpdateManyWithWhereWithoutVoucherInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutUserIdNestedInput = {
    create?: XOR<UserCreateWithoutUserIdInput, UserUncheckedCreateWithoutUserIdInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserIdInput
    upsert?: UserUpsertWithoutUserIdInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserIdInput, UserUpdateWithoutUserIdInput>, UserUncheckedUpdateWithoutUserIdInput>
  }

  export type TransactionUncheckedUpdateManyWithoutVoucherNestedInput = {
    create?: XOR<TransactionCreateWithoutVoucherInput, TransactionUncheckedCreateWithoutVoucherInput> | TransactionCreateWithoutVoucherInput[] | TransactionUncheckedCreateWithoutVoucherInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutVoucherInput | TransactionCreateOrConnectWithoutVoucherInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutVoucherInput | TransactionUpsertWithWhereUniqueWithoutVoucherInput[]
    createMany?: TransactionCreateManyVoucherInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutVoucherInput | TransactionUpdateWithWhereUniqueWithoutVoucherInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutVoucherInput | TransactionUpdateManyWithWhereWithoutVoucherInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type TransactionCreateNestedManyWithoutPointsInput = {
    create?: XOR<TransactionCreateWithoutPointsInput, TransactionUncheckedCreateWithoutPointsInput> | TransactionCreateWithoutPointsInput[] | TransactionUncheckedCreateWithoutPointsInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutPointsInput | TransactionCreateOrConnectWithoutPointsInput[]
    createMany?: TransactionCreateManyPointsInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutUserPointsInput = {
    create?: XOR<UserCreateWithoutUserPointsInput, UserUncheckedCreateWithoutUserPointsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserPointsInput
    connect?: UserWhereUniqueInput
  }

  export type TransactionUncheckedCreateNestedManyWithoutPointsInput = {
    create?: XOR<TransactionCreateWithoutPointsInput, TransactionUncheckedCreateWithoutPointsInput> | TransactionCreateWithoutPointsInput[] | TransactionUncheckedCreateWithoutPointsInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutPointsInput | TransactionCreateOrConnectWithoutPointsInput[]
    createMany?: TransactionCreateManyPointsInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type TransactionUpdateManyWithoutPointsNestedInput = {
    create?: XOR<TransactionCreateWithoutPointsInput, TransactionUncheckedCreateWithoutPointsInput> | TransactionCreateWithoutPointsInput[] | TransactionUncheckedCreateWithoutPointsInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutPointsInput | TransactionCreateOrConnectWithoutPointsInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutPointsInput | TransactionUpsertWithWhereUniqueWithoutPointsInput[]
    createMany?: TransactionCreateManyPointsInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutPointsInput | TransactionUpdateWithWhereUniqueWithoutPointsInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutPointsInput | TransactionUpdateManyWithWhereWithoutPointsInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutUserPointsNestedInput = {
    create?: XOR<UserCreateWithoutUserPointsInput, UserUncheckedCreateWithoutUserPointsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserPointsInput
    upsert?: UserUpsertWithoutUserPointsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserPointsInput, UserUpdateWithoutUserPointsInput>, UserUncheckedUpdateWithoutUserPointsInput>
  }

  export type TransactionUncheckedUpdateManyWithoutPointsNestedInput = {
    create?: XOR<TransactionCreateWithoutPointsInput, TransactionUncheckedCreateWithoutPointsInput> | TransactionCreateWithoutPointsInput[] | TransactionUncheckedCreateWithoutPointsInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutPointsInput | TransactionCreateOrConnectWithoutPointsInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutPointsInput | TransactionUpsertWithWhereUniqueWithoutPointsInput[]
    createMany?: TransactionCreateManyPointsInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutPointsInput | TransactionUpdateWithWhereUniqueWithoutPointsInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutPointsInput | TransactionUpdateManyWithWhereWithoutPointsInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumEventCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.EventCategory | EnumEventCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.EventCategory[] | ListEnumEventCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventCategory[] | ListEnumEventCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumEventCategoryFilter<$PrismaModel> | $Enums.EventCategory
  }

  export type NestedEnumLocationFilter<$PrismaModel = never> = {
    equals?: $Enums.Location | EnumLocationFieldRefInput<$PrismaModel>
    in?: $Enums.Location[] | ListEnumLocationFieldRefInput<$PrismaModel>
    notIn?: $Enums.Location[] | ListEnumLocationFieldRefInput<$PrismaModel>
    not?: NestedEnumLocationFilter<$PrismaModel> | $Enums.Location
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumEventTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.EventType | EnumEventTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEventTypeFilter<$PrismaModel> | $Enums.EventType
  }

  export type NestedEnumEventCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EventCategory | EnumEventCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.EventCategory[] | ListEnumEventCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventCategory[] | ListEnumEventCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumEventCategoryWithAggregatesFilter<$PrismaModel> | $Enums.EventCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEventCategoryFilter<$PrismaModel>
    _max?: NestedEnumEventCategoryFilter<$PrismaModel>
  }

  export type NestedEnumLocationWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Location | EnumLocationFieldRefInput<$PrismaModel>
    in?: $Enums.Location[] | ListEnumLocationFieldRefInput<$PrismaModel>
    notIn?: $Enums.Location[] | ListEnumLocationFieldRefInput<$PrismaModel>
    not?: NestedEnumLocationWithAggregatesFilter<$PrismaModel> | $Enums.Location
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLocationFilter<$PrismaModel>
    _max?: NestedEnumLocationFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumEventTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EventType | EnumEventTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEventTypeWithAggregatesFilter<$PrismaModel> | $Enums.EventType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEventTypeFilter<$PrismaModel>
    _max?: NestedEnumEventTypeFilter<$PrismaModel>
  }

  export type NestedEnumTicketCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketCategory | EnumTicketCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.TicketCategory[] | ListEnumTicketCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketCategory[] | ListEnumTicketCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketCategoryFilter<$PrismaModel> | $Enums.TicketCategory
  }

  export type NestedEnumTicketCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketCategory | EnumTicketCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.TicketCategory[] | ListEnumTicketCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketCategory[] | ListEnumTicketCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketCategoryWithAggregatesFilter<$PrismaModel> | $Enums.TicketCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTicketCategoryFilter<$PrismaModel>
    _max?: NestedEnumTicketCategoryFilter<$PrismaModel>
  }

  export type NestedEnumTransactionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionStatusFilter<$PrismaModel> | $Enums.TransactionStatus
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

<<<<<<< HEAD
=======

>>>>>>> 86a465382dd362a0e65e14019e447344695382d4
  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumTransactionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionStatusWithAggregatesFilter<$PrismaModel> | $Enums.TransactionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionStatusFilter<$PrismaModel>
    _max?: NestedEnumTransactionStatusFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EventCreateWithoutPromotorInput = {
    title: string
    description: string
    category: $Enums.EventCategory
    location: $Enums.Location
    venue: string
    mapURL: string
    date: Date | string
    time: Date | string
    type: $Enums.EventType
    thumbnail: string
    isActive?: boolean
    slug: string
    ticket?: TicketCreateNestedManyWithoutEventInput
    DetailTransaction?: DetailTransactionCreateNestedManyWithoutEventInput
    review?: ReviewCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutPromotorInput = {
    id?: number
    title: string
    description: string
    category: $Enums.EventCategory
    location: $Enums.Location
    venue: string
    mapURL: string
    date: Date | string
    time: Date | string
    type: $Enums.EventType
    thumbnail: string
    isActive?: boolean
    slug: string
    ticket?: TicketUncheckedCreateNestedManyWithoutEventInput
    DetailTransaction?: DetailTransactionUncheckedCreateNestedManyWithoutEventInput
    review?: ReviewUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutPromotorInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutPromotorInput, EventUncheckedCreateWithoutPromotorInput>
  }

  export type EventCreateManyPromotorInputEnvelope = {
    data: EventCreateManyPromotorInput | EventCreateManyPromotorInput[]
    skipDuplicates?: boolean
  }

  export type TicketCreateWithoutPromotorInput = {
    price: number
    category: $Enums.TicketCategory
    startDate?: Date | string
    endDate: Date | string
    isActive?: boolean
    discount?: boolean
    quota?: number
    event: EventCreateNestedOneWithoutTicketInput
    transaction?: TransactionCreateNestedManyWithoutTicketInput
    DetailTransaction?: DetailTransactionCreateNestedManyWithoutTicketInput
    review?: ReviewCreateNestedManyWithoutTicketInput
  }

  export type TicketUncheckedCreateWithoutPromotorInput = {
    id?: number
    eventId: number
    price: number
    category: $Enums.TicketCategory
    startDate?: Date | string
    endDate: Date | string
    isActive?: boolean
    discount?: boolean
    quota?: number
    transaction?: TransactionUncheckedCreateNestedManyWithoutTicketInput
    DetailTransaction?: DetailTransactionUncheckedCreateNestedManyWithoutTicketInput
    review?: ReviewUncheckedCreateNestedManyWithoutTicketInput
  }

  export type TicketCreateOrConnectWithoutPromotorInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutPromotorInput, TicketUncheckedCreateWithoutPromotorInput>
  }

  export type TicketCreateManyPromotorInputEnvelope = {
    data: TicketCreateManyPromotorInput | TicketCreateManyPromotorInput[]
    skipDuplicates?: boolean
  }

  export type EventUpsertWithWhereUniqueWithoutPromotorInput = {
    where: EventWhereUniqueInput
    update: XOR<EventUpdateWithoutPromotorInput, EventUncheckedUpdateWithoutPromotorInput>
    create: XOR<EventCreateWithoutPromotorInput, EventUncheckedCreateWithoutPromotorInput>
  }

  export type EventUpdateWithWhereUniqueWithoutPromotorInput = {
    where: EventWhereUniqueInput
    data: XOR<EventUpdateWithoutPromotorInput, EventUncheckedUpdateWithoutPromotorInput>
  }

  export type EventUpdateManyWithWhereWithoutPromotorInput = {
    where: EventScalarWhereInput
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyWithoutPromotorInput>
  }

  export type EventScalarWhereInput = {
    AND?: EventScalarWhereInput | EventScalarWhereInput[]
    OR?: EventScalarWhereInput[]
    NOT?: EventScalarWhereInput | EventScalarWhereInput[]
    id?: IntFilter<"Event"> | number
    title?: StringFilter<"Event"> | string
    description?: StringFilter<"Event"> | string
    category?: EnumEventCategoryFilter<"Event"> | $Enums.EventCategory
    location?: EnumLocationFilter<"Event"> | $Enums.Location
    venue?: StringFilter<"Event"> | string
    mapURL?: StringFilter<"Event"> | string
    date?: DateTimeFilter<"Event"> | Date | string
    time?: DateTimeFilter<"Event"> | Date | string
    type?: EnumEventTypeFilter<"Event"> | $Enums.EventType
    thumbnail?: StringFilter<"Event"> | string
    isActive?: BoolFilter<"Event"> | boolean
    slug?: StringFilter<"Event"> | string
    promotorId?: IntFilter<"Event"> | number
  }

  export type TicketUpsertWithWhereUniqueWithoutPromotorInput = {
    where: TicketWhereUniqueInput
    update: XOR<TicketUpdateWithoutPromotorInput, TicketUncheckedUpdateWithoutPromotorInput>
    create: XOR<TicketCreateWithoutPromotorInput, TicketUncheckedCreateWithoutPromotorInput>
  }

  export type TicketUpdateWithWhereUniqueWithoutPromotorInput = {
    where: TicketWhereUniqueInput
    data: XOR<TicketUpdateWithoutPromotorInput, TicketUncheckedUpdateWithoutPromotorInput>
  }

  export type TicketUpdateManyWithWhereWithoutPromotorInput = {
    where: TicketScalarWhereInput
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyWithoutPromotorInput>
  }

  export type TicketScalarWhereInput = {
    AND?: TicketScalarWhereInput | TicketScalarWhereInput[]
    OR?: TicketScalarWhereInput[]
    NOT?: TicketScalarWhereInput | TicketScalarWhereInput[]
    id?: IntFilter<"Ticket"> | number
    eventId?: IntFilter<"Ticket"> | number
    price?: IntFilter<"Ticket"> | number
    category?: EnumTicketCategoryFilter<"Ticket"> | $Enums.TicketCategory
    startDate?: DateTimeFilter<"Ticket"> | Date | string
    endDate?: DateTimeFilter<"Ticket"> | Date | string
    isActive?: BoolFilter<"Ticket"> | boolean
    discount?: BoolFilter<"Ticket"> | boolean
    quota?: IntFilter<"Ticket"> | number
    promotorId?: IntFilter<"Ticket"> | number
  }

  export type PromotorCreateWithoutEventInput = {
    name: string
    email: string
    password: string
    avatar: string
    isVerify: boolean
    ticket?: TicketCreateNestedManyWithoutPromotorInput
  }

  export type PromotorUncheckedCreateWithoutEventInput = {
    id?: number
    name: string
    email: string
    password: string
    avatar: string
    isVerify: boolean
    ticket?: TicketUncheckedCreateNestedManyWithoutPromotorInput
  }

  export type PromotorCreateOrConnectWithoutEventInput = {
    where: PromotorWhereUniqueInput
    create: XOR<PromotorCreateWithoutEventInput, PromotorUncheckedCreateWithoutEventInput>
  }

  export type TicketCreateWithoutEventInput = {
    price: number
    category: $Enums.TicketCategory
    startDate?: Date | string
    endDate: Date | string
    isActive?: boolean
    discount?: boolean
    quota?: number
    Promotor: PromotorCreateNestedOneWithoutTicketInput
    transaction?: TransactionCreateNestedManyWithoutTicketInput
    DetailTransaction?: DetailTransactionCreateNestedManyWithoutTicketInput
    review?: ReviewCreateNestedManyWithoutTicketInput
  }

  export type TicketUncheckedCreateWithoutEventInput = {
    id?: number
    price: number
    category: $Enums.TicketCategory
    startDate?: Date | string
    endDate: Date | string
    isActive?: boolean
    discount?: boolean
    quota?: number
    promotorId: number
    transaction?: TransactionUncheckedCreateNestedManyWithoutTicketInput
    DetailTransaction?: DetailTransactionUncheckedCreateNestedManyWithoutTicketInput
    review?: ReviewUncheckedCreateNestedManyWithoutTicketInput
  }

  export type TicketCreateOrConnectWithoutEventInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutEventInput, TicketUncheckedCreateWithoutEventInput>
  }

  export type TicketCreateManyEventInputEnvelope = {
    data: TicketCreateManyEventInput | TicketCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type DetailTransactionCreateWithoutEventInput = {
    reviewStatus: boolean
    review?: ReviewCreateNestedManyWithoutIsValidInput
    ticket: TicketCreateNestedOneWithoutDetailTransactionInput
    transaction: TransactionCreateNestedOneWithoutDetailTransactionInput
  }

  export type DetailTransactionUncheckedCreateWithoutEventInput = {
    id?: number
    transactionId: number
    ticketId: number
    reviewStatus: boolean
    review?: ReviewUncheckedCreateNestedManyWithoutIsValidInput
  }

  export type DetailTransactionCreateOrConnectWithoutEventInput = {
    where: DetailTransactionWhereUniqueInput
    create: XOR<DetailTransactionCreateWithoutEventInput, DetailTransactionUncheckedCreateWithoutEventInput>
  }

  export type DetailTransactionCreateManyEventInputEnvelope = {
    data: DetailTransactionCreateManyEventInput | DetailTransactionCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type ReviewCreateWithoutEventInput = {
    desc?: string | null
    rating?: number
    isValid: DetailTransactionCreateNestedOneWithoutReviewInput
    user: UserCreateNestedOneWithoutReviewInput
    Ticket?: TicketCreateNestedOneWithoutReviewInput
  }

  export type ReviewUncheckedCreateWithoutEventInput = {
    id?: number
    desc?: string | null
    rating?: number
    userId: string
    transactionId: number
    ticketId?: number | null
  }

  export type ReviewCreateOrConnectWithoutEventInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutEventInput, ReviewUncheckedCreateWithoutEventInput>
  }

  export type ReviewCreateManyEventInputEnvelope = {
    data: ReviewCreateManyEventInput | ReviewCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type PromotorUpsertWithoutEventInput = {
    update: XOR<PromotorUpdateWithoutEventInput, PromotorUncheckedUpdateWithoutEventInput>
    create: XOR<PromotorCreateWithoutEventInput, PromotorUncheckedCreateWithoutEventInput>
    where?: PromotorWhereInput
  }

  export type PromotorUpdateToOneWithWhereWithoutEventInput = {
    where?: PromotorWhereInput
    data: XOR<PromotorUpdateWithoutEventInput, PromotorUncheckedUpdateWithoutEventInput>
  }

  export type PromotorUpdateWithoutEventInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    isVerify?: BoolFieldUpdateOperationsInput | boolean
    ticket?: TicketUpdateManyWithoutPromotorNestedInput
  }

  export type PromotorUncheckedUpdateWithoutEventInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    isVerify?: BoolFieldUpdateOperationsInput | boolean
    ticket?: TicketUncheckedUpdateManyWithoutPromotorNestedInput
  }

  export type TicketUpsertWithWhereUniqueWithoutEventInput = {
    where: TicketWhereUniqueInput
    update: XOR<TicketUpdateWithoutEventInput, TicketUncheckedUpdateWithoutEventInput>
    create: XOR<TicketCreateWithoutEventInput, TicketUncheckedCreateWithoutEventInput>
  }

  export type TicketUpdateWithWhereUniqueWithoutEventInput = {
    where: TicketWhereUniqueInput
    data: XOR<TicketUpdateWithoutEventInput, TicketUncheckedUpdateWithoutEventInput>
  }

  export type TicketUpdateManyWithWhereWithoutEventInput = {
    where: TicketScalarWhereInput
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyWithoutEventInput>
  }

  export type DetailTransactionUpsertWithWhereUniqueWithoutEventInput = {
    where: DetailTransactionWhereUniqueInput
    update: XOR<DetailTransactionUpdateWithoutEventInput, DetailTransactionUncheckedUpdateWithoutEventInput>
    create: XOR<DetailTransactionCreateWithoutEventInput, DetailTransactionUncheckedCreateWithoutEventInput>
  }

  export type DetailTransactionUpdateWithWhereUniqueWithoutEventInput = {
    where: DetailTransactionWhereUniqueInput
    data: XOR<DetailTransactionUpdateWithoutEventInput, DetailTransactionUncheckedUpdateWithoutEventInput>
  }

  export type DetailTransactionUpdateManyWithWhereWithoutEventInput = {
    where: DetailTransactionScalarWhereInput
    data: XOR<DetailTransactionUpdateManyMutationInput, DetailTransactionUncheckedUpdateManyWithoutEventInput>
  }

  export type DetailTransactionScalarWhereInput = {
    AND?: DetailTransactionScalarWhereInput | DetailTransactionScalarWhereInput[]
    OR?: DetailTransactionScalarWhereInput[]
    NOT?: DetailTransactionScalarWhereInput | DetailTransactionScalarWhereInput[]
    id?: IntFilter<"DetailTransaction"> | number
    transactionId?: IntFilter<"DetailTransaction"> | number
    eventId?: IntFilter<"DetailTransaction"> | number
    ticketId?: IntFilter<"DetailTransaction"> | number
    reviewStatus?: BoolFilter<"DetailTransaction"> | boolean
  }

  export type ReviewUpsertWithWhereUniqueWithoutEventInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutEventInput, ReviewUncheckedUpdateWithoutEventInput>
    create: XOR<ReviewCreateWithoutEventInput, ReviewUncheckedCreateWithoutEventInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutEventInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutEventInput, ReviewUncheckedUpdateWithoutEventInput>
  }

  export type ReviewUpdateManyWithWhereWithoutEventInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutEventInput>
  }

  export type ReviewScalarWhereInput = {
    AND?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    OR?: ReviewScalarWhereInput[]
    NOT?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    id?: IntFilter<"Review"> | number
    desc?: StringNullableFilter<"Review"> | string | null
    rating?: IntFilter<"Review"> | number
    userId?: StringFilter<"Review"> | string
    eventId?: IntFilter<"Review"> | number
    transactionId?: IntFilter<"Review"> | number
    ticketId?: IntNullableFilter<"Review"> | number | null
  }

  export type PromotorCreateWithoutTicketInput = {
    name: string
    email: string
    password: string
    avatar: string
    isVerify: boolean
    event?: EventCreateNestedManyWithoutPromotorInput
  }

  export type PromotorUncheckedCreateWithoutTicketInput = {
    id?: number
    name: string
    email: string
    password: string
    avatar: string
    isVerify: boolean
    event?: EventUncheckedCreateNestedManyWithoutPromotorInput
  }

  export type PromotorCreateOrConnectWithoutTicketInput = {
    where: PromotorWhereUniqueInput
    create: XOR<PromotorCreateWithoutTicketInput, PromotorUncheckedCreateWithoutTicketInput>
  }

  export type EventCreateWithoutTicketInput = {
    title: string
    description: string
    category: $Enums.EventCategory
    location: $Enums.Location
    venue: string
    mapURL: string
    date: Date | string
    time: Date | string
    type: $Enums.EventType
    thumbnail: string
    isActive?: boolean
    slug: string
    Promotor: PromotorCreateNestedOneWithoutEventInput
    DetailTransaction?: DetailTransactionCreateNestedManyWithoutEventInput
    review?: ReviewCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutTicketInput = {
    id?: number
    title: string
    description: string
    category: $Enums.EventCategory
    location: $Enums.Location
    venue: string
    mapURL: string
    date: Date | string
    time: Date | string
    type: $Enums.EventType
    thumbnail: string
    isActive?: boolean
    slug: string
    promotorId: number
    DetailTransaction?: DetailTransactionUncheckedCreateNestedManyWithoutEventInput
    review?: ReviewUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutTicketInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutTicketInput, EventUncheckedCreateWithoutTicketInput>
  }

  export type TransactionCreateWithoutTicketInput = {
    basePrice: number
    totalPrice: number
    finalPrice: number
    status?: $Enums.TransactionStatus
    discount?: number | null
    createdAt?: Date | string
    expiresAt: Date | string
    qty: number
    promoQuota?: number
    redirect_url?: string | null
    DetailTransaction?: DetailTransactionCreateNestedManyWithoutTransactionInput
    user: UserCreateNestedOneWithoutTransactionInput
    points?: userPointsCreateNestedOneWithoutDiscountInput
    voucher?: referralVoucherCreateNestedOneWithoutDiscountInput
  }

  export type TransactionUncheckedCreateWithoutTicketInput = {
    id?: number
    basePrice: number
    totalPrice: number
    finalPrice: number
    status?: $Enums.TransactionStatus
    userId: string
    userVoucher?: number | null
    userPoints?: number | null
    discount?: number | null
    createdAt?: Date | string
    expiresAt: Date | string
    qty: number
    promoQuota?: number
    redirect_url?: string | null
    DetailTransaction?: DetailTransactionUncheckedCreateNestedManyWithoutTransactionInput
  }

  export type TransactionCreateOrConnectWithoutTicketInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutTicketInput, TransactionUncheckedCreateWithoutTicketInput>
  }

  export type TransactionCreateManyTicketInputEnvelope = {
    data: TransactionCreateManyTicketInput | TransactionCreateManyTicketInput[]
    skipDuplicates?: boolean
  }

  export type DetailTransactionCreateWithoutTicketInput = {
    reviewStatus: boolean
    review?: ReviewCreateNestedManyWithoutIsValidInput
    event: EventCreateNestedOneWithoutDetailTransactionInput
    transaction: TransactionCreateNestedOneWithoutDetailTransactionInput
  }

  export type DetailTransactionUncheckedCreateWithoutTicketInput = {
    id?: number
    transactionId: number
    eventId: number
    reviewStatus: boolean
    review?: ReviewUncheckedCreateNestedManyWithoutIsValidInput
  }

  export type DetailTransactionCreateOrConnectWithoutTicketInput = {
    where: DetailTransactionWhereUniqueInput
    create: XOR<DetailTransactionCreateWithoutTicketInput, DetailTransactionUncheckedCreateWithoutTicketInput>
  }

  export type DetailTransactionCreateManyTicketInputEnvelope = {
    data: DetailTransactionCreateManyTicketInput | DetailTransactionCreateManyTicketInput[]
    skipDuplicates?: boolean
  }

  export type ReviewCreateWithoutTicketInput = {
    desc?: string | null
    rating?: number
    isValid: DetailTransactionCreateNestedOneWithoutReviewInput
    event: EventCreateNestedOneWithoutReviewInput
    user: UserCreateNestedOneWithoutReviewInput
  }

  export type ReviewUncheckedCreateWithoutTicketInput = {
    id?: number
    desc?: string | null
    rating?: number
    userId: string
    eventId: number
    transactionId: number
  }

  export type ReviewCreateOrConnectWithoutTicketInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutTicketInput, ReviewUncheckedCreateWithoutTicketInput>
  }

  export type ReviewCreateManyTicketInputEnvelope = {
    data: ReviewCreateManyTicketInput | ReviewCreateManyTicketInput[]
    skipDuplicates?: boolean
  }

  export type PromotorUpsertWithoutTicketInput = {
    update: XOR<PromotorUpdateWithoutTicketInput, PromotorUncheckedUpdateWithoutTicketInput>
    create: XOR<PromotorCreateWithoutTicketInput, PromotorUncheckedCreateWithoutTicketInput>
    where?: PromotorWhereInput
  }

  export type PromotorUpdateToOneWithWhereWithoutTicketInput = {
    where?: PromotorWhereInput
    data: XOR<PromotorUpdateWithoutTicketInput, PromotorUncheckedUpdateWithoutTicketInput>
  }

  export type PromotorUpdateWithoutTicketInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    isVerify?: BoolFieldUpdateOperationsInput | boolean
    event?: EventUpdateManyWithoutPromotorNestedInput
  }

  export type PromotorUncheckedUpdateWithoutTicketInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    isVerify?: BoolFieldUpdateOperationsInput | boolean
    event?: EventUncheckedUpdateManyWithoutPromotorNestedInput
  }

  export type EventUpsertWithoutTicketInput = {
    update: XOR<EventUpdateWithoutTicketInput, EventUncheckedUpdateWithoutTicketInput>
    create: XOR<EventCreateWithoutTicketInput, EventUncheckedCreateWithoutTicketInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutTicketInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutTicketInput, EventUncheckedUpdateWithoutTicketInput>
  }

  export type EventUpdateWithoutTicketInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: EnumEventCategoryFieldUpdateOperationsInput | $Enums.EventCategory
    location?: EnumLocationFieldUpdateOperationsInput | $Enums.Location
    venue?: StringFieldUpdateOperationsInput | string
    mapURL?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    thumbnail?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    slug?: StringFieldUpdateOperationsInput | string
    Promotor?: PromotorUpdateOneRequiredWithoutEventNestedInput
    DetailTransaction?: DetailTransactionUpdateManyWithoutEventNestedInput
    review?: ReviewUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutTicketInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: EnumEventCategoryFieldUpdateOperationsInput | $Enums.EventCategory
    location?: EnumLocationFieldUpdateOperationsInput | $Enums.Location
    venue?: StringFieldUpdateOperationsInput | string
    mapURL?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    thumbnail?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    slug?: StringFieldUpdateOperationsInput | string
    promotorId?: IntFieldUpdateOperationsInput | number
    DetailTransaction?: DetailTransactionUncheckedUpdateManyWithoutEventNestedInput
    review?: ReviewUncheckedUpdateManyWithoutEventNestedInput
  }

  export type TransactionUpsertWithWhereUniqueWithoutTicketInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutTicketInput, TransactionUncheckedUpdateWithoutTicketInput>
    create: XOR<TransactionCreateWithoutTicketInput, TransactionUncheckedCreateWithoutTicketInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutTicketInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutTicketInput, TransactionUncheckedUpdateWithoutTicketInput>
  }

  export type TransactionUpdateManyWithWhereWithoutTicketInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutTicketInput>
  }

  export type TransactionScalarWhereInput = {
    AND?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    OR?: TransactionScalarWhereInput[]
    NOT?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    id?: IntFilter<"Transaction"> | number
    basePrice?: IntFilter<"Transaction"> | number
    totalPrice?: IntFilter<"Transaction"> | number
    finalPrice?: IntFilter<"Transaction"> | number
    status?: EnumTransactionStatusFilter<"Transaction"> | $Enums.TransactionStatus
    userId?: StringFilter<"Transaction"> | string
    userVoucher?: IntNullableFilter<"Transaction"> | number | null
    userPoints?: IntNullableFilter<"Transaction"> | number | null
    discount?: IntNullableFilter<"Transaction"> | number | null
    ticketId?: IntFilter<"Transaction"> | number
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    expiresAt?: DateTimeFilter<"Transaction"> | Date | string
    qty?: IntFilter<"Transaction"> | number
    promoQuota?: IntFilter<"Transaction"> | number
    redirect_url?: StringNullableFilter<"Transaction"> | string | null
  }

  export type DetailTransactionUpsertWithWhereUniqueWithoutTicketInput = {
    where: DetailTransactionWhereUniqueInput
    update: XOR<DetailTransactionUpdateWithoutTicketInput, DetailTransactionUncheckedUpdateWithoutTicketInput>
    create: XOR<DetailTransactionCreateWithoutTicketInput, DetailTransactionUncheckedCreateWithoutTicketInput>
  }

  export type DetailTransactionUpdateWithWhereUniqueWithoutTicketInput = {
    where: DetailTransactionWhereUniqueInput
    data: XOR<DetailTransactionUpdateWithoutTicketInput, DetailTransactionUncheckedUpdateWithoutTicketInput>
  }

  export type DetailTransactionUpdateManyWithWhereWithoutTicketInput = {
    where: DetailTransactionScalarWhereInput
    data: XOR<DetailTransactionUpdateManyMutationInput, DetailTransactionUncheckedUpdateManyWithoutTicketInput>
  }

  export type ReviewUpsertWithWhereUniqueWithoutTicketInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutTicketInput, ReviewUncheckedUpdateWithoutTicketInput>
    create: XOR<ReviewCreateWithoutTicketInput, ReviewUncheckedCreateWithoutTicketInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutTicketInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutTicketInput, ReviewUncheckedUpdateWithoutTicketInput>
  }

  export type ReviewUpdateManyWithWhereWithoutTicketInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutTicketInput>
  }

  export type DetailTransactionCreateWithoutTransactionInput = {
    reviewStatus: boolean
    review?: ReviewCreateNestedManyWithoutIsValidInput
    ticket: TicketCreateNestedOneWithoutDetailTransactionInput
    event: EventCreateNestedOneWithoutDetailTransactionInput
  }

  export type DetailTransactionUncheckedCreateWithoutTransactionInput = {
    id?: number
    eventId: number
    ticketId: number
    reviewStatus: boolean
    review?: ReviewUncheckedCreateNestedManyWithoutIsValidInput
  }

  export type DetailTransactionCreateOrConnectWithoutTransactionInput = {
    where: DetailTransactionWhereUniqueInput
    create: XOR<DetailTransactionCreateWithoutTransactionInput, DetailTransactionUncheckedCreateWithoutTransactionInput>
  }

  export type DetailTransactionCreateManyTransactionInputEnvelope = {
    data: DetailTransactionCreateManyTransactionInput | DetailTransactionCreateManyTransactionInput[]
    skipDuplicates?: boolean
  }

  export type TicketCreateWithoutTransactionInput = {
    price: number
    category: $Enums.TicketCategory
    startDate?: Date | string
    endDate: Date | string
    isActive?: boolean
    discount?: boolean
    quota?: number
    Promotor: PromotorCreateNestedOneWithoutTicketInput
    event: EventCreateNestedOneWithoutTicketInput
    DetailTransaction?: DetailTransactionCreateNestedManyWithoutTicketInput
    review?: ReviewCreateNestedManyWithoutTicketInput
  }

  export type TicketUncheckedCreateWithoutTransactionInput = {
    id?: number
    eventId: number
    price: number
    category: $Enums.TicketCategory
    startDate?: Date | string
    endDate: Date | string
    isActive?: boolean
    discount?: boolean
    quota?: number
    promotorId: number
    DetailTransaction?: DetailTransactionUncheckedCreateNestedManyWithoutTicketInput
    review?: ReviewUncheckedCreateNestedManyWithoutTicketInput
  }

  export type TicketCreateOrConnectWithoutTransactionInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutTransactionInput, TicketUncheckedCreateWithoutTransactionInput>
  }

  export type UserCreateWithoutTransactionInput = {
    id?: string
    username: string
    email: string
    password: string
    avatar?: string
    isVerify?: boolean
    refCode?: string | null
    reffered_by?: string | null
    UserId?: referralVoucherCreateNestedManyWithoutUserInput
    userPoints?: userPointsCreateNestedManyWithoutUserInput
    Review?: ReviewCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTransactionInput = {
    id?: string
    username: string
    email: string
    password: string
    avatar?: string
    isVerify?: boolean
    refCode?: string | null
    reffered_by?: string | null
    UserId?: referralVoucherUncheckedCreateNestedManyWithoutUserInput
    userPoints?: userPointsUncheckedCreateNestedManyWithoutUserInput
    Review?: ReviewUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTransactionInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTransactionInput, UserUncheckedCreateWithoutTransactionInput>
  }

  export type userPointsCreateWithoutDiscountInput = {
    points?: number | null
    expiresAt: Date | string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutUserPointsInput
  }

  export type userPointsUncheckedCreateWithoutDiscountInput = {
    id?: number
    points?: number | null
    expiresAt: Date | string
    createdAt?: Date | string
    userId: string
  }

  export type userPointsCreateOrConnectWithoutDiscountInput = {
    where: userPointsWhereUniqueInput
    create: XOR<userPointsCreateWithoutDiscountInput, userPointsUncheckedCreateWithoutDiscountInput>
  }

  export type referralVoucherCreateWithoutDiscountInput = {
    createdAt?: Date | string
    expiresAt: Date | string
    user: UserCreateNestedOneWithoutUserIdInput
  }

  export type referralVoucherUncheckedCreateWithoutDiscountInput = {
    id?: number
    userId: string
    createdAt?: Date | string
    expiresAt: Date | string
  }

  export type referralVoucherCreateOrConnectWithoutDiscountInput = {
    where: referralVoucherWhereUniqueInput
    create: XOR<referralVoucherCreateWithoutDiscountInput, referralVoucherUncheckedCreateWithoutDiscountInput>
  }

  export type DetailTransactionUpsertWithWhereUniqueWithoutTransactionInput = {
    where: DetailTransactionWhereUniqueInput
    update: XOR<DetailTransactionUpdateWithoutTransactionInput, DetailTransactionUncheckedUpdateWithoutTransactionInput>
    create: XOR<DetailTransactionCreateWithoutTransactionInput, DetailTransactionUncheckedCreateWithoutTransactionInput>
  }

  export type DetailTransactionUpdateWithWhereUniqueWithoutTransactionInput = {
    where: DetailTransactionWhereUniqueInput
    data: XOR<DetailTransactionUpdateWithoutTransactionInput, DetailTransactionUncheckedUpdateWithoutTransactionInput>
  }

  export type DetailTransactionUpdateManyWithWhereWithoutTransactionInput = {
    where: DetailTransactionScalarWhereInput
    data: XOR<DetailTransactionUpdateManyMutationInput, DetailTransactionUncheckedUpdateManyWithoutTransactionInput>
  }

  export type TicketUpsertWithoutTransactionInput = {
    update: XOR<TicketUpdateWithoutTransactionInput, TicketUncheckedUpdateWithoutTransactionInput>
    create: XOR<TicketCreateWithoutTransactionInput, TicketUncheckedCreateWithoutTransactionInput>
    where?: TicketWhereInput
  }

  export type TicketUpdateToOneWithWhereWithoutTransactionInput = {
    where?: TicketWhereInput
    data: XOR<TicketUpdateWithoutTransactionInput, TicketUncheckedUpdateWithoutTransactionInput>
  }

  export type TicketUpdateWithoutTransactionInput = {
    price?: IntFieldUpdateOperationsInput | number
    category?: EnumTicketCategoryFieldUpdateOperationsInput | $Enums.TicketCategory
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    discount?: BoolFieldUpdateOperationsInput | boolean
    quota?: IntFieldUpdateOperationsInput | number
    Promotor?: PromotorUpdateOneRequiredWithoutTicketNestedInput
    event?: EventUpdateOneRequiredWithoutTicketNestedInput
    DetailTransaction?: DetailTransactionUpdateManyWithoutTicketNestedInput
    review?: ReviewUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateWithoutTransactionInput = {
    id?: IntFieldUpdateOperationsInput | number
    eventId?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    category?: EnumTicketCategoryFieldUpdateOperationsInput | $Enums.TicketCategory
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    discount?: BoolFieldUpdateOperationsInput | boolean
    quota?: IntFieldUpdateOperationsInput | number
    promotorId?: IntFieldUpdateOperationsInput | number
    DetailTransaction?: DetailTransactionUncheckedUpdateManyWithoutTicketNestedInput
    review?: ReviewUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type UserUpsertWithoutTransactionInput = {
    update: XOR<UserUpdateWithoutTransactionInput, UserUncheckedUpdateWithoutTransactionInput>
    create: XOR<UserCreateWithoutTransactionInput, UserUncheckedCreateWithoutTransactionInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTransactionInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTransactionInput, UserUncheckedUpdateWithoutTransactionInput>
  }

  export type UserUpdateWithoutTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    isVerify?: BoolFieldUpdateOperationsInput | boolean
    refCode?: NullableStringFieldUpdateOperationsInput | string | null
    reffered_by?: NullableStringFieldUpdateOperationsInput | string | null
    UserId?: referralVoucherUpdateManyWithoutUserNestedInput
    userPoints?: userPointsUpdateManyWithoutUserNestedInput
    Review?: ReviewUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    isVerify?: BoolFieldUpdateOperationsInput | boolean
    refCode?: NullableStringFieldUpdateOperationsInput | string | null
    reffered_by?: NullableStringFieldUpdateOperationsInput | string | null
    UserId?: referralVoucherUncheckedUpdateManyWithoutUserNestedInput
    userPoints?: userPointsUncheckedUpdateManyWithoutUserNestedInput
    Review?: ReviewUncheckedUpdateManyWithoutUserNestedInput
  }

  export type userPointsUpsertWithoutDiscountInput = {
    update: XOR<userPointsUpdateWithoutDiscountInput, userPointsUncheckedUpdateWithoutDiscountInput>
    create: XOR<userPointsCreateWithoutDiscountInput, userPointsUncheckedCreateWithoutDiscountInput>
    where?: userPointsWhereInput
  }

  export type userPointsUpdateToOneWithWhereWithoutDiscountInput = {
    where?: userPointsWhereInput
    data: XOR<userPointsUpdateWithoutDiscountInput, userPointsUncheckedUpdateWithoutDiscountInput>
  }

  export type userPointsUpdateWithoutDiscountInput = {
    points?: NullableIntFieldUpdateOperationsInput | number | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserPointsNestedInput
  }

  export type userPointsUncheckedUpdateWithoutDiscountInput = {
    id?: IntFieldUpdateOperationsInput | number
    points?: NullableIntFieldUpdateOperationsInput | number | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type referralVoucherUpsertWithoutDiscountInput = {
    update: XOR<referralVoucherUpdateWithoutDiscountInput, referralVoucherUncheckedUpdateWithoutDiscountInput>
    create: XOR<referralVoucherCreateWithoutDiscountInput, referralVoucherUncheckedCreateWithoutDiscountInput>
    where?: referralVoucherWhereInput
  }

  export type referralVoucherUpdateToOneWithWhereWithoutDiscountInput = {
    where?: referralVoucherWhereInput
    data: XOR<referralVoucherUpdateWithoutDiscountInput, referralVoucherUncheckedUpdateWithoutDiscountInput>
  }

  export type referralVoucherUpdateWithoutDiscountInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserIdNestedInput
  }

  export type referralVoucherUncheckedUpdateWithoutDiscountInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateWithoutIsValidInput = {
    desc?: string | null
    rating?: number
    event: EventCreateNestedOneWithoutReviewInput
    user: UserCreateNestedOneWithoutReviewInput
    Ticket?: TicketCreateNestedOneWithoutReviewInput
  }

  export type ReviewUncheckedCreateWithoutIsValidInput = {
    id?: number
    desc?: string | null
    rating?: number
    userId: string
    eventId: number
    ticketId?: number | null
  }

  export type ReviewCreateOrConnectWithoutIsValidInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutIsValidInput, ReviewUncheckedCreateWithoutIsValidInput>
  }

  export type ReviewCreateManyIsValidInputEnvelope = {
    data: ReviewCreateManyIsValidInput | ReviewCreateManyIsValidInput[]
    skipDuplicates?: boolean
  }

  export type TicketCreateWithoutDetailTransactionInput = {
    price: number
    category: $Enums.TicketCategory
    startDate?: Date | string
    endDate: Date | string
    isActive?: boolean
    discount?: boolean
    quota?: number
    Promotor: PromotorCreateNestedOneWithoutTicketInput
    event: EventCreateNestedOneWithoutTicketInput
    transaction?: TransactionCreateNestedManyWithoutTicketInput
    review?: ReviewCreateNestedManyWithoutTicketInput
  }

  export type TicketUncheckedCreateWithoutDetailTransactionInput = {
    id?: number
    eventId: number
    price: number
    category: $Enums.TicketCategory
    startDate?: Date | string
    endDate: Date | string
    isActive?: boolean
    discount?: boolean
    quota?: number
    promotorId: number
    transaction?: TransactionUncheckedCreateNestedManyWithoutTicketInput
    review?: ReviewUncheckedCreateNestedManyWithoutTicketInput
  }

  export type TicketCreateOrConnectWithoutDetailTransactionInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutDetailTransactionInput, TicketUncheckedCreateWithoutDetailTransactionInput>
  }

  export type EventCreateWithoutDetailTransactionInput = {
    title: string
    description: string
    category: $Enums.EventCategory
    location: $Enums.Location
    venue: string
    mapURL: string
    date: Date | string
    time: Date | string
    type: $Enums.EventType
    thumbnail: string
    isActive?: boolean
    slug: string
    Promotor: PromotorCreateNestedOneWithoutEventInput
    ticket?: TicketCreateNestedManyWithoutEventInput
    review?: ReviewCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutDetailTransactionInput = {
    id?: number
    title: string
    description: string
    category: $Enums.EventCategory
    location: $Enums.Location
    venue: string
    mapURL: string
    date: Date | string
    time: Date | string
    type: $Enums.EventType
    thumbnail: string
    isActive?: boolean
    slug: string
    promotorId: number
    ticket?: TicketUncheckedCreateNestedManyWithoutEventInput
    review?: ReviewUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutDetailTransactionInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutDetailTransactionInput, EventUncheckedCreateWithoutDetailTransactionInput>
  }

  export type TransactionCreateWithoutDetailTransactionInput = {
    basePrice: number
    totalPrice: number
    finalPrice: number
    status?: $Enums.TransactionStatus
    discount?: number | null
    createdAt?: Date | string
    expiresAt: Date | string
    qty: number
    promoQuota?: number
    redirect_url?: string | null
    ticket: TicketCreateNestedOneWithoutTransactionInput
    user: UserCreateNestedOneWithoutTransactionInput
    points?: userPointsCreateNestedOneWithoutDiscountInput
    voucher?: referralVoucherCreateNestedOneWithoutDiscountInput
  }

  export type TransactionUncheckedCreateWithoutDetailTransactionInput = {
    id?: number
    basePrice: number
    totalPrice: number
    finalPrice: number
    status?: $Enums.TransactionStatus
    userId: string
    userVoucher?: number | null
    userPoints?: number | null
    discount?: number | null
    ticketId: number
    createdAt?: Date | string
    expiresAt: Date | string
    qty: number
    promoQuota?: number
    redirect_url?: string | null
  }

  export type TransactionCreateOrConnectWithoutDetailTransactionInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutDetailTransactionInput, TransactionUncheckedCreateWithoutDetailTransactionInput>
  }

  export type ReviewUpsertWithWhereUniqueWithoutIsValidInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutIsValidInput, ReviewUncheckedUpdateWithoutIsValidInput>
    create: XOR<ReviewCreateWithoutIsValidInput, ReviewUncheckedCreateWithoutIsValidInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutIsValidInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutIsValidInput, ReviewUncheckedUpdateWithoutIsValidInput>
  }

  export type ReviewUpdateManyWithWhereWithoutIsValidInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutIsValidInput>
  }

  export type TicketUpsertWithoutDetailTransactionInput = {
    update: XOR<TicketUpdateWithoutDetailTransactionInput, TicketUncheckedUpdateWithoutDetailTransactionInput>
    create: XOR<TicketCreateWithoutDetailTransactionInput, TicketUncheckedCreateWithoutDetailTransactionInput>
    where?: TicketWhereInput
  }

  export type TicketUpdateToOneWithWhereWithoutDetailTransactionInput = {
    where?: TicketWhereInput
    data: XOR<TicketUpdateWithoutDetailTransactionInput, TicketUncheckedUpdateWithoutDetailTransactionInput>
  }

  export type TicketUpdateWithoutDetailTransactionInput = {
    price?: IntFieldUpdateOperationsInput | number
    category?: EnumTicketCategoryFieldUpdateOperationsInput | $Enums.TicketCategory
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    discount?: BoolFieldUpdateOperationsInput | boolean
    quota?: IntFieldUpdateOperationsInput | number
    Promotor?: PromotorUpdateOneRequiredWithoutTicketNestedInput
    event?: EventUpdateOneRequiredWithoutTicketNestedInput
    transaction?: TransactionUpdateManyWithoutTicketNestedInput
    review?: ReviewUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateWithoutDetailTransactionInput = {
    id?: IntFieldUpdateOperationsInput | number
    eventId?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    category?: EnumTicketCategoryFieldUpdateOperationsInput | $Enums.TicketCategory
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    discount?: BoolFieldUpdateOperationsInput | boolean
    quota?: IntFieldUpdateOperationsInput | number
    promotorId?: IntFieldUpdateOperationsInput | number
    transaction?: TransactionUncheckedUpdateManyWithoutTicketNestedInput
    review?: ReviewUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type EventUpsertWithoutDetailTransactionInput = {
    update: XOR<EventUpdateWithoutDetailTransactionInput, EventUncheckedUpdateWithoutDetailTransactionInput>
    create: XOR<EventCreateWithoutDetailTransactionInput, EventUncheckedCreateWithoutDetailTransactionInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutDetailTransactionInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutDetailTransactionInput, EventUncheckedUpdateWithoutDetailTransactionInput>
  }

  export type EventUpdateWithoutDetailTransactionInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: EnumEventCategoryFieldUpdateOperationsInput | $Enums.EventCategory
    location?: EnumLocationFieldUpdateOperationsInput | $Enums.Location
    venue?: StringFieldUpdateOperationsInput | string
    mapURL?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    thumbnail?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    slug?: StringFieldUpdateOperationsInput | string
    Promotor?: PromotorUpdateOneRequiredWithoutEventNestedInput
    ticket?: TicketUpdateManyWithoutEventNestedInput
    review?: ReviewUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutDetailTransactionInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: EnumEventCategoryFieldUpdateOperationsInput | $Enums.EventCategory
    location?: EnumLocationFieldUpdateOperationsInput | $Enums.Location
    venue?: StringFieldUpdateOperationsInput | string
    mapURL?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    thumbnail?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    slug?: StringFieldUpdateOperationsInput | string
    promotorId?: IntFieldUpdateOperationsInput | number
    ticket?: TicketUncheckedUpdateManyWithoutEventNestedInput
    review?: ReviewUncheckedUpdateManyWithoutEventNestedInput
  }

  export type TransactionUpsertWithoutDetailTransactionInput = {
    update: XOR<TransactionUpdateWithoutDetailTransactionInput, TransactionUncheckedUpdateWithoutDetailTransactionInput>
    create: XOR<TransactionCreateWithoutDetailTransactionInput, TransactionUncheckedCreateWithoutDetailTransactionInput>
    where?: TransactionWhereInput
  }

  export type TransactionUpdateToOneWithWhereWithoutDetailTransactionInput = {
    where?: TransactionWhereInput
    data: XOR<TransactionUpdateWithoutDetailTransactionInput, TransactionUncheckedUpdateWithoutDetailTransactionInput>
  }

  export type TransactionUpdateWithoutDetailTransactionInput = {
    basePrice?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    finalPrice?: IntFieldUpdateOperationsInput | number
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    discount?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    qty?: IntFieldUpdateOperationsInput | number
    promoQuota?: IntFieldUpdateOperationsInput | number
    redirect_url?: NullableStringFieldUpdateOperationsInput | string | null
    ticket?: TicketUpdateOneRequiredWithoutTransactionNestedInput
    user?: UserUpdateOneRequiredWithoutTransactionNestedInput
    points?: userPointsUpdateOneWithoutDiscountNestedInput
    voucher?: referralVoucherUpdateOneWithoutDiscountNestedInput
  }

  export type TransactionUncheckedUpdateWithoutDetailTransactionInput = {
    id?: IntFieldUpdateOperationsInput | number
    basePrice?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    finalPrice?: IntFieldUpdateOperationsInput | number
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    userId?: StringFieldUpdateOperationsInput | string
    userVoucher?: NullableIntFieldUpdateOperationsInput | number | null
    userPoints?: NullableIntFieldUpdateOperationsInput | number | null
    discount?: NullableIntFieldUpdateOperationsInput | number | null
    ticketId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    qty?: IntFieldUpdateOperationsInput | number
    promoQuota?: IntFieldUpdateOperationsInput | number
    redirect_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DetailTransactionCreateWithoutReviewInput = {
    reviewStatus: boolean
    ticket: TicketCreateNestedOneWithoutDetailTransactionInput
    event: EventCreateNestedOneWithoutDetailTransactionInput
    transaction: TransactionCreateNestedOneWithoutDetailTransactionInput
  }

  export type DetailTransactionUncheckedCreateWithoutReviewInput = {
    id?: number
    transactionId: number
    eventId: number
    ticketId: number
    reviewStatus: boolean
  }

  export type DetailTransactionCreateOrConnectWithoutReviewInput = {
    where: DetailTransactionWhereUniqueInput
    create: XOR<DetailTransactionCreateWithoutReviewInput, DetailTransactionUncheckedCreateWithoutReviewInput>
  }

  export type EventCreateWithoutReviewInput = {
    title: string
    description: string
    category: $Enums.EventCategory
    location: $Enums.Location
    venue: string
    mapURL: string
    date: Date | string
    time: Date | string
    type: $Enums.EventType
    thumbnail: string
    isActive?: boolean
    slug: string
    Promotor: PromotorCreateNestedOneWithoutEventInput
    ticket?: TicketCreateNestedManyWithoutEventInput
    DetailTransaction?: DetailTransactionCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutReviewInput = {
    id?: number
    title: string
    description: string
    category: $Enums.EventCategory
    location: $Enums.Location
    venue: string
    mapURL: string
    date: Date | string
    time: Date | string
    type: $Enums.EventType
    thumbnail: string
    isActive?: boolean
    slug: string
    promotorId: number
    ticket?: TicketUncheckedCreateNestedManyWithoutEventInput
    DetailTransaction?: DetailTransactionUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutReviewInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutReviewInput, EventUncheckedCreateWithoutReviewInput>
  }

  export type UserCreateWithoutReviewInput = {
    id?: string
    username: string
    email: string
    password: string
    avatar?: string
    isVerify?: boolean
    refCode?: string | null
    reffered_by?: string | null
    Transaction?: TransactionCreateNestedManyWithoutUserInput
    UserId?: referralVoucherCreateNestedManyWithoutUserInput
    userPoints?: userPointsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReviewInput = {
    id?: string
    username: string
    email: string
    password: string
    avatar?: string
    isVerify?: boolean
    refCode?: string | null
    reffered_by?: string | null
    Transaction?: TransactionUncheckedCreateNestedManyWithoutUserInput
    UserId?: referralVoucherUncheckedCreateNestedManyWithoutUserInput
    userPoints?: userPointsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReviewInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReviewInput, UserUncheckedCreateWithoutReviewInput>
  }

  export type TicketCreateWithoutReviewInput = {
    price: number
    category: $Enums.TicketCategory
    startDate?: Date | string
    endDate: Date | string
    isActive?: boolean
    discount?: boolean
    quota?: number
    Promotor: PromotorCreateNestedOneWithoutTicketInput
    event: EventCreateNestedOneWithoutTicketInput
    transaction?: TransactionCreateNestedManyWithoutTicketInput
    DetailTransaction?: DetailTransactionCreateNestedManyWithoutTicketInput
  }

  export type TicketUncheckedCreateWithoutReviewInput = {
    id?: number
    eventId: number
    price: number
    category: $Enums.TicketCategory
    startDate?: Date | string
    endDate: Date | string
    isActive?: boolean
    discount?: boolean
    quota?: number
    promotorId: number
    transaction?: TransactionUncheckedCreateNestedManyWithoutTicketInput
    DetailTransaction?: DetailTransactionUncheckedCreateNestedManyWithoutTicketInput
  }

  export type TicketCreateOrConnectWithoutReviewInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutReviewInput, TicketUncheckedCreateWithoutReviewInput>
  }

  export type DetailTransactionUpsertWithoutReviewInput = {
    update: XOR<DetailTransactionUpdateWithoutReviewInput, DetailTransactionUncheckedUpdateWithoutReviewInput>
    create: XOR<DetailTransactionCreateWithoutReviewInput, DetailTransactionUncheckedCreateWithoutReviewInput>
    where?: DetailTransactionWhereInput
  }

  export type DetailTransactionUpdateToOneWithWhereWithoutReviewInput = {
    where?: DetailTransactionWhereInput
    data: XOR<DetailTransactionUpdateWithoutReviewInput, DetailTransactionUncheckedUpdateWithoutReviewInput>
  }

  export type DetailTransactionUpdateWithoutReviewInput = {
    reviewStatus?: BoolFieldUpdateOperationsInput | boolean
    ticket?: TicketUpdateOneRequiredWithoutDetailTransactionNestedInput
    event?: EventUpdateOneRequiredWithoutDetailTransactionNestedInput
    transaction?: TransactionUpdateOneRequiredWithoutDetailTransactionNestedInput
  }

  export type DetailTransactionUncheckedUpdateWithoutReviewInput = {
    id?: IntFieldUpdateOperationsInput | number
    transactionId?: IntFieldUpdateOperationsInput | number
    eventId?: IntFieldUpdateOperationsInput | number
    ticketId?: IntFieldUpdateOperationsInput | number
    reviewStatus?: BoolFieldUpdateOperationsInput | boolean
  }

  export type EventUpsertWithoutReviewInput = {
    update: XOR<EventUpdateWithoutReviewInput, EventUncheckedUpdateWithoutReviewInput>
    create: XOR<EventCreateWithoutReviewInput, EventUncheckedCreateWithoutReviewInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutReviewInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutReviewInput, EventUncheckedUpdateWithoutReviewInput>
  }

  export type EventUpdateWithoutReviewInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: EnumEventCategoryFieldUpdateOperationsInput | $Enums.EventCategory
    location?: EnumLocationFieldUpdateOperationsInput | $Enums.Location
    venue?: StringFieldUpdateOperationsInput | string
    mapURL?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    thumbnail?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    slug?: StringFieldUpdateOperationsInput | string
    Promotor?: PromotorUpdateOneRequiredWithoutEventNestedInput
    ticket?: TicketUpdateManyWithoutEventNestedInput
    DetailTransaction?: DetailTransactionUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutReviewInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: EnumEventCategoryFieldUpdateOperationsInput | $Enums.EventCategory
    location?: EnumLocationFieldUpdateOperationsInput | $Enums.Location
    venue?: StringFieldUpdateOperationsInput | string
    mapURL?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    thumbnail?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    slug?: StringFieldUpdateOperationsInput | string
    promotorId?: IntFieldUpdateOperationsInput | number
    ticket?: TicketUncheckedUpdateManyWithoutEventNestedInput
    DetailTransaction?: DetailTransactionUncheckedUpdateManyWithoutEventNestedInput
  }

  export type UserUpsertWithoutReviewInput = {
    update: XOR<UserUpdateWithoutReviewInput, UserUncheckedUpdateWithoutReviewInput>
    create: XOR<UserCreateWithoutReviewInput, UserUncheckedCreateWithoutReviewInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReviewInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReviewInput, UserUncheckedUpdateWithoutReviewInput>
  }

  export type UserUpdateWithoutReviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    isVerify?: BoolFieldUpdateOperationsInput | boolean
    refCode?: NullableStringFieldUpdateOperationsInput | string | null
    reffered_by?: NullableStringFieldUpdateOperationsInput | string | null
    Transaction?: TransactionUpdateManyWithoutUserNestedInput
    UserId?: referralVoucherUpdateManyWithoutUserNestedInput
    userPoints?: userPointsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    isVerify?: BoolFieldUpdateOperationsInput | boolean
    refCode?: NullableStringFieldUpdateOperationsInput | string | null
    reffered_by?: NullableStringFieldUpdateOperationsInput | string | null
    Transaction?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    UserId?: referralVoucherUncheckedUpdateManyWithoutUserNestedInput
    userPoints?: userPointsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TicketUpsertWithoutReviewInput = {
    update: XOR<TicketUpdateWithoutReviewInput, TicketUncheckedUpdateWithoutReviewInput>
    create: XOR<TicketCreateWithoutReviewInput, TicketUncheckedCreateWithoutReviewInput>
    where?: TicketWhereInput
  }

  export type TicketUpdateToOneWithWhereWithoutReviewInput = {
    where?: TicketWhereInput
    data: XOR<TicketUpdateWithoutReviewInput, TicketUncheckedUpdateWithoutReviewInput>
  }

  export type TicketUpdateWithoutReviewInput = {
    price?: IntFieldUpdateOperationsInput | number
    category?: EnumTicketCategoryFieldUpdateOperationsInput | $Enums.TicketCategory
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    discount?: BoolFieldUpdateOperationsInput | boolean
    quota?: IntFieldUpdateOperationsInput | number
    Promotor?: PromotorUpdateOneRequiredWithoutTicketNestedInput
    event?: EventUpdateOneRequiredWithoutTicketNestedInput
    transaction?: TransactionUpdateManyWithoutTicketNestedInput
    DetailTransaction?: DetailTransactionUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateWithoutReviewInput = {
    id?: IntFieldUpdateOperationsInput | number
    eventId?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    category?: EnumTicketCategoryFieldUpdateOperationsInput | $Enums.TicketCategory
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    discount?: BoolFieldUpdateOperationsInput | boolean
    quota?: IntFieldUpdateOperationsInput | number
    promotorId?: IntFieldUpdateOperationsInput | number
    transaction?: TransactionUncheckedUpdateManyWithoutTicketNestedInput
    DetailTransaction?: DetailTransactionUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type TransactionCreateWithoutUserInput = {
    basePrice: number
    totalPrice: number
    finalPrice: number
    status?: $Enums.TransactionStatus
    discount?: number | null
<<<<<<< HEAD
=======

>>>>>>> 86a465382dd362a0e65e14019e447344695382d4
    createdAt?: Date | string
    expiresAt: Date | string
    qty: number
    promoQuota?: number
    redirect_url?: string | null
    DetailTransaction?: DetailTransactionCreateNestedManyWithoutTransactionInput
    ticket: TicketCreateNestedOneWithoutTransactionInput
    points?: userPointsCreateNestedOneWithoutDiscountInput
    voucher?: referralVoucherCreateNestedOneWithoutDiscountInput
  }

  export type TransactionUncheckedCreateWithoutUserInput = {
    id?: number
    basePrice: number
    totalPrice: number
    finalPrice: number
    status?: $Enums.TransactionStatus
    userVoucher?: number | null
    userPoints?: number | null
    discount?: number | null
    ticketId: number
    createdAt?: Date | string
    expiresAt: Date | string
    qty: number
    promoQuota?: number
    redirect_url?: string | null
    DetailTransaction?: DetailTransactionUncheckedCreateNestedManyWithoutTransactionInput
  }

  export type TransactionCreateOrConnectWithoutUserInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput>
  }

  export type TransactionCreateManyUserInputEnvelope = {
    data: TransactionCreateManyUserInput | TransactionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type referralVoucherCreateWithoutUserInput = {
    createdAt?: Date | string
    expiresAt: Date | string
    discount?: TransactionCreateNestedManyWithoutVoucherInput
  }

  export type referralVoucherUncheckedCreateWithoutUserInput = {
    id?: number
    createdAt?: Date | string
    expiresAt: Date | string
    discount?: TransactionUncheckedCreateNestedManyWithoutVoucherInput
  }

  export type referralVoucherCreateOrConnectWithoutUserInput = {
    where: referralVoucherWhereUniqueInput
    create: XOR<referralVoucherCreateWithoutUserInput, referralVoucherUncheckedCreateWithoutUserInput>
  }

  export type referralVoucherCreateManyUserInputEnvelope = {
    data: referralVoucherCreateManyUserInput | referralVoucherCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type userPointsCreateWithoutUserInput = {
    points?: number | null
    expiresAt: Date | string
    createdAt?: Date | string
    discount?: TransactionCreateNestedManyWithoutPointsInput
  }

  export type userPointsUncheckedCreateWithoutUserInput = {
    id?: number
    points?: number | null
    expiresAt: Date | string
    createdAt?: Date | string
    discount?: TransactionUncheckedCreateNestedManyWithoutPointsInput
  }

  export type userPointsCreateOrConnectWithoutUserInput = {
    where: userPointsWhereUniqueInput
    create: XOR<userPointsCreateWithoutUserInput, userPointsUncheckedCreateWithoutUserInput>
  }

  export type userPointsCreateManyUserInputEnvelope = {
    data: userPointsCreateManyUserInput | userPointsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ReviewCreateWithoutUserInput = {
    desc?: string | null
    rating?: number
    isValid: DetailTransactionCreateNestedOneWithoutReviewInput
    event: EventCreateNestedOneWithoutReviewInput
    Ticket?: TicketCreateNestedOneWithoutReviewInput
  }

  export type ReviewUncheckedCreateWithoutUserInput = {
    id?: number
    desc?: string | null
    rating?: number
    eventId: number
    transactionId: number
    ticketId?: number | null
  }

  export type ReviewCreateOrConnectWithoutUserInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput>
  }

  export type ReviewCreateManyUserInputEnvelope = {
    data: ReviewCreateManyUserInput | ReviewCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TransactionUpsertWithWhereUniqueWithoutUserInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutUserInput, TransactionUncheckedUpdateWithoutUserInput>
    create: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutUserInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutUserInput, TransactionUncheckedUpdateWithoutUserInput>
  }

  export type TransactionUpdateManyWithWhereWithoutUserInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutUserInput>
  }

  export type referralVoucherUpsertWithWhereUniqueWithoutUserInput = {
    where: referralVoucherWhereUniqueInput
    update: XOR<referralVoucherUpdateWithoutUserInput, referralVoucherUncheckedUpdateWithoutUserInput>
    create: XOR<referralVoucherCreateWithoutUserInput, referralVoucherUncheckedCreateWithoutUserInput>
  }

  export type referralVoucherUpdateWithWhereUniqueWithoutUserInput = {
    where: referralVoucherWhereUniqueInput
    data: XOR<referralVoucherUpdateWithoutUserInput, referralVoucherUncheckedUpdateWithoutUserInput>
  }

  export type referralVoucherUpdateManyWithWhereWithoutUserInput = {
    where: referralVoucherScalarWhereInput
    data: XOR<referralVoucherUpdateManyMutationInput, referralVoucherUncheckedUpdateManyWithoutUserInput>
  }

  export type referralVoucherScalarWhereInput = {
    AND?: referralVoucherScalarWhereInput | referralVoucherScalarWhereInput[]
    OR?: referralVoucherScalarWhereInput[]
    NOT?: referralVoucherScalarWhereInput | referralVoucherScalarWhereInput[]
    id?: IntFilter<"referralVoucher"> | number
    userId?: StringFilter<"referralVoucher"> | string
    createdAt?: DateTimeFilter<"referralVoucher"> | Date | string
    expiresAt?: DateTimeFilter<"referralVoucher"> | Date | string
  }

  export type userPointsUpsertWithWhereUniqueWithoutUserInput = {
    where: userPointsWhereUniqueInput
    update: XOR<userPointsUpdateWithoutUserInput, userPointsUncheckedUpdateWithoutUserInput>
    create: XOR<userPointsCreateWithoutUserInput, userPointsUncheckedCreateWithoutUserInput>
  }

  export type userPointsUpdateWithWhereUniqueWithoutUserInput = {
    where: userPointsWhereUniqueInput
    data: XOR<userPointsUpdateWithoutUserInput, userPointsUncheckedUpdateWithoutUserInput>
  }

  export type userPointsUpdateManyWithWhereWithoutUserInput = {
    where: userPointsScalarWhereInput
    data: XOR<userPointsUpdateManyMutationInput, userPointsUncheckedUpdateManyWithoutUserInput>
  }

  export type userPointsScalarWhereInput = {
    AND?: userPointsScalarWhereInput | userPointsScalarWhereInput[]
    OR?: userPointsScalarWhereInput[]
    NOT?: userPointsScalarWhereInput | userPointsScalarWhereInput[]
    id?: IntFilter<"userPoints"> | number
    points?: IntNullableFilter<"userPoints"> | number | null
    expiresAt?: DateTimeFilter<"userPoints"> | Date | string
    createdAt?: DateTimeFilter<"userPoints"> | Date | string
    userId?: StringFilter<"userPoints"> | string
  }

  export type ReviewUpsertWithWhereUniqueWithoutUserInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutUserInput, ReviewUncheckedUpdateWithoutUserInput>
    create: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutUserInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutUserInput, ReviewUncheckedUpdateWithoutUserInput>
  }

  export type ReviewUpdateManyWithWhereWithoutUserInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutUserInput>
  }

  export type TransactionCreateWithoutVoucherInput = {
    basePrice: number
    totalPrice: number
    finalPrice: number
    status?: $Enums.TransactionStatus
    discount?: number | null
    createdAt?: Date | string
    expiresAt: Date | string
    qty: number
    promoQuota?: number
    redirect_url?: string | null
    DetailTransaction?: DetailTransactionCreateNestedManyWithoutTransactionInput
    ticket: TicketCreateNestedOneWithoutTransactionInput
    user: UserCreateNestedOneWithoutTransactionInput
    points?: userPointsCreateNestedOneWithoutDiscountInput
  }

  export type TransactionUncheckedCreateWithoutVoucherInput = {
    id?: number
    basePrice: number
    totalPrice: number
    finalPrice: number
    status?: $Enums.TransactionStatus
    userId: string
    userPoints?: number | null
    discount?: number | null
    ticketId: number
    createdAt?: Date | string
    expiresAt: Date | string
    qty: number
    promoQuota?: number
    redirect_url?: string | null
    DetailTransaction?: DetailTransactionUncheckedCreateNestedManyWithoutTransactionInput
  }

  export type TransactionCreateOrConnectWithoutVoucherInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutVoucherInput, TransactionUncheckedCreateWithoutVoucherInput>
  }

  export type TransactionCreateManyVoucherInputEnvelope = {
    data: TransactionCreateManyVoucherInput | TransactionCreateManyVoucherInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutUserIdInput = {
    id?: string
    username: string
    email: string
    password: string
    avatar?: string
    isVerify?: boolean
    refCode?: string | null
    reffered_by?: string | null
    Transaction?: TransactionCreateNestedManyWithoutUserInput
    userPoints?: userPointsCreateNestedManyWithoutUserInput
    Review?: ReviewCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserIdInput = {
    id?: string
    username: string
    email: string
    password: string
    avatar?: string
    isVerify?: boolean
    refCode?: string | null
    reffered_by?: string | null
    Transaction?: TransactionUncheckedCreateNestedManyWithoutUserInput
    userPoints?: userPointsUncheckedCreateNestedManyWithoutUserInput
    Review?: ReviewUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserIdInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserIdInput, UserUncheckedCreateWithoutUserIdInput>
  }

  export type TransactionUpsertWithWhereUniqueWithoutVoucherInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutVoucherInput, TransactionUncheckedUpdateWithoutVoucherInput>
    create: XOR<TransactionCreateWithoutVoucherInput, TransactionUncheckedCreateWithoutVoucherInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutVoucherInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutVoucherInput, TransactionUncheckedUpdateWithoutVoucherInput>
  }

  export type TransactionUpdateManyWithWhereWithoutVoucherInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutVoucherInput>
  }

  export type UserUpsertWithoutUserIdInput = {
    update: XOR<UserUpdateWithoutUserIdInput, UserUncheckedUpdateWithoutUserIdInput>
    create: XOR<UserCreateWithoutUserIdInput, UserUncheckedCreateWithoutUserIdInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserIdInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserIdInput, UserUncheckedUpdateWithoutUserIdInput>
  }

  export type UserUpdateWithoutUserIdInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    isVerify?: BoolFieldUpdateOperationsInput | boolean
    refCode?: NullableStringFieldUpdateOperationsInput | string | null
    reffered_by?: NullableStringFieldUpdateOperationsInput | string | null
    Transaction?: TransactionUpdateManyWithoutUserNestedInput
    userPoints?: userPointsUpdateManyWithoutUserNestedInput
    Review?: ReviewUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserIdInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    isVerify?: BoolFieldUpdateOperationsInput | boolean
    refCode?: NullableStringFieldUpdateOperationsInput | string | null
    reffered_by?: NullableStringFieldUpdateOperationsInput | string | null
    Transaction?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    userPoints?: userPointsUncheckedUpdateManyWithoutUserNestedInput
    Review?: ReviewUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TransactionCreateWithoutPointsInput = {
    basePrice: number
    totalPrice: number
    finalPrice: number
    status?: $Enums.TransactionStatus
    discount?: number | null
    createdAt?: Date | string
    expiresAt: Date | string
    qty: number
    promoQuota?: number
    redirect_url?: string | null
    DetailTransaction?: DetailTransactionCreateNestedManyWithoutTransactionInput
    ticket: TicketCreateNestedOneWithoutTransactionInput
    user: UserCreateNestedOneWithoutTransactionInput
    voucher?: referralVoucherCreateNestedOneWithoutDiscountInput
  }

  export type TransactionUncheckedCreateWithoutPointsInput = {
    id?: number
    basePrice: number
    totalPrice: number
    finalPrice: number
    status?: $Enums.TransactionStatus
    userId: string
    userVoucher?: number | null
    discount?: number | null
    ticketId: number
    createdAt?: Date | string
    expiresAt: Date | string
    qty: number
    promoQuota?: number
    redirect_url?: string | null
    DetailTransaction?: DetailTransactionUncheckedCreateNestedManyWithoutTransactionInput
  }

  export type TransactionCreateOrConnectWithoutPointsInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutPointsInput, TransactionUncheckedCreateWithoutPointsInput>
  }

  export type TransactionCreateManyPointsInputEnvelope = {
    data: TransactionCreateManyPointsInput | TransactionCreateManyPointsInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutUserPointsInput = {
    id?: string
    username: string
    email: string
    password: string
    avatar?: string
    isVerify?: boolean
    refCode?: string | null
    reffered_by?: string | null
    Transaction?: TransactionCreateNestedManyWithoutUserInput
    UserId?: referralVoucherCreateNestedManyWithoutUserInput
    Review?: ReviewCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserPointsInput = {
    id?: string
    username: string
    email: string
    password: string
    avatar?: string
    isVerify?: boolean
    refCode?: string | null
    reffered_by?: string | null
    Transaction?: TransactionUncheckedCreateNestedManyWithoutUserInput
    UserId?: referralVoucherUncheckedCreateNestedManyWithoutUserInput
    Review?: ReviewUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserPointsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserPointsInput, UserUncheckedCreateWithoutUserPointsInput>
  }

  export type TransactionUpsertWithWhereUniqueWithoutPointsInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutPointsInput, TransactionUncheckedUpdateWithoutPointsInput>
    create: XOR<TransactionCreateWithoutPointsInput, TransactionUncheckedCreateWithoutPointsInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutPointsInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutPointsInput, TransactionUncheckedUpdateWithoutPointsInput>
  }

  export type TransactionUpdateManyWithWhereWithoutPointsInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutPointsInput>
  }

  export type UserUpsertWithoutUserPointsInput = {
    update: XOR<UserUpdateWithoutUserPointsInput, UserUncheckedUpdateWithoutUserPointsInput>
    create: XOR<UserCreateWithoutUserPointsInput, UserUncheckedCreateWithoutUserPointsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserPointsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserPointsInput, UserUncheckedUpdateWithoutUserPointsInput>
  }

  export type UserUpdateWithoutUserPointsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    isVerify?: BoolFieldUpdateOperationsInput | boolean
    refCode?: NullableStringFieldUpdateOperationsInput | string | null
    reffered_by?: NullableStringFieldUpdateOperationsInput | string | null
    Transaction?: TransactionUpdateManyWithoutUserNestedInput
    UserId?: referralVoucherUpdateManyWithoutUserNestedInput
    Review?: ReviewUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserPointsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    isVerify?: BoolFieldUpdateOperationsInput | boolean
    refCode?: NullableStringFieldUpdateOperationsInput | string | null
    reffered_by?: NullableStringFieldUpdateOperationsInput | string | null
    Transaction?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    UserId?: referralVoucherUncheckedUpdateManyWithoutUserNestedInput
    Review?: ReviewUncheckedUpdateManyWithoutUserNestedInput
  }

  export type EventCreateManyPromotorInput = {
    id?: number
    title: string
    description: string
    category: $Enums.EventCategory
    location: $Enums.Location
    venue: string
    mapURL: string
    date: Date | string
    time: Date | string
    type: $Enums.EventType
    thumbnail: string
    isActive?: boolean
    slug: string
  }

  export type TicketCreateManyPromotorInput = {
    id?: number
    eventId: number
    price: number
    category: $Enums.TicketCategory
    startDate?: Date | string
    endDate: Date | string
    isActive?: boolean
    discount?: boolean
    quota?: number
  }

  export type EventUpdateWithoutPromotorInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: EnumEventCategoryFieldUpdateOperationsInput | $Enums.EventCategory
    location?: EnumLocationFieldUpdateOperationsInput | $Enums.Location
    venue?: StringFieldUpdateOperationsInput | string
    mapURL?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    thumbnail?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    slug?: StringFieldUpdateOperationsInput | string
    ticket?: TicketUpdateManyWithoutEventNestedInput
    DetailTransaction?: DetailTransactionUpdateManyWithoutEventNestedInput
    review?: ReviewUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutPromotorInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: EnumEventCategoryFieldUpdateOperationsInput | $Enums.EventCategory
    location?: EnumLocationFieldUpdateOperationsInput | $Enums.Location
    venue?: StringFieldUpdateOperationsInput | string
    mapURL?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    thumbnail?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    slug?: StringFieldUpdateOperationsInput | string
    ticket?: TicketUncheckedUpdateManyWithoutEventNestedInput
    DetailTransaction?: DetailTransactionUncheckedUpdateManyWithoutEventNestedInput
    review?: ReviewUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateManyWithoutPromotorInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: EnumEventCategoryFieldUpdateOperationsInput | $Enums.EventCategory
    location?: EnumLocationFieldUpdateOperationsInput | $Enums.Location
    venue?: StringFieldUpdateOperationsInput | string
    mapURL?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    thumbnail?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    slug?: StringFieldUpdateOperationsInput | string
  }

  export type TicketUpdateWithoutPromotorInput = {
    price?: IntFieldUpdateOperationsInput | number
    category?: EnumTicketCategoryFieldUpdateOperationsInput | $Enums.TicketCategory
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    discount?: BoolFieldUpdateOperationsInput | boolean
    quota?: IntFieldUpdateOperationsInput | number
    event?: EventUpdateOneRequiredWithoutTicketNestedInput
    transaction?: TransactionUpdateManyWithoutTicketNestedInput
    DetailTransaction?: DetailTransactionUpdateManyWithoutTicketNestedInput
    review?: ReviewUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateWithoutPromotorInput = {
    id?: IntFieldUpdateOperationsInput | number
    eventId?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    category?: EnumTicketCategoryFieldUpdateOperationsInput | $Enums.TicketCategory
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    discount?: BoolFieldUpdateOperationsInput | boolean
    quota?: IntFieldUpdateOperationsInput | number
    transaction?: TransactionUncheckedUpdateManyWithoutTicketNestedInput
    DetailTransaction?: DetailTransactionUncheckedUpdateManyWithoutTicketNestedInput
    review?: ReviewUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateManyWithoutPromotorInput = {
    id?: IntFieldUpdateOperationsInput | number
    eventId?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    category?: EnumTicketCategoryFieldUpdateOperationsInput | $Enums.TicketCategory
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    discount?: BoolFieldUpdateOperationsInput | boolean
    quota?: IntFieldUpdateOperationsInput | number
  }

  export type TicketCreateManyEventInput = {
    id?: number
    price: number
    category: $Enums.TicketCategory
    startDate?: Date | string
    endDate: Date | string
    isActive?: boolean
    discount?: boolean
    quota?: number
    promotorId: number
  }

  export type DetailTransactionCreateManyEventInput = {
    id?: number
    transactionId: number
    ticketId: number
    reviewStatus: boolean
  }

  export type ReviewCreateManyEventInput = {
    id?: number
    desc?: string | null
    rating?: number
    userId: string
    transactionId: number
    ticketId?: number | null
  }

  export type TicketUpdateWithoutEventInput = {
    price?: IntFieldUpdateOperationsInput | number
    category?: EnumTicketCategoryFieldUpdateOperationsInput | $Enums.TicketCategory
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    discount?: BoolFieldUpdateOperationsInput | boolean
    quota?: IntFieldUpdateOperationsInput | number
    Promotor?: PromotorUpdateOneRequiredWithoutTicketNestedInput
    transaction?: TransactionUpdateManyWithoutTicketNestedInput
    DetailTransaction?: DetailTransactionUpdateManyWithoutTicketNestedInput
    review?: ReviewUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateWithoutEventInput = {
    id?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    category?: EnumTicketCategoryFieldUpdateOperationsInput | $Enums.TicketCategory
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    discount?: BoolFieldUpdateOperationsInput | boolean
    quota?: IntFieldUpdateOperationsInput | number
    promotorId?: IntFieldUpdateOperationsInput | number
    transaction?: TransactionUncheckedUpdateManyWithoutTicketNestedInput
    DetailTransaction?: DetailTransactionUncheckedUpdateManyWithoutTicketNestedInput
    review?: ReviewUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateManyWithoutEventInput = {
    id?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    category?: EnumTicketCategoryFieldUpdateOperationsInput | $Enums.TicketCategory
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    discount?: BoolFieldUpdateOperationsInput | boolean
    quota?: IntFieldUpdateOperationsInput | number
    promotorId?: IntFieldUpdateOperationsInput | number
  }

  export type DetailTransactionUpdateWithoutEventInput = {
    reviewStatus?: BoolFieldUpdateOperationsInput | boolean
    review?: ReviewUpdateManyWithoutIsValidNestedInput
    ticket?: TicketUpdateOneRequiredWithoutDetailTransactionNestedInput
    transaction?: TransactionUpdateOneRequiredWithoutDetailTransactionNestedInput
  }

  export type DetailTransactionUncheckedUpdateWithoutEventInput = {
    id?: IntFieldUpdateOperationsInput | number
    transactionId?: IntFieldUpdateOperationsInput | number
    ticketId?: IntFieldUpdateOperationsInput | number
    reviewStatus?: BoolFieldUpdateOperationsInput | boolean
    review?: ReviewUncheckedUpdateManyWithoutIsValidNestedInput
  }

  export type DetailTransactionUncheckedUpdateManyWithoutEventInput = {
    id?: IntFieldUpdateOperationsInput | number
    transactionId?: IntFieldUpdateOperationsInput | number
    ticketId?: IntFieldUpdateOperationsInput | number
    reviewStatus?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ReviewUpdateWithoutEventInput = {
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: IntFieldUpdateOperationsInput | number
    isValid?: DetailTransactionUpdateOneRequiredWithoutReviewNestedInput
    user?: UserUpdateOneRequiredWithoutReviewNestedInput
    Ticket?: TicketUpdateOneWithoutReviewNestedInput
  }

  export type ReviewUncheckedUpdateWithoutEventInput = {
    id?: IntFieldUpdateOperationsInput | number
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    transactionId?: IntFieldUpdateOperationsInput | number
    ticketId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ReviewUncheckedUpdateManyWithoutEventInput = {
    id?: IntFieldUpdateOperationsInput | number
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    transactionId?: IntFieldUpdateOperationsInput | number
    ticketId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TransactionCreateManyTicketInput = {
    id?: number
    basePrice: number
    totalPrice: number
    finalPrice: number
    status?: $Enums.TransactionStatus
    userId: string
    userVoucher?: number | null
    userPoints?: number | null
    discount?: number | null
    createdAt?: Date | string
    expiresAt: Date | string
    qty: number
    promoQuota?: number
    redirect_url?: string | null
  }

  export type DetailTransactionCreateManyTicketInput = {
    id?: number
    transactionId: number
    eventId: number
    reviewStatus: boolean
  }

  export type ReviewCreateManyTicketInput = {
    id?: number
    desc?: string | null
    rating?: number
    userId: string
    eventId: number
    transactionId: number
  }

  export type TransactionUpdateWithoutTicketInput = {
    basePrice?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    finalPrice?: IntFieldUpdateOperationsInput | number
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    discount?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    qty?: IntFieldUpdateOperationsInput | number
    promoQuota?: IntFieldUpdateOperationsInput | number
    redirect_url?: NullableStringFieldUpdateOperationsInput | string | null
    DetailTransaction?: DetailTransactionUpdateManyWithoutTransactionNestedInput
    user?: UserUpdateOneRequiredWithoutTransactionNestedInput
    points?: userPointsUpdateOneWithoutDiscountNestedInput
    voucher?: referralVoucherUpdateOneWithoutDiscountNestedInput
  }

  export type TransactionUncheckedUpdateWithoutTicketInput = {
    id?: IntFieldUpdateOperationsInput | number
    basePrice?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    finalPrice?: IntFieldUpdateOperationsInput | number
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    userId?: StringFieldUpdateOperationsInput | string
    userVoucher?: NullableIntFieldUpdateOperationsInput | number | null
    userPoints?: NullableIntFieldUpdateOperationsInput | number | null
    discount?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    qty?: IntFieldUpdateOperationsInput | number
    promoQuota?: IntFieldUpdateOperationsInput | number
    redirect_url?: NullableStringFieldUpdateOperationsInput | string | null
    DetailTransaction?: DetailTransactionUncheckedUpdateManyWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateManyWithoutTicketInput = {
    id?: IntFieldUpdateOperationsInput | number
    basePrice?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    finalPrice?: IntFieldUpdateOperationsInput | number
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    userId?: StringFieldUpdateOperationsInput | string
    userVoucher?: NullableIntFieldUpdateOperationsInput | number | null
    userPoints?: NullableIntFieldUpdateOperationsInput | number | null
    discount?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    qty?: IntFieldUpdateOperationsInput | number
    promoQuota?: IntFieldUpdateOperationsInput | number
    redirect_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DetailTransactionUpdateWithoutTicketInput = {
    reviewStatus?: BoolFieldUpdateOperationsInput | boolean
    review?: ReviewUpdateManyWithoutIsValidNestedInput
    event?: EventUpdateOneRequiredWithoutDetailTransactionNestedInput
    transaction?: TransactionUpdateOneRequiredWithoutDetailTransactionNestedInput
  }

  export type DetailTransactionUncheckedUpdateWithoutTicketInput = {
    id?: IntFieldUpdateOperationsInput | number
    transactionId?: IntFieldUpdateOperationsInput | number
    eventId?: IntFieldUpdateOperationsInput | number
    reviewStatus?: BoolFieldUpdateOperationsInput | boolean
    review?: ReviewUncheckedUpdateManyWithoutIsValidNestedInput
  }

  export type DetailTransactionUncheckedUpdateManyWithoutTicketInput = {
    id?: IntFieldUpdateOperationsInput | number
    transactionId?: IntFieldUpdateOperationsInput | number
    eventId?: IntFieldUpdateOperationsInput | number
    reviewStatus?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ReviewUpdateWithoutTicketInput = {
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: IntFieldUpdateOperationsInput | number
    isValid?: DetailTransactionUpdateOneRequiredWithoutReviewNestedInput
    event?: EventUpdateOneRequiredWithoutReviewNestedInput
    user?: UserUpdateOneRequiredWithoutReviewNestedInput
  }

  export type ReviewUncheckedUpdateWithoutTicketInput = {
    id?: IntFieldUpdateOperationsInput | number
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    eventId?: IntFieldUpdateOperationsInput | number
    transactionId?: IntFieldUpdateOperationsInput | number
  }

  export type ReviewUncheckedUpdateManyWithoutTicketInput = {
    id?: IntFieldUpdateOperationsInput | number
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    eventId?: IntFieldUpdateOperationsInput | number
    transactionId?: IntFieldUpdateOperationsInput | number
  }

  export type DetailTransactionCreateManyTransactionInput = {
    id?: number
    eventId: number
    ticketId: number
    reviewStatus: boolean
  }

  export type DetailTransactionUpdateWithoutTransactionInput = {
    reviewStatus?: BoolFieldUpdateOperationsInput | boolean
    review?: ReviewUpdateManyWithoutIsValidNestedInput
    ticket?: TicketUpdateOneRequiredWithoutDetailTransactionNestedInput
    event?: EventUpdateOneRequiredWithoutDetailTransactionNestedInput
  }

  export type DetailTransactionUncheckedUpdateWithoutTransactionInput = {
    id?: IntFieldUpdateOperationsInput | number
    eventId?: IntFieldUpdateOperationsInput | number
    ticketId?: IntFieldUpdateOperationsInput | number
    reviewStatus?: BoolFieldUpdateOperationsInput | boolean
    review?: ReviewUncheckedUpdateManyWithoutIsValidNestedInput
  }

  export type DetailTransactionUncheckedUpdateManyWithoutTransactionInput = {
    id?: IntFieldUpdateOperationsInput | number
    eventId?: IntFieldUpdateOperationsInput | number
    ticketId?: IntFieldUpdateOperationsInput | number
    reviewStatus?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ReviewCreateManyIsValidInput = {
    id?: number
    desc?: string | null
    rating?: number
    userId: string
    eventId: number
    ticketId?: number | null
  }

  export type ReviewUpdateWithoutIsValidInput = {
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: IntFieldUpdateOperationsInput | number
    event?: EventUpdateOneRequiredWithoutReviewNestedInput
    user?: UserUpdateOneRequiredWithoutReviewNestedInput
    Ticket?: TicketUpdateOneWithoutReviewNestedInput
  }

  export type ReviewUncheckedUpdateWithoutIsValidInput = {
    id?: IntFieldUpdateOperationsInput | number
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    eventId?: IntFieldUpdateOperationsInput | number
    ticketId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ReviewUncheckedUpdateManyWithoutIsValidInput = {
    id?: IntFieldUpdateOperationsInput | number
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    eventId?: IntFieldUpdateOperationsInput | number
    ticketId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TransactionCreateManyUserInput = {
    id?: number
    basePrice: number
    totalPrice: number
    finalPrice: number
    status?: $Enums.TransactionStatus
    userVoucher?: number | null
    userPoints?: number | null
    discount?: number | null
    ticketId: number
    createdAt?: Date | string
    expiresAt: Date | string
    qty: number
    promoQuota?: number
    redirect_url?: string | null
  }

  export type referralVoucherCreateManyUserInput = {
    id?: number
    createdAt?: Date | string
    expiresAt: Date | string
  }

  export type userPointsCreateManyUserInput = {
    id?: number
    points?: number | null
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type ReviewCreateManyUserInput = {
    id?: number
    desc?: string | null
    rating?: number
    eventId: number
    transactionId: number
    ticketId?: number | null
  }

  export type TransactionUpdateWithoutUserInput = {
    basePrice?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    finalPrice?: IntFieldUpdateOperationsInput | number
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    discount?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    qty?: IntFieldUpdateOperationsInput | number
    promoQuota?: IntFieldUpdateOperationsInput | number
    redirect_url?: NullableStringFieldUpdateOperationsInput | string | null
    DetailTransaction?: DetailTransactionUpdateManyWithoutTransactionNestedInput
    ticket?: TicketUpdateOneRequiredWithoutTransactionNestedInput
    points?: userPointsUpdateOneWithoutDiscountNestedInput
    voucher?: referralVoucherUpdateOneWithoutDiscountNestedInput
  }

  export type TransactionUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    basePrice?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    finalPrice?: IntFieldUpdateOperationsInput | number
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    userVoucher?: NullableIntFieldUpdateOperationsInput | number | null
    userPoints?: NullableIntFieldUpdateOperationsInput | number | null
    discount?: NullableIntFieldUpdateOperationsInput | number | null
    ticketId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    qty?: IntFieldUpdateOperationsInput | number
    promoQuota?: IntFieldUpdateOperationsInput | number
    redirect_url?: NullableStringFieldUpdateOperationsInput | string | null
    DetailTransaction?: DetailTransactionUncheckedUpdateManyWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    basePrice?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    finalPrice?: IntFieldUpdateOperationsInput | number
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    userVoucher?: NullableIntFieldUpdateOperationsInput | number | null
    userPoints?: NullableIntFieldUpdateOperationsInput | number | null
    discount?: NullableIntFieldUpdateOperationsInput | number | null
    ticketId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    qty?: IntFieldUpdateOperationsInput | number
    promoQuota?: IntFieldUpdateOperationsInput | number
    redirect_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type referralVoucherUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    discount?: TransactionUpdateManyWithoutVoucherNestedInput
  }

  export type referralVoucherUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    discount?: TransactionUncheckedUpdateManyWithoutVoucherNestedInput
  }

  export type referralVoucherUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userPointsUpdateWithoutUserInput = {
    points?: NullableIntFieldUpdateOperationsInput | number | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    discount?: TransactionUpdateManyWithoutPointsNestedInput
  }

  export type userPointsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    points?: NullableIntFieldUpdateOperationsInput | number | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    discount?: TransactionUncheckedUpdateManyWithoutPointsNestedInput
  }

  export type userPointsUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    points?: NullableIntFieldUpdateOperationsInput | number | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUpdateWithoutUserInput = {
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: IntFieldUpdateOperationsInput | number
    isValid?: DetailTransactionUpdateOneRequiredWithoutReviewNestedInput
    event?: EventUpdateOneRequiredWithoutReviewNestedInput
    Ticket?: TicketUpdateOneWithoutReviewNestedInput
  }

  export type ReviewUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: IntFieldUpdateOperationsInput | number
    eventId?: IntFieldUpdateOperationsInput | number
    transactionId?: IntFieldUpdateOperationsInput | number
    ticketId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ReviewUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: IntFieldUpdateOperationsInput | number
    eventId?: IntFieldUpdateOperationsInput | number
    transactionId?: IntFieldUpdateOperationsInput | number
    ticketId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TransactionCreateManyVoucherInput = {
    id?: number
    basePrice: number
    totalPrice: number
    finalPrice: number
    status?: $Enums.TransactionStatus
    userId: string
    userPoints?: number | null
    discount?: number | null
    ticketId: number
    createdAt?: Date | string
    expiresAt: Date | string
    qty: number
    promoQuota?: number
    redirect_url?: string | null
  }

  export type TransactionUpdateWithoutVoucherInput = {
    basePrice?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    finalPrice?: IntFieldUpdateOperationsInput | number
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    discount?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    qty?: IntFieldUpdateOperationsInput | number
    promoQuota?: IntFieldUpdateOperationsInput | number
    redirect_url?: NullableStringFieldUpdateOperationsInput | string | null
    DetailTransaction?: DetailTransactionUpdateManyWithoutTransactionNestedInput
    ticket?: TicketUpdateOneRequiredWithoutTransactionNestedInput
    user?: UserUpdateOneRequiredWithoutTransactionNestedInput
    points?: userPointsUpdateOneWithoutDiscountNestedInput
  }

  export type TransactionUncheckedUpdateWithoutVoucherInput = {
    id?: IntFieldUpdateOperationsInput | number
    basePrice?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    finalPrice?: IntFieldUpdateOperationsInput | number
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    userId?: StringFieldUpdateOperationsInput | string
    userPoints?: NullableIntFieldUpdateOperationsInput | number | null
    discount?: NullableIntFieldUpdateOperationsInput | number | null
    ticketId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    qty?: IntFieldUpdateOperationsInput | number
    promoQuota?: IntFieldUpdateOperationsInput | number
    redirect_url?: NullableStringFieldUpdateOperationsInput | string | null
    DetailTransaction?: DetailTransactionUncheckedUpdateManyWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateManyWithoutVoucherInput = {
    id?: IntFieldUpdateOperationsInput | number
    basePrice?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    finalPrice?: IntFieldUpdateOperationsInput | number
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    userId?: StringFieldUpdateOperationsInput | string
    userPoints?: NullableIntFieldUpdateOperationsInput | number | null
    discount?: NullableIntFieldUpdateOperationsInput | number | null
    ticketId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    qty?: IntFieldUpdateOperationsInput | number
    promoQuota?: IntFieldUpdateOperationsInput | number
    redirect_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TransactionCreateManyPointsInput = {
    id?: number
    basePrice: number
    totalPrice: number
    finalPrice: number
    status?: $Enums.TransactionStatus
    userId: string
    userVoucher?: number | null
    discount?: number | null
    ticketId: number
    createdAt?: Date | string
    expiresAt: Date | string
    qty: number
    promoQuota?: number
    redirect_url?: string | null
  }

  export type TransactionUpdateWithoutPointsInput = {
    basePrice?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    finalPrice?: IntFieldUpdateOperationsInput | number
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    discount?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    qty?: IntFieldUpdateOperationsInput | number
    promoQuota?: IntFieldUpdateOperationsInput | number
    redirect_url?: NullableStringFieldUpdateOperationsInput | string | null
    DetailTransaction?: DetailTransactionUpdateManyWithoutTransactionNestedInput
    ticket?: TicketUpdateOneRequiredWithoutTransactionNestedInput
    user?: UserUpdateOneRequiredWithoutTransactionNestedInput
    voucher?: referralVoucherUpdateOneWithoutDiscountNestedInput
  }

  export type TransactionUncheckedUpdateWithoutPointsInput = {
    id?: IntFieldUpdateOperationsInput | number
    basePrice?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    finalPrice?: IntFieldUpdateOperationsInput | number
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    userId?: StringFieldUpdateOperationsInput | string
    userVoucher?: NullableIntFieldUpdateOperationsInput | number | null
    discount?: NullableIntFieldUpdateOperationsInput | number | null
    ticketId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    qty?: IntFieldUpdateOperationsInput | number
    promoQuota?: IntFieldUpdateOperationsInput | number
    redirect_url?: NullableStringFieldUpdateOperationsInput | string | null
    DetailTransaction?: DetailTransactionUncheckedUpdateManyWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateManyWithoutPointsInput = {
    id?: IntFieldUpdateOperationsInput | number
    basePrice?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    finalPrice?: IntFieldUpdateOperationsInput | number
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    userId?: StringFieldUpdateOperationsInput | string
    userVoucher?: NullableIntFieldUpdateOperationsInput | number | null
    discount?: NullableIntFieldUpdateOperationsInput | number | null
    ticketId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    qty?: IntFieldUpdateOperationsInput | number
    promoQuota?: IntFieldUpdateOperationsInput | number
    redirect_url?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}