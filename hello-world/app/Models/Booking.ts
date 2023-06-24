import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Booking extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  
  @column({ serializeAs: "admin_name", })
  public AdminName: string;

  @column({ serializeAs: "email", })
  public email: string;

  @column({ serializeAs: "password" })
  public Password: string;

  @column({ serializeAs: "phone" })
  public Phone: number;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
