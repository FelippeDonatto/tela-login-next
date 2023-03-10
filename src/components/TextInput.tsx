import { InputHTMLAttributes } from 'react'

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export default function TextInput(props: TextInputProps) {
  return (
    <input
      className="bg-gray-700 px-4 py-3 rounded-lg outline-none placeholder:text-gray-600 focus:ring-2 ring-brand-500"
      {...props}
    />
  )
}
