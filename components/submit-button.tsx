"use client";

import { useFormStatus } from "react-dom";
import { Button, type ButtonProps } from "./ui/button";

type Props = ButtonProps & {
	pendingText?: string;
};

export function SubmitButton({ children, pendingText, ...props }: Props) {
  const { pending } = useFormStatus();



  return (
    <Button {...props} type="submit" className="w-full lg:w-1/3 disabled:bg-slate-600" aria-disabled={pending}>
      {pending ? pendingText : children}
    </Button>
  );
}
