import resume from "../assets/Akhil_Joseph_Resume.pdf";

export default function Hero() {
  async function handleClick(e) {
    e && e.preventDefault && e.preventDefault();
    try {
      const res = await fetch(resume);
      if (!res.ok) throw new Error("resume not found");
      const blob = await res.blob();
      const blobUrl = URL.createObjectURL(blob);

      // Try to open the PDF blob in a new tab for preview
      const newWin = window.open(blobUrl, "_blank");

      // Also trigger an automatic download by creating and clicking a hidden anchor
      const a = document.createElement("a");
      a.href = blobUrl;
      a.download = "Akhil_Joseph_Resume.pdf";
      document.body.appendChild(a);
      a.click();
      a.remove();

      // If popup is blocked, open the blob in the current tab as a fallback
      if (!newWin) {
        window.location.href = blobUrl;
      }

      // Revoke the blob URL shortly after to free memory
      setTimeout(() => URL.revokeObjectURL(blobUrl), 2000);
    } catch (err) {
      alert("Resume is currently unavailable. Please try again later.");
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
