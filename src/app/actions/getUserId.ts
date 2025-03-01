export const GetUserId = async (id: number | string) => {
  const res = await fetch(
    `https://67bf2697b2320ee05012c774.mockapi.io/api/alymente/users/${id}`
  );
  if (!res.ok) throw new Error("Erro ao buscar usuários");
  return res.json();
};
