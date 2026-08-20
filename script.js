const copyButton = document.querySelector("[data-copy-bibtex]");

copyButton?.addEventListener("click", async () => {
  const bibtex = document.querySelector("#bibtex-code")?.textContent ?? "";

  try {
    await navigator.clipboard.writeText(bibtex.trim());
    copyButton.textContent = "Copied!";
    window.setTimeout(() => {
      copyButton.textContent = "Copy";
    }, 1600);
  } catch {
    copyButton.textContent = "Select text to copy";
  }
});

document.querySelectorAll("[data-current-year]").forEach((element) => {
  element.textContent = new Date().getFullYear();
});

// Replace the empty video strings below with relative MP4 paths such as
// "assets/videos/comparison/groundshot/shot_001.mp4".
const comparisonResult = {
  globalScript:
    "In a modest apartment living room filled with warm light and city views, three distinct friends—an early 60s woman with short grey curls, bright blue eyes, rosy cheeks, and a powder blue down jacket; an early 30s stocky man with a thick black mustache, warm complexion, and brown leather bomber jacket; and a mid-20s woman with voluminous curly dark hair, bronze skin, a bright smile, and a turquoise wrap dress—share a rare peaceful afternoon together. As they settle in, the group revels in quiet camaraderie, each savoring the moment in their own unique way.",
  shots: [
    "In a medium, low-key frontal shot, all three friends sit closely on the worn sofa. The early 60s woman, her short grey curls framing bright blue eyes and rosy cheeks, chats softly with the stocky man whose thick black mustache and brown bomber jacket catch the light. Beside them, the young woman in a turquoise wrap dress beams, her voluminous dark curls spilling over her shoulder as she listens.",
    "The wide, frontal frame focuses solely on the man in the brown bomber jacket. He leans against the bookshelf, hands tucked in his pockets, his thick mustache twitching as he smiles quietly at something unsaid. The golden indoor light bathes his warm complexion, and the city glows behind the window, hinting at the comfort inside.",
    "From a wide, frontal perspective, the woman in the turquoise wrap dress stands near the window, her bronze skin illuminated by the indoor lights. She gazes out at the skyline, her bright smile fading into thoughtful serenity, fingers trailing absentmindedly along the glass as her voluminous curls catch the glow.",
    "With indoor neutral lighting, the camera captures all three friends sprawled across the sofa in a wide shot. The powder blue down jacket is draped over the early 60s woman’s lap, while the brown bomber jacketed man playfully nudges her, and the turquoise dress-clad woman laughs, her curls bouncing as she leans forward.",
    "The scene shifts subtly as the friends settle deeper into the sofa. The woman in the powder blue jacket glances at the man’s bomber jacket, her eyes twinkling, while the turquoise dress stands out against the bookshelves. Nobody speaks; instead, their relaxed postures and gentle smiles communicate the unspoken joy of being together.",
    "In the final wide shot, the group sits in comfortable silence, the neutral indoor light casting soft shadows. The early 60s woman’s powder blue jacket, the man’s brown bomber, and the woman’s turquoise dress create a tapestry of color as hands meet over a steaming teapot, savoring one last sip in peaceful harmony.",
  ],
  models: [
    {
      name: "GroundShot",
      tag: "Ours",
      videos: [
        "assets/videos/comparison/groundshot/shot_001.mp4",
        "assets/videos/comparison/groundshot/shot_002.mp4",
        "assets/videos/comparison/groundshot/shot_003.mp4",
        "assets/videos/comparison/groundshot/shot_004.mp4",
        "assets/videos/comparison/groundshot/shot_005.mp4",
        "assets/videos/comparison/groundshot/shot_006-h264.mp4",
      ],
    },
    {
      name: "Vidu-Naive",
      tag: "Baseline",
      videos: [
        "assets/videos/comparison/vidu-naive/viduNaive-1-h264.mp4",
        "assets/videos/comparison/vidu-naive/viduNaive-2-h264.mp4",
        "assets/videos/comparison/vidu-naive/viduNaive-3-h264.mp4",
        "assets/videos/comparison/vidu-naive/viduNaive-4-h264.mp4",
        "assets/videos/comparison/vidu-naive/viduNaive-5-h264.mp4",
        "assets/videos/comparison/vidu-naive/viduNaive-6-h264.mp4",
      ],
    },
    {
      name: "StoryMem",
      tag: "Baseline",
      videos: [
        "assets/videos/comparison/StoryMem/storyMem-1.mp4",
        "assets/videos/comparison/StoryMem/StoryMem-2.mp4",
        "assets/videos/comparison/StoryMem/storymem-3.mp4",
        "assets/videos/comparison/StoryMem/StoryMem-4.mp4",
        "assets/videos/comparison/StoryMem/storyMem-5.mp4",
        "assets/videos/comparison/StoryMem/storyMem-6.mp4",
      ],
    },
    {
      name: "HoloCine",
      tag: "Baseline",
      videos: [
        "assets/videos/comparison/Holocine/holocine-1.mp4",
        "assets/videos/comparison/Holocine/holocine-2.mp4",
        "assets/videos/comparison/Holocine/holocine-3.mp4",
        "assets/videos/comparison/Holocine/holocine-4.mp4",
        "assets/videos/comparison/Holocine/holocine-5.mp4",
        "assets/videos/comparison/Holocine/holocine-6.mp4",
      ],
    },
    {
      name: "MultiShotMaster-1.3B",
      tag: "Baseline",
      videos: [
        "assets/videos/comparison/MultishotMaster1_3B/MM1.3-1.mp4",
        "assets/videos/comparison/MultishotMaster1_3B/MM1.3-2.mp4",
        "assets/videos/comparison/MultishotMaster1_3B/MM1.3-3.mp4",
        "assets/videos/comparison/MultishotMaster1_3B/MM1.3-4.mp4",
        "assets/videos/comparison/MultishotMaster1_3B/MM1.3-5.mp4",
        "assets/videos/comparison/MultishotMaster1_3B/MM1.3-6.mp4",
      ],
    },
    {
      name: "MultiShotMaster-14B",
      tag: "Baseline",
      videos: [
        "assets/videos/comparison/MultishotMaster14B/MM14-1.mp4",
        "assets/videos/comparison/MultishotMaster14B/MM14-2.mp4",
        "assets/videos/comparison/MultishotMaster14B/MM14-3.mp4",
        "assets/videos/comparison/MultishotMaster14B/MM14B-4.mp4",
        "assets/videos/comparison/MultishotMaster14B/MM14B-5.mp4",
        "assets/videos/comparison/MultishotMaster14B/MM14B-6.mp4",
      ],
    },
  ],
};

