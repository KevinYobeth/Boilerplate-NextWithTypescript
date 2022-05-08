import React from 'react';
import { Menu, Transition } from '@headlessui/react';

interface Props {
  align?: 'top' | 'left' | 'right';
  width?: number | string;
  contentClasses?: string;
  trigger: React.ReactNode;
  children: React.ReactNode;
}

function Dropdown({
  align = 'right',
  width = 48,
  contentClasses = 'py-1 bg-white',
  trigger,
  children
}: Props) {
  let alignmentClasses;

  let menuWidth;

  switch (width) {
    default:
      menuWidth = 'w-48';
      break;
  }

  switch (align) {
    case 'left':
      alignmentClasses = 'origin-top-left left-0';
      break;
    case 'top':
      alignmentClasses = 'origin-top';
      break;
    case 'right':
    default:
      alignmentClasses = 'origin-top-right right-0';
      break;
  }

  return (
    <Menu as="div" className="relative">
      {({ open }) => (
        <>
          <Menu.Button as={React.Fragment}>{trigger}</Menu.Button>

          <Transition
            show={open}
            enter="transition ease-out duration-200"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <div
              className={`absolute z-50 mt-2 ${menuWidth} rounded-md shadow-lg ${alignmentClasses}`}
            >
              <Menu.Items
                className={`rounded-md ring-1 ring-black ring-opacity-5 focus:outline-none ${contentClasses}`}
                static
              >
                {children}
              </Menu.Items>
            </div>
          </Transition>
        </>
      )}
    </Menu>
  );
}

export default Dropdown;
