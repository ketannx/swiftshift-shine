import React, { useState, useRef, useEffect } from "react";
import { FaRobot, FaPaperPlane, FaTimes } from "react-icons/fa";
import gsap from "gsap";

const websiteInfo = {
  name: "Swift Shift & Shine",
  phone: "+1 604-750-6960",
  address: "6295 Knight Street, Vancouver, BC, V5P 2V9, Canada",
  price: "$30 per hour (minimum 3 hours)",
  services: [
    "House Cleaning",
    "Apartment / Condo Cleaning",
    "Office Cleaning",
    "Deep Cleaning",
    "Steam Cleaning",
    "Power Washing",
  ],
  contact: "You can contact us via phone or through the Contact page on our website.",
  timing: "10am to 6pm",
  bookInstructions: [
    "1. Visit our Contact page and fill out the booking form.",
    "2. Call us directly at +1 604-750-6960 to book your service.",
    "3. Send us a message mentioning your preferred service, date, and time.",
    "4. Use our online chat to provide your booking details and we’ll get back to you.",
    "5. Email us with your requirements and we’ll assist you in booking.",
  ],
};

const getAIReply = (message) => {
  const msg = message.toLowerCase();

  if (
    msg.includes("time") ||
    msg.includes("timing") ||
    msg.includes("hours") ||
    msg.includes("open") ||
    msg.includes("close")
  )
    return `Our business hours are from ${websiteInfo.timing}, 7 days a week.`;

  if (msg.includes("phone") || msg.includes("call"))
    return `You can call us at ${websiteInfo.phone}.`;

  if (msg.includes("address") || msg.includes("location"))
    return `Our address is ${websiteInfo.address}.`;

  if (msg.includes("price") || msg.includes("rate"))
    return `Our cleaning rate is ${websiteInfo.price}.`;

  if (msg.includes("services"))
    return `We provide ${websiteInfo.services.join(", ")}.`;

  if (msg.includes("contact"))
    return websiteInfo.contact;

  if (
    msg.includes("book") ||
    msg.includes("booking") ||
    msg.includes("reserve") ||
    msg.includes("appointment") ||
    msg.includes("schedule")
  ) {
    return [
      "Here are 5 ways you can book with us:",
      ...websiteInfo.bookInstructions,
      "Let us know which method you prefer or if you need further help!"
    ].join("\n");
  }

  return "Thank you for your message! Our team will assist you shortly 💚";
};

function AiAgent() {
  const [open, setOpen] = useState(false);
  const chatRef = useRef(null);
  const bottomRef = useRef(null);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { from: "ai", text: "Hi 👋 How can I help you today?" },
  ]);

  useEffect(() => {
    if (open) {
      gsap.fromTo(
        chatRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.28, ease: "power1.out" }
      );
    }
  }, [open]);

  useEffect(() => {
    if (open && bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, open]);

  const sendMessage = () => {
    if (!input.trim()) return;
    const userMsg = input;
    setInput("");
    setMessages((prev) => [...prev, { from: "user", text: userMsg }]);
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { from: "ai", text: getAIReply(userMsg) },
      ]);
    }, 550);
  };

  const handleInputKey = (e) => {
    if (e.key === "Enter") sendMessage();
  };

  return (
    <>
      {/* Clean Chatbot Button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          style={{
            position: "fixed",
            bottom: 24,
            right: 24,
            width: 52,
            height: 52,
            borderRadius: "50%",
            background: "#16a34a",
            color: "#fff",
            border: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 8px 24px rgba(34,197,94,0.28)",
            transition: "background 0.18s",
            cursor: "pointer",
            zIndex: 1000,
          }}
          aria-label="Open AI Assistant"
        >
          <FaRobot size={21} />
        </button>
      )}

      {open && (
        <div
          ref={chatRef}
          style={{
            position: "fixed",
            bottom: 92,
            right: 24,
            width: 330,
            background: "#fff",
            borderRadius: 18,
            boxShadow: "0 12px 32px rgba(0,0,0,0.18)",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            zIndex: 1001,
          }}
        >
          {/* Header */}
          <div
            style={{
              background: "#16a34a",
              color: "#fff",
              padding: "13px 20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              fontWeight: 500,
              fontSize: 16,
              letterSpacing: "0.01em",
            }}
          >
            <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <FaRobot size={18} style={{ marginRight: 6, opacity: 0.85 }} />
              AI Assistant
            </span>
            <FaTimes
              onClick={() => setOpen(false)}
              style={{ cursor: "pointer", opacity: 0.78, transition: "opacity 0.2s" }}
              size={17}
              title="Close"
            />
          </div>

          {/* Chat History */}
          <div
            style={{
              flex: "1 1 0",
              padding: "16px",
              background: "#f7fafc",
              overflowY: "auto",
              minHeight: 200,
              maxHeight: 260,
              WebkitOverflowScrolling: "touch",
            }}
          >
            {messages.map((m, i) => (
              <div
                key={i}
                style={{
                  textAlign: m.from === "ai" ? "left" : "right",
                  marginBottom: 10,
                  display: "flex",
                  justifyContent: m.from === "ai" ? "flex-start" : "flex-end",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    padding: "9px 14px",
                    borderRadius: m.from === "ai" ? "13px 13px 13px 3px" : "13px 13px 3px 13px",
                    background: m.from === "ai" ? "#ebfcef" : "#16a34a",
                    color: m.from === "ai" ? "#0e5541" : "#fff",
                    fontSize: 15,
                    boxShadow: m.from === "ai"
                      ? "0 1px 3px rgba(72,187,120,0.03)"
                      : "0 1px 3px rgba(34,197,94,0.06)",
                    maxWidth: 240,
                    wordBreak: "break-word",
                    whiteSpace: "pre-line",
                  }}
                >
                  {m.text}
                </span>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Input Area */}
          <div style={{
            display: "flex",
            alignItems: "center",
            borderTop: "1px solid #e5e7eb",
            background: "#fff",
            padding: "0 12px",
            height: 52,
            gap: 8,
          }}>
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleInputKey}
              placeholder="Ask about services, timing, how to book..."
              style={{
                flex: 1,
                padding: "10px 12px",
                fontSize: 15,
                border: "none",
                outline: "none",
                background: "transparent",
                color: "#222",
              }}
              aria-label="Type your message"
              autoFocus
            />
            <button
              onClick={sendMessage}
              style={{
                background: input.trim() ? "#16a34a" : "#cbd5e1",
                border: "none",
                color: "#fff",
                borderRadius: "50%",
                width: 36,
                height: 36,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: input.trim() ? "pointer" : "not-allowed",
                transition: "background 0.15s",
                marginLeft: 2,
              }}
              aria-label="Send"
              disabled={!input.trim()}
            >
              <FaPaperPlane size={15} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default AiAgent;
