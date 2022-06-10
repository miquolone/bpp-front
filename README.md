### BPP Official Creators Page

BPP-server
https://github.com/miquolone/bpp-server

BPP-front
https://github.com/miquolone/bpp-front


### 更新

公開中各paasとその更新方法

### 各paasへの展開
```
npm run paasBuild
```

wireitを用いてsilial実行を行

- cloudfrear pages 

  npx wrangler pages publish build

- vercel(github integrationで設定済み) 

  vercel deploy --prod

- firebase hosting(actionsも設定済み) 

  firebase deploy -p build -m 'message add '

- netlify(github integrationで設定済み) 


