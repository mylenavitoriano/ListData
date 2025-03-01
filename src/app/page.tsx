import { userType } from "../types/user";
import Container from "../components/Container";
import { columns } from "../components/DataTable/ColumnsUser";
import { DataTable } from "../components/DataTable/DataTable";
import Header from "../components/Header";
import { GetListUsers } from "../actions/user";

export default async function Home() {
  const users: userType[] = await GetListUsers();

  return (
    <Container>
      <Header />
      <DataTable columns={columns} data={users} totalPerPage={10} />
    </Container>
  );
}
