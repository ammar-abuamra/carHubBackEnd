import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class CompanyInfo extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column({ serializeAs: "hq_location", })
  public HqLocation: string;

  @column({ serializeAs: "show_room", })
  public ShowRoom: string;

  @column({ serializeAs: "telephone" })
  public Telephone: number;

  @column({ serializeAs: "phone" })
  public Phone: number;


  @column({ serializeAs: "fax", })
  public Fax: string;

  @column({ serializeAs: "email", })
  public Email: string;

  @column({ serializeAs: "linkedin", })
  public Linkedin: string;

  @column({ serializeAs: "facebook", })
  public Facebook: string;

  @column({ serializeAs: "website", })
  public Website: string;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
