import { Schema } from 'mongoose';

export const CustomerGroupsSchema = new Schema({
  group: { type: String, required: true },
  group1: { type: String, required: false },
  group2: { type: String, required: false },
  group3: { type: String, required: false },
  group4: { type: String, required: false },
  group5: { type: String, required: false },
});
