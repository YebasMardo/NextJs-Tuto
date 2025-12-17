import { notFound } from "next/navigation";

const fecthUser = async (id: string) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  if (!response.ok) {
    return null;
  }
  const user = await response.json();
  return user;
};

export default async function UserPage({
  params,
}: {
  params: Promise<{ userId: string }>;
}) {
  const { userId } = await params;
  const user = await fecthUser(userId);

  if (!user) {
    notFound();
  }
  return (
    <>
      <h1>{user.name}</h1>
    </>
  );
}
