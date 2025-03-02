import Container from "../../components/Container";
import Header from "../../components/Header";
import FormUser from "../../components/FormUser";
import TitlePage from "../../components/TitlePage";

const NewUser = () => {
  return (
    <Container>
      <Header />
      <TitlePage title="Novo Cadastro" />
      <FormUser />
    </Container>
  );
};

export default NewUser;
