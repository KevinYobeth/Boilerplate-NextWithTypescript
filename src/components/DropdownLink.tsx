import Link from 'next/link';
import { Menu } from '@headlessui/react';

interface Props {
  href: string;
  children: React.ReactNode;
}

function DropdownLink({ children, href }: Props) {
  return (
    <Menu.Item>
      {({ active }) => (
        <Link href={href}>
          <a
            className={`block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 ${
              active ? 'bg-gray-100' : ''
            } transition duration-150 ease-in-out focus:outline-none`}
          >
            {children}
          </a>
        </Link>
      )}
    </Menu.Item>
  );
}

interface DropdownButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

export function DropdownButton({ children, onClick }: DropdownButtonProps) {
  return (
    <Menu.Item>
      {({ active }) => (
        <button
          type="button"
          className={`block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 ${
            active ? 'bg-gray-100' : ''
          } transition duration-150 ease-in-out focus:outline-none`}
          onClick={onClick}
        >
          {children}
        </button>
      )}
    </Menu.Item>
  );
}

export default DropdownLink;
