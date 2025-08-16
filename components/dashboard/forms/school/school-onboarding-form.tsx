"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import TextInput from "@/components/FormInputs/TextInput";
import ImageInput from "@/components/FormInputs/ImageInput";
import toast from "react-hot-toast";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import { Send } from "lucide-react";
import { createSchool } from "@/actions/school";

export type SelectOptionProps = {
  label: string;
  value: string;
};
export type SchoolProps = {
  name: string;
  logo: string;
};
export default function SchoolOnboardingForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SchoolProps>({
    defaultValues: {
      name: ""
    },
  });
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const initialImage = "/images/student.png";
  const [imageUrl, setImageUrl] = useState(initialImage);

  async function saveStudent(data: SchoolProps) {
    try {
      setLoading(true);
      data.logo = imageUrl;
      const res = await createSchool(data);
      setLoading(false);
      toast.success("Successfully Created!");
      reset();
      //router.push("/dashboard/categories");
    } catch (error) {
      setLoading(false);
    }
  }

  return (
    <form className="" onSubmit={handleSubmit(saveStudent)}>
      <div className="text-center">
        <h2 className="scroll-m-20 text-center text-2xl font-extrabold tracking-tight lg:text-3xl">
          Welcome to LearneX,
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-2">
          Tell us about your school to begin your digital transformation..
        </p>
      </div>

      <div className="grid grid-cols-12 gap-6 py-6">
        <div className="lg:col-span-12 col-span-full space-y-3">
          <div className="grid gap-6">
            <div className="grid gap-3">
              <TextInput
                register={register}
                errors={errors}
                label="School Name"
                name="name"
              />
            </div>

            <div className="grid">
              <ImageInput
                title="School Logo"
                imageUrl={imageUrl}
                setImageUrl={setImageUrl}
                endpoint="parentProfileImage"
                className="object-contain"
                size="sm"
              />
            </div>
          </div>
        </div>
      </div>
      <SubmitButton
        buttonIcon={Send}
        title="Register School"
        loading={loading}
        loadingTitle="Creating please wait..."
      />
    </form>
  );
}