// Each More Results case contains five shots in the current layout.
const moreResults = [
  {
    title: "Case 01 · Restaurant",
    globalScript:
      "In the upscale restaurant dining area, late 30s male with receding brown hair, thin-framed glasses, a slight paunch, and a navy blue cardigan over a checkered shirt waits anxiously. Across the room, a mid 20s female with long wavy auburn hair, freckles across her nose, striking green eyes, and an olive green military-style parka enters, bracing for an inevitable confrontation. Their uneasy reunion unfolds amid dim candlelight and pristine white tablecloths, as both struggle to navigate the tension between them.",
    shots: [
      {
        script:
          "A close-up reveals the man's furrowed brow and receding brown hair, his thin-framed glasses reflecting the candle's flicker. He shifts uneasily, adjusting his navy blue cardigan, fingers fidgeting atop the checkered shirt. His eyes dart towards the entrance, lips pressed tight as he readies himself for what's coming.",
        video: "assets/videos/more-results/restaurant/shot_001_restaurant.mp4",
      },
      {
        script:
          "Framed in a medium shot, the woman stands just inside the doorway, her long wavy auburn hair cascading over the olive green military-style parka. Freckles dot her nose, and green eyes scan the tables, searching for a familiar face. She inhales deeply, shoulders squared as she steels herself for the meeting.",
        video: "assets/videos/more-results/restaurant/shot_002_restaurant.mp4",
      },
      {
        script:
          "The camera widens to show both characters at opposite ends of the restaurant table. The man, cardigan collar askew, offers a tentative nod. Across from him, the woman’s parka sleeves are clenched in her fists. White tablecloths and candles set the stage, tension thick between them as conversation falters.",
        video: "assets/videos/more-results/restaurant/shot_003_restaurant.mp4",
      },
      {
        script:
          "Warm indoor light bathes the man as he sits alone, cardigan bunched around his elbows. He stares into his untouched glass of water, tracing patterns on the tablecloth, lost in thought. The bustle of the restaurant fades into background, isolating him in his own worries.",
        video: "assets/videos/more-results/restaurant/shot_004_restaurant.mp4",
      },
      {
        script:
          "Medium shot brings both back into focus, the woman’s parka and the man’s cardigan unmistakable. She leans forward, voice barely above a whisper, earnestness in her freckled face. He listens, glasses lowered, and the candlelight softens their expressions as the confrontation finally begins to thaw.",
        video: "assets/videos/more-results/restaurant/shot_005_restaurant.mp4",
      },
    ],
  },
  {
    title: "Case 02 · Office",
    globalScript:
      "In a sleek, modern open-plan office with glass partitions and rows of glowing monitors, two colleagues—Jacob, an athletic man in his early 40s with wavy brown hair pushed back, stubble, and a navy pea coat, and Mei, a petite woman in her late 20s with straight shoulder-length black hair, almond eyes, and a lavender cashmere sweater—tackle a demanding design project together. Their contrasting presences and work styles create a dynamic atmosphere as they collaborate intensely, each bringing unique energy to the workspace.",
    shots: [
      {
        script:
          "The camera captures a wide, frontal view of Jacob—athletic build, wavy brown hair pushed back, a dusting of stubble, his navy pea coat buttoned smartly—standing alone by a glass-partitioned desk. He scans a spread of blueprints, jaw set in focus, tapping a pencil against his lips as the low hum of the office vibrates around him.",
        video: "assets/videos/more-results/office/shot_001-office.mp4",
      },
      {
        script:
          "Across the room, a wide shot frames Mei, petite with straight shoulder-length black hair and almond eyes, her lavender cashmere sweater bright against the backdrop of dark jeans and glowing monitors. She sits hunched over her laptop, biting her lower lip, fingers flying across the keys in a silent dance of problem-solving determination.",
        video: "assets/videos/more-results/office/shot_002-office.mp4",
      },
      {
        script:
          "Warm afternoon light bathes the workspace as Jacob, his navy pea coat sharp against the glass, leans over Mei’s shoulder. Mei, sleeves of lavender sweater pushed to her elbows, gestures animatedly at her screen, her eyes flicking up to meet his. They exchange a rapid volley of ideas, tension and creativity sparking between them.",
        video: "assets/videos/more-results/office/shot_003-office.mp4",
      },
      {
        script:
          "In close-up, Jacob’s stubbled jaw clenches and relaxes as he studies a monitor, brows furrowing in silent calculation. His hand hovers over the mouse, pausing—should he make the bold adjustment? The ambient chatter of the office fades as his inner resolve crystallizes in a single, decisive click.",
        video: "assets/videos/more-results/office/shot_004-office.mp4",
      },
      {
        script:
          "The camera moves in for a tight, frontal shot of Jacob’s navy pea coat beside Mei’s lavender sweater. Their faces hover over the final design on the screen; Mei’s almond eyes shine with satisfaction, while Jacob allows a brief, relieved smile. Their hands rest side by side on the desk—two distinct energies united in accomplishment.",
        video: "assets/videos/more-results/office/shot_005-office.mp4",
      },
    ],
  },
  {
    title: "Case 03 · Construction Site",
    shotDuration: 5200,
    globalScript:
      "At a bustling construction site, two men—both fit, grey-haired, and exuding authority—draw attention through their subtle rivalry. The first, char_01, is in his early sixties with a grey crew cut and military bearing, his khaki field jacket bristling with pockets. The second, char_02, is a tall man in his mid forties with short grey hair, a square jaw, and deep-set brown eyes, dressed in an olive drab utility jacket. Their interactions reveal a story of mutual observation and unspoken competition amid scaffolding and cranes.",
    shots: [
      {
        script:
          "Sunlight washes over the construction site as char_01 stands framed by scaffolding, his grey crew cut and fit build unmistakable. He surveys the area with a clean-shaven jaw set firm, hands resting in the pockets of his khaki field jacket. Cranes loom behind him, dust swirling at his feet, amplifying his military bearing as he scans the chaos for something—or someone.",
        video: "assets/videos/more-results/constructionsite/1-h264.mp4",
      },
      {
        script:
          "Close up, char_02’s deep-set brown eyes glint with intensity. His square jaw tenses as he leans forward, the olive drab utility jacket tight across his tall, fit frame. Concrete pillars rise behind him, unfinished and raw. The camera lingeres on his short grey hair, emphasizing his watchful gaze as he focuses intently on movement in the distance.",
        video: "assets/videos/more-results/constructionsite/2-h264.mp4",
      },
      {
        script:
          "Overcast light softens the edges as both men face each other in a tight close-up. Char_01’s khaki field jacket contrasts with char_02’s olive drab utility jacket, their eyes locked and searching. Beads of sweat dot their brows; the tension is palpable. Neither speaks, but the rivalry between the two is clear in their silent exchange, the construction site’s noise muffled by their intensity.",
        video: "assets/videos/more-results/constructionsite/3-h264.mp4",
      },
      {
        script:
          "A medium shot reveals char_01 in his khaki field jacket, standing near a stack of rebar. He glances sideways, lips pressed thin, as he observes activity from afar. His posture remains upright, military straight, while shadows from overhead beams stretch across the cracked concrete. Dust motes drift in the air, highlighting his unwavering vigilance.",
        video: "assets/videos/more-results/constructionsite/4-h264.mp4",
      },
      {
        script:
          "In a close-up, char_01’s khaki jacket sleeve brushes against char_02’s olive utility jacket. Their faces are inches apart, expressions guarded. Char_02’s deep-set eyes flicker with resolve; char_01’s jaw clenches. Sunlight returns, illuminating their features and marking the subtle distinction in their rivalry, as if each is measuring the other’s resolve in the charged silence.",
        video: "assets/videos/more-results/constructionsite/5-h264.mp4",
      },
    ],
  },
];

