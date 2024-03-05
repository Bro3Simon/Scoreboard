import { useForm } from "react-hook-form";

type FormValues = { newPlayerName: string };

export function useAddPlayer(onAddPlayer: (newPlayerName: string) => void) {
  const {
    control,
    handleSubmit: rhfHandleSubmit,
    reset,
  } = useForm({
    defaultValues: { newPlayerName: "" },
  });

  function handleSubmit({ newPlayerName }: FormValues) {
    onAddPlayer(newPlayerName);
    reset();
  }

  const onSubmit = rhfHandleSubmit(handleSubmit);

  return { control, onSubmit };
}
