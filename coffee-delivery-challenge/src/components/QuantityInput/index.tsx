import { QuantityInputContainer } from "./styles";

export function QuantityInput() {
  return (
    <QuantityInputContainer>
      <input type="number" readOnly value={1} />
    </QuantityInputContainer>
  );
}
