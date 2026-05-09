export function startVideoProgressBar(selector: string) {
  const video = document.getElementById(selector) as HTMLVideoElement
  const progressElement = document.getElementById(
    `${selector}-progress-bar`,
  ) as HTMLProgressElement

  const timer = setInterval(() => {
    const newValue = (video.currentTime / video.duration) * 100

    // console.log(newValue)
    if (!newValue || newValue < 0 || newValue > 100) return

    progressElement.value = newValue
  })

  return timer
}
