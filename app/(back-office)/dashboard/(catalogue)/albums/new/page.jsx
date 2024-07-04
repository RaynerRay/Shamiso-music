import FormHeader from "@/components/backoffice/FormHeader";
import NewAlbumForm from "@/components/backoffice/Forms/NewAlbumForm";

export default function NewAlbum() {
  return (
    <div>
      <FormHeader title="New Album" />
      <NewAlbumForm />
    </div>
  );
}