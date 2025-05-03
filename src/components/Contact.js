import React from "react";

function App() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "748a6502-7581-478d-8501-6d084ea1523a");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert("Message sent successfully!");
      event.target.reset();
    } else {
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-white px-6 py-12 md:py-24">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
        Contact Me
      </h1>

      <form
        onSubmit={onSubmit}
        className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-lg"
      >
        <div className="mb-4">
          <label className="text-lg text-gray-600 font-semibold mb-2">Your Name</label>
          <input
            type="text"
            name="name"
            required
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
        </div>

        <div className="mb-4">
          <label className="text-lg text-gray-600 font-semibold mb-2">Your Email</label>
          <input
            type="email"
            name="email"
            required
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
        </div>

        <div className="mb-4">
          <label className="text-lg text-gray-600 font-semibold mb-2">Your Message</label>
          <textarea
            name="message"
            rows="4"
            required
            className="w-full p-3 border border-gray-300 rounded-lg"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}

export default App;
