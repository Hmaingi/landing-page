import "./globals.css";

export const metadata = {
  title: "EquiKai | Horse Health Monitoring",
  description:
    "EquiKai helps horse owners and trainers monitor health, movement, location, and performance with non-invasive real-time insights.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}