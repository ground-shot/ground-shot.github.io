# GroundShot 项目主页模板

这是一套可以直接放进 `ground-shot/ground-shot.github.io` 仓库根目录的纯静态项目页。它不需要安装任何软件或构建工具，GitHub Pages 会直接发布。

## 第一次上传（最简单的方法）

1. 打开 `https://github.com/ground-shot/ground-shot.github.io`。
2. 点击 **Add file → Upload files**。
3. 解压下载的模板 ZIP。
4. 把解压后文件夹**里面的全部内容**拖入上传区：`index.html`、`style.css`、`script.js`、`assets` 文件夹和本说明文件。
5. 页面底部的提交说明可填写 `Add academic project page`。
6. 点击 **Commit changes**。
7. 等待约 1–3 分钟，刷新 `https://ground-shot.github.io/`。

重要：不要只上传外层 `ground-shot-project-page` 文件夹。`index.html` 必须位于仓库最外层。

## 最先需要替换的内容

打开 `index.html`，使用页面右上角铅笔按钮编辑：

1. 搜索 `Your Paper Subtitle`，替换论文副标题。
2. 搜索 `Author One`，替换作者和主页链接。
3. 替换两个 institution、会议名称和年份。
4. 找到四个 `<a class="pill" ...>`，把 `href="#"` 换成论文、arXiv 和 GitHub 地址。
5. 替换 Abstract、Highlights、Method caption、Results 文案和 BibTeX。

每改完一个文件，点击 **Commit changes**；网站会自动更新。

## 替换图片

图片都在 `assets/images/`：

- `teaser-placeholder.png`：首页主视觉，建议 1600 × 900 或相近比例。
- `method-placeholder.png`：方法图，建议宽图，至少 1800 px 宽。
- `result-01-placeholder.png` 到 `result-03-placeholder.png`：三个结果封面。

最省事的方式是上传同名新图片覆盖旧图片，这样无需修改 HTML。请保留 `.png` 后缀，或在 `index.html` 里同步改文件名。

## 替换结果为视频

具体代码见 `assets/videos/README.md`。推荐 MP4（H.264），单个文件尽量小于 25 MB，兼容 GitHub 网页上传和移动端播放。

## 目录结构

```text
ground-shot.github.io/
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    ├── images/
    │   ├── teaser-placeholder.png
    │   ├── method-placeholder.png
    │   ├── result-01-placeholder.png
    │   ├── result-02-placeholder.png
    │   └── result-03-placeholder.png
    └── videos/
        └── README.md
```

## 常见问题

- 网站没立即更新：等待 1–3 分钟后强制刷新浏览器。
- 图片不显示：检查大小写和路径；GitHub 区分 `Image.png` 与 `image.png`。
- 点击按钮没有跳转：确认已把 `href="#"` 替换成完整的 `https://...` 地址。
- 超大视频上传失败：先压缩视频，或上传到 YouTube / Vimeo 后使用嵌入播放器。

## 设计说明

页面借鉴现代学术项目页常见的结构：论文信息、胶囊按钮、宽幅 teaser、Abstract、Method、Results、Comparison 和 BibTeX。视觉上与参考页保持同类气质，但没有复制其文字、图片或代码。
