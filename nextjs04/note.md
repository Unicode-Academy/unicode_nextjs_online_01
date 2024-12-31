# Test

utils.ts

```
const sum = (a, b) => {
   return 3;
}
```

Case test 1

sum(1,2) --> 3

Case test 2

sum(4,5) --> 9

Case test 3
sum (-1, 2) --> 1

Front-End

- Render Component
- Call API
- Props
- Fire Event
- Snapshot

## Deploy

- NextJS chạy trên nền của Nodejs
- Thông qua phần mềm giám sát: pm2

Yêu cầu môi trường

1. Cài đặt NodeJS

=> Nên sử dụng thông qua nvm

2. Cài đặt pm2

3. WebServer

- Nginx
- Apache
- Candy

## CI/CD

Push code Git --> Build --> Test --> Deploy

- Deploy Staging (Deploy lên server test)
- Merge code --> Deploy production

Các bước khi deploy

- pull code
- npm i
- npm run build
- pm2 restart
