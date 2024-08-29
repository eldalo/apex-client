import { Schema } from 'mongoose';

export const PaymentSchema = new Schema({
  typeCredit: { type: String, required: true },
  creditLimit: { type: Number, required: true },
  creditUsed: { type: Number, required: true },
  amountAvailable: { type: Number, required: true },
});
