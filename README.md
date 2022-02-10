# umi project

备案号:黑ICP备2022000606

## Getting Started

Install dependencies,

```bash
$ yarn
```

Start the dev server,

```bash
$ yarn start
```

docker run -d \
    -p 80:80 \
    --name client \
    --restart=always \
    registry.cn-beijing.aliyuncs.com/know/yykj:0.2


docker run -d \
    -p 443:443 \
    --name client2 \
    --restart=always \
    registry.cn-beijing.aliyuncs.com/know/yykj:0.2
