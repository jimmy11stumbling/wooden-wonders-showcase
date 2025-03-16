import React from 'react';
import { useForm } from 'react-hook-form';

export const CustomRequestForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2">Name</label>
        <input
          {...register('name', { required: 'Name is required' })}
          className="w-full px-3 py-2 border rounded-md"
          placeholder="Your name"
        />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message as string}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Email</label>
        <input
          {...register('email', { 
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address'
            }
          })}
          className="w-full px-3 py-2 border rounded-md"
          placeholder="Your email"
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message as string}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Project Description</label>
        <textarea
          {...register('description', { required: 'Description is required' })}
          className="w-full px-3 py-2 border rounded-md h-32"
          placeholder="Describe your custom furniture project"
        />
        {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description.message as string}</p>}
      </div>

      <button 
        type="submit"
        className="w-full bg-wood-walnut hover:bg-wood-walnut/90 text-white py-2 px-6 rounded-md transition-colors"
      >
        Submit Request
      </button>
    </form>
  );
};