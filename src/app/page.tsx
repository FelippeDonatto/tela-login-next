'use client'

import Link from 'next/link'
import { GoogleChromeLogo, FacebookLogo } from '@phosphor-icons/react'

import TextInput from '@/components/TextInput'
import { ButtonPrimary } from '@/components/Button'

export default function Home() {
  return (
    <main className="flex flex-col justify-between items-center w-full max-w-[317px] mx-auto h-screen py-[100px] max-md:pb-[20px]">
      <div className="w-full flex flex-col justify-center items-center">
        <h1 className="mb-5 font-black text-2xl text-white">Faça login</h1>

        <form className="flex flex-col w-full gap-5">
          <TextInput
            type={'email'}
            placeholder="Endereço de e-mail"
            required
            autoFocus
          />

          <TextInput type={'password'} placeholder="Sua senha" required />

          <ButtonPrimary.Root tipos="primary">
            <ButtonPrimary.Button type="button">Logar</ButtonPrimary.Button>
          </ButtonPrimary.Root>

          <div className="flex justify-end w-full text-sm font-normal text-gray-600 transition-all hover:text-gray-400 hover:underline">
            <Link href="#">Esqueceu sua senha</Link>
          </div>
        </form>

        <div className="flex items-center gap-4 w-full mt-5">
          <div className="border-b w-[75px] mx-auto border-gray-600"></div>
          <span className="text-gray-600 text-sm font-normal">
            ou continuar com
          </span>
          <div className="border-b w-[75px] mx-auto  border-gray-600"></div>
        </div>

        <div className="flex flex-col gap-5 w-full mt-5">
          <ButtonPrimary.Root tipos="secundary">
            <ButtonPrimary.Icon>
              <GoogleChromeLogo />
            </ButtonPrimary.Icon>
            <ButtonPrimary.Button>Logar</ButtonPrimary.Button>
          </ButtonPrimary.Root>

          <ButtonPrimary.Root tipos="secundary">
            <ButtonPrimary.Icon>
              <FacebookLogo />
            </ButtonPrimary.Icon>
            <ButtonPrimary.Button>Logar</ButtonPrimary.Button>
          </ButtonPrimary.Root>
        </div>
      </div>
      <div className="flex items-center gap-1">
        <p className="font-semibold text-gray-600 text-sm">
          Não tem uma conta?
        </p>

        <Link
          href="#"
          className="font-bold text-white text-sm transition-all hover:text-gray-400 hover:underline"
        >
          {' '}
          Inscrever-se
        </Link>
      </div>
    </main>
  )
}
