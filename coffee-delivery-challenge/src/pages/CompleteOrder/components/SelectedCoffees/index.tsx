import { TitleText } from "../../../../components/Typography";
import { DetailsContainer, SelectedCoffeesContainer } from "./styles";

export function SelectedCoffees() {
  return (
    <SelectedCoffeesContainer>
      <TitleText size="xs" color="subtitle">
        Cafés selecionados
      </TitleText>

      <DetailsContainer>
        <p>itens</p>
      </DetailsContainer>
    </SelectedCoffeesContainer>
  );
}
