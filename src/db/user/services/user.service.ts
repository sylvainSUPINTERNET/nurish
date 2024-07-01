import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User, UserDocument } from "../schemas/user.schema";
import { IUserCreateDto } from "../dto/userCreate.dto";


@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private readonly userModel: Model<UserDocument>) { }

    async create(createCatDto: IUserCreateDto): Promise<User> {
        const createdCat = new this.userModel(createCatDto);
        console.log("test",createdCat);
        return createdCat.save();
    }

}