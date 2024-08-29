import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { ClientDocument } from './schemas/client.schema';
import { ClientDto } from './dto/client.dto';

@Injectable()
export class ClientsService {
  constructor(
    @InjectModel(ClientDocument.name)
    private readonly clientModel: Model<ClientDocument>,
  ) {}

  findAll(): Promise<ClientDocument[]> {
    return this.clientModel.find().exec();
  }

  findOne(id: string): Promise<ClientDocument> {
    return this.clientModel.findOne({ uuid: id }).exec();
  }

  create(createClientDto: ClientDto): Promise<ClientDocument> {
    return this.clientModel.create(createClientDto);
  }

  update(id: string, updateClientDto: ClientDto): Promise<ClientDocument> {
    return this.clientModel.findOneAndUpdate({ uuid: id }, updateClientDto, {
      new: true,
    });
  }

  remove(id: string) {
    return this.clientModel.findByIdAndDelete({ uuid: id }).exec();
  }
}
