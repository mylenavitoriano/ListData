import { userType } from "../types/user";
import Container from "../components/Container";
import { columns } from "../components/DataTable/ColumnsUser";
import { DataTable } from "../components/DataTable/DataTable";
import Header from "../components/Header";
import { GetListUsers } from "../actions/user";
import ButtonNewRegister from "../components/ButtonNewRegister";
import ErrorMessage from "../components/ErrorMessage";

export default async function Home() {
  const users: userType[] | null = await GetListUsers();

  return (
    <Container>
      <Header />
      <ButtonNewRegister />
      {users != null ? (
        <DataTable columns={columns} data={users} totalPerPage={10} />
      ) : (
        <ErrorMessage message="Erro ao buscar usuários, tente novamente mais tarde..." />
      )}
    </Container>
  );
}
