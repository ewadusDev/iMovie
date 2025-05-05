# iMovie

Individual project for practice and do port folio. not for public

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

Step set up mongodb with replica set (docker)

1. Generate mongo-keyfile

```bash
   openssl rand -base64 756 > mongo-keyfile
   chmod 400 mongo-keyfile
```

2. run docker compose

```bash
   docker compose up
```

3. exec the mongo container

```bash
   docker exec -it mongo mongosh -u root -p example
```

4. init ตัว monogodb instance map port in container

```bash
   rs.initiate({
   \_id: "rs0",
   members: [
   { _id: 0, host: "localhost:27017" }
   ]
   })
```

5. Connet prisama and push db model to create collection in monogodb

```bash
npx prisma db generate
npx prisma db push
```

6. go on.....

7. ถ้าไม่ได้ ให้ลองทำ แบบ เริ่มจาก deploy mongodb ธรรมดา ไม่ต้องมี replica set และไม่ต้องใส่ keyfile แล้วจากนั้น push prisma collection ไปก่อน ต่อไป ค่อย compose down แล้วใส่ keyfile ลงใน command จากนั้นค่อย compose up อีกครั้ง และ connect mongo อีกที

```bash
  docker compose up
```

8. แปลงไฟล์ video เป็น .ts และ .m3u8 ไฟล์ ใน lib/convert-all.js

```bash
  node convert-all.js
```

9. Seeding Metadata in database

9.1 minio vdo stucture

```bash
thaimovie/iscream/iScream*ep10_1*คืนหลอน..บ้านท้ายซอยx.ts
thaimovie/iscream/iScream*ep10_1*คืนหลอน..บ้านท้ายซอยx.m3u8
```

9.2 seed movie collection

```bash
  _id objectid default
  title
  description
  genre
  duration
  videoUrl:   exmaple {/iscream/iScream*ep10_1*คืนหลอน..บ้านท้ายซอยx.m3u8} //จาก minio มาใส่
```
