function toggMode() {
  const html = document.documentElement

  if (body.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }
}
