 import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Vehicle from 'App/Models/Vehicle';
import { schema } from '@ioc:Adonis/Core/Validator'



export default class VehiclesController {

    public async getAll(ctx: HttpContextContract) {


        var result = await Vehicle.all();
        return result;
    }

    public async getById(ctx: HttpContextContract) {

        var id = ctx.params.id;
        var result = await Vehicle.findOrFail(id);
        return result;
    }

    public async create(ctx: HttpContextContract) {

        const newSchema = schema.create({
            Manufactures: schema.string(),
            Name: schema.string(),
            Model: schema.string(),
            Engine: schema.string(),
            PassengersCapacity: schema.number(),
            Gear: schema.string(),
            Image: schema.string(),
            InteriorlImage: schema.string(),
            SideImage: schema.string(),
            Count: schema.number(),
            RentPrice: schema.number(),

        });
        const fields = await ctx.request.validate({ schema: newSchema })
        var Vehicle = new Vehicle();
        Vehicle.Manufactures = fields.Manufactures;
        Vehicle.Name=fields.Name;
        Vehicle.Model=fields.Model;
        Vehicle.engine = fields.Engine;
        Vehicle.passengers_capacity = fields.PassengersCapacity;
        Vehicle.gear=fields.Gear;
        Vehicle.image = fields.Image;
        Vehicle.interiorl_image=fields.InteriorlImage;
        Vehicle.side_image=fields.SideImage;
        Vehicle.count = fields.Count;
        Vehicle.rent_price = fields.RentPrice;

        var result = await Vehicle.save();
        return result;

    }

    

    public async destory(ctx: HttpContextContract) {

        var id = ctx.params.id;
        var Vehicle = await Vehicle.findOrFail(id);
        await Vehicle.delete();
        return { message: "The Vehicle has been deleted!" };
    }



}
