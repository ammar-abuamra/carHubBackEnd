import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column({ serializeAs: "firset_name", })
  public FirsetName: string;

  @column({ serializeAs: "last_name" })
  public LastName: string;

  @column({ serializeAs: "email", })
  public Email: string;

  @column({ serializeAs: "phone" })
  public Phone: number;

  @column({ serializeAs: "password", })
  public Password: string;

  @column({ serializeAs: "birthdate" })
  public BirthDate: Date;

  @column({ serializeAs: "language", })
  public Language: string;



  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
