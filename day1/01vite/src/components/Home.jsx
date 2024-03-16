import { useLoaderData } from "react-router-dom";

// eslint-disable-next-line react-refresh/only-export-components
export const homeLoader = async () => {
  let response = await fetch("https://api.github.com/users/gouravg8");
  return response.json();
};

function Home() {
  let data = useLoaderData();
  //   console.log(data);
  return (
    <>
      <div className="flex flex-col md:flex-row md:gap-20 align-middle  py-5  justify-center text-center mx-auto w-full bg-gray-900 text-white">
        <aside className="item-center">
          <img
            src="https://avatars.githubusercontent.com/u/84095227?s=400&u=6f9ed12616dd2ddf8d2d02d32b3a0ab2dffa0289&v=4"
            width={300}
            height={300}
            alt="my profile logo"
            className="rounded mx-auto my-4 md:my-0"
          />
        </aside>
        <main className="md:py-4 md:text-start">
          <a
            href={data.html_url}
            className="font-bold text-xl text-orange-600 underline"
          >
            {data.name}
          </a>
          <p className="text-sm capitalize">followers: {data.followers}</p>
          <p className="text-sm capitalize">following: {data.following}</p>
        </main>
      </div>
    </>
  );
}

export default Home;
