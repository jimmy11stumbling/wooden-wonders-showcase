import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

type FormData = {
  name: string;
  email: string;
  phone: string;
  description: string;
  dimensions: string;
  budget: string;
};

export function CustomRequestForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      // Here you would typically send the data to your backend
      console.log('Form data:', data);
      toast({
        title: "Request Submitted",
        description: "We'll get back to you soon about your custom furniture request.",
      });
      reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem submitting your request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="space-y-4">
        <div>
          <Input
            {...register("name", { required: "Name is required" })}
            placeholder="Your Name"
            className="w-full"
          />
          {errors.name && (
            <p className="text-sm text-destructive mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <Input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
            type="email"
            placeholder="Email Address"
            className="w-full"
          />
          {errors.email && (
            <p className="text-sm text-destructive mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <Input
            {...register("phone")}
            type="tel"
            placeholder="Phone Number (Optional)"
            className="w-full"
          />
        </div>

        <div>
          <Textarea
            {...register("description", { required: "Description is required" })}
            placeholder="Describe your custom furniture piece"
            className="w-full min-h-[150px]"
          />
          {errors.description && (
            <p className="text-sm text-destructive mt-1">{errors.description.message}</p>
          )}
        </div>

        <div>
          <Input
            {...register("dimensions")}
            placeholder="Desired dimensions (Optional)"
            className="w-full"
          />
        </div>

        <div>
          <Input
            {...register("budget")}
            placeholder="Budget range (Optional)"
            className="w-full"
          />
        </div>
      </div>

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Submit Request"}
      </Button>
    </form>
  );
}