import Counter from "../components/Counter";

async function page() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return (
    <div>
      <h1>Cabin page</h1>
      <ul>
        {data.map((user) => (
          <li key={user.id} className="list-none">
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default page;
