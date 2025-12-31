import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";

/* ================= COMMON HEADER ================= */
function DarkHeader({ title, enableActions = false }) {
  const navigate = useNavigate();

  return (
    <div className="relative h-[56px] bg-[#1c1c2b] w-full">

      {/* LEFT: BACK */}
      <button
        onClick={enableActions ? () => navigate(-1) : undefined}
        className={`absolute left-4 top-1/2 -translate-y-1/2
          text-[20px] text-white
          ${enableActions ? "cursor-pointer" : "cursor-default opacity-60"}`}
      >
        &lt;
      </button>

      {/* CENTER: TITLE */}
      <h1
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                   text-[16px] font-medium text-white"
      >
        {title}
      </h1>

      {/* RIGHT: CLOSE */}
      <button
        onClick={enableActions ? () => navigate("/") : undefined}
        className={`absolute right-4 top-1/2 -translate-y-1/2
          text-[18px] text-white
          ${enableActions ? "cursor-pointer" : "cursor-default opacity-60"}`}
      >
        ✕
      </button>

    </div>
  );
}

/* ================= MERCHANT PAGE ================= */
function Merchant() {
  const navigate = useNavigate();
  const [sellType, setSellType] = useState("user");

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <DarkHeader title="Merchant" />

      <div className="w-full px-4 sm:max-w-[420px] sm:mx-auto py-4">

        {/* MY COINS */}
        <div className="bg-white rounded-xl p-4 flex justify-between items-center shadow-md mb-4">
          <p className="text-gray-600">
            My coins :
            <span className="ml-2 text-yellow-500 font-semibold">0.00</span>
          </p>
          <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
            💳
          </div>
        </div>

        {/* SELL CARD */}
        <div className="bg-white rounded-xl p-4 shadow-md mb-4">

          {/* RADIO */}
          <div className="flex gap-6 mb-4 text-sm">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                checked={sellType === "user"}
                onChange={() => setSellType("user")}
              />
              Sell to User
            </label>

            <label className="flex items-center gap-2 text-gray-400">
              <input
                type="radio"
                checked={sellType === "seller"}
                onChange={() => setSellType("seller")}
              />
              Sell to Seller
            </label>
          </div>

          {/* USER ID */}
          <p className="text-sm font-medium mb-1">User ID</p>
          <div className="relative mb-4">
            <input
              type="text"
              placeholder="Please enter user ID"
              className="w-full bg-gray-100 rounded-full pl-4 pr-24 h-11
                         text-[16px] outline-none text-gray-700"
            />
            <button
              className="absolute right-1 top-1/2 -translate-y-1/2
                         bg-blue-500 text-white text-sm px-4 py-1.5 rounded-full"
            >
              Search
            </button>
          </div>

          {/* QUANTITY */}
          <p className="text-sm font-medium mb-1">Quantity</p>
          <div className="relative mb-1">
            <input
              placeholder="Please enter the amount of gold coins"
              className="w-full bg-gray-100 rounded-full px-4 py-3 pr-12
                         outline-none text-[16px]"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2">
              🪙
            </span>
          </div>
          <p className="text-right text-xs text-gray-400 mb-4">0 USD</p>

          {/* SEND */}
          <button
            className="w-full bg-gradient-to-r from-blue-500 to-blue-600
                       text-white py-3 rounded-full text-lg font-semibold"
          >
            Send
          </button>
        </div>

        {/* BALANCE */}
        <div
          onClick={() => navigate("/balance")}
          className="bg-white rounded-xl p-4 flex items-center gap-3
                     shadow-md cursor-pointer"
        >
          <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center text-white font-bold">
            B
          </div>
          <p className="text-lg font-semibold">Balance</p>
        </div>

      </div>
    </div>
  );
}

/* ================= BALANCE PAGE ================= */
function Balance() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
<DarkHeader title="Balance" enableActions={true} />

      <div className="w-full px-4 sm:max-w-[420px] sm:mx-auto py-4">

        {/* WALLET CARD */}
        <div className="bg-gradient-to-r from-[#6f5cff] to-[#7b6cff]
                        rounded-[26px] px-6 py-8 text-white mb-8 shadow-md">
          <h2 className="text-[42px] font-semibold mb-3">$0</h2>
          <p className="text-white/80 text-sm">
            Wallet Balance · USD
          </p>
        </div>

        {/* ACTIONS */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {[
            { icon: "🪙", title: "Exchange", sub: "Convert coins", bg: "bg-yellow-100" },
            { icon: "✉️", title: "Transfer", sub: "Send money", bg: "bg-blue-100" },
            { icon: "🏦", title: "Withdraw", sub: "Bank withdrawal", bg: "bg-gray-100" },
          ].map((i) => (
            <div key={i.title} className="bg-white rounded-[22px] py-6 text-center shadow-md">
              <div className={`w-[50px] h-[50px] mx-auto mb-3 flex items-center justify-center rounded-full ${i.bg}`}>
                {i.icon}
              </div>
              <p className="text-sm font-medium">{i.title}</p>
              <p className="text-xs text-gray-400 mt-1">{i.sub}</p>
            </div>
          ))}
        </div>

        {/* RECENT */}
        <h3 className="text-lg font-medium mb-4">Recent Activity</h3>
        <div className="bg-white rounded-[26px] h-[220px] flex flex-col items-center justify-center shadow-md">
          <div className="text-[60px] text-gray-300 mb-4">⌛</div>
          <p className="font-medium">No records yet</p>
          <p className="text-sm text-gray-400 mt-2">
            Make your first transfer
          </p>
        </div>

      </div>
    </div>
  );
}

/* ================= APP ================= */
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Merchant />} />
        <Route path="/balance" element={<Balance />} />
      </Routes>
    </BrowserRouter>
  );
}
