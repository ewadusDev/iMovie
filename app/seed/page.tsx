import { seedMovieMetaData } from "@/lib/actions";

const SeedPage = async () => {
  const response = await seedMovieMetaData();

  return (
    <div className="flex h-screen w-screen items-center justify-center text-5xl text-white">
      <p> Seed status: {response.status}</p>
    </div>
  );
};
export default SeedPage;
