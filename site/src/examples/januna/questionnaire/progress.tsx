import {
  Questionnaire,
  QuestionnaireActions,
  QuestionnaireChoice,
  QuestionnaireChoices,
  QuestionnaireError,
  QuestionnaireItem,
  QuestionnaireNext,
  QuestionnairePrevious,
  QuestionnaireProgress,
  QuestionnaireSubmit,
  QuestionnaireTitle,
} from "@ovadev-gmbh/ui-januna";

export default function QuestionnaireCustomProgress() {
  return (
    <Questionnaire className="w-full max-w-md" onSubmit={(event) => event.preventDefault()}>
      <QuestionnaireProgress
        className="w-full"
        render={(props, state) => (
          <div {...props}>
            <div className="mb-2 flex gap-1" aria-hidden="true">
              {Array.from({ length: state.total }, (_, i) => (
                <span key={i} className={i < state.current ? "h-1 flex-1 bg-brand" : "h-1 flex-1 bg-surface-active"} />
              ))}
            </div>
            Step {state.current} of {state.total}
          </div>
        )}
      />
      <QuestionnaireItem name="party" required>
        <QuestionnaireTitle>How many guests are joining?</QuestionnaireTitle>
        <QuestionnaireChoices>
          <QuestionnaireChoice value="2">Two</QuestionnaireChoice>
          <QuestionnaireChoice value="4">Up to four</QuestionnaireChoice>
          <QuestionnaireChoice value="6">Up to six</QuestionnaireChoice>
        </QuestionnaireChoices>
        <QuestionnaireError>Pick a party size to continue.</QuestionnaireError>
      </QuestionnaireItem>
      <QuestionnaireItem name="evening" required>
        <QuestionnaireTitle>Which evening?</QuestionnaireTitle>
        <QuestionnaireChoices>
          <QuestionnaireChoice value="2026-09-13">Tonight, Sun 13 Sep</QuestionnaireChoice>
          <QuestionnaireChoice value="2026-09-15">Tue 15 Sep</QuestionnaireChoice>
          <QuestionnaireChoice value="2026-09-19">Sat 19 Sep</QuestionnaireChoice>
        </QuestionnaireChoices>
        <QuestionnaireError>Pick an evening to see the free times.</QuestionnaireError>
      </QuestionnaireItem>
      <QuestionnaireItem name="time" required>
        <QuestionnaireTitle>What time?</QuestionnaireTitle>
        <QuestionnaireChoices>
          <QuestionnaireChoice value="19:00">19:00</QuestionnaireChoice>
          <QuestionnaireChoice value="19:30">19:30</QuestionnaireChoice>
          <QuestionnaireChoice value="20:45">20:45</QuestionnaireChoice>
        </QuestionnaireChoices>
        <QuestionnaireError>Pick a time to continue.</QuestionnaireError>
      </QuestionnaireItem>
      <QuestionnaireActions>
        <QuestionnairePrevious />
        <QuestionnaireNext />
        <QuestionnaireSubmit>Book table</QuestionnaireSubmit>
      </QuestionnaireActions>
    </Questionnaire>
  );
}
