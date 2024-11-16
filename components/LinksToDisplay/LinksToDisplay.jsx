import { useEffect, useState } from 'react'
import CustomButtom from '../CustomButtom/CustomButtom'
import { TbX } from 'react-icons/tb'

const LinksToDisplay = ({ links = [], setLinks, closeButton = true }) => {
  const [listOfLinks, setListOfLinks] = useState([])

  useEffect(() => {
    setListOfLinks(
      links?.map((link) => ({
        url: link?.replace('https://', '').replace('http://', ''),
        domain: link
          .replace('https://', '')
          .replace('http://', '')
          .replace('www.', '')
          .toUpperCase()
      }))
    )
  }, [links])

  return (
    <div className='max-h-[160px] overflow-y-auto my-2'>
      {listOfLinks?.length > 0 &&
        listOfLinks?.map((link, index) => (
          <div
            key={index}
            className='bg-slate-100 border-slate-200 border-[1px] border-solid my-2.5 p-2.5 rounded'
          >
            <div className='flex justify-between'>
              <p>
                <strong>{link?.domain}</strong>
              </p>
              {closeButton && (
                <CustomButtom
                  iconButton
                  onClick={() =>
                    setLinks((prev) => prev?.filter((l, i) => i !== index))
                  }
                >
                  <TbX className='text-slate-400' />
                </CustomButtom>
              )}
            </div>
            <a
              href={`https://${link?.url}`}
              target='_blank'
              rel='noopener noreferrer'
            >
              {link?.url}
            </a>
          </div>
        ))}
    </div>
  )
}

export default LinksToDisplay
