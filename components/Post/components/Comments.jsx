import SendComment from '../../SendComment/SendComment'

const Comments = ({ commentRef, showSendComment, data }) => {
  return (
    <div>
      <div></div>
      <div>{showSendComment && <SendComment commentRef={commentRef} />}</div>
    </div>
  )
}

export default Comments
