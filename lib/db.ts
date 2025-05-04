"use server"
import mongoose from "mongoose";
import { Client as Minio } from 'minio'

const MONGO_URI = process.env.MONGO_URI
const MINIO_ACCESSKEY = process.env.MINIO_ACCESSKEY
const MINIO_SECRETKEY = process.env.MINIO_SECRETKEY
const MINIO_ENDPOINT = process.env.MINIO_ENDPOINT
const MINIO_PORT = process.env.MINIO_PORT
const MINIO_BUCKET = process.env.MINIO_BUCKET


export const connectMongoDB = async () => {

    if (mongoose.connection && mongoose.connection.readyState >= 1) {
        console.log("Already connected to existed mongoDB");
        return
    }

    try {
        await mongoose.connect(MONGO_URI, {
            dbName: "mydatabase",
        })
        console.log("Connected to MongoDB")
    } catch (err) {
        console.error("Error connecting to MongoDB", err)
    }
}

export const minioClient = async (filePath: string) => {
    const client = new Minio({
        endPoint: MINIO_ENDPOINT,
        port: MINIO_PORT,
        useSSL: false,
        accessKey: MINIO_ACCESSKEY,
        secretKey: MINIO_SECRETKEY,
    })

    try {
        const url = await client.presignedGetObject(MINIO_BUCKET, decodeURIComponent(filePath), 60 * 60)
        return url

    } catch (error) {
        console.log(error)

    }

}