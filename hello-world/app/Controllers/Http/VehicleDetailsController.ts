// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class VehicleDetailsController {




    public async getAll(ctx: HttpContextContract) {


        var result = await Admin.all();
        return result;
    }

    public async getById(ctx: HttpContextContract) {

        var id = ctx.params.id;
        var result = await Admin.findOrFail(id);
        return result;
    }

    public async create(ctx: HttpContextContract) {

        const newSchema = schema.create({
           Admin_name: schema.string(),
            password: schema.string(),
            email: schema.string(),
            phone: schema.number(),
        });
        const fields = await ctx.request.validate({ schema: newSchema })
        var Admin = new Admin();
        Admin.admin_name = fields.Admin_name;
        Admin.email=fields.email;
        Admin.phone=fields.phone;
        Admin.password = fields.password;

        var result = await Admin.save();
        return result;

    }

    public async update(ctx: HttpContextContract) {
        const newSchema = schema.create({
            Admin_name: schema.string(),
            password: schema.string(),
            email: schema.string(),
            phone: schema.number(),
            id: schema.number(),
        });
        const fields = await ctx.request.validate({ schema: newSchema })
        var id = fields.id;
        var Admin = await Admin.findOrFail(id);
        Admin.admin_name = fields.Admin_name;
        Admin.email=fields.email;
        Admin.phone=fields.phone;
        Admin.password = fields.password;
        var result = await Admin.save();
        return result;
    }

    public async destory(ctx: HttpContextContract) {

        var id = ctx.params.id;
        var Admin = await Admin.findOrFail(id);
        await Admin.delete();
        return { message: "The Admin has been deleted!" };
    }

}
