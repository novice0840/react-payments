import type { Meta, StoryObj } from "@storybook/react";
import Field from "../components/layout/Field/Field";
import Input from "../components/common/Input/Input";

const meta = {
  title: "Field",
  component: Field,
} satisfies Meta<typeof Field>;

export default meta;

type Story = StoryObj<typeof meta>;

const CARD_NUMBERS_FIELDS = ["first", "second", "third", "fourth"];
export const CardNumbers: Story = {
  argTypes: {
    children: {
      control: false,
    },
  },
  args: {
    title: "결제할 카드 번호를 입력해 주세요",
    description: "본인 명의의 카드만 결제 가능합니다.",
    labelText: "카드 번호",
    errorMessage: "",
    children: (
      <>
        {CARD_NUMBERS_FIELDS.map((name, index) => (
          <Input
            key={index}
            name={name}
            placeholder="1234"
            value=""
            isError={false}
            maxLength={4}
          ></Input>
        ))}
      </>
    ),
  },
};

const EXPIRATION_DATE_FIELDS = ["month", "year"];
export const ExpirationDate: Story = {
  argTypes: {
    children: {
      control: false,
    },
  },
  args: {
    title: "카드 유효기간을 입력해 주세요",
    description: "월/년도(MMYY)를 순서대로 입력해 주세요",
    labelText: "유효기간",
    errorMessage: "",
    children: (
      <>
        {EXPIRATION_DATE_FIELDS.map((name, index) => (
          <Input
            key={index}
            name={name}
            placeholder={name === "month" ? "MM" : "YY"}
            value=""
            isError={false}
            maxLength={4}
          ></Input>
        ))}
      </>
    ),
  },
};

export const OwnerName: Story = {
  argTypes: {
    children: {
      control: false,
    },
  },
  args: {
    title: "카드 소유자 이름을 입력해 주세요",
    labelText: "소유자 이름",
    errorMessage: "",
    children: (
      <>
        {Array.from({ length: 1 }).map(() => (
          <Input
            name="ownerName"
            placeholder="JOHN DOE"
            value=""
            isError={false}
          ></Input>
        ))}
      </>
    ),
  },
};
