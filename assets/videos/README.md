# 视频放置与替换

把视频放在本文件夹，例如：

```text
assets/videos/demo-01.mp4
```

然后在 `index.html` 中找到第一个结果卡片里的：

```html
<div class="result-media">
  <img src="assets/images/result-01-placeholder.png" alt="Placeholder for result example one" />
  <span class="play-badge" aria-hidden="true">▶</span>
</div>
```

替换为：

```html
<div class="result-media">
  <video controls muted loop playsinline poster="assets/images/result-01-placeholder.png">
    <source src="assets/videos/demo-01.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div>
```

最后在 `style.css` 的 `.result-media img` 那一行，把选择器改成：

```css
.result-media img,
.result-media video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
```

推荐使用 MP4（H.264），1080p 或 720p，单个文件尽量小于 25 MB。
