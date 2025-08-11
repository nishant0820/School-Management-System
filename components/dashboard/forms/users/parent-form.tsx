"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import FormHeader from "../FormHeader";
import FormFooter from "../FormFooter";
import TextInput from "@/components/FormInputs/TextInput";
import TextArea from "@/components/FormInputs/TextAreaInput";
import ImageInput from "@/components/FormInputs/ImageInput";
import toast from "react-hot-toast";
import PasswordInput from "@/components/FormInputs/PasswordInput";
import FormSelectInput from "@/components/FormInputs/FormSelectInput";
import { countries } from "@/countries";

export type SelectOptionProps = {
  label: string;
  value: string;
};
type SingleStudentFormProps = {
  editingId?: string | undefined;
  initialData?: any | undefined | null;
};
export type StudentProps = {
  name: string;
  email: string;
  password: string;
  imageUrl: string;
};
export default function ParentForm({
  editingId,
  initialData,
}: SingleStudentFormProps) {
  const relationships = [
    {
      label: "FATHER",
      value: "father",
    },
    {
      label: "MOTHER",
      value: "mother",
    },
    {
      label: "GUARDIAN",
      value: "guardian",
    },
    {
      label: "OTHER",
      value: "other",
    },
  ];
  const [selectedRelationship, setSelectedRelationship] = useState<any>(
    relationships[0]
  );

  const titles = [
    {
      label: "Mr.",
      value: "mr",
    },
    {
      label: "Mrs.",
      value: "mrs",
    },
  ];
  const [selectedTitle, setSelectedTitle] = useState<any>(null);

  const contactMethod = [
    {
      label: "Phone",
      value: "phone",
    },
    {
      label: "Email",
      value: "email",
    },
    {
      label: "WhatsApp",
      value: "whatsapp",
    },
  ];
  const [selectedContactMethod, setSelectedContactMethod] = useState<any>(
    contactMethod[0]
  );

  const streams = [
    {
      label: "S1A",
      value: "1234",
    },
    {
      label: "S1B",
      value: "1235",
    },
    {
      label: "S2A",
      value: "1236",
    },
  ];
  const [selectedStream, setSelectedStream] = useState<any>(null);

  const initialCountryCode = "IN";
  const initialCountry = countries.find(
    (item) => item.countryCode === initialCountryCode
  );
  const [selectedNationality, setSelectedNationality] =
    useState<any>(initialCountry);

  const religion = [
    {
      label: "Roman Catholic",
      value: "Catholic",
    },
    {
      label: "Anglican",
      value: "Anglican",
    },
    {
      label: "Islam",
      value: "Islam",
    },
  ];
  const [selectedReligion, setSelectedReligion] = useState<any>(null);

  const gender = [
    {
      label: "MALE",
      value: "MALE",
    },
    {
      label: "FEMALE",
      value: "FEMALE",
    },
  ];
  const [selectedGender, setSelectedGender] = useState<any>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<StudentProps>({
    defaultValues: {
      name: "",
    },
  });
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const initialImage = initialData?.imageUrl || "/images/student.png";
  const [imageUrl, setImageUrl] = useState(initialImage);

  async function saveStudent(data: StudentProps) {
    try {
      setLoading(true);
      data.imageUrl = imageUrl;
      console.log(data);

      if (editingId) {
        //await updateCategoryById(editingId, data);
        //setLoading(false);
        //toast.success("Updated Successfully!");
        //reset();
        //router.push("/dashboard/categories");
        //setImageUrl("/placeholder.svg");
      } else {
        //await createCategory(data);
        //setLoading(false);
        //toast.success("Successfully Created!");
        //reset();
        //setImageUrl("/placeholder.svg");
        //router.push("/dashboard/categories");
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  return (
    <form className="" onSubmit={handleSubmit(saveStudent)}>
      <FormHeader
        href="/parents"
        parent="users"
        title="Parent"
        editingId={editingId}
        loading={loading}
      />

      <div className="grid grid-cols-12 gap-6 py-8">
        <div className="lg:col-span-12 col-span-full space-y-3">
          <div className="grid gap-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              <FormSelectInput
                label="Title"
                options={titles}
                option={selectedTitle}
                setOption={setSelectedTitle}
              />
              <TextInput
                register={register}
                errors={errors}
                label="First Name"
                name="firstName"
              />
              <TextInput
                register={register}
                errors={errors}
                label="Last Name"
                name="lastName"
              />
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              <FormSelectInput
                label="Relationship"
                options={relationships}
                option={selectedRelationship}
                setOption={setSelectedRelationship}
              />
              <TextInput
                register={register}
                errors={errors}
                label="National ID"
                name="NIN"
              />
              <FormSelectInput
                label="Gender"
                options={gender}
                option={selectedGender}
                setOption={setSelectedGender}
                isSearchable={false}
              />
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              <TextInput
                register={register}
                errors={errors}
                label="Date of Birth"
                name="dob"
                type="date"
              />
              <TextInput
                register={register}
                errors={errors}
                label="Phone"
                name="phone"
                type="tel"
              />
              <FormSelectInput
                label="Nationality"
                options={countries}
                option={selectedNationality}
                setOption={setSelectedNationality}
              />
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              <TextInput
                register={register}
                errors={errors}
                label="Email"
                name="email"
                type="email"
              />
              <PasswordInput
                register={register}
                errors={errors}
                label="Parent Password"
                name="password"
                toolTipText="This password will be used by the parent on Parent Portal"
              />
              <TextInput
                register={register}
                errors={errors}
                label="WhatsApp"
                name="whatsapp"
                type="tel"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="">
                <div className="grid gap-3">
                  <FormSelectInput
                    label="Contact Method"
                    options={contactMethod}
                    option={selectedContactMethod}
                    setOption={setSelectedContactMethod}
                  />
                  <TextInput
                    label="Occupation"
                    register={register}
                    errors={errors}
                    name="occupation"
                  />
                </div>
                <div className="grid gap-3">
                  <TextArea
                    register={register}
                    errors={errors}
                    label="Address"
                    name="address"
                  />
                </div>
              </div>
              <div className="grid">
                <ImageInput
                  title="Parent Profile Image"
                  imageUrl={imageUrl}
                  setImageUrl={setImageUrl}
                  endpoint="parentProfileImage"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <FormFooter
        href="/parents"
        editingId={editingId}
        loading={loading}
        title="Parent"
        parent="users"
      />
    </form>
  );
}
