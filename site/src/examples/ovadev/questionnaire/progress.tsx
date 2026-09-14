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
} from "@ovadev-gmbh/ui-ovadev";

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
      <QuestionnaireItem name="export" required>
        <QuestionnaireTitle>Send acme-logistics a data export first?</QuestionnaireTitle>
        <QuestionnaireChoices>
          <QuestionnaireChoice value="yes">Yes, to the account owner</QuestionnaireChoice>
          <QuestionnaireChoice value="no">No, they declined one</QuestionnaireChoice>
        </QuestionnaireChoices>
        <QuestionnaireError>Choose whether to send an export.</QuestionnaireError>
      </QuestionnaireItem>
      <QuestionnaireItem name="keys" required>
        <QuestionnaireTitle>When are its 4 live API keys revoked?</QuestionnaireTitle>
        <QuestionnaireChoices>
          <QuestionnaireChoice value="now">Now</QuestionnaireChoice>
          <QuestionnaireChoice value="contract-end">At contract end, 2026-09-30</QuestionnaireChoice>
        </QuestionnaireChoices>
        <QuestionnaireError>Choose when the keys stop working.</QuestionnaireError>
      </QuestionnaireItem>
      <QuestionnaireItem name="final-invoice" required>
        <QuestionnaireTitle>How is the last period billed?</QuestionnaireTitle>
        <QuestionnaireChoices>
          <QuestionnaireChoice value="pro-rata">Pro rata, to the day</QuestionnaireChoice>
          <QuestionnaireChoice value="full-month">The full month</QuestionnaireChoice>
        </QuestionnaireChoices>
        <QuestionnaireError>Choose how to bill the last period.</QuestionnaireError>
      </QuestionnaireItem>
      <QuestionnaireActions>
        <QuestionnairePrevious />
        <QuestionnaireNext />
        <QuestionnaireSubmit>Schedule offboarding</QuestionnaireSubmit>
      </QuestionnaireActions>
    </Questionnaire>
  );
}
