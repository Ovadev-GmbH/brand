import * as React from "react";
import {
  Button,
  Questionnaire,
  QuestionnaireActions,
  QuestionnaireChoice,
  QuestionnaireChoices,
  QuestionnaireError,
  QuestionnaireInput,
  QuestionnaireItem,
  QuestionnaireNext,
  QuestionnairePrevious,
  QuestionnaireSubmit,
  QuestionnaireTitle,
} from "@ovadev-gmbh/ui-ovadev";

const labels: Record<string, string> = { product: "Product", canton: "Canton", contact: "Contact" };

export default function QuestionnaireControlled() {
  const [item, setItem] = React.useState("product");

  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <div className="flex h-7 items-center justify-between">
        <span className="text-label-13 text-content-secondary" role="status">
          Answering: {labels[item]}
        </span>
        {item !== "product" ? (
          <Button variant="ghost" size="sm" onClick={() => setItem("product")}>
            Change product
          </Button>
        ) : null}
      </div>
      <Questionnaire item={item} onItemChange={setItem} onSubmit={(event) => event.preventDefault()}>
        <QuestionnaireItem name="product" required>
          <QuestionnaireTitle>Which product is the quote for?</QuestionnaireTitle>
          <QuestionnaireChoices>
            <QuestionnaireChoice value="ticketova">TICKETOVA</QuestionnaireChoice>
            <QuestionnaireChoice value="januna">JANUNA</QuestionnaireChoice>
            <QuestionnaireChoice value="consulting">Consulting</QuestionnaireChoice>
          </QuestionnaireChoices>
          <QuestionnaireError>Choose a product.</QuestionnaireError>
        </QuestionnaireItem>
        <QuestionnaireItem name="canton" required>
          <QuestionnaireTitle>Which canton is the venue in?</QuestionnaireTitle>
          <QuestionnaireChoices>
            <QuestionnaireChoice value="ZH">
              <span className="text-label-13-mono">ZH</span>
            </QuestionnaireChoice>
            <QuestionnaireChoice value="ZG">
              <span className="text-label-13-mono">ZG</span>
            </QuestionnaireChoice>
            <QuestionnaireChoice value="LU">
              <span className="text-label-13-mono">LU</span>
            </QuestionnaireChoice>
          </QuestionnaireChoices>
          <QuestionnaireError>Choose a canton.</QuestionnaireError>
        </QuestionnaireItem>
        <QuestionnaireItem name="contact" required>
          <QuestionnaireTitle>Who at the venue is the contact?</QuestionnaireTitle>
          <QuestionnaireInput type="email" aria-label="Contact e-mail" placeholder="badi@tuerlersee.ch" />
          <QuestionnaireError>Enter the contact's e-mail address.</QuestionnaireError>
        </QuestionnaireItem>
        <QuestionnaireActions>
          <QuestionnairePrevious />
          <QuestionnaireNext />
          <QuestionnaireSubmit>Request quote</QuestionnaireSubmit>
        </QuestionnaireActions>
      </Questionnaire>
    </div>
  );
}
