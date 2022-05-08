import Navigation from 'components/Layouts/Navigation';
import { useAuth } from 'hooks/auth';

interface Props {
  header: string;
  children: React.ReactNode;
}

function AppLayout({ header, children }: Props) {
  const { user } = useAuth({ middleware: 'auth' });

  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation user={user} />

      {/* Page Heading */}
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-semibold leading-tight text-gray-800">{header}</h2>
        </div>
      </header>

      {/* Page Content */}
      <main>{children}</main>
    </div>
  );
}

export default AppLayout;