const sequenceDuration = 4200;

function createMedia(label) {
  const media = document.createElement("div");
  media.className = "sequence-media";
  media.innerHTML = `
    <video muted playsinline preload="auto" controls controlslist="nodownload noplaybackrate" hidden></video>
    <span class="media-placeholder-label">${label} · video placeholder</span>
  `;
  return media;
}

function setMedia(media, source, label) {
  const video = media.querySelector("video");
  const placeholder = media.querySelector(".media-placeholder-label");

  if (source) {
    placeholder.hidden = false;
    placeholder.textContent = "Loading video…";
    video.hidden = false;

    if (video.getAttribute("src") !== source) {
      video.src = source;
      video.load();
    }

    if (video.readyState >= 2) {
      placeholder.hidden = true;
    } else {
      video.onloadeddata = () => {
        placeholder.hidden = true;
      };
    }

    video.onerror = () => {
      placeholder.hidden = false;
      placeholder.textContent = "Video format not supported";
    };
  } else {
    video.pause();
    video.removeAttribute("src");
    video.hidden = true;
    placeholder.hidden = false;
    placeholder.textContent = `${label} · video placeholder`;
  }
}

function playVisibleVideos(root) {
  root.querySelectorAll("video:not([hidden])").forEach((video) => {
    const play = () => {
      video.currentTime = 0;
      video.play().catch(() => {});
    };

    if (video.readyState >= 2) {
      play();
    } else {
      video.addEventListener("canplay", play, { once: true });
    }
  });
}

