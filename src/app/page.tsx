import Image from "next/image";
import CatIcon from "../assets/icon-cat.svg";
import DogIcon from "../assets/logo-petx.svg";
import TextField from "../components/TextField";
import Button from "../components/Button";
import Link from "next/link";

export default function Login() {
  return (
    <div className="flex h-screen">
      <div className="flex h-full w-full justify-center bg-indigo-50 p-8 sm:w-full lg:w-3/4">
        <div className="flex w-full flex-col items-center justify-center gap-4 rounded-2xl bg-white lg:w-3/4">
          <Image src={DogIcon} alt="" />
          <h1 className="text-xl">Faça o login</h1>
          <form action="" className="flex flex-col gap-8">
            <TextField
              placeholder="Digite Seu Email"
              type="email"
              icon="email"
            />
            <TextField
              placeholder="Digite Sua Senha"
              type="password"
              icon="password"
            />
            <Button type="submit" text="Entrar" icon="SignIn" />
          </form>
          <Link href="#" className="text-base text-slate-500 underline">
            Esqueceu a senha?
          </Link>
        </div>
      </div>
      <div className="hidden sm:w-full md:w-2/4 lg:flex lg:w-full lg:items-center lg:justify-center">
        <Image src={CatIcon} alt="" />
      </div>
    </div>
  );
}
