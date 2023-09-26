import { z } from 'zod';

export const GetEntityId = z.string().length(36)

export const LoginValidate = z.object({
  email: z.string().email(),
  password: z.string()
})

export const EnrollValidate = z.object({
  user_id: z.string(),
  vacancy_id: z.string()
})

export const CreateUserSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(3),
  email: z.string().email(),
  password: z.string(),
  phone: z.string().max(18),
  document: z.string(),
  is_admin: z.boolean().optional(),
  created_at: z.date().optional()
});
export const UpdateUserSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(3).optional(),
  email: z.string().email().optional(),
  phone: z.string().max(18).optional(),
  document: z.string().optional(),
  is_admin: z.boolean().optional(),
  updated_at: z.date().optional()
});


export const CreateVacancySchema = z.object({
  id: z.string().optional(),
  title: z.string(),
  description: z.string(),
  requirements: z.string(),
  type: z.string(),
  is_active: z.boolean().optional(),
  created_at: z.date().optional()
})
export const UpdateVacancySchema = z.object({
  id: z.string().optional(),
  title: z.string().optional(),
  description: z.string().optional(),
  requirements: z.string().optional(),
  type: z.string().optional(),
  is_active: z.boolean().optional(),
  created_at: z.date().optional()
})