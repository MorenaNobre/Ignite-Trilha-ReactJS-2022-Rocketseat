import { QuantityInput } from "../../../../components/QuantityInput";
import { RegularText, TitleText } from "../../../../components/Typography";
import {
  AddCartWrapper,
  CardFooter,
  CoffeeCardContainer,
  Description,
  Name,
  Tags,
} from "./styles";
import { ShoppingCart } from "phosphor-react";

export function CoffeeCard() {
  return (
    <CoffeeCardContainer>
      <img src="https://s3-alpha-sig.figma.com/img/55b1/f9ee/64600f98b2bae456b96fdc624c4b4f47?Expires=1669593600&Signature=EOGbXQYBeqYX1C7GcMygyM0XJaqbOU3ydZiPqL-NY6aHiskkr5FHMDc8QkVgOtGsiimXJJcmgjCy6XxHHUQcEHd1acupWJNluTrZXcnUpXvk0n6xEb5bBv6nQrioxaAGeaBA1L9Rd35dPGSi2ciwfqNKI7EctYFJ1qwJglnEqKW8bylgmjPXr6IEAXuZ2f4gRujfM~ikF64yMxA8i1TBrnpm4iPJqQ8dKZy3ncRYbjDnkyYWX-ngs51EbpbIkS5gsWuiafbgBmdCqEuso-t~lO0noqAiQ9lAS7mdfhvqrAsclTTn8gIXaDm--CciazC0p83m03Mf3YqLy-M9Sin8QA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />

      <Tags>
        <span>tradicional</span>
        <span>com leite</span>
      </Tags>

      <Name>Expresso Tradicional</Name>

      <Description>
        O tradicional café feito com água quente e grãos moídos
      </Description>

      <CardFooter>
        <div>
          <RegularText size="s">R$</RegularText>
          <TitleText size="m" color="text" as="strong">
            9,90
          </TitleText>
        </div>
        <AddCartWrapper>
          <QuantityInput />
          <button>
            <ShoppingCart weight="fill" size={22} />
          </button>
        </AddCartWrapper>
      </CardFooter>
    </CoffeeCardContainer>
  );
}
