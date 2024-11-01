async function loadMarkdown(file) {
  try {
    const response = await fetch(file);
    const text = await response.text();

    const converter = new showdown.Converter();
    const html = converter.makeHtml(text);

    document.getElementById("markdown-content").innerHTML = html;
  } catch (error) {
    console.error("Error loading the Markdown file:", error);
  }
}
