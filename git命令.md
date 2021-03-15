配置身份：
git config --global user.name "cdq"
git config --global user.email "**********@qq.com"

查看本人身份：
git config --global user.name
git config --global user.email

到工程的目录下，右键打开git bash，建立代码仓库：
git init

提交代码：
	将要提交的内容添加，如添加readme.txt文件：
	git add readme.txt 或 git add .（这个命令是一次性添加全部）
	提交
	git commit -m "Wrote a readme file"

查看修改内容：
git status

查看详细修改内容，按q退回：
git diff

查看提交记录：
git log

其中一小部分
commit defd8af52be5183dfceb3e5cf23f78ea47d013b0
Author: coder-pig <779878443@qq.com>
Date:   Fri Jun 19 17:00:36 2015 +0800
MainActivity Delete Menu
依次是：
此次提交对应的版本号
提交人：姓名 邮箱
提交的时间
提交版本修改的内容：就是我们commit -m "xxx"里的xxx、

撤销未提交的修改(没有add过的文件):
git checkout 文件

撤销add过的文件的修改，先取消add：
git reset HEAD 文件
git checkout 文件

版本退回：
git reset --hard 版本号前七位（通过git log查看版本号）
git reset --hard HEAD（返回上一个版本）
git reset --hard HEAD^ （返回上上个版本）

退回版本后想返回新版本，查看版本号：
git reflog

克隆github工程：
git clone GitHub给的网址

上传本地项目到github：
git remote add origin GitHub给的网址

同步到github：
git push -u origin master

github同步到本地：
git pull

https://blog.csdn.net/xqhys/article/details/98113227

