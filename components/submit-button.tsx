"use client";

import { useFormStatus } from "react-dom";
import { Button, ButtonProps } from "./ui/button";

type Props = ButtonProps & {
	pendingText?: string;
};

export function SubmitButton({ children, pendingText, ...props }: Props) {
  const { pending } = useFormStatus();



  return (
    <Button {...props} type="submit" aria-disabled={pending}>
      {pending ? pendingText : children}
    </Button>
  );
}