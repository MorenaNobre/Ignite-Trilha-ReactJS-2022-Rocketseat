import { forwardRef, InputHTMLAttributes } from "react";
import { InputStyleContainer } from "./styles";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return <InputStyleContainer {...props} ref={ref} />;
});
