"use client";
import ArrayItemsInput from "@/components/FormInputs/ArrayItemsInput";

import SelectInput from "@/components/FormInputs/SelectInput";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextareaInput from "@/components/FormInputs/TextAreaInput";
import TextInput from "@/components/FormInputs/TextInput";
import ToggleInput from "@/components/FormInputs/ToggleInput";
import FormHeader from "@/components/backoffice/FormHeader";
import { makePostRequest, makePutRequest } from "@/lib/apiRequest";
import { generateSlug } from "@/lib/generateSlug";
// import { generateUserCode } from "@/lib/generateUserCode";
import { Plus, X } from "lucide-react";
import { useRouter } from "next/navigation";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
// import MultipleImageInput from "../FormInputs/MultipleImageInput";

export default function NewSongForm({
  categories,
  artists,
  albums,
  updateData = {},
}) {
  console.log(updateData);
  const initialImageUrl = updateData?.imageUrl ?? "";
  const initialTags = updateData?.tags ?? [];
  const id = updateData?.id ?? "";
  const [imageUrl, setImageUrl] = useState(initialImageUrl);
  // TAGS
  const [tags, setTags] = useState(initialTags);
  console.log(tags);
  const [loading, setLoading] = useState(false);
  const {
    register,
    reset,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      isActive: true,
      // isWholesale: false,
      ...updateData,
    },
  });
  const isExplicit = watch("isExplicit");
  const isrcCode = watch("isrcCode");
  // const isWholesale = watch("isWholesale");
  // console.log(isExplicit);
  const router = useRouter();
  function redirect() {
    router.push("/dashboard/songs");
  }
  const [SongImages, setSongImages] = useState([]);
  console.log(SongImages);
  async function onSubmit(data) {
    const slug = generateSlug(data.title);
    // const SongCode = generateUserCode("LLP", data.title);
    data.slug = slug;
    // data.SongImages = SongImages;
    data.tags = tags;
    data.qty = 1;
    // data.SongCode = SongCode;
    console.log(data);
    if (id) {
      data.id = id;
      // Make Put Request (Update)
      makePutRequest(
        setLoading,
        `api/songs/${id}`,
        data,
        "Song",
        redirect
      );
      console.log("update Request: ", data);
    } else {
      makePostRequest(
        setLoading,
        "api/songs",
        data,
        "Song",
        reset,
        redirect
      );
      setSongImages([]);
      setTags([]);
    }
  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3 "
    >
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
        <TextInput
          label="Track Title"
          name="title"
          register={register}
          errors={errors}
          
        />
         
        {/* <TextInput
          label="Song SKU"
          name="sku"
          register={register}
          errors={errors}
          className="w-full"
        /> */}

        {/* <TextInput
          label="Song Barcode"
          name="barcode"
          register={register}
          errors={errors}
          className="w-full"
        /> */}
      
      <SelectInput
          label="Select Artist"
          name="artistId"
          register={register}
          errors={errors}
          className="w-full"
          options={artists}
        />
      
        <SelectInput
          label="Select Category"
          name="categoryId"
          register={register}
          errors={errors}
          className="w-full"
          options={categories}
        />
      
        <SelectInput
          label="Select Album"
          name="albumId"
          register={register}
          errors={errors}
          className="w-full"
          options={albums}
        />
        
         <TextInput
          label="Add Song Main Language"
          name="language"
          register={register}
          errors={errors}
          type="text"
          className="w-full"
        />

<SelectInput
          label="Select Version"
          name="version"
          register={register}
          errors={errors}
          className="w-full"
          options={artists}
        />
        <ToggleInput
          label="Does the song contain explicit content"
          name="isExplicit"
          trueTitle="Yes"
          falseTitle="No"
          register={register}
        />
        <ToggleInput
          label="Does you have an ISRC code"
          name="isrcCode"
          trueTitle="Yes"
          falseTitle="No"
          register={register}
        />
         <TextInput
          label="Add Song"
          name="song"
          register={register}
          errors={errors}
          type="text"
          className="w-full"
        />
         <TextInput
          label="Add Producer"
          name="producer"
          register={register}
          errors={errors}
          type="text"
          className="w-full"
        />
        
        <ArrayItemsInput setItems={setTags} items={tags} itemTitle="Add Genre" />
       

        <TextareaInput
          label="Add Lyrics"
          name="lyrics"
          register={register}
          errors={errors}
        />
          
      
      </div>

      <SubmitButton
        isLoading={loading}
        buttonTitle={id ? "Update Song" : "Create Song"}
        loadingButtonTitle={`${
          id ? "Updating" : "Creating"
        } Song please wait...`}
      />
    </form>
  );
}
