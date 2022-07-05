import { useEffect } from "react"

type Props = {
  id: string,
  label: string,
  onInput: (input: string) => void,
  errorMessage?: string,
}

function wait(milliseconds: number) {
  const start = new Date().getTime();
  while (new Date().getTime() - start < milliseconds) {}
}
export default function FormInput({id, label, errorMessage, onInput}: Props) {
  useEffect(() => {
    console.log('rendered')
    wait(25);
  }, [])
  return (
    <div className="flex items-center">
      <label htmlFor={id} className="flex-1">{label}</label>
      <div className="flex-1">
        <input
          type="text"
          id={id}
          name={id}
          className="w-full border rounded p-2"
          onInput={(e) => onInput(e.currentTarget.value)}
        />
        {errorMessage && <p className="text-sm text-red-600">{errorMessage}</p>}
      </div>
    </div>
  );
}
