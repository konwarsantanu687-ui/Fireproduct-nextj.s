export const metadata = {
  title: "FireProduct – Amazon India Products",
  description: "Shop Amazon India products via FireProduct",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
