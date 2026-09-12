import {
  Button,
  Note,
  NoteAction,
  NoteContent,
  NoteLabel,
} from "@ovadev-gmbh/ui-januna";

export default function NoteDemo() {
  return (
    <div className="flex w-full max-w-lg flex-col gap-3">
      <Note>
        <NoteContent>
          <NoteLabel>Note:</NoteLabel>
          Online bookings close two hours before each shift.
        </NoteContent>
      </Note>
      <Note variant="success">
        <NoteContent>
          <NoteLabel>Confirmed:</NoteLabel>
          Table 12 is held for the Keller party until 19:15.
        </NoteContent>
        <NoteAction>
          <Button variant="outline" size="xs">
            Open
          </Button>
        </NoteAction>
      </Note>
      <Note variant="warning" fill>
        <NoteContent>
          <NoteLabel>Heads up:</NoteLabel>
          Friday is fully booked from 19:00; new requests join the waitlist.
        </NoteContent>
      </Note>
      <Note variant="error" fill>
        <NoteContent>
          <NoteLabel>Failed:</NoteLabel>
          The deposit for booking #4821 could not be charged.
        </NoteContent>
        <NoteAction>
          <Button variant="outline" size="xs">
            Retry
          </Button>
        </NoteAction>
      </Note>
      <Note variant="info" size="sm" icon={null}>
        <NoteContent>Guests receive a reminder 24 hours before arrival.</NoteContent>
      </Note>
    </div>
  );
}
