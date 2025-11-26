export default function Hero() {
  async function handleClick(e) {
    e && e.preventDefault && e.preventDefault();
    const resumeUrl = "/resume.pdf";
    const driveFallback =
      "https://drive.google.com/file/d/13MGZlOCJZMbAXoIMkxqIH9yU5K3SN0Tc/view?usp=sharing";
    try {
      const res = await fetch(resumeUrl);
      if (!res.ok) throw new Error("resume not found");
      const blob = await res.blob();
      const blobUrl = URL.createObjectURL(blob);

      const newWin = window.open("", "_blank");
      if (!newWin) {
        // popup blocked: fallback to initiating download in current window
        const a = document.createElement("a");
        a.href = blobUrl;
        a.download = "resume.pdf";
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(blobUrl);
        return;
      }

      newWin.document.write(
        "<html><head><title>Downloading resume...</title></head><body></body></html>"
      );
      const a = newWin.document.createElement("a");
      a.href = blobUrl;
      a.download = "resume.pdf";
      a.style.display = "none";
      newWin.document.body.appendChild(a);
      a.click();
      newWin.document.body.insertAdjacentHTML(
        "beforeend",
        '<p style="font-family: Arial, sans-serif;">If the download does not start automatically, <a href="' +
          resumeUrl +
          '" target="_blank">click here</a>.</p>'
      );
      // revoke after a short delay to ensure download started
      setTimeout(() => URL.revokeObjectURL(blobUrl), 2000);
    } catch (err) {
      // fallback: open the original Drive link in a new tab
      window.open(driveFallback, "_blank");
    }
  }
  return (
    <section className="pt-32 pb-20 text-center">
      <h1 className="text-4xl font-bold mb-4">MERN Full-Stack Developer</h1>
      <p className="max-w-2xl mx-auto text-gray-300">
        I build fast, modern and scalable web applications using React, Node,
        Express and MongoDB.
      </p>
      <button
        onClick={handleClick}
        className="mt-6 px-6 py-2 bg-blue-600 rounded-lg hover:bg-blue-700"
      >
        Download Resume
      </button>
    </section>
  );
}
