export default async function Users() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  console.log(users);
  return (
    <>
      <h1>User list</h1>
      {users.map((user: { id: number; name: string }) => (
        <li key={user.id}>
          <h3>{user.name}</h3>
        </li>
      ))}
    </>
  );
}
