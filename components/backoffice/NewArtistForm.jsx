"use client";
import ImageInput from "@/components/FormInputs/ImageInput";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextareaInput from "@/components/FormInputs/TextAreaInput";
import TextInput from "@/components/FormInputs/TextInput";
import ToggleInput from "@/components/FormInputs/ToggleInput";
import FormHeader from "@/components/backoffice/FormHeader";
// import { makePostRequest } from "@/lib/apiRequest";
// import { generateCouponCode } from "@/lib/generateCouponCode";
import { generateSlug } from "@/lib/generateSlug";
// import { generateUserCode } from "@/lib/generateUserCode";
import { useRouter } from "next/navigation";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ArrayItemsInput from "../FormInputs/ArrayItemsInput";

export default function NewFarmerForm({ user }) {
  const [loading, setLoading] = useState(false);
  const [couponCode, setCouponCode] = useState();
  const [imageUrl, setImageUrl] = useState("");
  const [songs, setSongs] = useState([]);
  const {
    register,
    reset,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      isActive: true,
      ...user,
    },
  });
  const router = useRouter();
  function redirect() {
    router.push("/login");
  }
  const is18 = watch("is18");
  async function onSubmit(data) {
    const code = generateUserCode("LFF", data.artistName);
    data.code = code;
    data.userId = user.id;
    // data.products = products;
    data.profileImageUrl = imageUrl;
    console.log(data);
    makePostRequest(
      setLoading,
      "api/artists",
      data,
      "Artist Profile",
      reset,
      redirect
    );
  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3 "
    >
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
        <TextInput
          label="First Name"
          name="firstName"
          register={register}
          errors={errors}
          className="w-full"
        />
        <TextInput
          label="Last Name"
          name="lastName"
          register={register}
          errors={errors}
          className="w-full"
        />
        <TextInput
          label="Artist's Name / Stage Name"
          name="artistName"
          register={register}
          errors={errors}
          className="w-full"
        />
        <TextInput
          label="Artist's Phone"
          name="artistPhone"
          type="tel"
          register={register}
          errors={errors}
          className="w-full"
        />
        <TextInput
          label="Artist's Email Address"
          name="artistEmail"
          register={register}
          errors={errors}
          className="w-full"
        />
        <TextInput
          label="Artist's Physical Address"
          name="artistAddress"
          register={register}
          errors={errors}
          className="w-full"
        />
        <TextInput
          label="Artist's Record Label"
          name="recordLabel"
          register={register}
          errors={errors}
          className="w-full"
        />
        {/* <TextInput
          label="Artist's Contact "
          name="contactPerson"
          register={register}
          errors={errors}
          className="w-full"
        /> */}
       
        {/* Accare */}
        {/* <TextInput
          label="What is the Size of Your Land in Accres"
          name="landSize"
          type="number"
          register={register}
          errors={errors}
          className="w-full"
        /> */}
        {/* <TextInput
          label="What is your main Crop that you Cultivate"
          name="mainCrop"
          type="text"
          register={register}
          errors={errors}
          className="w-full"
        /> */}

        {/* <ArrayItemsInput
          setItems={setSongs}
          items={songs}
          itemTitle="Songs"
        /> */}

        <ToggleInput
          label="Are you 18 years old and over"
          name="is18"
          trueTitle="Yes"
          falseTitle="No"
          register={register}
        />
        {/* Configure this endpoint in the core js */}
        <ImageInput
          imageUrl={imageUrl}
          setImageUrl={setImageUrl}
          endpoint="artistProfileUploader"
          label="Artist Profile Image"
        />
        {/* <TextareaInput
          label="Farmer's Payment Terms"
          name="terms"
          register={register}
          errors={errors}
          isRequired={false}
        /> */}
        {/* <TextareaInput
          label="Notes"
          name="notes"
          register={register}
          errors={errors}
          isRequired={false}
        /> */}
        {/* <ToggleInput
          label="Farmer Status"
          name="isActive"
          trueTitle="Active"
          falseTitle="Draft"
          register={register}
        /> */}
      </div>

      <SubmitButton
        isLoading={loading}
        buttonTitle="Create Farmer"
        loadingButtonTitle="Creating Farmer please wait..."
      />
    </form>
  );
}
