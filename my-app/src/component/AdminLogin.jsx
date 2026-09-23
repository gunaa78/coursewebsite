import { useState } from "react";

import api from "./axios";

function AdminLogin() {
  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const handleLogin = async (
    e
  ) => {
    e.preventDefault();

    if (!email || !password) {
      alert(
        "Please enter email and password"
      );

      return;
    }

    try {
      setLoading(true);

      const response =
        await api.post(
          "/auth/login",
          {
            email,
            password,
          }
        );

      if (
        response.data?.success
      ) {
        /* ==========================
           SAVE TOKEN
        ========================== */

        localStorage.setItem(
          "adminToken",
          response.data.token
        );

        /* ==========================
           SAVE ADMIN USER
        ========================== */

        localStorage.setItem(
          "adminUser",
          JSON.stringify(
            response.data.user
          )
        );

        alert(
          "Admin login successful"
        );

        window.location.href =
          "/career";
      }
    } catch (error) {
      console.error(
        "Login error:",
        error
      );

      alert(
        error.response?.data
          ?.message ||
          "Login failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 px-6">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8"
      >
        <h1 className="text-3xl font-bold text-slate-900">
          Admin Login
        </h1>

        <p className="text-slate-500 mt-2">
          Login to manage Hikoo job cards.
        </p>

        {/* EMAIL */}

        <div className="mt-6">
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Email
          </label>

          <input
            type="email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            placeholder="Enter admin email"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none focus:border-blue-500"
          />
        </div>

        {/* PASSWORD */}

        <div className="mt-5">
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Password
          </label>

          <input
            type="password"
            value={password}
            onChange={(e) =>
              setPassword(
                e.target.value
              )
            }
            placeholder="Enter password"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none focus:border-blue-500"
          />
        </div>

        {/* BUTTON */}

        <button
          type="submit"
          disabled={loading}
          className="w-full mt-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 disabled:opacity-50"
        >
          {loading
            ? "Logging in..."
            : "Admin Login"}
        </button>
      </form>
    </div>
  );
}

export default AdminLogin;