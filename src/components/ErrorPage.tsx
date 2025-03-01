import Link from "next/link";
import { Button } from "./Button";

const ErrorPage = ({ message }: { message: string }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-3xl font-bold text-destructive">Ocorreu um erro</h1>
      <p className="mt-2">{message}</p>
      <Link href={"/"}>
        <Button variant="secondary" className="mt-8">
          Voltar para a lista de usuários
        </Button>
      </Link>
    </div>
  );
};

export default ErrorPage;
