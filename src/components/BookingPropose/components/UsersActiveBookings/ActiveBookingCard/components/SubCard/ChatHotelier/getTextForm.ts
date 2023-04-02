interface IFormsControls extends HTMLFormControlsCollection {
  message?: { value: string };
}

type TEvent = React.FormEvent<HTMLFormElement>;

export const getTextForm = (e: TEvent) => {
  const userMessage: IFormsControls = e.currentTarget.elements;

  return userMessage?.message?.value ? userMessage?.message?.value : '';
};
