import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    PUBLIC_DB_CONNECTION:
      "mongodb+srv://taivgi:CZBIL8d8RnJvXcND@cluster0.cvnjk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  }
};

export default nextConfig;
