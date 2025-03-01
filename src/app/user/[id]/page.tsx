import Container from "../../../components/Container";
import FormUser from "../components/FormUser";
import Header from "../../../components/Header";
import { GetUserId } from "../../actions/getUserId";
import { userType } from "../../@types/user";
import ErrorPage from "../../../components/ErrorPage";

const EditUser = async ({ params }: { params: { id: string } }) => {
  try {
    let userData: userType = await GetUserId(params.id);
    return (
      <Container>
        <Header />
        <FormUser user={userData!} />
      </Container>
    );
  } catch (error) {
    return (
      <ErrorPage message="Erro ao carregar os dados do usuário. Tente novamente." />
    );
  }
};

export default EditUser;
