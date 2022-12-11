import { QuantityInput } from "../../../../components/QuantityInput";
import { RegularText } from "../../../../components/Typography";
import {
  ActionsContainer,
  CoffeeCartCardContainer,
  RemoveButton,
} from "./styles";
import { Trash } from "phosphor-react";

export function CoffeeCartCard() {
  return (
    <CoffeeCartCardContainer>
      <div>
        <img src="https://s3-alpha-sig.figma.com/img/55b1/f9ee/64600f98b2bae456b96fdc624c4b4f47?Expires=1671408000&Signature=OITyy7t3gYtqAxRZTMwMEKzysm2Dnbx1C1zX6-ABIZrXpFj~M9WtsGFpMlcq5YsHyFACVMG~d9fhL3BXOzDFZRD6FpvWHtNoYIgTT2BWiKfpyaX8bl0VK5gYd5FeGCmskVolhOJNifXMFTNJ4riiPAMSiwXYwCMpiC0UujgPMxaUysGupzH1Adps8pJiJ~tqUbDJVuH2j~TF8BWnYTOfVadWyu3mfD72FQKbEbjnDECv35A-jlPlbWgyfwCXSIz1RBj7RLKeVRlQJ-dOzhA~rUB9Vb430aH1VXSFRnUIbciAAN8BuPzkDQAaMtjL68FQpTmh9zodzdja4JTb47Qxng__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />

        <div>
          <RegularText color="subtitle">Expresso Tradicional</RegularText>
          <ActionsContainer>
            <QuantityInput size="small" />
            <RemoveButton>
              <Trash size={16} />
              REMOVER
            </RemoveButton>
          </ActionsContainer>
        </div>
      </div>

      <p>R$ 9,90</p>
    </CoffeeCartCardContainer>
  );
}
