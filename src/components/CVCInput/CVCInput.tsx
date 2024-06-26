import { ChangeEvent, KeyboardEvent } from "react";
import Field from "@/components/layout/Field/Field";
import Input from "@/components/common/Input/Input";

interface CVCInputProps {
  CVC: { value: string; isError: boolean; errorMessage: string };
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (event: KeyboardEvent<HTMLInputElement>) => void;
  onFocus: () => void;
  onBlur: () => void;
}

const CVCInput = ({
  CVC,
  onChange,
  onKeyDown,
  onFocus,
  onBlur,
}: CVCInputProps) => {
  return (
    <Field
      title="CVC 번호를 입력해 주세요"
      description="세자리 숫자를 입력한 후 엔터 키를 입력해주세요"
      errorMessage={CVC.errorMessage}
    >
      <Input
        name="CVC"
        value={CVC.value}
        placeholder="CVC"
        isError={CVC.isError}
        maxLength={3}
        autoFocus
        onChange={onChange}
        onKeyDown={onKeyDown}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    </Field>
  );
};

export default CVCInput;
