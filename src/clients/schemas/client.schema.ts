import * as Crypto from 'crypto';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import { Transform } from 'class-transformer';

import { CustomerGroupsSchema } from './customer-group.schema';
import { PaymentSchema } from './payment.schema';

@Schema({ collection: 'clients' })
export class ClientDocument {
  @Transform(({ obj }) => obj._id.toString())
  _id: Types.ObjectId;

  @Prop({ default: () => Crypto.randomUUID() })
  uuid: string;

  @Prop({ required: true })
  address: string;

  @Prop({ required: true })
  blocked: string;

  @Prop({ required: true })
  cellPhone: string;

  @Prop({ required: true })
  channel: string;

  @Prop({ required: true })
  country: string;

  @Prop({ type: () => CustomerGroupsSchema })
  customerGroups: typeof CustomerGroupsSchema;

  @Prop({ required: true })
  customerSchema: number;

  @Prop({ required: true })
  distrChan: string;

  @Prop({ required: true })
  division: string;

  @Prop({ required: true })
  fiscalCode1: string;

  @Prop({ required: true })
  fiscalCode2: string;

  @Prop({ required: true })
  frequency: string;

  @Prop({ required: true })
  frequencyDays: string;

  @Prop({ required: true })
  idPortfolio: string;

  @Prop({ required: true })
  immediateDelivery: string;

  @Prop({ required: true })
  industryCode: string;

  @Prop({ required: true })
  industryCode1: string;

  @Prop({ required: true })
  isEnrollment: boolean;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  name2: string;

  @Prop({ required: true })
  office: string;

  @Prop({ required: true })
  paymentCondition: string;

  @Prop({ type: () => PaymentSchema })
  paymentMethods: typeof PaymentSchema;

  @Prop({ required: true })
  priceGroup: string;

  @Prop({ required: true })
  priceList: string;

  @Prop({ required: true })
  routeId: string;

  @Prop({ required: true })
  salesOrg: string;

  @Prop({ required: true })
  supplyCenter: string;

  @Prop({ required: true })
  vendorGroup: string;
}
export const ClientSchema = SchemaFactory.createForClass(ClientDocument);
