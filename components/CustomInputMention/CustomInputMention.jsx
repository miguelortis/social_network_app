import { MentionsInput, Mention } from 'react-mentions'
import { mentionsInputStyle } from './styles/customInputMentionStyles'
import { mentionsStyle } from './styles/mentionsStyle'

export default function CustomInputMention({
  onChange = () => {},
  value,
  placeholder,
  suggestionsPortalHost,
  allowSuggestionsAboveCursor,
  dataContacts = [],
}) {
  return (
    <MentionsInput
      placeholder={placeholder}
      value={value}
      suggestionsPortalHost={suggestionsPortalHost}
      allowSuggestionsAboveCursor={allowSuggestionsAboveCursor}
      onChange={onChange}
      style={mentionsInputStyle}
      a11ySuggestionsListLabel={'Suggested mentions'}
      allowSpaceInQuery
    >
      <Mention style={mentionsStyle} data={dataContacts} appendSpaceOnAdd />
    </MentionsInput>
  )
}
