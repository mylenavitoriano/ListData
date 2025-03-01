import { userType } from "./@types/user";
import { GetListUsers } from "./actions/getListUsers";
import Container from "../components/Container";
import { columns } from "../components/DataTable/ColumnsUser";
import { DataTable } from "../components/DataTable/DataTable";
import Header from "../components/Header";

export default async function Home() {
  const users: userType[] = await GetListUsers();

  return (
    <Container>
      <Header />
      <DataTable columns={columns} data={users} totalPerPage={10} />
    </Container>
  );
}
