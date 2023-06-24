import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Vehicle extends BaseModel {
  @column({ isPrimary: true })
  public id: number


  @column({ serializeAs: "Manufactures", })
  public Manufactures: string;

  @column({ serializeAs: "name" })
  public Name: string;

  @column({ serializeAs: "model", })
  public Model: string;

  @column({ serializeAs: "engine" })
  public Engine: string;

  @column({ serializeAs: "passengers_capacity", })
  public PassengersCapacity: number;

  @column({ serializeAs: "gear" })
  public Gear: string;

  @column({ serializeAs: "image", })
  public Image: string;

  @column({ serializeAs: "interiorl_image" })
  public InteriorlImage: string;

  @column({ serializeAs: "side_image", })
  public SideImage: string;

  @column({ serializeAs: "count" })
  public Count: number;

  @column({ serializeAs: "status", })
  public Status: number;
  @column({ serializeAs: "rent_price" })
  public RentPrice: number;


  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
