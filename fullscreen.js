// Event Listener
document.addEventListener("keydown", function(e) {
  // Set on "f" key, but can be replaced with any key or events
  if (e.key === "f") {
    // Check if fullscreen is already running
    if (document.fullscreenElement) {
      // If it is already running, we exit to create a toggle
      document.exitFullscreen()
    } else {
      // If it isn't fullscreen we use the native request function
      document.documentElement.requestFullscreen()
    }
  }
});