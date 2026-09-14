import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
  FieldTitle,
  RadioGroup,
  RadioGroupItem,
} from "@ovadev-gmbh/ui-ovadev";

const products = [
  { value: "ticketova.ch", location: "Ticketing", description: "Shop, admission control and real-time reporting for pools and venues." },
  { value: "januna.ch", location: "Restaurants", description: "Till, kitchen displays and orders. Coming soon." },
  { value: "ova.dev", location: "Consulting", description: "Philip helps with the setup and the season plan." },
];

export default function RadioGroupChoiceCard() {
  return (
    <RadioGroup defaultValue="ticketova.ch" aria-label="Product" className="w-full max-w-sm">
      {products.map((product) => (
        <FieldLabel key={product.value} htmlFor={`radio-group-card-${product.value}`}>
          <Field orientation="horizontal">
            <FieldContent>
              <FieldTitle>
                <span className="text-label-13-mono">{product.value}</span>
                <span className="text-content-secondary">{product.location}</span>
              </FieldTitle>
              <FieldDescription>{product.description}</FieldDescription>
            </FieldContent>
            <RadioGroupItem id={`radio-group-card-${product.value}`} value={product.value} />
          </Field>
        </FieldLabel>
      ))}
    </RadioGroup>
  );
}
