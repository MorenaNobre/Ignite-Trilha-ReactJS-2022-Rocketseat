import { TitleText } from "../../../../components/Typography";
import { OurCoffeesContainer } from "./styles";

export function OurCoffees() {
  return (
    <>
      <OurCoffeesContainer className="container">
        <TitleText size="l" color="subtitle">
          Nossos cafés
        </TitleText>
      </OurCoffeesContainer>
    </>
  );
}
