import { TitleText } from "../../../../components/Typography";
import { CompleteOrderFormContainer, FormSectionContainer } from "./styles";

export function CompleteOrderForm() {
  return (
    <CompleteOrderFormContainer>
      <TitleText size="xs" color="subtitle">
        Complete seu pedido
      </TitleText>

      <FormSectionContainer></FormSectionContainer>
    </CompleteOrderFormContainer>
  );
}
