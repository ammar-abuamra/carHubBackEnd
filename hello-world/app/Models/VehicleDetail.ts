import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class VehicleDetail extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column({ serializeAs: "vehicles_id", })
  public VehiclesId: number;

  @column({ serializeAs: "top_speed" })
  public TopSpeed: number;

  @column({ serializeAs: "hours_power", })
  public HoursPower: number;

  @column({ serializeAs: "abs_break" })
  public AbsBreak: number;

  @column({ serializeAs: "air_bags", })
  public AirBags: number;

  @column({ serializeAs: "auto_park" })
  public AutoPark: number;

  @column({ serializeAs: "heated_seates" })
  public HeatedSeates: number;


  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
