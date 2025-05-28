"use server";

import { MOVIESEEDING } from "@/data/dbmeta";
import prismadb from "./prismadb";

export const fetchMovie = async (id: string) => {
  try {
    const response = await fetch("http://localhost:3000/api/movie", {
      method: "POST",
      body: JSON.stringify({ id }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchMovies = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/movies", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchRandomMovie = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/randommovie", {
      method: "GET",
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const seedMovieMetaData = async () => {
  try {
    await prismadb.movie.createMany({
      data: MOVIESEEDING,
    });
    return { status: "Successfully" };
  } catch (error) {
    console.error(error);
    return { status: "Unsuccessfully" };
  }
};

export const createUser = async (prevState: string, formData: FormData) => {
  const data = Object.fromEntries(formData);

  const { name, username, email, password, cfPassword } = data;

  if (!name || !username || !email || !password || !cfPassword) {
    return "All fields are required";
  }

  if (password !== cfPassword) {
    return "Password does not match";
  }

  try {
    const response = await fetch(`http://localhost:3000/api/createuser`, {
      method: "POST",
      body: JSON.stringify({ name, username, email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response) {
      return "User created successfully";
    } else {
      return "Something went wrong";
    }
  } catch (error) {
    console.error(error);
    return "Serve Action Create User Error";
  }
};
