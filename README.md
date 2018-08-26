# 使用手册

>项目主要基于antd pro1.3版本进行的二次开发加入了页签实现。————感谢antd pro

## 开发环境搭建

1. 检查环境 node 版本环境大于8 `node -v` npm 版本大于 5 `npm -v` 本人使用开发环境版本为node  v8.11.3, npm  v5.6.0

2. `git clone https://github.com/Jack-Rose/ant-desgin-pro-multipage.git <yourfolder>`
3. `npm install`

4. `npm run start`

5. 打开`localhost:3000`

## ngnix部署静态浏览站点

```conf
server {
        listen 80;
        server_name {your-domain};
        root  {dirname}/ant-desgin-pro-multipage/dist/;
        index index.html;
}
```

重启 nginx
