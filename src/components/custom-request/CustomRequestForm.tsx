
import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { toast } from 'sonner';

type FormData = {
  name: string;
  email: string;
  phone: string;
  pieceType: string;
  dimensions: string;
  description: string;
  budget: string;
  timeline: string;
};

export function CustomRequestForm() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    toast.success('Request submitted successfully!');
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Input
              {...register('name', { required: 'Name is required' })}
              placeholder="Your Name"
              className="w-full"
            />
            {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>}
          </div>
          
          <div>
            <Input
              {...register('email', { 
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address'
                }
              })}
              type="email"
              placeholder="Email Address"
              className="w-full"
            />
            {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>}
          </div>
        </div>

        <div>
          <Input
            {...register('phone')}
            type="tel"
            placeholder="Phone Number (Optional)"
            className="w-full"
          />
        </div>

        <div>
          <Input
            {...register('pieceType', { required: 'Type of piece is required' })}
            placeholder="Type of Piece (e.g., Dining Table, Cabinet)"
            className="w-full"
          />
          {errors.pieceType && <p className="text-sm text-red-500 mt-1">{errors.pieceType.message}</p>}
        </div>

        <div>
          <Input
            {...register('dimensions')}
            placeholder="Desired Dimensions (Optional)"
            className="w-full"
          />
        </div>

        <div>
          <Textarea
            {...register('description', { required: 'Description is required' })}
            placeholder="Describe your ideal piece..."
            className="w-full min-h-[150px]"
          />
          {errors.description && <p className="text-sm text-red-500 mt-1">{errors.description.message}</p>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Input
              {...register('budget')}
              placeholder="Budget Range (Optional)"
              className="w-full"
            />
          </div>
          
          <div>
            <Input
              {...register('timeline')}
              placeholder="Desired Timeline (Optional)"
              className="w-full"
            />
          </div>
        </div>
      </div>

      <Button type="submit" className="w-full">
        Submit Custom Request
      </Button>
    </form>
  );
}
