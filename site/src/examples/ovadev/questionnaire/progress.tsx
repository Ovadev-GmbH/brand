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
      <QuestionnaireItem name="format" required>
        <QuestionnaireTitle>Which format do you need the mark in?</QuestionnaireTitle>
        <QuestionnaireChoices>
          <QuestionnaireChoice value="svg">SVG, for print and web</QuestionnaireChoice>
          <QuestionnaireChoice value="png">PNG at 2x, for slides</QuestionnaireChoice>
        </QuestionnaireChoices>
        <QuestionnaireError>Choose a format.</QuestionnaireError>
      </QuestionnaireItem>
      <QuestionnaireItem name="mark" required>
        <QuestionnaireTitle>Which version of the mark?</QuestionnaireTitle>
        <QuestionnaireChoices>
          <QuestionnaireChoice value="mark">The pixel O on its own</QuestionnaireChoice>
          <QuestionnaireChoice value="wordmark">With the wordmark, on paper</QuestionnaireChoice>
        </QuestionnaireChoices>
        <QuestionnaireError>Choose a version of the mark.</QuestionnaireError>
      </QuestionnaireItem>
      <QuestionnaireItem name="delivery" required>
        <QuestionnaireTitle>How should the kit reach you?</QuestionnaireTitle>
        <QuestionnaireChoices>
          <QuestionnaireChoice value="email">By e-mail, as a ZIP</QuestionnaireChoice>
          <QuestionnaireChoice value="link">A download link, valid 7 days</QuestionnaireChoice>
        </QuestionnaireChoices>
        <QuestionnaireError>Choose how the kit reaches you.</QuestionnaireError>
      </QuestionnaireItem>
      <QuestionnaireActions>
        <QuestionnairePrevious />
        <QuestionnaireNext />
        <QuestionnaireSubmit>Send press kit</QuestionnaireSubmit>
      </QuestionnaireActions>
    </Questionnaire>
  );
}
