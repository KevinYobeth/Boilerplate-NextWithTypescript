import AppLayout from 'components/Layouts/AppLayout';
import Head from 'next/head';

function Dashboard() {
  return (
    <AppLayout header="Dashboard">
      <Head>
        <title>Laravel - Dashboard</title>
      </Head>

      <div className="py-12">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
            <div className="border-b border-gray-200 bg-white p-6">You&apos;re logged in!</div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}

export default Dashboard;
