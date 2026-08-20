# Results 视频放置与替换

Results 区域已经按数据驱动方式搭好，不需要修改 `index.html`。视频路径和对应 script 都集中在根目录的 `script.js` 中。

## 推荐目录

```text
assets/videos/
├── comparison/
│   ├── groundshot/
│   │   ├── shot-01.mp4
│   │   └── ...
│   ├── vidu-naive/
│   └── ...
└── more-results/
    ├── case-01/
    │   ├── shot-01.mp4
    │   └── ...
    ├── case-02/
    └── case-03/
```

## Comparison

在 `script.js` 顶部找到 `comparisonResult`：

```js
{
  name: "GroundShot",
  tag: "Ours",
  videos: [
    "assets/videos/comparison/groundshot/shot_001.mp4",
    "assets/videos/comparison/groundshot/shot_002.mp4",
    "assets/videos/comparison/groundshot/shot_003.mp4",
    "assets/videos/comparison/groundshot/shot_004.mp4",
    "assets/videos/comparison/groundshot/shot_005.mp4",
    "assets/videos/comparison/groundshot/shot_006.mp4",
  ],
}
```

六个模型必须各自提供 6 个视频，并使用相同顺序的 shot scripts。一个公共按钮会同步切换六个模型的当前镜头和 script。

## More Results

在 `script.js` 中找到 `moreResults`。当前设计中的三个 case 都各自包含 5 个 shots：

```js
shots: [
  {
    script: "The first shot-level script.",
    video: "assets/videos/more-results/case-01/shot-01.mp4",
  },
  {
    script: "The second shot-level script.",
    video: "assets/videos/more-results/case-01/shot-02.mp4",
  },
]
```

## 视频建议

- MP4，H.264 编码。
- 16:9，720p 或 1080p。
- Comparison：6 个模型 × 每个模型 6 个视频。
- More Results：3 个 case × 每个 case 5 个视频。
- Comparison 中六个模型的对应镜头保持相同长度，便于同步播放。
- 单个文件尽量小于 25 MB，方便使用 GitHub 网页上传。
