import { z } from 'zod'

export const Step1Schema = z.object({
    name: z.string().min(2, "Field is Required"),
    email: z.string().email("Field is Required"),
    phoneNumber: z.string().regex(/^\+?[0-9\s]{8,}$/, "Field is Required")
  });
  
  export type Step1Data = z.infer<typeof Step1Schema>;

export interface Step2Data {
    planType: "arcade" | "advanced" | "pro";
    billing: "monthly" | "yearly";
}

export interface Step3Data {
    addonTypes: string[];
    billing: "monthly" | "yearly";
}

export interface StepsData extends Step1Data, Step2Data, Step3Data {}

export type FormErrors = {
    [key in keyof Step1Data]?: string;
  };
