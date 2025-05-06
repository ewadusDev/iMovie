# iMovie VDO streaming application

Individual project for studying and doing portfolio. not for public

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`DATABASE_URL`="mongodb://root:example@0.0.0.0:27017/iscreamdb?authSource=admin"

`MINIO_ACCESSKEY`=YSx5e6Exx3fHmUAHpTYu
`MINIO_SECRETKEY`=1xkBMA9AAOZhk5UHu8zpaUjV4rPuqJI5n0HaKNnH
`MINIO_ENDPOINT`=localhost
`MINIO_PORT`=9000
`MINIO_BUCKET`=thaimovie

`NEXTAUTH_SECRET`=my_secret
`NEXTAUTH_URL`=http://localhost:3000

## Deployment

To deploy this project run

Before run app

```bash
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps
```

Step set up mongodb with replica set (docker)

0. Docker compose up first everything's running fine then compose down.

```bash
   docker compose up -d
   docker compose down
```

1. Generate mongo-keyfile

```bash
   openssl rand -base64 756 > mongo-keyfile
   chmod 400 mongo-keyfile
```

2. run docker compose again

\*\* Please uncomment key in docker-compose.yml before run

```bash
   docker compose up -d
```

3. exec the mongo container

```bash
   docker exec -it mongo mongosh -u root -p example
```

4. init ตัว monogodb instance map port in container

```bash
   rs.initiate({
   _id: "rs0",
   members: [
   { _id: 0, host: "localhost:27017" }
   ]
   })
```

5. Connet prisama and push db model to create collection in monogodb

```bash
npx prisma generate
npx prisma db push
```

\*\*ถ้าไม่ได้ ให้ลองทำ แบบ เริ่มจาก deploy mongodb ธรรมดา ไม่ต้องมี replica set และไม่ต้องใส่ keyfile แล้วจากนั้น push prisma collection ไปก่อน ต่อไป ค่อย compose up อีกที

6. Run application

```bash
   npm run dev
```

7. Seeding Metadata in database

   go to http://localhost:3000/seed

8. Set up minio database

- go to http://localhost:9000
- create bucket and set public bucket in option
- upload asset https://drive.google.com/file/d/1Djn6kGoA8uuJU1iAEF2QBXBUJjMK3LOC/view?usp=drive_link to the bucket
- generate key access keys and put it to env file

## File Structure

- thaimovie (bucket name)
  - iscream
    - iScreamxxxxxx_ep1/iScream_ep1.ts
    - iScreamxxxxxx_ep2/iScream_ep2.ts
  - iscreatepreview
    - iscream_preview_ep1.jpg

9. ค่อยๆ อัพโหลด VDO ที่ละ 4 -5 folders ต่อครั้ง เผื่อไม่ให้ docker ทำงานหนัก

10. ถ้ามีไฟล์ใหม่ แปลงไฟล์ video เป็น .ts และ .m3u8 ไฟล์ ใน lib/convert-all.ts

```bash
  ts-node convert-all.ts
```
