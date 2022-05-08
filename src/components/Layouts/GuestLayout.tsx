import Head from 'next/head';

interface Props {
  children: React.ReactNode;
}

function GuestLayout({ children }: Props) {
  return (
    <div>
      <Head>
        <title>Laravel</title>
      </Head>

      <div className="font-sans text-gray-900 antialiased">{children}</div>
    </div>
  );
}

export default GuestLayout;
