import { TimestampsModel } from './Timestamps';

export type UserBioModel = {
  id: number;
  caption: string;
  content: string;
  dateOfBirth: string;
  country: string;
  city: string;
} & TimestampsModel;
