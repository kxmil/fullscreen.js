# fullscreen.js

Press **F** to toggle fullscreen

```
document.addEventListener("keydown", function(e) {
  if (e.key === "f") {
    if (document.fullscreenElement) {
      document.exitFullscreen()
    } else {
      document.documentElement.requestFullscreen()
    }
  }
});
```
