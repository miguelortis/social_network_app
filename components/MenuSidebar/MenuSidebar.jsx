import { Fragment } from 'react'
import { useRouter } from 'next/navigation'
import { Dialog, Disclosure, Transition } from '@headlessui/react'
import { TbMinus, TbPlus, TbX } from 'react-icons/tb'
import UserProfilePic from '../UserProfilePic/UserProfilePic'

export default function MenuSidebar({
  setMobileFiltersOpen,
  mobileFiltersOpen,
  subCategories,
  subMenus,
}) {
  const router = useRouter()

  return (
    <>
      <Transition.Root show={mobileFiltersOpen} as={Fragment}>
        <Dialog
          as='div'
          className='relative z-40 lg:hidden'
          onClose={setMobileFiltersOpen}
        >
          <Transition.Child
            as={Fragment}
            enter='transition-opacity ease-linear duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='transition-opacity ease-linear duration-300'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black bg-opacity-25' />
          </Transition.Child>

          <div className='fixed inset-0 z-40 flex'>
            <Transition.Child
              as={Fragment}
              enter='transition ease-in-out duration-300 transform'
              enterFrom='-translate-x-full'
              enterTo='translate-x-0'
              leave='transition ease-in-out duration-300 transform'
              leaveFrom='translate-x-0'
              leaveTo='-translate-x-full'
            >
              <Dialog.Panel className='relative mr-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl'>
                <div className='flex items-center justify-between px-4'>
                  <h2 className='text-lg font-medium text-gray-900'>Filters</h2>
                  <button
                    type='button'
                    className='-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400'
                    onClick={() => setMobileFiltersOpen(false)}
                  >
                    <span className='sr-only'>Close menu</span>
                    <TbX className='h-6 w-6' />
                  </button>
                </div>

                {/* menu */}
                <form className='mt-4 border-t border-gray-200'>
                  <h3 className='sr-only'>Categories</h3>
                  <ul
                    role='list'
                    className='px-2 py-3 font-medium text-gray-900'
                  >
                    {subCategories.map((category) => (
                      <li key={category.name}>{category.name}</li>
                    ))}
                  </ul>

                  {subMenus.map((section) => (
                    <Disclosure
                      as='div'
                      key={section.id}
                      className='border-t border-gray-200 px-4 py-6'
                    >
                      {({ open }) => (
                        <>
                          <h3 className='-mx-2 -my-3 flow-root'>
                            <Disclosure.Button className='flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500'>
                              <span className='font-medium text-gray-900'>
                                {section.name}
                              </span>
                              <span className='ml-6 flex items-center'>
                                {open ? (
                                  <TbMinus className='h-5 w-5' />
                                ) : (
                                  <TbPlus className='h-5 w-5' />
                                )}
                              </span>
                            </Disclosure.Button>
                          </h3>
                          <Disclosure.Panel className='pt-6'>
                            <div className='space-y-6'>
                              {section.options.map((option, optionIdx) => (
                                <div
                                  key={option.value}
                                  className='flex items-center'
                                >
                                  <input
                                    id={`filter-mobile-${section.id}-${optionIdx}`}
                                    name={`${section.id}[]`}
                                    defaultValue={option.value}
                                    type='checkbox'
                                    defaultChecked={option.checked}
                                    className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                                  />
                                  <label
                                    htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                    className='ml-3 min-w-0 flex-1 text-gray-500'
                                  >
                                    {option.label}
                                  </label>
                                </div>
                              ))}
                            </div>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  ))}
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <div className='lg:col-span-1 container-menu hidden lg:block'>
        <UserProfilePic />

        <ul
          role='list'
          className='space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900'
        >
          {subCategories?.map((category) => (
            <li key={category.name}>
              <div className='flex items-center'>
                <button
                  //onClick={() => setShowMenu(category.type)}
                  onClick={() => router.push(`/${category.type}`)}
                  className='flex items-center'
                >
                  {category.icon}
                  <span className='ml-2'>{category.name}</span>
                </button>
              </div>
            </li>
          ))}
        </ul>

        {subMenus?.map((section) => (
          <Disclosure
            as='div'
            key={section.id}
            className='border-b border-gray-200 py-6'
          >
            {({ open }) => (
              <>
                <h3 className='-my-3 flow-root'>
                  <Disclosure.Button className='flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500'>
                    <span className='font-medium text-gray-900'>
                      {section.name}
                    </span>
                    <span className='ml-6 flex items-center'>
                      {open ? (
                        <TbMinus className='h-5 w-5' aria-hidden='true' />
                      ) : (
                        <TbPlus className='h-5 w-5' aria-hidden='true' />
                      )}
                    </span>
                  </Disclosure.Button>
                </h3>
                <Disclosure.Panel className='pt-6'>
                  <div className='space-y-4'>
                    {section.options.map((option, optionIdx) => (
                      <div key={option.value} className='flex items-center'>
                        <input
                          id={`filter-${section.id}-${optionIdx}`}
                          name={`${section.id}[]`}
                          defaultValue={option.value}
                          type='checkbox'
                          defaultChecked={option.checked}
                          className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                        />
                        <label
                          htmlFor={`filter-${section.id}-${optionIdx}`}
                          className='ml-3 text-sm text-gray-600'
                        >
                          {option.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))}
      </div>
    </>
  )
}