const comparisonGrid = document.querySelector("[data-comparison-grid]");
const comparisonToggle = document.querySelector("[data-comparison-toggle]");
const comparisonCounter = document.querySelector("[data-comparison-counter]");
const comparisonScript = document.querySelector("[data-comparison-script]");
const comparisonDots = document.querySelector("[data-comparison-dots]");
const comparisonGlobal = document.querySelector("[data-comparison-global-script]");

if (comparisonGrid) {
  comparisonGlobal.textContent = comparisonResult.globalScript;

  const comparisonCards = comparisonResult.models.map((model) => {
    const card = document.createElement("article");
    card.className = "sequence-card";
    card.innerHTML = `
      <header class="sequence-card__header">
        <h4>${model.name}</h4>
        <span>${model.tag}</span>
      </header>
    `;
    card.append(createMedia(model.name));
    comparisonGrid.append(card);
    return card;
  });

  let currentComparisonShot = 0;
  let comparisonTimer = null;

  function updateComparison() {
    const total = comparisonResult.shots.length;
    comparisonCounter.textContent = `Shot ${currentComparisonShot + 1} / ${total}`;
    comparisonScript.textContent = comparisonResult.shots[currentComparisonShot];

    comparisonDots.replaceChildren(
      ...comparisonResult.shots.map((_, index) => {
        const dot = document.createElement("button");
        dot.type = "button";
        dot.className = `sequence-dot${index === currentComparisonShot ? " is-active" : ""}`;
        dot.setAttribute("aria-label", `Show comparison shot ${index + 1}`);
        dot.setAttribute("aria-pressed", String(index === currentComparisonShot));
        dot.addEventListener("click", () => {
          currentComparisonShot = index;
          updateComparison();
          if (comparisonTimer) playVisibleVideos(comparisonGrid);
        });
        return dot;
      }),
    );

    comparisonCards.forEach((card, index) => {
      const model = comparisonResult.models[index];
      setMedia(card.querySelector(".sequence-media"), model.videos[currentComparisonShot], model.name);
    });
  }

  function stopComparison() {
    window.clearInterval(comparisonTimer);
    comparisonTimer = null;
    comparisonToggle.textContent = "▶ Play sequence";
    comparisonGrid.querySelectorAll("video").forEach((video) => video.pause());
  }

  comparisonToggle.addEventListener("click", () => {
    if (comparisonTimer) {
      stopComparison();
      return;
    }

    comparisonToggle.textContent = "Ⅱ Pause sequence";
    playVisibleVideos(comparisonGrid);
    comparisonTimer = window.setInterval(() => {
      currentComparisonShot = (currentComparisonShot + 1) % comparisonResult.shots.length;
      updateComparison();
      playVisibleVideos(comparisonGrid);
    }, sequenceDuration);
  });

  updateComparison();
}

