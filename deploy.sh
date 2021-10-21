#!/usr/bin/env sh
# 确保脚本抛出遇到的错误
set -e


# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

echo 'blog.richard-lsr.top' > CNAME
git init
git add -A
git commit -m 'deploy'


# github地址
# git push -f git@github.com:Richard-LiSR/Vue_blog.git master:gh-pages
git push -f git@github.com:Richard-LiSR/Richard-LiSR.github.io.git master:gh-pages


# gitee地址
# git push -f git@gitee.com:Richard-LiSR/vuepress_blog.git master:gh-pages
cd -
# rm -rf docs/.vuepress/dist
