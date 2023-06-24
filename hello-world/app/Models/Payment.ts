import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Payment extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column({ serializeAs: "cash", })
  public Cash: number;

  @column({ serializeAs: "paypal", })
  public Paypal: number;

  @column({ serializeAs: "visa" })
  public Visa: number;

  @column({ serializeAs: "user_id", })
  public UserId: number;

  @column({ serializeAs: "rent_price_id" })
  public RentPriceId: number;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
