import Link from "next/link";

// import { CreatePost } from "~/app/_components/create-post";
import { getServerAuthSession } from "~/server/auth";
// import { api } from "~/trpc/server";

export default async function Home() {
  // const hello = await api.post.hello({ text: "from tRPC" });
  const session = await getServerAuthSession();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
          Advance <span className="text-[hsl(280,100%,70%)]">Faucet</span>
        </h1>
        <div className="flex flex-col items-center gap-2">
          <div className="flex flex-col items-center justify-center gap-4">
            <p className="text-center text-2xl text-white">
              {session && (
                <span>
                  Logged in as{" "}
                  <span className="text-lime-500">{session.user?.name}</span>
                </span>
              )}
            </p>
            <Link
              href={session ? "/api/auth/signout" : "/api/auth/signin"}
              className="rounded-full bg-white/10 px-20 py-3 font-semibold no-underline transition hover:bg-white/20"
            >
              {session ? "Sign out" : "Sign in with X"}
            </Link>
          </div>
        </div>
        <div className="flex-col space-y-3 ">
          <div className="text-lg">
            Enter your Ethereum address to receive tokens:
          </div>
          <input
            type="text"
            placeholder="0x1234...5678"
            className="w-full max-w-md rounded-lg p-2 text-black"
          />
          <button
            type="submit"
            className="w-full max-w-md rounded-full bg-white/10 py-3 font-semibold transition hover:bg-white/20"
            disabled={!session}
          >
            {!session ? "Submit" : "Submit"}
          </button>
        </div>
        {/* <CrudShowcase /> */}
      </div>
    </main>
  );
}

// async function CrudShowcase() {
//   const session = await getServerAuthSession();
//   if (!session?.user) return null;

//   const latestPost = await api.post.getLatest();

//   return (
//     <div className="w-full max-w-xs">
//       {latestPost ? (
//         <p className="truncate">Your most recent post: {latestPost.name}</p>
//       ) : (
//         <p>You have no posts yet.</p>
//       )}

//       <CreatePost />
//     </div>
//   );
// }
