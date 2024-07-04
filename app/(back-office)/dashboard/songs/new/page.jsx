import FormHeader from "@/components/backoffice/FormHeader";
import NewSongForm from "@/components/backoffice/Forms/NewSongForm";

export default function NewCategory() {
  return (
    <div>
      <FormHeader title="New Song" />
      <NewSongForm />
    </div>
  );
}
