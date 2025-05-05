import { seedMovieMetaData } from "@/lib/actions";


const SeedPage = async () => {
    const response = await seedMovieMetaData()

    return <div className="h-screen w-screen flex justify-center items-center text-5xl text-white">
        <p>  Seed status: {response.status}</p>
    </div>;
};
export default SeedPage;