const moreResultsGrid = document.querySelector("[data-more-results-grid]");

if (moreResultsGrid) {
  moreResults.forEach((result) => {
    const card = document.createElement("article");
    card.className = "more-case";
    card.innerHTML = `
      <header class="more-case__head">
        <h4>${result.title}</h4>
        <p><strong>Global script:</strong> ${result.globalScript}</p>
      </header>
    `;

    const media = createMedia(result.title);
    const body = document.createElement("div");
    body.className = "more-case__body";
    body.innerHTML = `
      <div class="more-case__control">
        <button class="sequence-button" type="button">▶ Play</button>
        <span class="shot-counter"></span>
      </div>
      <p class="more-case__script"></p>
      <div class="sequence-dots" aria-label="Choose result shot"></div>
    `;
    card.append(media, body);
    moreResultsGrid.append(card);

    const toggle = body.querySelector("button");
    const counter = body.querySelector(".shot-counter");
    const script = body.querySelector(".more-case__script");
    const dots = body.querySelector(".sequence-dots");
    let currentShot = 0;
    let timer = null;

    function updateCase() {
      const shot = result.shots[currentShot];
      counter.textContent = `Shot ${currentShot + 1} / ${result.shots.length}`;
      script.textContent = shot.script;
      setMedia(media, shot.video, result.title);
      dots.replaceChildren(
        ...result.shots.map((_, index) => {
          const dot = document.createElement("button");
          dot.type = "button";
          dot.className = `sequence-dot${index === currentShot ? " is-active" : ""}`;
          dot.setAttribute("aria-label", `Show ${result.title}, shot ${index + 1}`);
          dot.setAttribute("aria-pressed", String(index === currentShot));
          dot.addEventListener("click", () => {
            currentShot = index;
            updateCase();
            if (timer) playVisibleVideos(card);
          });
          return dot;
        }),
      );
    }

    toggle.addEventListener("click", () => {
      if (timer) {
        window.clearInterval(timer);
        timer = null;
        toggle.textContent = "▶ Play";
        media.querySelector("video").pause();
        return;
      }

      toggle.textContent = "Ⅱ Pause";
      playVisibleVideos(card);
      timer = window.setInterval(() => {
        currentShot = (currentShot + 1) % result.shots.length;
        updateCase();
        playVisibleVideos(card);
      }, result.shotDuration ?? sequenceDuration);
    });

    updateCase();
  });
}
