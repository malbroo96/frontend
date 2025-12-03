export default function Hero() {
  const resumeUrl =
    "https://drive.google.com/uc?export=download&id=1FxuR9zA7NHY3voMTzuP7DmB43yeyw45j";

  function handleClick(e) {
    e && e.preventDefault && e.preventDefault();
    try {
      // Open the resume in a new tab
      const newWin = window.open(resumeUrl, "_blank");
      if (!newWin) {
        // Fallback: open in current tab if popup is blocked
        window.location.href = resumeUrl;
      }
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
