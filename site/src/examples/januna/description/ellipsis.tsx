import { Description, DescriptionList } from "@ovadev-gmbh/ui-januna";

export default function DescriptionEllipsis() {
  return (
    <DescriptionList className="w-72">
      <Description
        title="Note from guest"
        content="Celebrating our tenth anniversary, a quiet table by the window if possible"
        ellipsis
        className="col-span-2"
      />
      <Description
        title="Dietary requirements"
        content="One guest vegan, one with a nut allergy, one without gluten"
        ellipsis
        className="col-span-2"
      />
    </DescriptionList>
  );
}
