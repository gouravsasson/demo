/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        
        inter: ["Inter", "sans-serif"],
      },
      boxShadow: {
        'custom': '0px 1px 4px 0px #F9F5FF73',
      },
      backgroundImage: {
        "forget-password":
          "url('https://s3-alpha-sig.figma.com/img/dc93/d1ae/b5292c823ecf5404cd44d899230669d5?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ONrwsouLrcHpSKzg0tr7jIZnb0GW7rbxKtMG7tYtfHpDK3gwYgv1nFUfbjGT2jzadOT6vYGLyPaLKsNXHrLzcAGCgcHtX8tJwSwtt-MrMALikTrB64G-ignsv4N0BVRQJqaBG20Bgy0b6pd-CVY54Safc7t02IqKqZq~~jxcKyTesriHaG5rKZd7~vBpOYyTYgMLC4aXSJUCdSxiKkSz3O1Qbv1zEUyrqzA9lUuAp2WKHVxaMaxkq--iNmDi3N2aXw2JgspfguJiSDl1m8Ae39DQeDPVuasiINE9uL3K54OkU4vL4YZJwXT2g80S9wYUZH~L930-AbdwGLKGWc6xYg__')",
        "black-white":
          "linear-gradient(184.03deg, #000000 3.29%, rgba(6, 5, 5, 0) 96.71%)",
      },
    },
  },
  plugins: [],
};