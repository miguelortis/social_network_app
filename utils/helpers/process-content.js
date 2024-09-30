const processContent = (content, users) => {
  const mentionRegex = /@\[(.+?)\]\((.+?)\)/g
  const urlRegex = /(https?:\/\/[^\s]+|www\.[^\s]+|[^\s]+\.[a-z]{2,})/g

  return content
    ?.replace(mentionRegex, (match, name, id) => {
      const user = users?.find((u) => u._id === id)
      return user
        ? `<a href="/account/profile/${user?._id}" class="mention">${
            user?.name
          } ${user?.lastName || ''}</a>`
        : match
    })
    .replace(urlRegex, (url) => {
      const formattedUrl = url?.startsWith('http') ? url : `http://${url}`
      return `<a href="${formattedUrl}" target="_blank" class="link">${formattedUrl}</a>`
    })
}

export { processContent }
