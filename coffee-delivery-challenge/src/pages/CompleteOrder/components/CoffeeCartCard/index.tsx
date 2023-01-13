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
        <img src="https://s3-alpha-sig.figma.com/img/0a3c/9586/9a75d3fa0ffdecc4bc46ca83d2342e1c?Expires=1674432000&Signature=NagC0aILVrr~dJ-Ehp2yMBfJ9DzUhmif52~cj153j6ihTcS3pDd~DnYMSlfEbMaLqp4m2aCeutxksmkEFah0iQN~RsuD-Rn9uyXMgOda15WGZioNlX0PhAOAys4n2bFBrudYE46tl66~6ayH1efgud9cES13Z6iw8HpZXbGG9s7tNhQfCQOav72ClcdYPrGREW6zgxk57fMsU~ZEuMezw3KYmAtPDllYtKXE7F5fTD-BfC59Xc0mVDJMBioM4-ehfGP379eYwju3Fx50TnWBnFgUEY4wjIXzuweUuJtLbtK-oMyisuUjvEiDMWFlMcuX3do8riOssRty8wDrfkgSGQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />

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
