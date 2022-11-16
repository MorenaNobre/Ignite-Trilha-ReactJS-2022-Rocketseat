import { IntroContainer, IntroContent } from "./styles";
import introCoffee from "../../../../assets/intro-coffee.png";

export function Intro() {
  return (
    <IntroContainer>
      <IntroContent className="container">
        <div></div>

        <img src={introCoffee} />
      </IntroContent>
    </IntroContainer>
  );
}
